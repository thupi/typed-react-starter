import * as React from 'react';
import styled from 'react-emotion';

// Components
import LoginForm from './containers/LoginForm';

// Styled
const Cover = styled('div')({
  background:
    'radial-gradient(1504.85px at 100% 100%, rgba(26, 235, 210, 0.7) 0%, rgba(0, 155, 255, 0.7) 100%)',
  height: 400
});

const Card = styled('div')({
  background: '#fff',
  borderRadius: 8,
  boxShadow: '2px 0 15px 0 rgba(0, 0, 0, 0.27)',
  maxWidth: '320px',
  margin: '0 auto',
  transform: 'translate3d(0px, -100px, 0px)',
  padding: 16
});

const CardHeader = styled('div')({
  textAlign: 'center'
});

//
const Login = () => (
  <div>
    <Cover />
    <Card>
      <CardHeader>
        <h3>Login</h3>
        <p>Welcome to My Company</p>
      </CardHeader>
      <LoginForm />
    </Card>
  </div>
);

export default Login;
