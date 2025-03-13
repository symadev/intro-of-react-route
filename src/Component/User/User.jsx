import { Link,useNavigate } from "react-router-dom";


const User = ({user}) => {                                  
    const {id, name, email,phone} = user;
    const navigate = useNavigate();
const userStyle={
  border:'2px solid yellow',
  borderRadius:'10px',
  padding:'24px'


}

const handleShowDetails = ()=>{
    navigate(`/user/${id}`);

}
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Mobile:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>User Details</button></Link>

            <button onClick={ handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default User;