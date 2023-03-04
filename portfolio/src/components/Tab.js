import React from "react";

const Menu = [
    {
        id: 1,
        title: "Go-Fitness",
        Description: "A fitness app a user can log workouts to set a routine. The user is able to create an account, log a workout, edit, and remove.",
        tools: [
            'Rapid Api',
            'Ruby on Rails',
            'React',
            'React Router',
            'Postman',
            'Figma',
            'Material UI'
        ]
    },
    {
        id: 2,
        title: "Netflat",
        Description: "An app that displays a list of movies to rate and watch a preview. The user can log in and out of their account. Create, update, and delete a review.",
        tools: [
            'Ruby on Rails', 
            'React', 
            'Postman', 
            'Figma', 
            'Tailwind CSS'
        ]
    },
    {
        id: 3,
        title: "Task Master",
        description: "A user-friendly to-do list app. The user is able to add, edit, delete, and search for notes. Each note has a custom theme.",
        tools: [
            'Ruby', 
            'React', 
            'SQLlite', 
            'Postman', 
            'Figma', 
            'Material UI'
        ]
    },
]



function Tab() {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className=" bg-indigo-200 flex justify-between items-center space-x-8 rounded-lg px-4 py-2 w-[440px]">
                {/* Tab List */}
                {Menu.map(item => (
                <button>{item.title}</button>
                ))}
                {/* Tab Panel */}
            <div className="bg-white w-[1500px]">
                {Menu.map(item => (
                <div>{item.description}</div>
                ))}
                 {Menu.map(item => (
                <div>{item.tools}</div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Tab;