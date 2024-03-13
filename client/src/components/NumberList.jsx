import { useState } from "react";

Array.prototype.removeLast = function () {
  if (this.length > 0) {
    this.pop();
  }
};

function NumberList() {
  const [numList, setnumList] = useState([]);
  const addNumber = () => {
    setnumList([
      ...numList,
      { id: numList.length, value: Math.floor(Math.random() * 100) },
    ]);
  };
  const removeLastNumber = () => {
    const newList = [...numList];
    newList.removeLast();
    setnumList(newList);
  };
  const clear = () => {
    setnumList([]);
  };

  return (
    <div className="w-2/5 flex flex-col items-center border-2 rounded-md p-6">
      <div className="flex flex-row w-full justify-evenly py-5">
        <button
          className="border-0 rounded-md px-3 py-2 bg-indigo-600"
          onClick={addNumber}
        >
          Add Number
        </button>
        <button
          className="border-0 rounded-md px-3 py-2 bg-indigo-600"
          onClick={removeLastNumber}
        >
          Remove Last
        </button>
        <button
          className="border-0 rounded-md px-3 py-2 bg-indigo-600"
          onClick={clear}
        >
          Clear
        </button>
      </div>
      <div className="flex flex-row flex-wrap">
        Current List:{" "}
        {numList.map((num) => (
          <span className="px-1">{num.value}</span>
        ))}
      </div>
    </div>
  );
}

export default NumberList;
