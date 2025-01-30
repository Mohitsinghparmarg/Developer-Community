import React from 'react';

const UserCard = ({ user = {} }) => {
   

    const { firstName = '', lastName = '', photoUrl = '', age = '', about = '', skills = [] } = user;

    return (
        <div className="relative w-80 h-[350px] bg-gray rounded-2xl shadow-xl overflow-hidden border border-gray-400">

            <div className="relative w-full h-2/3">
                <img
                    src={photoUrl}
                    alt={`${firstName} ${lastName}`}
                    className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            <div className="absolute bottom-24 left-5 text-white">
                <h2 className="text-lg font-bold">{firstName} {lastName}, {age}</h2>
                <p className="text-sm text-gray-300">{about || 'No bio available'}</p>
            </div>

            {skills.length > 0 && (
                <div className="absolute bottom-16 left-5 right-5 text-white">
                    <p className="text-xs"><strong>Skills:</strong> {skills.join(', ')}</p>
                </div>
            )}

            <div className="absolute bottom-5 left-0 right-0 flex justify-around px-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md text-sm hover:bg-blue-600">
                    Interested
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md text-sm hover:bg-green-600">
                    Ignored
                </button>
            </div>
        </div>
    );
};

export default UserCard;
