// import {useSelector, useDispatch} from 'react-redux'
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {ordered, restocked} from './cakeSlice'
const CakeView = () => {

  //! for use Typescript in our project we use "useAppSelector, useAppDispatch" instead "useSelector, useDisspatch"
  //! if we dont use typescript we write code normally like commented lines

  // const numCake = useSelector((state)=>state.cake.numCake)
  const numCake = useAppSelector((state)=>state.cake.numCake)

  // const dispatch = useDispatch()
  const dispatch = useAppDispatch()

  return (
    <div>
        <h2>Num Cakes - {numCake}</h2>
        <button onClick={()=>dispatch(ordered())}>order cake</button>
        <button onClick={()=>dispatch(restocked(2))}>restock cake</button>
    </div>
  )
}

export default CakeView