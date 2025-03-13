
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h2>Oops!</h2>
            <p>
        <i>{error.statusText || error.message}</i>
      </p>
        </div>
    );
};

export default ErrorPage;