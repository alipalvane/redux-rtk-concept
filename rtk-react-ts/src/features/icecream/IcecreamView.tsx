import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const [value, setValue] = useState(1);

  //! for use Typescript in our project we use "useAppSelector, useAppDispatch" instead "useSelector, useDisspatch"
  //! if we dont use typescript we write code normally like commented lines
  // const numIcecream = useSelector((state) => state.icecream.numIcecream);
  // const dispatch = useDispatch();
  const numIcecream = useAppSelector((state) => state.icecream.numIcecream);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Num CIcecream - {numIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>order cake</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>restock cake</button>
    </div>
  );
};

export default IcecreamView;
