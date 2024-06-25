import { Link } from "react-router-dom"

interface BlogCardProps{
    authorname: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    authorname,
    title,
    content,
    publishedDate,
    id
}: BlogCardProps) => {
  return ( 
  <Link to={`/blog/${id}`}>
  <div className="p-4 border-b border-slate-300 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="">
            <Avatar size={"small"} name={authorname}/> 
            </div>
           <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
           {authorname}
           </div>
           <div className="pl-2 flex justify-center flex-col mt-1">
            <Circle />
           </div>
           <div className="text-sm pl-2 font-thin text-slate-500 flex justify-center flex-col">
           {publishedDate} 
           </div>
        </div>
        <div className="text-2xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-ms font-thin">
            {content.slice(0,100)+"..."}
        </div>
        <div className="text-slate-400 text-sm pt-4">
            {`${Math.ceil(content.length / 100)} minutes(s) read`}
        </div>
    
    </div>
  </Link>
    
  )
}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({ name, size= "small"}: { name: string, size: "small" | "big"}){
    return <div className={`relative inline-flex items-center justify-center 
    overflow-hidden bg-gray-400 rounded-full ${size === "small" ? "w-6 h-6": "w-10 h-10"}`}>
        
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-small text-gray-900 dark:text-gray-300`}>
            {name[0]}
        </span>
    </div>
    
}