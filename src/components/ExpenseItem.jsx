import { useState } from "react";

function ExpenseItem({ props }) {
  const [title, setTitle] = useState(props.title);
  // console.log("now you see me ");
  function clickEvenHandler() {
    setTitle("Updated??");
  }
  return (
    <div className="flex gap-2 justify-between  items-center bg-gray-400 rounded-r-lg px-3 shadow-lg ">
      <div className=" w-[25%]  bg-blue-800 flex flex-col text-[10px] text-yellow-500 p-1 m-1 rounded-lg ">
        <p className="italic ">mounth:</p>
        <p className="italic ">iso</p>
        <p className="italic ">day</p>
      </div>
      <h1 className="text-xl italic">{title}</h1>
      <p className="text-sm text-gray-700">{props.date}</p>
      <span className=" bg-blue-600 text-sm border-2 border-gray-600 rounded-lg px-4 py-2">
        $<span>{props.amount}</span>
      </span>
      <button
        onClick={clickEvenHandler}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        change name
      </button>
    </div>
  );
}
export default ExpenseItem;
