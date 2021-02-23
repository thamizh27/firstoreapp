import React, { useState, useEffect, createContext } from "react";
import { db } from "../service 2/EmployeeDataService";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employeeList, setEmployeeList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = db.on("value", (snapshot) => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        childData.id = childKey;
        data.push(childData);
      });
      setEmployeeList(data);
      setLoading(false);
      console.log(data);
    });

    return unsubscribe;
  }, []);
  return (
    <EmployeeContext.Provider value={[employeeList, loading]}>
      {children}
    </EmployeeContext.Provider>
  );
};
