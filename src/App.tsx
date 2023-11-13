import { Navigate, Route, Routes } from 'react-router-dom'
import { RootLayout } from './components/RootLayout'
import { NotFound } from './pages/404'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Home } from './pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
