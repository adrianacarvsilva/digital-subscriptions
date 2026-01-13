import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function ProtectedRoute({ children }: Props) {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />
    
  }
  console.log('Usuário autenticado, acesso permitido à rota protegida.')

  return <>{children}</>
}
