import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, children }) => {
  return loggedIn ? children : <Redirect to="/signin" />;
};

export default ProtectedRoute;

