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
                        <h2><strong>Go-Fitness (Capstone project)</strong></h2>
                        <p>A fitness app where you can log fitness workouts to set a routine. The user is able to log in and out of their account, log a workout, edit, and remove. </p>
                        <h2><strong>Skills/Tools:</strong></h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-10 sm:px-o">
                            <p><span>✓</span>Rapid Api</p>
                            <p><span>✓</span>Ruby on Rails</p>
                            <p><span>✓</span>React</p>
                            <p><span>✓</span>React Router</p>
                            <p><span>✓</span>Figma</p>
                            <p><span>✓</span>Ruby</p>
                            <p><span>✓</span>Material UI</p>
                        </div>
                    </div>
                    <video src={projects} autoPlay loop muted className="shadow-md shadow-gray-600 rounded-lg"/>
                    <div>
                        <h2><strong>Netflat</strong></h2>
                        <p>An app that displays a list of movies to rate and watch a preview. The user can log in and out of their account. Create, update, and delete a review.</p>
                        <p>Inspired by Netflix.</p>
                        <h2><strong>Skills/Tools:</strong></h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-10 sm:px-o">
                            <p><span>✓</span>Ruby on Rails</p>
                            <p><span>✓</span>React</p>
                            <p><span>✓</span>Figma</p>
                            <p><span>✓</span>Postman</p>
                            <p><span>✓</span>Tailwind CSS</p>
                        </div>
                    </div>
                        <video src={otherProject} autoPlay loop muted className="shadow-md shadow-gray-600 rounded-lg"/>
                    <div>
                          <h2><strong>Task Master</strong></h2>
                          <p>A user-friendly to-do list app. The user is able to add, edit, delete, and search for notes. Each note has a custom theme.</p>
                          <p>Inspired by Google Keep.</p>
                          <h2><strong>Skills/Tools:</strong></h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-10 sm:px-o">
                            <p><span>✓</span>Ruby</p>
                            <p><span>✓</span>SQLlite</p>
                            <p><span>✓</span>React</p>
                            <p><span>✓</span>Figma</p>
                            <p><span>✓</span>Postman</p>
                            <p><span>✓</span>Material UI</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Projects;