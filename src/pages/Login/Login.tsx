import {FormEvent} from 'react';
import {useLocation, useNavigate, Location} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.ts";

interface LocationState {
    from: { pathname: string };
}

export function Login(): JSX.Element {
    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation() as Location & { state?: LocationState };


    const fromPath = location.state?.from.pathname ?? '/';
    const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);

        const raw = formData.get('username');
        const username = typeof raw === 'string' ? raw : '';

        auth.signIn({name: username}, () => {
            navigate(fromPath, {replace: true})
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
                                    <label htmlFor="usernameInput">Username</label>
                                    <input type="text" name={'username'} className="form-control" id="usernameInput"
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
