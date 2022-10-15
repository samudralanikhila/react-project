import Home from "./home";


const Addnewstudent =()=>{
    return(
        <div>
       <Home />
       <div className="container">
           <div className="items">
           
           <fieldset> <legend>  Name  </legend> <input type="text" /></fieldset>
           </div>
           <div className="items"><fieldset><legend>Age </legend> <input type="text" /></fieldset>
          </div>
           <div className="items"><fieldset><legend>Course </legend> <input type="text" /></fieldset>
           </div>
           <div className="items"><fieldset><legend>Batch </legend> <input type="text" /></fieldset>
            </div>
       </div>
       <button id="cancelbtn">Cancel</button>
       <button id="updatebtn">Update</button>
   </div>
    )
}

export default Addnewstudent;