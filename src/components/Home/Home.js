import React from 'react';
import Form from '../Form/Form';
import UserData from '../UserData/UserData';

const Home = () => {
    return (
        <div>
            <h2 className="p-6 text-2xl font-medium bg-emerald-300">SK Task</h2>
            <Form></Form>
            <UserData></UserData>
        </div>
    );
};

export default Home;