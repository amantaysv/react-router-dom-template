import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IPost } from '../interfaces/IPost'

// 5. создать SinglePost
// 6. создать route для SinglePost с /:id в App.tsx
// 7. в компоненте SinglePost взять useParams
// 8. делать фетч запрос по данному id (/posts/id)
// 9. отрисовать отдельный пост

export const SinglePost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState<null | IPost>(null)

  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(1)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [id])

  return (
    <div>
      <button onClick={goBack}>back</button>
      <button onClick={goForward}>forward</button>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <Link to={`/posts/edit/${id}`}>edit</Link>
    </div>
  )
}
