import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Contacts from './Contacts';
import AuthForm from './AuthForm';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from './NotFound';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/' element={<PrivateRoute component={<Contacts />} />} />
          <Route path='/contacts' element={<PrivateRoute component={<Contacts />} />} />
          <Route path='/register' element={<PublicRoute component={<AuthForm type={'register'} />} />} />
          <Route path='/login' element={<PublicRoute component={<AuthForm type={'login'} />} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
