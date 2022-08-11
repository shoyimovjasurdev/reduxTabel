const count = 0

function counterReducer(state=count, action){
  if(action.type==="increment"){
    let setCounter = state+1
    return state = setCounter;
  };
  if(action.type==="decrement"){
    let setCounter = state-1
    return state = setCounter;
  };

  return state;
}

export {counterReducer};