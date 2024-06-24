import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {

  const { id } = useParams()
  const {loading, blog} = useBlog({
    id: id || ""
  });

  if(loading){
    return <div>
      loadind...
    </div>
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  )
}

export default Blog