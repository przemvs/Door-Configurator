import React, {useState} from 'react'
import {RouteComponentProps, withRouter} from "react-router";

import Container from '../../components/Container';
import Error from '../../components/Error';
import LoginContainer from "./LoginContainer";
import Heading from "./Heading";
import LoginForm from "./LoginForm";
import {userService} from "../../state/services/user.service";

interface User {
    email: string,
    password: string,
    keepLogged?: boolean
}

const userInitialState = {
    email: '',
    password: '',
    keepLogged: false
}

type LoginResponse = {
    token: string
}

const Login: React.FC<RouteComponentProps> = ({history}) => {
    const [user, setUser] = useState<User>(userInitialState)
    const [error, setError] = useState<boolean>(false)

    const handleLogin: Function = async () => {
        const res: Promise<string> = await userService.login(user.email, user.password)
        const token: Promise<string> = res && res.token

        if (token) {
            if (!user.keepLogged) {
                sessionStorage.setItem('token', token)
            } else {
                localStorage.setItem('token', token)
            }

            history.push('/configurator')
        } else {
            setError(true)
            console.log('error')
        }
    }

    return (
        <>
            {error && <Error>Invalid email or password</Error>}
            <Container>
                <LoginContainer>
                    <Heading>Log in</Heading>
                    <LoginForm
                        handleLogin={handleLogin}
                        user={user}
                        setUser={setUser}
                    />
                </LoginContainer>
            </Container>
        </>
    )
}

export default withRouter(Login)
