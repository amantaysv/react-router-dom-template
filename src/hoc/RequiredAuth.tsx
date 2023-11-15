import { Navigate } from 'react-router-dom'

interface RequiredAuthProps {
  children: React.ReactNode
}

export const RequiredAuth = ({ children }: RequiredAuthProps) => {
  const isAuth = true

  if (!isAuth) return <Navigate to='/login' />

  return children
}
