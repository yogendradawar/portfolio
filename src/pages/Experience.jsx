import "./Experience.css"
import { forwardRef } from "react"
export const Experience=forwardRef((props,ref)=>{
    return <>
    <div className="experiences" ref={ref}>
        <h1>Experience</h1>
        <p id="desc">As a software engineer, I've refined my skills by solving problems across various platforms and gaining valuable experience in different tasks as an intern.</p>


        <div className="ex-section">
            <div className="company">
             <img src=""alt="Coding Ninjas png"/>
      

             <div className="info">
                <p className="experience"> Coding Ninjas Course</p>
                <p className="company-name">Coding Ninjas Pvt Ltd</p>
                <p className="date">Jan 5, 2023 - May 12, 2023</p>
             </div>
            </div>
            <div className="description">
               <p>&#x2022; Strengthened knowledge of Data Structures and Algorithms in Java.</p>
               <p>&#x2022; Earned milestone badges through consistent coding and problem-solving practice.</p>
            </div>
        </div>


        <div className="ex-section">
            <div className="company">
             <img src="https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/05/10175228/images-11.png" alt="" />
             <div className="info">
                <p className="experience">300+ Problems Solved</p>
                <p className="company-name">LeetCode</p>
                <p className="date">2022 - present</p>
             </div>
            </div>
            <div className="description">
               <p>By consistently engaging in coding challenges, I've mastered over 300 LeetCode problems, maintaining an impressive streak of daily practice for 3 months.By refining my logic and problem-solving skills along the way. This consistent effort has significantly enhanced my ability to tackle complex problems and find efficient solutions.</p>
               <p>skills: JAVA</p>
            </div>
        </div>


        {/* <div className="ex-section">
            <div className="company">
             <img src="https://media.licdn.com/dms/image/C4E0BAQEVcMDb_t7N7w/company-logo_200_200/0/1630642236612?e=2147483647&v=beta&t=8Y8dq3LliOT7jyN87axnjgfDoJ0Ns6ZoX_AGweHRIGI"alt=""/>
             <div className="info">
                <p className="experience">Member - Coders Hub</p>
                <p className="company-name">Asper</p>
                <p className="date">Feb 2022 - Feb 2023</p>
             </div>
            </div>
            <div className="description">
               <p>Asper Coders Hub is where I learned programming. It's a great community where I developed my skills through learning together with others</p>
               <p>skills: data structures and algorithms, problem solving</p>
            </div>
        </div> */}


    </div>
    </>
}
);