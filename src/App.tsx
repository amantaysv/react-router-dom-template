import { Navigate, Route, Routes } from 'react-router-dom'
import { RootLayout } from './components/RootLayout'
import { RequiredAuth } from './hoc/RequiredAuth'
import { NotFound } from './pages/404'
import { About } from './pages/About'
import { CreatePost } from './pages/CreatePost'
import { EditPost } from './pages/EditPost'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Posts } from './pages/Posts'
import { SinglePost } from './pages/SinglePost'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<SinglePost />} />
          <Route
            path='/posts/create'
            element={
              <RequiredAuth>
                <CreatePost />
              </RequiredAuth>
            }
          />
          <Route path='/posts/edit/:id' element={<EditPost />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/about' element={<Navigate to='/about-us' replace />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
