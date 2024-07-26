import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import './Profile.css'

function Profile() {

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div>
      {userDetails ? (
        <div className="user-container">
          <div className="user-details-container">
            <h3 className="user-details-title">Hola</h3>
            <h4 className="user-details-name">{userDetails.firstName} {userDetails.lastName}</h4>
            <p className="user-details-information"><strong>Email: </strong></p>
            <p className="user-details-information">{userDetails.email}</p>
            <p className="user-details-information"><strong>Direcciones guardadas: </strong></p>
            <div>
              <p className="user-details-information">dirección 1</p>
              <p className="user-details-information">dirección 1</p>
            </div>
            <button className="logout-button" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
          <div className="user-orders-container">
            <h3 className="user-details-title">Mis pedidos</h3>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;