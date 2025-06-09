import "./Education.css"
import {forwardRef} from 'react'
export const Education=forwardRef((props,ref)=>{
    return <>
    <div className="education" ref={ref}>
        <h1>Education</h1>
        <p id="desc">Throughout my academic journey, I've emphasized active learning and exploration. Here's a breakdown of my educational background.</p>
        <div className="ed-section">
            <div className="study">
             <img src="https://upload.wikimedia.org/wikipedia/en/6/61/Rajiv_Gandhi_Technical_University_logo.jpg" alt="" />
             <div className="info">
                <p className="school-name">University Institute of Technology RGPV Bhopal</p>
                <p className="study-info">B.Tech (Computer Science)</p>
                <p className="date">2021 - 2025</p>
             </div>
            </div>
            <div className="description">
            <p> GPA: 8.04</p>
               <p>I am currently pursuing Bachelor of Technology in Computer Science and Engineering from University Institute of Technology, RGPV, Bhopal.</p>
            </div>
        </div>


        <div className="ed-section">
            <div className="study">
             <img src="https://mvaburhanpur.com/front_theme/images/logo.png"/>
             <div className="info">
                <p className="school-name">Macro Vision Academy, Burhanpur (M.P.)</p>
                <p className="study-info">Class 12th (PCM) (CBSE)</p>
                <p className="date">2020 - 2021</p>
             </div>
            </div>
            <div className="description">
            <p>Percentage: 83.4%</p>
               <p>Completed 12th with Mathematics and Science from Macro Vision Academy, Burhanpur</p>
            </div>
        </div>


        <div className="ed-section">
            <div className="study">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoQgkCAkGmVgQk64DV3syEURxemUke1U-yKvbElFS4Q&s" alt="" />
             <div className="info">
                <p className="school-name">Don Bosco Academy, Alirajpur (M.P.)</p>
                <p className="study-info">Class 10th (MPBSE)</p>
                <p className="date">2018 - 2019</p>
             </div>
            </div>
            <div className="description">
            <p> Percentage: 91.2%</p>
               <p>Completed 10th from Don Bosco Academy, Alirajpur </p>
            </div>
        </div>


    </div>
    </>
}
)