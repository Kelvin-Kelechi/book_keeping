import React from 'react'
import {TbCircleX} from 'react-icons/tb'
const Reserve = ({setOpenModal, hotelId}) => {
  return (
    <div> 
      <TbCircleX  onClick={setOpenModal(false)} /> kelvin
    </div>
  )
}

export default Reserve