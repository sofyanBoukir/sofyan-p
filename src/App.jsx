import { About } from "./Components/UI/About"
import { Me } from "./Components/UI/Me"
import { Skill } from "./Components/UI/Skill"
import reactLogo from '../public/react-logo.webp';
import laravelLogo from '../public/laravel-logo.png';
import expressLogo from '../public/express-logo.png';
import tailwindLogo from '../public/tailwind-logo.svg';
import gitLogo from '../public/git-logo.png';
import jiraLogo from '../public/jira-logo.svg';
import dockerLogo from '../public/docker-logo.png';
export const App = () => {
    return (
      <div className="mt-20 lg:px-30 px-10 w-full">
        <div className="lg:flex w-full h-[100vh]">
          <div className="lg:w-[30%] lg:fixed">
            <Me />
          </div>
      
          <div className="lg:w-[60%] lg:ml-[50%]">
            <div className="flex justify-end lg:h-[100vh] mt-10 lg:mt-0" id="about">
              <About />
            </div>
            <div className="mt-10 flex flex-col gap-5" id="skills">
              <Skill image={laravelLogo} description={'Building robust and scalable backend APIs using Laravel, with a focus on clean architecture and efficient database management'}/>
              <Skill image={reactLogo} description={'Building dynamic and interactive frontend applications using React, with a focus on reusable components and efficient state management.'}/>
              <Skill image={expressLogo} description={'Building efficient and scalable backend APIs using Express, with a focus on clean routing and middleware management.'}/>
              <Skill image={tailwindLogo} description={'Building responsive and visually appealing user interfaces using Tailwind CSS, with a focus on utility-first styling and rapid development.'}/>
              <Skill image={gitLogo} description={'Utilizing Git for version control to manage and track changes in code'}/>
              <Skill image={jiraLogo} description={'Using Jira for project management and task tracking, ensuring efficient collaboration and workflow organization'}/>
              <Skill image={dockerLogo} description={'Using Docker to create, deploy, and manage applications in lightweight, portable containers.'}/>
            </div>
            <div>
            </div>
          </div>
        </div>
    </div>
    )
}
