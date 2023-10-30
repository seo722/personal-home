import { authOptions } from '@/lib/auth';
import NextAuth from 'next-auth/next';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

//session : 며칠 동안 로그인 유지할 건지
