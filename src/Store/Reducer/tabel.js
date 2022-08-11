const initialTable = []

function tabelReducer(state=initialTable,action){
  
  if(action.type==="add"){
    let setTabel = [...state]
    if(action.payload.index===-1){
      setTabel.push(action.payload)
    }else{
      setTabel.splice(action.payload.index,1,action.payload)
    }
    return state=setTabel
  };

  if(action.type==="delete"){
    let setTabel = [...state]
    let son = action.payload
    setTabel.splice(son,1)
    return state=setTabel
  };
  
  return state
}

export {tabelReducer};