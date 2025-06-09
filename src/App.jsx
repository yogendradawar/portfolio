
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {Project} from "./pages/Project"
import {Navbar} from "./components/Navbar";
import {Skills} from "./pages/Skills";
import {Experience} from "./pages/Experience"
import {Education} from "./pages/Education"
import {Footer} from "./components/Footer"

import{useRef} from "react";
 
const App=()=>{
  let aboutRef=useRef();
  let educationRef=useRef();
  let skillRef=useRef();
  let experienceRef=useRef();
  let projectRef=useRef();
  let contactRef=useRef();

  return (<>
   <Navbar projectRef={projectRef} aboutRef={aboutRef} skillRef={skillRef} experienceRef={experienceRef} educationRef={educationRef} contactRef={contactRef}/>
   <Home ref={aboutRef}/>
   <Skills ref={skillRef}/>
   <Experience ref={experienceRef}/>
   <Project ref={projectRef}/>
   <Education ref={educationRef}/>
   <Contact ref={contactRef}/>
   <Footer projectRef={projectRef} skillRef={skillRef} experienceRef={experienceRef} educationRef={educationRef} contactRef={contactRef}/>
  </>);
}

export default App;