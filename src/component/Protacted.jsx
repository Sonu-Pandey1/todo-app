import React, { useEffect, useState } from 'react';
import authService from '../appwrite/auth';

function Protected({ Cmd }) {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      const cu = await authService.getCurrentUser();
      setUserDetails({
        name: cu.name,
        email: cu.email,
        userId: cu.$id,
      });
    } catch (error) {
      console.log(error);
      setUserDetails(null); // Set to null if there is an error
    }
  }

  return (
    <div>
      {userDetails ? <Cmd /> : <div>Please login to get the data</div>}
    </div>
  );
}

export default Protected;
