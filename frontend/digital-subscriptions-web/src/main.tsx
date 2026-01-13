import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jnp5kjzlint28df5.us.auth0.com"
      clientId="dNqcFGnn2yKCN8eZotXhVO9IQkC0LGNt" 
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://digitalsubscriptions/api'
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
