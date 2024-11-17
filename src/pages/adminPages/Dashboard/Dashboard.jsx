import Platforms from "./Platforms"
import ProjectCard from "./ProjectCard"
import ProjectStatistics from "./ProjectStatistics"
import Results from "./Results"


const Dashboard = () => {
  return (
    <div className="p-5 w-[81%] min-h-full">
      <div className="flex gap-20 justify-between">
        <ProjectStatistics />
        <Platforms/>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-10 gap-10">
          <ProjectCard />
          <Results />
      </div>
    </div>
  )
}

export default Dashboard
