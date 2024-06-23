import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
  return (
    <div className="flex justify-center">
        <div className="max-w-xl">
        <BlogCard 
         authorname ={"Jaser"}
         title={"How an ugly single page website makes $5000 a month wihtout affiliate marketing"}
         content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste doloremque voluptates sit laboriosam voluptatum eligendi, facilis fugit magni magnam maxime ad nemo vel officia. Rem fugiat ea voluptate excepturi voluptas?"}
         publishedDate={"23rd June"} />
        <BlogCard 
         authorname ={"Jaser"}
         title={"How an ugly single page website makes $5000 a month wihtout affiliate marketing"}
         content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste doloremque voluptates sit laboriosam voluptatum eligendi, facilis fugit magni magnam maxime ad nemo vel officia. Rem fugiat ea voluptate excepturi voluptas?"}
         publishedDate={"23rd June"} />
        <BlogCard 
         authorname ={"Jaser"}
         title={"How an ugly single page website makes $5000 a month wihtout affiliate marketing"}
         content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste doloremque voluptates sit laboriosam voluptatum eligendi, facilis fugit magni magnam maxime ad nemo vel officia. Rem fugiat ea voluptate excepturi voluptas?"}
         publishedDate={"23rd June"} />
    </div>
    </div>
    
  )
}

