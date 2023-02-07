import { React, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyAppoinment = () => {
    const [user, loading, error] = useAuthState(auth);
    const [appoinment, setAppoinment] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppoinment(data))
        }
    }, [user])
    return (
        <div>
            <p>My appoinment: {appoinment.length}</p>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinment.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.treatment}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;