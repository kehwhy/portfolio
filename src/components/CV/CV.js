import { Heading, Pane, Paragraph } from 'evergreen-ui'
import React from 'react'
import "./CV.css"

const CV = () => {
    return (
        <Pane className="CV">
            <span>
                <Heading size={600}>Education</Heading>
                <Heading size={500}>McGill University — Bachelor's of Software Engineering</Heading>
                <Paragraph size={100} className="expected-grad">Expected Graduation: Fall 2022</Paragraph>
                <Paragraph size={200} className="list-header">Noteable Courses:</Paragraph>
                <ul>
                    <li><Paragraph size={100}>Introduction to Computer Science (Winter 2019)</Paragraph></li>
                    <li><Paragraph size={100}>Model-Based Programming (Winter 2019)</Paragraph></li>
                    <li><Paragraph size={100}>Introduction to Software Engineering (Fall 2019)</Paragraph></li>
                    <li><Paragraph size={100}>Software Engineering Practices (Fall 2019)</Paragraph></li>
                    <li><Paragraph size={100}>Data Structures and Algorithms (Fall 2020)</Paragraph></li>
                    <li><Paragraph size={100}>Artificial Intelligence (Winter 2021)</Paragraph></li>
                </ul>
            </span>
            <span>
                <Heading size={600}>Skills</Heading>
                <Paragraph><strong>Programming Languages:</strong> Java, Python, JavaScript (React, Vue.js, Node.js),  HTML/CSS, C, Bash,  Assembly, OCaml</Paragraph>
                <Paragraph><strong>Software Tools:</strong>  Git/GitHub/GitLab, VS Code, Eclipse, Andriod Studio, JIRA, Confluence, JUnit, Spring Boot, Gradle, TravisCI,  XCode, Heroku, UML Lab, Umple</Paragraph>
                <Paragraph><strong>Languages:</strong>  English and French (Intermediate)</Paragraph>
            </span>
            <span>
                <Heading size={600}>Industry Experience</Heading>
                <Heading size={500}> Ubisoft Montreal — Web Development Intern</Heading>
                <Paragraph className="expected-grad">Aug 2020 - December 2020</Paragraph>
                <ul>
                    <li>
                        <Paragraph size={100}>
                            Developed a web interface in React to better connect monetization specialists
                            to secondary (in-game) stores, improving user experience by facilitating version 
                            control as well as drastically simplifying management of products and discounts for 
                            several productions company-wide. 
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph size={100}>
                            Created new React components, fixed bugs and wrote tests using the testing framework Jasmine.
                        </Paragraph>
                    </li>
                </ul>
            </span>
            <span>
                <Heading size={600}>Involvement</Heading>
                <Heading size={500}> Electrical, Computer and Software Engineering Student Society (ECSESS) at McGill University — Vice President of External Activities</Heading>
                <Paragraph className="expected-grad">May 2020 - Present</Paragraph>
                <ul>
                    <li>
                    <Paragraph size={100}>
                        Selected to represent the ECSESS Council to potential industry partners 
                        and connect students with industry leaders through networking and other 
                        professional development events and initiatives. 
                    </Paragraph>
                    </li>
                </ul>
                <Heading size={500}> Code.Jam(2019) and Code.Jam(2020) Organizer, Montreal — Marketing Coordinator</Heading>
                <Paragraph className="expected-grad">May 2019 – November 2019 AND May 2020 – November 2020</Paragraph>
                <ul>
                    <li>
                    <Paragraph size={100}>
                    Organized both Code.Jam(2019) and Code.Jam(2020), 
                    yearly editions of a 36 hour hackathon with 300 participants and 60, 000 $ in sponsorship. 
                    </Paragraph>
                    </li>
                    <li>
                    <Paragraph size={100}>
                    Primary creator of Code.Jam() advertising materials and responsible for the event’s social media presence including
                    responding to questions and creating content for the Facebook, LinkedIn
                    and Instagram pages.
                    </Paragraph>
                    </li>
                </ul>
            </span>
        </Pane>
    )
}

export default CV