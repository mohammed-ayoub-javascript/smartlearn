import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/db/index"; 
import { eq } from "drizzle-orm";
import { usersTable } from "@/db/schema";

export const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECERT,
  session: {
    strategy: "jwt",
    maxAge: 15 * 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, profile }) {
      try {
        const [existingUser] = await db
          .select()
          .from(usersTable)
          .where(eq(usersTable.email, user.email!));

        if (!existingUser) {
          await db.insert(usersTable).values({
            name: (user.name || profile?.name) as string,
            email: user.email!,
            image: user.image || profile?.image,
          });
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user?.email) {
        const [dbUser] = await db
          .select()
          .from(usersTable)
          .where(eq(usersTable.email, user.email));
        if (dbUser) token.userId = dbUser.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id  = token.userId as number;
      }
      return session;
    },
  },
};