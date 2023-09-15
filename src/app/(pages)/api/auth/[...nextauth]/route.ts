import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../../../../../../utils/connect";
import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
// import { NextAuthOptions } from 'next-auth';

export const handler: NextAuthOptions = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  providers: [
    GoogleProvider({
      checks: ["none"],
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email!
        }
      });
      token.isAdmin = userInDb?.isAdmin!;
      return token;
    }
  }
});

export { handler as GET, handler as POST };
