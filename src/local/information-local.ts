interface UserProgress {
    id: string;
    level: number;
    xp: number;
    achievements: string[];
    notifications: string[];
  }
  
  let db: IDBDatabase;
  
  const initDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("StudentDatabase", 1);
  
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const database = (event.target as IDBOpenDBRequest).result;
        if (!database.objectStoreNames.contains("userProgress")) {
          const store = database.createObjectStore("userProgress", { keyPath: "id" });
          store.createIndex("level", "level", { unique: false });
          store.createIndex("xp", "xp", { unique: false });
          store.createIndex("achievements", "achievements", { unique: false });
          store.createIndex("notifications", "notifications", { unique: false });
        }
      };
  
      request.onsuccess = (event: Event) => {
        db = (event.target as IDBOpenDBRequest).result;
        resolve(db);
      };
  
      request.onerror = (event: Event) => {
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  };
  
  const getStore = (): IDBObjectStore => {
    if (!db) throw new Error("Database not initialized");
    return db.transaction("userProgress", "readwrite").objectStore("userProgress");
  };
  
  export const dbOperations = {
    async initialize(): Promise<void> {
      await initDB();
      const defaultData: UserProgress = {
        id: "currentUser",
        level: 1,
        xp: 0,
        achievements: [],
        notifications: []
      };
      const store = getStore();
      return new Promise((resolve, reject) => {
        const request = store.put(defaultData);
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e);
      });
    },
  
    async getData(): Promise<UserProgress> {
      const store = getStore();
      return new Promise((resolve, reject) => {
        const request = store.get("currentUser");
        request.onsuccess = () => resolve(request.result as UserProgress);
        request.onerror = (e) => reject(e);
      });
    },
  
    async updateLevel(level: number): Promise<void> {
      const data = await this.getData();
      const store = getStore();
      return new Promise((resolve, reject) => {
        const request = store.put({ ...data, level });
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e);
      });
    },
  
    async updateXP(xp: number): Promise<void> {
      const data = await this.getData();
      const store = getStore();
      return new Promise((resolve, reject) => {
        const request = store.put({ ...data, xp });
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e);
      });
    },
  
    async addAchievement(achievement: string): Promise<void> {
      const data = await this.getData();
      const store = getStore();
      return new Promise((resolve, reject) => {
        const newAchievements = [...data.achievements, achievement];
        const request = store.put({ ...data, achievements: newAchievements });
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e);
      });
    },
  
    async addNotification(notification: string): Promise<void> {
      const data = await this.getData();
      const store = getStore();
      return new Promise((resolve, reject) => {
        const newNotifications = [...data.notifications, notification];
        const request = store.put({ ...data, notifications: newNotifications });
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e);
      });
    }
  };
  