import React from 'react';
import { toast } from 'react-toastify';

const ConfirmationModal = ({deleteDoctor,  refetch,setDeleteDoctor}) => {
    const {name, email } = deleteDoctor;
    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success(`Doctor: ${name} is Deleted`)
                    setDeleteDoctor(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete?</h3>
                    <p>If you delete this, Doctor {name} information will be deleted</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(email)} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;