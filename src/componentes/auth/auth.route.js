import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './UserAuth'

export const AuthRoute = ({component: Compontent}, ...rest) =>{
    return (
        <Route {...rest}
             render={props => {
                 if(!auth.isAuthenticated()){
                    return <Compontent {...props} />
                 }
                 else{
                    return <Redirect to={
                        {
                            pathname: "/perfil-admin",
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