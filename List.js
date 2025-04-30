import { useNavigate } from "react-router-dom";

function List() {
const navigate = useNavigate()

const details = () => {
navigate.push("")
}


    return (<> <h2>All Tasks</h2> 
           <table>
            <tr>
            <th>Assigned to</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            </tr>
            <tr>
                <td>
                        
                </td>
            </tr>
           </table>
    
    </>);
}

export default List;