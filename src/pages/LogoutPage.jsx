import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = () => {
        if (!isLoggingOut) {
            setIsLoggingOut(true);
            logout();
            navigate('/');
        }
    }

    return (
        <div className='flex flex-col items-center justify-center text-green-600'>
            <h1>Are you sure you want to be log out?</h1>
            <button className="btn mt-4 border-spacing-2 border-2 rounded-md p-4 border-green-400 hover:border-white" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;