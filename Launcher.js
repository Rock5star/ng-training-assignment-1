import List from "./List";




import { Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';



function Launcher() {
    return ( <>
        <div className="container">
    
         
       
     
          <Routes>
           
           
            <Route path="/task/taskId" element={<List/>} />
             
            
      
          </Routes>
         
        </div>
      </> );
}

export default Launcher;