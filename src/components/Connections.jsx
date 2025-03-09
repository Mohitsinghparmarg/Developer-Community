import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
    const connections = useSelector((store) => store.connections);
    const dispatch = useDispatch();

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials: true,
            });
            dispatch(addConnections(res.data.data));
        } catch (err) {
            console.error("Error fetching connections:", err.message);
        }
    };

    useEffect(() => {
        fetchConnections();
    }, []);

    if (!connections) return null;

    if (connections.length === 0) {
        return (
            <div className="flex justify-center my-10">
                <h1 className="font-bold text-xl">No Connections Found</h1>
            </div>
        );
    }

    return (
        <div className="text-center my-10">
            <h1 className="font-bold text-2xl mb-6">Connections</h1>
            <div className="flex flex-col items-center space-y-6">
                {connections.map((connection) => {
                    const { _id, firstName, lastName, photoUrl, age, gender, about } = connection;

                    return (
                        <div key={_id} className="flex items-center m-4 p-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 w-3/4 mx-auto shadow-xl transform transition-transform hover:scale-105">
                            <div>
                                <img alt="photo" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg" src={photoUrl} />
                            </div>
                            <div className="text-left mx-6 text-white">
                                <h2 className="font-bold text-2xl">{firstName} {lastName}</h2>
                                {age && gender && <p className="text-lg">{age}, {gender}</p>}
                                <p className="mt-2 text-sm italic">{about}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Connections;
