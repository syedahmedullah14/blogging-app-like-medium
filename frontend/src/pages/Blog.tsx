import { useBlog } from "../hooks"

export const Blog = () => {

  const {loading, blog} = useBlog();
  if(loading){
    return <div>
      loadind...
    </div>
  }
  return (
    <div>Blog</div>
  )
}

export default Blog