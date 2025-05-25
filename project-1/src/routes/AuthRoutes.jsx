import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/auth/LogInPage';
import SignupPage from '../pages/auth/SignupPage';
import NotFound from '../pages/other/NotFound';

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
