'use client';

import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export function LoginButton() {
    return (
        <button
            type="button"
            style={{ marginRight: 10 }}
            onClick={() => signIn()}
        >
            Sign in
        </button>
    );
}

export function RegisterButton() {
    return (
        <Link href="/register" style={{ marginRight: 10 }}>
            Register
        </Link>
    );
}

export function LogoutButton() {
    return (
        <button
            type="button"
            style={{ marginRight: 10 }}
            onClick={() => signOut()}
        >
            Sign Out
        </button>
    );
}

export function ProfileButton() {
    return <Link href="/profile">Profile</Link>;
}
