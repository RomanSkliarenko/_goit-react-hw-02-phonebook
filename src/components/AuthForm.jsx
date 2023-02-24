import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signUp } from '../redux/operations/auth';


function AuthForm({ type }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      default:
        return;
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (email && password) {
      await dispatch(login({ email, password }));
    }
    setEmail('');
    setPassword('');
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (email && password && name) {
      await dispatch(signUp({ name, email, password }));
    }
    setEmail('');
    setPassword('');
    setName('');
  };

  if (type === 'login') {
    return (
      <div className='authWrapper'>
        <h2 className='authTitle'>LOGIN, DUDE</h2>
        <form name='login' onSubmit={loginHandler} className='authForm'>
          <input className='authInput' name='email' type='email' value={email} onChange={onInputChange}
                 placeholder='Enter your email' />
          <input className='authInput' name='password' type='password' value={password} onChange={onInputChange}
                 placeholder='Enter your password' />
          <button type='submit' className='button'>Login</button>
        </form>
      </div>
    );
  }
  return (
    <div className='authWrapper'>
      <h2 className='authTitle'>REGISTER PLEASE, DUDE</h2>
      <form name='signUp' onSubmit={signUpHandler} className='authForm'>
        <input className='authInput' name='name' type='name' value={name} onChange={onInputChange}
               placeholder='Enter your name' />
        <input className='authInput' name='email' type='email' value={email} onChange={onInputChange}
               placeholder='Enter your email' />
        <input className='authInput' name='password' type='password' value={password} onChange={onInputChange}
               placeholder='Enter your password' />
        <button type='submit' className='button'>Join</button>
      </form>
    </div>
  );
}

export default AuthForm;
