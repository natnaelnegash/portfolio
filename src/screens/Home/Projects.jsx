import React from "react";
import Project_Right from "@/components/Project_Right";
import Project_Left from "@/components/Project_Left";

const Projects = () => {
  return (
    <section id="projects" className="w-full h-[100vh] flex flex-col gap-10">
      <div className="flex flex-col items-center w-full h-full p-2">
        <p className="text-4xl">Projects</p>
        <div className="w-full h-full p-2 grid grid-cols-2 gap-4 justify-items-center">
          <Project_Left
            title="Linkio"
            link="https://github.com/natnaelnegash/Linkio"
            detail="Chat, confrence, facetime, groupchat with your loved ones."
          />
          <Project_Right
            title="Eventio"
            link="https://github.com/natnaelnegash/Eventio"
            detail="Android application for posting and booking nearby events,
                  experience sharing, reveiwing and more"
          />
          <Project_Right
            title="Groove Play"
            link="https://github.com/natnaelnegash/Groove_Play"
            detail="User friendly music streaming web-app for music lovers."
          />
          <Project_Left
            title="Student Property Management Platform"
            link="https://github.com/natnaelnegash/Students-Property-Management-System"
            detail="Secure and user friendly property management platform for students ensuring safety of their property"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
