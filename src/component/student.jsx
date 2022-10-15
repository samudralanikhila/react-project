import './style.css';
import Home from './home';
import { Link } from 'react-router-dom';


const Student=()=>

{
    return(
        <div >
         <Home />
       <span>STUDENT DETAILS:</span>
       <Link to="./addnewstudent/"><button id="Addnewstudent">Add New Student</button></Link>
       <center>
      <div id="tablepart" >
      <table  width="100%">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Bctch</th>
                <th>Change</th>

            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td> <Link to="./addnewstudent/">edit</Link> </td>
            </tr>
        </table>
      </div>
       </center>

        </div>
    )
}

export default Student;