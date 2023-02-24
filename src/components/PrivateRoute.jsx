import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component }) => {
  const isLogin = useSelector(state => state.auth.isLogin);
  return isLogin ? component : <Navigate to={'/login'} />;
};

export default PrivateRoute;
