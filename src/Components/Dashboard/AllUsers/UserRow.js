import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const UserRow = ({ user, index, refetch }) => {
    const navigate = useNavigate();
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You can not made admin')
                    signOut()
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Made and Admin');
                    refetch();
                    console.log(data)
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr >
    );
};

export default UserRow;