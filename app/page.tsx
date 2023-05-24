import Link from 'next/link';
import SpotifySignIn from './components/spotifySignIn.component';

export default async function Home() {
    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70vh'
            }}
        >
            <div>
                <Link href="/protected/client">Client Side Protected Page</Link>
                <SpotifySignIn />
            </div>
        </main>
    );
}
