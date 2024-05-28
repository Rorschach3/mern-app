<<<<<<< HEAD
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
=======
import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import { AppState } from '@auth0/auth0-react/dist/auth0-provider';
import { User } from "@auth0/auth0-react";
import { useCreateMyUser } from '@/api/MyUserApi';
>>>>>>> parent of e5c32e9 (Auth0 Access Token)

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
<<<<<<< HEAD

  const navigate = useNavigate();
=======
  const { createUser } = useCreateMyUser();
>>>>>>> parent of e5c32e9 (Auth0 Access Token)

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialize auth");
  }

<<<<<<< HEAD
  const onRedirectCallback = () => {
    navigate("/auth-callback")
=======
  const onRedirectCallback = (appState?: AppState, user?: User) => {
    if (user?.sub && user?.email) {
      createUser({ auth0Id: user.sub, email: user.email });
    }
>>>>>>> parent of e5c32e9 (Auth0 Access Token)
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
