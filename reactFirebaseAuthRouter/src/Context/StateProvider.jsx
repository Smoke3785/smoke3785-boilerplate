import React, { useEffect, useState } from "react";
import firebaseConfig from "../Firebase/config.js";
import firebase from "firebase/app";
// import 'firebase/firestore'
// var db = firebase.firestore()

export const StateContext = React.createContext();

const StateProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <StateContext.Provider value={{ currentUser }}>
      {children}
    </StateContext.Provider>
  )
};

export default StateProvider;