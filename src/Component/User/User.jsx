

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
        </div>
    );
};

export default User;