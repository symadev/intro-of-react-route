import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const users = useLoaderData();
    const {name} = users;
    return (
        <div>
            <h2>Here Showing the details:{name}</h2>
        </div>
    );
};

export default UserDetails;