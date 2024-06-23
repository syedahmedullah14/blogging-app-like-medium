import { Appbar } from "./Appbar"

interface BlogCardProps{
    authorname: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = ({
    authorname,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
  return (
    <div>
        <div className="p-4 border-b border-slate-300 pb-4">
        <Appbar/>
        <div className="flex">
            <div className="">
            <Avatar name={authorname}/> 
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
    </div>
  )
}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

function Avatar({ name }: { name: string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-400 rounded-full dark:bg-gray-700">
        <span className="font-small text-gray-900 dark:text-gray-300">
            {name[0]}
        </span>
    </div>
    
}