import { Link} from "react-router-dom";


const Post = ({post}) => {                                  
    const {id,title, body} = post;
   
const postStyle={
  border:'2px solid yellow',
  borderRadius:'10px',
  padding:'24px'


}

  return (
        <div style={postStyle}>
            
            <p>{title}</p>
            <p>Description:{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            

           
        </div>
    );
};

export default  Post;