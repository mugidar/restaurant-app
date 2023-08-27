import  GoogleProvider from 'next-auth/providers/google';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from "../../../../../../utils/connect";
import NextAuth from 'next-auth/next';
// import { NextAuthOptions } from 'next-auth';


 export const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({checks: ['none'],
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
});



export { handler as GET, handler as POST };

// export const getAuthSession = () => getServerSession(authOptions);

