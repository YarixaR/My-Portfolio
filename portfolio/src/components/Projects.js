import React from "react"
import project from '../assets/project2.mov'
import projects from '../assets/project3.mov'
import otherProject from '../assets/project4.mov'

function Projects() {
    return(
        <div className="text-center">
            <section id='projects'>
                <h1>Academic Projects</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 px-1 sm:px-o">
                    <video src={project} autoPlay loop muted className="shadow-md shadow-gray-600 rounded-lg"/>
                    <div>
                        <h2>Go-Fitness</h2>
                        <p>A fitness app where you can log fitness workouts to set a routine. The user is able to log in and out of their account, log a workout, edit, and remove. </p>
                        <h2>Skills/Tools:</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-10 sm:px-o">
                        <p><span>✓</span>Rapid Api</p>
                        <p><span>✓</span>Ruby on Rails</p>
                        <p><span>✓</span>React</p>
                        <p><span>✓</span>React Router</p>
                        <p><span>✓</span>Figma</p>
                        <p><span>✓</span>Postman</p>
                        </div>
                    </div>
                    
                    <video src={projects} autoPlay loop muted className="shadow-md shadow-gray-600 rounded-lg"/>
                    <h2>Netflat</h2>
                    <video src={otherProject} autoPlay loop muted className="shadow-md shadow-gray-600 rounded-lg"/>
                    <h2>Task Master</h2>
                </div>
            </section>
        </div>
    )
}
export default Projects;