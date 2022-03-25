import React from "react";

const Counter = () => {
  const [initial, setInitial] = React.useState("");
  let inp = +initial;
  const [counter, setCounter] = React.useState(inp);
  const handlechange = (val) => {
    setCounter((prev) => prev + val);
  };
  const handlechangeinput = (e) => {
    setInitial(e.target.value);
    setCounter(+e.target.value);
  };

  const handledouble = () => {
    setCounter((prev) => prev * 2);
  };
  return (
    <>
      <input type="number" value={initial} onChange={handlechangeinput} />

      <h1>Count:{counter}</h1>
      <button className="button" onClick={() => handlechange(-1)}>
        -
      </button>
      <button className="button" onClick={() => handlechange(1)}>
        +
      </button>
      <button className="button" onClick={handledouble}>
        double
      </button>
    </>
  );
};

export default Counter;
