import NextAuth, { AuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope: process.env.SPOTIFY_API_SCOPE!
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.id = account.providerAccountId;
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.userId = token.id;
            session.user.accessToken = token.accessToken;
            return session;
        },
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl)
                ? url
                : `${baseUrl}/protected/client`;
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
