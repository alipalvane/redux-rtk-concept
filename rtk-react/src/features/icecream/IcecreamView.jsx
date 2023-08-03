import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../icecream/icecreamSlice";

const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numIcecream = useSelector((state) => state.icecream.numIcecream);
  const dispatch = useDispatch();
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
