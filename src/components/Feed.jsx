import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed.length > 0) return;  // Prevent unnecessary API calls

    try {
      const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.error("Error fetching feed:", err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []); // Empty dependency array to fetch only once

  return (
    feed && (
      <div className='flex justify-center my-5'>
        <UserCard user={feed[0]} />
      </div>
    )
  );
};
export default Feed;
