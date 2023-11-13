import { Link, LinkProps, useMatch } from 'react-router-dom'

export const CustomLink = ({ to, children, ...props }: LinkProps) => {
  const match = useMatch(to as string)
  console.log(match)

  return (
    <Link to={to} className={match ? 'active-link' : ''} {...props}>
      {children}
    </Link>
  )
}
