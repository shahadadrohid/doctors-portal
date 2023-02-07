import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold text-center text-secondary">Welcome to Dashboard</h2>
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appoinments</Link></li>
                    <li><Link to="/dashboard/review">My Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;