import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const UserData = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://task-server-beta.vercel.app/data');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-4xl pb-12'>All User's Info Is Here</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Sector</th>
                            <th>Agreed To Our Terms</th>
                            <th>Edit Info</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => (
                                <tr key={user._id} className="hover">
                                    <th></th>
                                    <th>{user.name}</th>
                                    <td>{user.sector}</td>
                                    <td>{user.agreedTerms}</td>
                                    <td>
                                        <Link to={`/edit/${user._id}`}>
                                            <button className="btn btn-success btn-sm">Edit</button></Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserData;