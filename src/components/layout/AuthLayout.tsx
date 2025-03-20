import { Outlet, useLocation } from 'react-router-dom';
import Tabs from '../ui/Tabs';

export default function AuthLayout() {
  const location = useLocation();

  return (
    <>
      <Tabs trigger={`${location.pathname}`} />
      <div className={'authContainer'}>
        <Outlet />
      </div>
    </>
  );
}
