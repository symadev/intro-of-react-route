import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const users = useLoaderData();
    const {name,website} = users;
    return (
        <div>
            <h2>Here Showing the details:{name}</h2>
            <p>Website:{website}</p>
        </div>
    );
};

export default UserDetails;