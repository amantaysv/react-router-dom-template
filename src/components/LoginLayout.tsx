import { Outlet } from 'react-router-dom'

export const LoginLayout = () => {
  return (
    <div>
      <div>tolko dlya stranic logina i registracii</div>
      <Outlet />
    </div>
  )
}
