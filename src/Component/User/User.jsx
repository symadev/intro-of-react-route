import { Link } from "react-router-dom";


const User = ({user}) => {                                  
    const {id, name, email,phone} = user;
const userStyle={
  border:'2px solid yellow',
  borderRadius:'10px',
  padding:'24px'


}
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Mobile:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;