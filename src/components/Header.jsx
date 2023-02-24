import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavLinkComponent from './NavLink';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser, logOut } from '../redux/operations/auth';

function Header() {
  const { isLogin, email, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logOutHandler = async () => {
    await dispatch(logOut());
  };

  useEffect(() => {
    if (token) {
      dispatch(currentUser(token));
    }
  }, [token, dispatch]);

  return (
    <div>
      <div className='header'>
        <div>
          <span className='title'>DUDEbook</span><span className='subTitle'>phonebook</span>
        </div>
        <div>
          {isLogin && <NavLinkComponent to={'contacts'}>CONTACTS</NavLinkComponent>}
          {!isLogin && <NavLinkComponent to={'login'}>LOGIN</NavLinkComponent>}
          {!isLogin && <NavLinkComponent to={'register'}>REGISTER</NavLinkComponent>}
        </div>
        {isLogin && <div>
          <span className='greeting'>Hello, {email} !</span>
          <button className='button' onClick={logOutHandler}>LOGOUT</button>
        </div>}
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
