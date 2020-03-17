import React from 'react';
import Project from "../components/projects";
import projects from "../Projects.js"

function Portfolio() {
    return (
        <div>

                    {projects.map(project => (
                        <Project 
                            title={project.title}
                            link={project.link}
                            image={project.image}
                        />
                    ))}
                    
        </div>
    )


}
export default Portfolio;