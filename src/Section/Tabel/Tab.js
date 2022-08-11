import {useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import "./Tabel.css"

function Tab() {
  const [value1,setValue1] = useState("");
  const [value2,setValue2] = useState("");
  const [value3,setValue3] = useState("");
  const [value4,setValue4] = useState("");
  const [massiv,setMassiv] = useState([]);
  const [idx,setIdx] = useState(-1);
  const dispach = useDispatch();
  const state = useSelector(state=>state.tabel);

  useEffect(()=>{
    setMassiv(state)
  },[state]);
 
  function addFun(){
    if(value1.length>0){
      dispach({
        type:"add", 
        payload:{
          name: value1,
          surname: value2,
          age: value3,
          job: value4,
          index:idx
        }
      })
      setIdx(-1)
    }
      setValue1("")
      setValue2("")
      setValue3("")
      setValue4("")
  };

  function editFun(element,index){
    setValue1(element.name)
    setValue2(element.surname)
    setValue3(element.age)
    setValue4(element.job)
    setIdx(index)
  };
    
  function deleteFun(index){
    dispach({
      type:"delete",
      payload:index})
      setValue1("")
      setValue2("")
      setValue3("")
      setValue4("")
  };

  return (
    <div className="tabelComponent container">
      <h3 className="topText">Redux Tabel</h3>

      <div className="inputCom">
        <div className="tabelInputs">
          <input className="inputs form-control" placeholder="name"  value={value1} type="text" onChange={(e)=>{
            setValue1(e.target.value)
          }} />
          <input className="inputs form-control" placeholder="surname" value={value2} type="text" onChange={(e)=>{
            setValue2(e.target.value)
          }}/>
          <input className="inputs form-control" placeholder="age" value={value3} type="number" onChange={(e)=>{
            setValue3(e.target.value)
          }}/>
          <input className="inputs form-control" placeholder="job" value={value4} type="text" onChange={(e)=>{
            setValue4(e.target.value)
          }}/>
        </div>
        <button  className="btn btn-primary addButton" onClick={()=>addFun()}><b>ADD</b></button>
      </div>

      <div className="tabelCom text-sm-wrap">
        <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
          {
            (massiv.length>0) ? (
              massiv.map((e,index)=>{
                return(
                  <tbody key={index}>
                    <tr >
                      <th className="renderTabelNum text-break fs-6" onClick={()=>editFun(e,index)} scope="row">{index+1}</th>
                      <td className="renderTabel text-break" onClick={()=>editFun(e,index)}>{e.name}</td>
                      <td className="renderTabel text-break" onClick={()=>editFun(e,index)}>{e.surname}</td>
                      <td className="renderTabel text-break" onClick={()=>editFun(e,index)}>{e.age}</td>
                      <td className="renderTabel text-break" onClick={()=>editFun(e,index)}>{e.job}</td>
                      <td className="renderTabel"><button onClick={()=>deleteFun(index)} className="btn btn-danger"><b>Delete</b></button></td>
                    </tr>
                  </tbody>
                )
              })
            ) : ("")
          }
        </table>
      </div>
    </div>
  );
}

export default Tab;





