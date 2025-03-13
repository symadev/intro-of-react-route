import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to our Website</h1>
            <nav>
           <Link to="/">Home</Link> 
           <Link to="/posts">Posts</Link> 
           <Link to="/users">Users</Link> 
           <Link to="/about">About</Link> 
           <Link to="/contact">Contact</Link>

            </nav>
        </div>
    );
};

export default Header;