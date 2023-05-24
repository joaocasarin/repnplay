'use client';

import styled from 'styled-components';
import { signIn } from 'next-auth/react';
import { FaSpotify } from 'react-icons/fa';

const SpotifySignInButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #1db954;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Icon = styled(FaSpotify)`
    margin-right: 8px;
`;

const SpotifySignIn = () => (
    <SpotifySignInButton onClick={() => signIn('spotify')}>
        <Icon size={20} />
        Sign In with Spotify
    </SpotifySignInButton>
);

export default SpotifySignIn;
