import {useSelector,useDispatch} from "react-redux"

function Count() {
  const state = useSelector(state=>state.counter)
  const dispach = useDispatch()

  function addFun(){
    dispach({type:"increment"})
  }
  function removeFan(){
    dispach({type:"decrement"})
  }
  return (
    <div className="App mt-5 ms-5 d-flex">
      <button onClick={()=>removeFan()} className='btn btn-danger'>-</button>
      <h4 className='mx-2'>Qiymat: {state}</h4>
      <button onClick={()=>addFun()} className='btn btn-primary'>+</button>
    </div>
  );
}

export default Count;
