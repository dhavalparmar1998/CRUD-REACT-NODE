import React from 'react'
import { useSelector } from 'react-redux'

export default function Right() {
    let name = useSelector(state=>state.crud.value);

    
  return (
    <div>Right ,{name}</div>
  )
}
