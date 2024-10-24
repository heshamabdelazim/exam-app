"use client"
import React from 'react'
import { Provider } from 'react-redux'
import {myStore} from "./store"

function StoreRubber({children}:{children:React.ReactNode}) {
  return (
    <Provider store={myStore}>
      {children}
    </Provider>
  )
}

export default StoreRubber
