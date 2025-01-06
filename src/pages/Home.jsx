import React from 'react';
import Platforms from '../components/Platforms';
import ProjectCard from '../components/ProjectCard';
import ProjectStastics from '../components/ProjectStastics';

const projects = [   
        {
          name: "Mobile App Launch",
          type: "App Development",
          date: "2024-05-10",
          members: ["Dave", "Eve", "Frank"],
          files: 8,
          progress: 45,
        },
        {
          name: "Marketing Campaign",
          type: "Digital Marketing",
          date: "2024-02-28",
          members: ["Grace", "Hank"],
          files: 3,
          progress: 30,
        },
        {
          name: "E-commerce Platform Upgrade",
          type: "Web Development",
          date: "2024-04-20",
          members: ["Ivy", "Jack", "Karen"],
          files: 6,
          progress: 70,
        },
        {
          name: "Data Analysis Project",
          type: "Data Science",
          date: "2024-06-15",
          members: ["Leo", "Mona", "Nick"],
          files: 5,
          progress: 55,
        },
        {
          name: "SEO Optimization",
          type: "Digital Marketing",
          date: "2024-01-30",
          members: ["Oscar", "Pam"],
          files: 2,
          progress: 90,
        },
];

const Home = () => {
  return (
    <div className='p-5'>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <ProjectStastics />
        <Platforms />
        <ProjectStastics />
        <Platforms />
        </div>
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Current Projects</h1>
                <p className='text-sm underline text-indigo-600'>See all</p>
            </div>

            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
                {projects && projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home;
