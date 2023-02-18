import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Home/Shared/Loading/Loading';
import { useSignOut } from 'react-firebase-hooks/auth';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);
    const location = useLocation();
    if (loading || adminLoading || signOutLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        signOut()
        return <Navigate to="/login" state={{ from: location }}></Navigate>
    }

    return children;
};

export default RequireAuth;