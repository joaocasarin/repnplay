'use client'

import { useSession } from "next-auth/react";

const ClientProtectedPage = () => {
    const { data: session } = useSession();

    console.log(session);
    
    return (
        <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a <span className='text-emerald-500'>client-side</span>{' '}
          protected page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        <ul>
          {session?.user && (
            Object.keys(session.user).map((key) => (
              <li key={key}>
                <strong>{key}: </strong> {session.user[key]}
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
    );
};

export default ClientProtectedPage;