import React, {useState, useEffect} from "react";
import SearchIcon from '@material-ui/icons/Search';



function FirstPageContainer() {



 const [newHeadings, setNewHeadings] = useState(["Craving good Food?"])

  useEffect(() => {
    const interval = setInterval( () => {
        setTimeout( () => {
          setNewHeadings("Planning a Date?");
        }, 0);
        setTimeout( () => {
          setNewHeadings("Need Your food on time?");
        }, 4000);
        setTimeout( () => {
          setNewHeadings("Are you in a hurry but hungry?");
        }, 6000);
        setTimeout( () => {
          setNewHeadings("Craving good Food?");
        }, 8000);
         },8000);
         return () => clearInterval(interval);
        }, []);

    return(
      <div>
      <div className="btn-container">
      
      <button className=" btn-pads lil-animations">Login</button>
      <button className="btn btn-light btn-margin lil-animations2">SignUp</button>
   
      </div>
           <div className="fluid-container center-container">
           
           <div className="row center-row ">
          
           <div className="col-lg-6 center-col">
         <h1 className="heading-animate" >{newHeadings}</h1>            
         <p>Book seat and order food  to be prepared before you reach!</p>
        
         <form className="form-position">
         <input type="text" className="form-input lil-animations3" placeholder="Book a seat on your Favourite Restaurant"></input>
       <button className="btn btn-dark btn-search " ><SearchIcon /></button> 
       </form>
         </div>
           <div className="col-lg-4">        
           </div>
           </div> 
            
         </div>
         </div>
        
    )
}

export default FirstPageContainer;