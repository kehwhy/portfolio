import React from 'react'
import "./CV.css"

const CV = () => {
    return (
        <div className="CV">
            <span>
                <h1>Education</h1>
                <h2>McGill University — Bachelor's of Software Engineering</h2>
                <p className="expected-grad">Expected Graduation: Fall 2022</p>
                <p className="list-header">Noteable Courses:</p>
                <ul>
                    <li>Introduction to Computer Science (Winter 2019)</li>
                    <li>Model-Based Programming (Winter 2019)</li>
                    <li>Introduction to Software Engineering (Fall 2019)</li>
                    <li>Software Engineering Practices (Fall 2019)</li>
                    <li>Data Structures and Algorithms (Fall 2020)</li>
                    <li>Artificial Intelligence (Winter 2021)</li>
                </ul>
            </span>
            <span>
                <h1>Industry Experience</h1>
                <h2> Ubisoft Montreal — Web Development Intern</h2>
                <p className="expected-grad">Aug 2020 - Present</p>
                <ul>
                    <li>
                        Developed a web interface in React to better connect monetization specialists
                         to secondary (in-game) stores, improving user experience by facilitating version 
                         control as well as drastically simplifying management of products and discounts for 
                         several productions company-wide. 
                    </li>
                    <li>
                        Created new React components, fixed bugs and wrote tests using the testing framework Jasmine.
                    </li>
                </ul>
            </span>
            <span>
                <h1>Involvement</h1>
                <h2> Electrical, Computer and Software Engineering Student Society (ECSESS) at McGill University — Vice President of External Activities</h2>
                <p className="expected-grad">May 2020 - Present</p>
                <ul>
                    <li>
                    Selected to represent the ECSESS Council to potential industry partners 
                    and connect students with industry leaders through networking and other 
                    professional development events and initiatives. 
                    </li>
                </ul>
            </span>

        </div>
    )
}

export default CV