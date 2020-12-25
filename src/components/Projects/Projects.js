import React from 'react'
import "./Projects.css"

import { Badge, Card, Heading, Pane, Paragraph } from 'evergreen-ui'

const Projects = () => {
    return (
        <Pane className="tab-pane">
            <Card className="card" marginLeft={20} elevation={2} border={true}> 
                <Heading className="title" size={600}>McGill Engineering Week Event Website</Heading>
                <div className="badges">
                    <Badge className="badge" color="orange">Javascript(React.js)</Badge>
                    <Badge className="badge" color="red">HTML/CSS</Badge>
                </div>
                <Paragraph size={300}>
                    I volunteered to create the website for McGill Engineering Week, a week full of friendly competition
                    between the engineering departments at McGill University. The website was build using the React framework with the help of the Evergreen-UI component library and the Font Awesome icon library.
                    Additionally, I used React Router to route the different tabs located in the website's header.
                    <br/>
                    <a href="https://github.com/kehwhy/E-Week_Website"><Paragraph size={300}><strong>View Source Code</strong></Paragraph></a>
                </Paragraph>
            </Card>
            <Card className="card" marginLeft={20} elevation={2} border={true}> 
                <Heading className="title" size={600}>Personal Website</Heading>
                <div className="badges">
                    <Badge className="badge" color="orange">Javascript(React.js)</Badge>
                    <Badge className="badge" color="red">HTML/CSS</Badge>
                </div>
                <Paragraph size={300}>
                    I created this personal website using the React framework with the help of the Evergreen-UI component library and the Font Awesome icon library.
                    The website is currently hosted on GitHub Pages. This was my first project with real web design freedom; as a result, I made several iterations, 
                    changing libraries and styles as I progressed. I used the initial design to lead an Introduction to React workshop
                    during the Code.Jam(2020) hackathon which I helped organize. 
                    <br/>
                    <a href="https://github.com/kehwhy/portfolio"><Paragraph size={300}><strong>View Source Code</strong></Paragraph></a>
                </Paragraph>
            </Card>
            <Card className="card" marginLeft={20} elevation={2} border={true}> 
                <Heading className="title" size={600}>3..2..1..Tutor! Web and Android Application</Heading>
                <div className="badges">
                    <Badge className="badge" color="teal">Design</Badge>
                    <Badge className="badge" color="green">Java</Badge>
                    <Badge className="badge" color="yellow">Databases</Badge>
                    <Badge className="badge" color="orange">Javascript(Vue.js)</Badge>
                    <Badge className="badge" color="neutral">Android Studio</Badge>
                </div>
                <Paragraph size={300}>
                    Working with a team of 5 students, we developed an account-based application for tutors, allowing them to easily 
                    manage their availability and upcoming appointments and requests from students using the Springboot framework for backend and the Vue.js
                    framework for web development as well as a reduced functionality frontend with Android Studio. This project implemented a lot 
                    of modern software engineering concepts; we used the MVC design pattern, set up a CI/CD pipeline with Travic CI and designed the application 
                    using a framework (Spring Boot) to simplify development.
                    <a href="https://github.com/kehwhy/3..2..1-Tutor"><Paragraph size={300}><strong>View Source Code</strong></Paragraph></a>
                </Paragraph>
            </Card>
            <Card className="card" marginLeft={20} elevation={2} border={true}> 
                <Heading className="title" size={600}>Nutrigo Android Application</Heading>
                <div className="badges">
                    <Badge className="badge" color="teal">Design</Badge>
                    <Badge className="badge" color="purple">Python/Django</Badge>
                    <Badge className="badge" color="yellow">Databases</Badge>
                    <Badge className="badge" color="neutral">Android Studio</Badge>
                </div>
                <Paragraph size={300}>
                    I worked in a team of 15 people, leading a sub-team of 5 android developers, to develop a calorie tracking app
                    that allows users to add food items and meals to track their intake and meet their goals. During this project, 
                    I learned about project management, specifically, how to maintain a backlog, lead a scrum meeting and create comprehensive documentation.
                </Paragraph>
            </Card>
            <Card className="card" marginLeft={20} elevation={2} border={true}> 
                <Heading className="title" size={600}>Block223</Heading>
                <div className="badges">
                    <Badge className="badge" color="teal">Design</Badge>
                    <Badge className="badge" color="green">Java</Badge>
                    <Badge className="badge" color="red">UML</Badge>
                </div>
                <Paragraph size={300}>
                    I worked in a team of 6 to produce our take on the classic BrickBreaker game using Umple, 
                    Java, and Java Swing. The application allowed a user to build fully customizable levels for the game 
                    by changing settings for the color and point value of each block as well as manually placing the blocks on a grid. 
                    This project was my first experience with developing an application and I learned a lot about modelling and system requirements.
                </Paragraph>
            </Card>
        </Pane>
    )
}

export default Projects