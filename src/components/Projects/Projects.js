import React from 'react'
import block223 from "../../Images/SuperBrickBreaker.png"
import nutrigo from "../../Images/nutrigo.jpg"
import tutor from "../../Images/tutor.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';

const Projects = () => {
    return (
        <div>
            <Card source={block223} title="Block223 Java Application" desc="As a project for ECSE223: Introduction to Model-Based
            Programming, I worked in a team of 6 to produce our take on the classic BrickBreaker game using Umple, 
            Java, and Java Swing."/>
            <Card source={nutrigo} title="Nutrigo Android and iOS Application" desc="As a project for ECSE428: Software Engineering
            Practices, I worked in a team of 15 people, leading a sub-team of 5 android developers, to develop a calorie tracking app
            that allows users to add food items and meals to track their intake and meet their goals." />
            <Card source={tutor} title="3..2..1 Tutor! Web and Android Application" desc="As a project for ECSE321: Indroduction to Software
            Engineering, I worked with a team of 5 students to develop an account-based application for tutors which allows them to easily 
            manage their availability and upcoming appointments and requests from students using the Springboot framework for backend and the Vue.js
            framework for web development as well as a reduced functionality frontend with Android Studio." />
        </div>
    )
}

export default Projects