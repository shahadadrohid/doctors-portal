import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Home/Shared/Loading/Loading';
import Doctor from './Doctor';

const ManageDoctors = () => {
    // const [doctors, setDoctors] = useState();

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p>This is total: {doctors?.length}</p>
            <div className="overflow-x-auto border-2 border-accent rounded-xl">
                <table className="table w-full">
                    <thead className="border-b-2 border-accent">
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Speacility</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <Doctor key={doctor._id} doctor={doctor} index={index} refetch={refetch}></Doctor>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageDoctors;