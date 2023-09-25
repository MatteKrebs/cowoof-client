import { redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Logout = () => {
    const { logout } = useAuth();
    logout();
    redirect('/');
    
    return <></>;
}

export default Logout;