import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Home/Shared/Loading/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-accent mb-5">All Users: {users?.length}</h2>
            <div className="overflow-x-auto border-2 border-accent rounded-xl">
                <table className="table w-full">
                    <thead className="border-b-2 border-accent">
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;