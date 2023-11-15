import { Outlet } from 'react-router-dom'
import { CustomLink } from './CustomLink'

export const RootLayout = () => {
  return (
    <div>
      <header>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/posts'>Posts</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
      </header>
      <main className='container'>
        <Outlet />
      </main>
      <footer className='container'>2023 (c)</footer>
    </div>
  )
}
