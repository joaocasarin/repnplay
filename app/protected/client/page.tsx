'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const ClientProtectedPage = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/');
        }
    });

    function generateListFromSession() {
        if (session) {
            const { user } = session;

            if (!user) {
                return (
                    <p className="mt-4 text-red-500">
                        Problem with session, please try again
                    </p>
                );
            }

            return (
                <ul className="mt-4">
                    {Object.keys(user).map((key) => (
                        <li key={key}>
                            <strong>{key}: </strong>
                            <span className="font-light">
                                {user[key as keyof typeof user]}
                            </span>
                        </li>
                    ))}
                </ul>
            );
        }

        return (
            <p className="mt-4 text-red-500">
                Problem with session, please try again
            </p>
        );
    }

    return (
        <section className="py-24">
            <div className="container">
                <h1 className="text-2xl font-bold">
                    This is a{' '}
                    <span className="text-emerald-500">client-side</span>{' '}
                    protected page
                </h1>
                <h2 className="mt-4 font-medium">You are logged in as:</h2>
                {generateListFromSession()}
            </div>
        </section>
    );
};

export default ClientProtectedPage;
