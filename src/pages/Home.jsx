import "./Home.css";
import img from "../assets/profile.png";
import {forwardRef} from "react";
export const Home=forwardRef((props,ref)=>{
  return <>
     <div className="home" ref={ref}>
      <div className="about">
        <h1>Hi, I am</h1>
        <h1 className="name">Yogendra Dawar</h1>
        <h1>I am a Developer | Programmer</h1>
        <p>As an individual, I'm constantly fueled by motivation and thrive on new challenges. My passion lies in learning and problem-solving, and I approach tasks with unwavering enthusiasm. I have a knack for finding efficient solutions and am always pushing myself to excel. You can explore my journey through my portfolio, where each project and experience unfolds a new chapter of growth and achievement.</p>
        <a href={"https://drive.google.com/file/d/1w-tyKkDyJeOcxfeueGokAXED7fQlhLRU/view?usp=sharing"} target="_blank">Resume</a>
      </div>
      <div className="image">
      <img src={img} alt="Image" />
      </div>
     </div>
     
  </>
}
);