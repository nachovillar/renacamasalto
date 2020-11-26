import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './UserAuth'

export const ProtectedRoute = ({component: Compontent}, ...rest) =>{
    return (
        <Route {...rest}
             render={props => {
                 if(auth.isAuthenticated() || localStorage.getItem('jwt')){
                    return <Compontent {...props} />
                 }
                 else{
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                 }
             }

        }
        />
    )
}