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
            console.log(res.data.data);
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
        <div className="flex flex-col items-center my-10">
            <h1 className="font-bold text-2xl mb-6">Connections</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {connections.map((connection) => {
                    const { firstName, lastName, age, gender, photoUrl, about } = connection;

                    return (
                        <div key={connection._id} className="relative w-80 h-[450px] rounded-xl overflow-hidden shadow-xl bg-white transform transition-transform duration-300 hover:scale-105">
                            <img src={photoUrl} alt={firstName} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
                                <h2 className="text-xl font-bold">{firstName} {lastName}, {age}</h2>
                                <p className="text-sm text-gray-300">{gender}</p>
                                <p className="mt-2 text-sm">{about}</p>
                                <div className="flex justify-between mt-4">
                                    <button className="px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition">Interested</button>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition">Ignore</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Connections;
