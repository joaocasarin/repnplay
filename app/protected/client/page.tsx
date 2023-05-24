'use client'

import { useSession } from "next-auth/react";

const ClientProtectedPage = () => {
    const { data: session } = useSession();

    console.log(session);

    function generateListFromSession() {
        if (session) {
            const { user } = session;

            if (!user) {
              return (
                <p className='mt-4 text-red-500'>
                  Problem with session, please try again
                </p>
              )
            } else {
              return (
                <ul className='mt-4'>
                  {
                    Object.keys(user).map((key) => {
                      return (
                        <li key={key}>
                          <strong>{key}: </strong>
                          <span className='font-light'>{user[key as keyof typeof user]}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              )
            }
        }
    }
    
    return (
        <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a <span className='text-emerald-500'>client-side</span>{' '}
          protected page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        { generateListFromSession() }
      </div>
    </section>
    );
};

export default ClientProtectedPage;