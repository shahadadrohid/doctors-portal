import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-5">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col  ml-10">
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 w-auto text-base-content border-2 border-accent rounded-xl">
                    {/* <!-- Sidebar content here --> */}
                    <h2 className="text-3xl font-bold text-center text-accent mb-5">Dashboard</h2>
                    <li><Link to="/dashboard" className="border-2 border-accent mb-2 text-accent font-semibold">My Appoinments</Link></li>
                    <li><Link to="/dashboard/review" className="border-2 border-accent text-accent font-semibold">My Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;