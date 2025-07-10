import { useNavigate } from "react-router-dom";


const Login = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handlelogin = () => {
        setIsAuthenticated(true);
        navigate("/dashboard");
    };

    return(
        <div>
            <h2>Login Page</h2>
            <button onClick={handlelogin}>Login</button>
        </div>
    );


};

export default Login;