import {configureStore} from "@reduxjs/toolkit"
import {counterReducer} from "./Reducer/count"
import {tabelReducer} from "./Reducer/tabel"

const store = configureStore({
  reducer:{
    counter:counterReducer,
    tabel:tabelReducer
  }
})

export default store