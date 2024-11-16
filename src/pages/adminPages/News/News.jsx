import { news } from "../../../assets/json/news"

const News = () => {
  return (
    <div className="pt-20 min-h-full w-[79vw]">
      <h2 className="text-center pt-4 text-white font-mono text-2xl mb-5">Täzelikler</h2>
        <div className="grid grid-cols-3 max-[768px]:grid-cols-2 max-[576px]:grid-cols-1 gap-14">
           {
            news.map((posts, id) => (
               <div key={id} className="rounded-lg hover:shadow-lg hover:shadow-blue-600  hover:brightness-50 bg-blue-200 dark:bg-blue-950 dark:text-white hover:-translate-y-4 transition-all duration-300"> 
                  <img src={posts.img} className="object-cover rounded-lg mb-3 w-full filter transition-all" />
                  <div>
                    <p className="break-all px-2">{posts.text}</p>
                  </div>
              </div>
            ))
           }
        </div>
    </div>
  )
}

export default News
