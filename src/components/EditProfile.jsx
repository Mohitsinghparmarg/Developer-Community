import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
    console.log(user);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender || "");
    const [about, setAbout] = useState(user.about);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();


    const saveProfile = async () => {
        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                {
                    firstName,
                    lastName,
                    age,
                    gender,
                    about,
                    photoUrl
                },
                {
                    withCredentials: true
                }
            );
            dispatch(addUser(res?.data?.data))
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 1000)
        } catch (err) {
            setError(err.message);
        }
    }

    return (

        <>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-500 to-gray-800 p-4">
                <div className="bg-gray-500 shadow-xl rounded-3xl p-5 w-full sm:w-96 max-w-md">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Edit Profile</h2>

                    <div className="space-y-4">
                        <input
                            type="text"
                            className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-3 text-lg"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <input
                            type="text"
                            className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-3 text-lg"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        <input
                            type="number"
                            className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-3 text-lg"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />

                        <select
                            className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-3 text-lg"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>

                        <textarea
                            className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-3 text-lg"
                            placeholder="About You"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                        />

                        <input
                            type="text"
                            className="w-full border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-3 text-lg"
                            placeholder="photoUrl"
                            value={photoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
                        />

                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300" onClick={saveProfile}>
                            Save Profile
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    <UserCard user={{ firstName, lastName, age, gender, about, photoUrl }} />
                </div>
            </div>
            {showToast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>Profile Updated successfully.</span>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default EditProfile;
