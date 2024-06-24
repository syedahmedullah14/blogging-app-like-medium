import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blog = () => {

  const { id } = useParams()
  const {loading, blog} = useBlog({
    id: id || ""
  });

  if(loading || !blog){
    return <div>
      <Appbar/>
        <div className="flex justify-center">
          <div>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          </div>
          
        </div>
    </div>
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  )
}

export default Blog