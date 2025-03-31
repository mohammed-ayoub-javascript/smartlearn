import { int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('user', {
    id: int().primaryKey().autoincrement(), 
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    image: varchar({ length: 255 }),
    plan: varchar({ length: 255 }).default("free"),
    xp : int().notNull().default(0),
    createdAt: timestamp("created_at").defaultNow(),
});
  
export const lessons = mysqlTable("lessons", {
    id: int().primaryKey().autoincrement(),
    title: varchar({ length: 255 }).notNull(),
    content: varchar({length : 1000}).notNull(),
    userId: int().notNull().references(() => usersTable.id, { onDelete: "cascade" }), 
    createdAt: timestamp("created_at").defaultNow(),
});

export const message = mysqlTable("message" , {
    id: int().primaryKey().autoincrement(), 
    content : varchar({length : 500}).notNull(),
    userId: int().notNull().references(() => usersTable.id, { onDelete: "cascade" }), 
    createdAt: timestamp("created_at").defaultNow(),
})

