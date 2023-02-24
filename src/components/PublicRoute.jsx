import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component }) => {
  const { isLogin } = useSelector(state => state.auth);
  return isLogin ? <Navigate to={'/contacts'} /> : component;
};

export default PublicRoute;
