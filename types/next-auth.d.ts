import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    export interface Session {
        user: {
            accessToken: string | undefined;
            userId: string;
        } & DefaultSession['user'];
    }
}

declare module 'next-auth/jwt' {
    export interface JWT {
        id: string;
        accessToken: string | undefined;
    }
}

export {};
