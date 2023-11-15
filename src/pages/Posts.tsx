import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../interfaces/IPost'

// 1. создать стейт
// 2. сделать фетч запрос
// 3. создать интерфейс IPost
// 4. мэпить все посты

export const Posts = () => {
  const [posts, setPosts] = useState<null | IPost[]>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div>
      <h1>Our news</h1>
      <Link to='create'>create new post</Link>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link to={post.id.toString()}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
