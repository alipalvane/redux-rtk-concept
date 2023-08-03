import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  
  //! for use Typescript in our project we use "useAppSelector, useAppDispatch" instead "useSelector, useDisspatch"
  //! if we dont use typescript we write code normally like commented lines
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>Num CUser</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error : {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
