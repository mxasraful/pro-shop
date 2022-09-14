import { Redirect, Route } from "react-router-dom";


export const PrivateRoute = ({ user, children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <>
                        {
                            window.location.replace('/login')
                        }
                    </>
                )
            }
        />
    );
}