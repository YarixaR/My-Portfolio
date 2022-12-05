import React from "react"

function Skills() {

    const skills  = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Ruby', 'Ruby on Rails', 'SQL', 'PostgreSQL', 'Material UI', 'Tailwind', 'APIs'  ]

    const listSkills = skills.map (( skill => 
        <li>{ skill }</li>
     ))

     const tools = [ 'Figma', 'Postman', 'VSCODE', 'Chrome Devtools' ]

     const listTools = tools.map (( tool => 
        <li>{ tool }</li> 
        ))
    return(
        <div className="bg-pink-50 text-center">
            <section id='skills'>
                <h1>My Skills</h1>
                <ul className="grid grid-cols-4 gap-1">
                    {listSkills}
                </ul>
                <h1>Tools</h1>
                <ul className="grid grid-cols-4 gap-1">
                    {listTools}
                </ul>
            </section>
        </div>
    )
}
export default Skills;