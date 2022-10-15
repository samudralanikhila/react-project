import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./component/home";
import Student from "./component/student";
import Addnewstudent from "./component/addnewstudent";
import Contactus from "./component/contactus";
import "./component/style.css"


function App() {
  return( 
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
  
      
      <Route path="/contactus/" element={<Contactus />} />
      <Route path="/student/" element={<Student />}/>
      <Route path="/student/addnewstudent" element={<Addnewstudent />}/>
      
    </Routes>
    </BrowserRouter>

    
    </div>
  )
}

export default App;