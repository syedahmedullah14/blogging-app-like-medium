import { Appbar } from "../components/Appbar"

export const Publish = () => {
  return (
    <div><Appbar />
        <div className="flex justify-center w-full pt-8">
            <div className="max-w-screen-lg w-full">
                {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label> */}
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Title">
                </input>
                <TextEditor /> 
            </div>   
     </div>
    </div>
  )
}

function TextEditor(){
    return(
<form>
   <div className="w-full mb-4">
       <div className="flex items-center justify-between px-3 py-2 border">
       
        <div className=" py-2 bg-white rounded-b-lg w-full">
            <label  className="sr-only">Publish post</label>
            <textarea id="editor" rows={8} className="block w-full px-0 text-sm outline-none text-gray-800 bg-white border-0  " placeholder="Write a blog..." required ></textarea>
        </div>
   </div>
   <button type="submit" className="mt-4 inline-flex items-center px-3 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
       Publish post
   </button>
   </div>
</form>
    )
}