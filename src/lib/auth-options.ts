import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
};