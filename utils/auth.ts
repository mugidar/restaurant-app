import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    })

    // ...add more providers here
  ]
};

export const getAuthSession = () => getServerSession(authOptions);
