import React, {useState} from 'react'
import {RouteComponentProps, withRouter} from "react-router";

import Container from '../../components/Container';
import Error from '../../components/Error';
import LoginContainer from "./LoginContainer";
import Heading from "./Heading";
import LoginForm from "./LoginForm";
import {userService} from "../../state/services/user.service";
import Loader from '../../components/Loader';

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

const loginTimeout = 2000

const Login: React.FC<RouteComponentProps> = ({history}) => {
  const [user, setUser] = useState<User>(userInitialState)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const handleLogin = async () => {
    const res = await userService.login(user.email, user.password)
    // @ts-ignore
    const token = res && res.token

    setLoading(true)
    setTimeout(() => {
      // @ts-ignore
      if (token) {
        if (!user.keepLogged) {
          // @ts-ignore
          sessionStorage.setItem('token', token)
        } else {
          // @ts-ignore
          localStorage.setItem('token', token)
        }

        setLoading(false)
        history.push('/configurator')
      } else {
        setLoading(false)
        setError(true)
        console.log('error')
      }
    }, loginTimeout)

  }

  return (
    <>
      {loading && <Loader/>}
      {error && <Error>Invalid email or password</Error>}
      <Container>
        <LoginContainer>
          <Heading>Log in</Heading>
          <LoginForm
            handleLogin={handleLogin}
            user={user}
            setUser={setUser}
            loading={loading}
          />
        </LoginContainer>
      </Container>
    </>
  )
}

export default withRouter(Login)
