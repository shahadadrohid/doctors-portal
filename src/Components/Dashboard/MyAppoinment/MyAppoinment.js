import { React, useState, useEffect } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const MyAppoinment = () => {
    const [user, loading, error] = useAuthState(auth);
    const [appoinment, setAppoinment] = useState([]);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('Response', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut()
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data)
                    setAppoinment(data)
                })
        }
    }, [user])
    return (
        <div>
            <h2 className="text-2xl font-bold text-accent mb-5">My Appoinments</h2>
            <div className="overflow-x-auto border-2 border-accent rounded-xl">
                <table className="table w-full">
                    <thead className="border-b-2 border-accent">
                        <tr>
                            <th>No</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinment?.map((a, index) =>
                                < tr key={a._id}>
                                    <th>{index + 1}</th>
                                    <td>{a.treatment}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>
                                        {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}>
                                            <button
                                                className="btn btn-xs btn-success"
                                            >Pay Bill</button>
                                        </Link>}
                                        {(a.price && a.paid) && <span className="text-success">Paid</span>}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyAppoinment;