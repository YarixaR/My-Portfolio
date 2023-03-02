import React from "react"

function Skills() {

    const skills  = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Ruby', 'Ruby on Rails', 'SQL', 'PostgreSQL', 'Material UI', 'Tailwind CSS', 'APIs'  ]

    const listSkills = skills.map (( skill => 
        <li>{ skill }</li>
     ))

     const tools = [ 'Figma', 'Postman', 'VSCODE', 'Chrome Devtools' ]

     const listTools = tools.map (( tool => 
        <li >{ tool }</li> 
        ))
    return(
        <div className="text-center pt-40 pb-40 pl-10 pr-10">
            <section id='skills'>
                <h1>My Skills</h1>
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-10 sm:px-o mb-10 ">
                    {listSkills}
                </ul>
                <h1>Tools</h1>
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-1 px-10 sm:px-o">
                    {listTools}
                </ul>
            </section>
        </div>
    )
}
export default Skills;


// className="shadow-xl rounded-lg m-1"

