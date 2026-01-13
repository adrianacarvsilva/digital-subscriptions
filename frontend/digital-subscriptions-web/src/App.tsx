import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Dashboard } from './pages/Dashboard'
import { ProtectedRoute } from './auth/ProtectedRoute'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      console.log('Usuário autenticado, redirecionando para o dashboard...')
      navigate('/dashboard', { replace: true } )
    }
    console.log('isLoading:', isLoading, 'isAuthenticated:', isAuthenticated)
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Digital Subscriptions</h1>
      <button onClick={() => loginWithRedirect()}>
        Login
      </button>
    </div>
  )
}



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
