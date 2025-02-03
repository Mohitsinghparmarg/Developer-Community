import React from 'react';

const UserCard = ({ user = {} }) => {
    const { firstName = '', lastName = '', photoUrl = '', age = '', about = '', skills = [] } = user;

    return (
        <div className="relative w-80 h-[380px] bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden border border-gray-300">
            
            {/* Profile Image */}
            <div className="relative w-full h-2/3">
                <img
                    src={photoUrl}
                    alt={`${firstName} ${lastName}`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            {/* User Info */}
            <div className="absolute bottom-24 left-5 text-white">
                <h2 className="text-xl font-semibold tracking-wide">
                    {firstName} {lastName}, {age}
                </h2>
                <p className="text-sm text-gray-300 mt-1">{about || 'No bio available'}</p>
            </div>

            {/* Skills Section */}
            {skills.length > 0 && (
                <div className="absolute bottom-16 left-5 right-5 text-white">
                    <p className="text-xs bg-white/20 px-2 py-1 rounded-lg inline-block">
                        <strong>Skills:</strong> {skills.join(', ')}
                    </p>
                </div>
            )}

            {/* Action Buttons */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-around px-6">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md text-sm transition-all hover:bg-blue-700 hover:scale-105">
                    Interested
                </button>
                <button className="bg-red-500 text-white px-5 py-2 rounded-xl shadow-md text-sm transition-all hover:bg-red-600 hover:scale-105">
                    Ignore
                </button>
            </div>
        </div>
    );
};

export default UserCard;
