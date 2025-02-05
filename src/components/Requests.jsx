import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect, useState } from "react";

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();

  

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, {
                withCredentials: true
            })
            dispatch(removeRequest(_id))

        } catch (err) {
            console.error("Review Requests:", err.message);
        }
    }

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", {
                withCredentials: true,
            });
            dispatch(addRequests(res.data.data));
        } catch (err) {
            console.error("Error fetching requests:", err.message);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    if (!requests) return null;

    if (requests.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <h1 className="text-xl font-bold text-gray-600">No Requests Found</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center my-10 px-4">
            <h1 className="text-2xl font-bold mb-6">Friend Requests</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
                {requests.map((request) => {
                    const { _id, firstName, lastName, photoUrl } = request.fromUserId;

                    return (
                        <div key={_id} className="flex flex-col items-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg p-6 rounded-lg w-full max-w-xs transition transform hover:scale-105">
                            <img src={photoUrl} alt={firstName} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                            <h2 className="mt-3 text-lg font-semibold text-white">{firstName} {lastName}</h2>
                            <div className="flex space-x-4 mt-4">
                                <button className="px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                                <button className="px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Requests;
