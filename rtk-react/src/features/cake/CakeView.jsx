import {useSelector, useDispatch} from 'react-redux'
import {ordered, restocked} from '../cake/cakeSlice'
const CakeView = () => {
  const numCake = useSelector((state)=>state.cake.numCake)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Num Cakes - {numCake}</h2>
        <button onClick={()=>dispatch(ordered())}>order cake</button>
        <button onClick={()=>dispatch(restocked(2))}>restock cake</button>
    </div>
  )
}

export default CakeView