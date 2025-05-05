import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.ts";

function Login() {
    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation();
    const from = location.state.from || '/'
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username');

        auth.signIn(username, () => {
            navigate(from,{replace:true})
        })

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group mb-3">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name={'username'} className="form-control" id="nameInput"
                                           placeholder="Enter username"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;