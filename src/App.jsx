import React, { useState } from "react";

import ExpenseItem from "./components/ExpenseItem";
import GetFormData from "./components/GetFormData";
const DUMMY_USERS = [
  {
    title: "arash",
    date: new Date(2022, 7, 15).toLocaleString("en-US", { month: "long" }),
    amount: 300,
    id: 1,
  },
  {
    title: "ali",
    date: new Date(2023, 3, 15).toLocaleString("en-US", { month: "long" }),
    amount: 450,
    id: 2,
  },
  {
    title: "masoud",
    date: new Date(2017, 2, 15).toLocaleString("en-US", { month: "long" }),
    amount: 650,
    id: 3,
  },
  {
    title: "mamd",
    date: new Date(2017, 6, 15).toLocaleString("en-US", { month: "long" }),
    amount: 850,
    id: 4,
  },
];
function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHndler = (user) => {
    console.log(user);
    // 👇 old one
    setUsers([...users, user]);
    //clean one 👌
    // setUsers((prevUseres) => {
    //   return [user, ...prevUseres];
    // });
    console.log(users);
  };
  return (
    <div className=" container mt-3 flex flex-col gap-3 justify-center w-[80%] mx-auto">
      <p>addd form to send in the console and reset inputs 🎈 </p>

      <GetFormData onAddUserData={addUserHndler} />
      <p> use : useStade method to change name users </p>
      {users.map((user) => (
        <ExpenseItem key={user.id} props={user} />
      ))}
    </div>
  );
}

export default App;
