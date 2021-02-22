import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const unsubscribe = employeesRef
      // .where("team", "==", "backend development")
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // var id = doc.id;
          // console.log(id);
          data.id = doc.id;
          items.push(data);
        });
        setList(items);
        console.log(items);
      });

    teamRef.onSnapshot((query) => {
      let arr = [];
      query.forEach((doc) => {
        const datas = doc.data();
        datas.id = doc.id;
        arr.push(datas);
      });
      setTeams(arr);
      console.log(arr);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider>{props.children}</UserContext.Provider>;
};
