import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  //   if (isLoading) {
  //     return <div>Loading ...</div>;
  //   }
  //   const getUserData = async () => {
  //     await axios
  //       .get(`https://${"dev-pusoarj7qy7ljns4.us.auth0.com"}/api/v2/`)
  //       .then((res) => {
  //         setUserMetadata(res);
  //       });
  //   };
  //   useEffect(() => {
  //     getUserData();
  //   }, []);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-pusoarj7qy7ljns4.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await axios.get(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);
  const { logout } = useAuth0();
  console.log(userMetadata, "datatatata");
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button
          className="btn btn-primary"
          onClick={() => logout({ returnTo: window.location.origin })}
        >Logout</button>
        {/* <h3>User Metadata</h3> */}
        {/* {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )} */}
      </div>
    )
  );
};

export default Profile;
