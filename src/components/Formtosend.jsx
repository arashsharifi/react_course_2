import { useState } from "react";
function Formtosend(props) {
  const [enteredTitle, setEntredTitle] = useState("");
  const [enterAmount, setEntredAmount] = useState("");
  const [enterDate, setEntredDate] = useState("");

  //👇🌟اگه می خواهیم به صورت مولتی بیایم از یک یوز استیت استفاده کنیم برای آبدیت کردن
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });

  //for input title
  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEntredTitle(event.target.value);
    //👇 اینجا ی شلو کپی می زنیم رو رفرنس آبجکتمون که عوض کنیم وهمچنینی ولیو تار گت را به تنظیم کننده می دهیم
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    //new one 👇
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  //  for input amount
  const amountChangeHandeler = (event) => {
    setEntredAmount(event.target.value);
    // setUserInput({ ...userInput, enterAmount: event.target.value });
    //new one👇
    // setUserInput((prevState) => {
    //   return { ...prevState, enterAmount: event.target.value };
    // });
  };
  //for input date
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
    // setUserInput({ ...userInput, enterDate: event.target.value });
    //new one👇
    // setUserInput((prevState) => {
    //   return { ...prevState, enterDate: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const getFromData = {
      title: enteredTitle,
      amount: enterAmount,
      date: new Date(enterDate).toLocaleString("en-US", { month: "long" }),
      // date: enterDate,
    };
    //زمانی که تو اتریبیوتا اومدین ولیو برابر با دیستراکچر یوز استد قرار دادیم میاییم چیکار می کنیم مججد آن را به
    //استریگ خالی در میاریم تنظیم کننده هارا تا همه اینپوت ها خالی شه
    setEntredTitle("");
    setEntredAmount("");
    setEntredDate("");
    // 👇 میره برای رفرنس لیت فرم دیتا
    props.onSaveFormData(getFromData);
    console.log(getFromData);
  };
  return (
    <div className="bg-purple-500 rounded-xl p-3">
      <form onSubmit={submitHandler}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="#"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              title
            </label>
            <input
              onChange={titleChangeHandler}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="title"
              value={enteredTitle}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Amoute
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Amount"
              onChange={amountChangeHandeler}
              value={enterAmount}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date
            </label>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="date"
              onChange={dateChangeHandler}
              value={enterDate}
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          min="2019-01-01"
          max="2023-12-31"
        >
          add
        </button>
      </form>
    </div>
  );
}
export default Formtosend;
