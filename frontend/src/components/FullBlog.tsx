import { Blog } from "../hooks"
import { Appbar } from "./Appbar"

export const FullBlog = ({ blog }: { blog: Blog}) => {
  return (
    <div>
    <Appbar />
        <div className="grid grid-cols-12 w-full px-10 bg-blue-200 pt-20 max-w-screen">
        <div className="col-span-8 bg-red-200">
            <div className="text-3xl font-extrabold">
                {blog.title}
            </div>
            <div className="">
                {blog.content}
            </div>
        </div>
        <div className="col-span-4 bg-green-200">
        hello
        </div>
    </div>
    </div>
    
  )
}

