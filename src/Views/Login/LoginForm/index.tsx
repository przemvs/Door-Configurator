import React from 'react'

import FormGroup from "./FormGroup";
import StyledInput from './StyledInput';
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";
import Form from './Form';
import Checkbox from '../../../components/Checkbox/Checkbox';

interface User {
  email: string,
  password: string,
  keepLogged?: boolean
}

interface LoginProps {
  handleLogin: (event: React.MouseEvent<HTMLButtonElement>) => void,
  user: User,
  setUser: (event: User) => void,
  loading: boolean
}

const LoginForm: React.FC<LoginProps> = ({handleLogin, user, setUser, loading}) => {
  return (
    <Form>
      <FormGroup>
        <StyledInput
          type="email"
          placeholder="Email Address"
          value={user.email}
          onChange={ev => setUser({...user, email: ev.target.value})}
        />
      </FormGroup>

      <FormGroup noMargin>
        <StyledInput
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={ev => setUser({...user, password: ev.target.value})}
        />
      </FormGroup>

      <FormGroup customMargin>
        <Checkbox
          label="Keep me logged in"
          id="keep_login"
          name="keep_login"
          checked={user.keepLogged}
          onChange={ev => setUser({...user, keepLogged: ev.target.checked})}
        />
      </FormGroup>

      <ButtonContainer>
        <Button type="button" onClick={handleLogin} disabled={loading}>Login</Button>
      </ButtonContainer>
    </Form>
  )
}

export default LoginForm
