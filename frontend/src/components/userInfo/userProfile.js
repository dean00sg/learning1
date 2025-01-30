import React from 'react';
import useUser from '../../hooks/userApi';
const UserInfo = () => {
    const token = localStorage.getItem('token');
    const { user, userImage, loading, error } = useUser(token);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error) {
        return <p className="text-red-600 text-center font-semibold">{error}</p>;
    }

    if (!user || !userImage) {
        return <p className="text-center text-gray-500">No user data found</p>;
    }

    return (
        <div className="user-info p-6 shadow-lg max-w-md mx-auto bg-gray-200">
            <div className="flex items-center space-x-4">
                <img src={userImage}
                    alt="User Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-green-600 p-1 shadow-md" />
                <div className="user-details space-y-2">
                    <p className="text-xl font-semibold text-gray-800">{user.first_name} {user.last_name}</p>
                    <div className="bg-green-400 p-1">
                        <p className="text-sm text-gray-600 flex gap-2">Role : <div className="bg-green-700 ml-auto font-semibold text-white px-4">{user.role}</div></p>
                    </div>
                    <p className="text-sm text-gray-600">Email : {user.email}</p>
                    <p className="text-sm text-gray-600">Phone : {user.contact_number}</p>
                </div>
            </div>
        </div>

    );
};

export default UserInfo;