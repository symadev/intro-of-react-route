import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'




// why should i use loader and useloaderdata instead of useeffect  when using react router?
const Users = () => {
    const users = useLoaderData();
    return (
        <div>
             <h3>Our Users:{users.length}</h3>  
             <div  className ="users">
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
             </div>
        </div>
    );
};

export default Users;