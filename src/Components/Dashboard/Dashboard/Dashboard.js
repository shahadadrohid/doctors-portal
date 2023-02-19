import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile mt-5">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mx-10 ">
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 bg-white lg:bg-none w-80 text-base-content border-2 border-accent rounded-xl">
                    {/* <!-- Sidebar content here --> */}
                    <h2 className="text-3xl font-bold text-center text-accent mb-5">Dashboard</h2>
                    <li><Link to="/dashboard" className="border-2 border-accent mb-2 text-accent font-semibold">My Appoinments</Link></li>
                    <li><Link to="/dashboard/review" className="border-2 border-accent mb-2 text-accent font-semibold">My Review</Link></li>
                    {admin &&
                        <>
                            <li><Link to="/dashboard/users" className="border-2 border-accent mb-2 text-accent font-semibold">Admin</Link></li>
                            <li><Link to="/dashboard/adddoctor" className="border-2 border-accent text-accent font-semibold">Add a Doctor</Link></li>
                        </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;