import React, { useState, useEffect } from 'react'
import UserTable from './UserTable'
import Modal from './Modal'

import imgOne from '../../../assets/img/anten_3.png'
import imgTwo from '../../../assets/img/anten_5.png'
import imgThree from '../../../assets/img/anten-img.png'


const Users = () => {
  const [openModal, setOpenModal] = useState(false)
  const [rowToEdit, setRowToEdit] = useState(null)
  const [rows, setRows] = useState(() => {
    // Load data from localStorage, or use default values if not available
    const savedRows = localStorage.getItem("rows");
    return savedRows ? JSON.parse(savedRows) : [
        {
          name: 'Palwan Ylyasow', 
          antennas: 'Union-24', 
          category:'Yokary', 
          price:'1002$',
        },
        {
          name: 'Aman Permanow', 
          antennas: 'Mono-142FX', 
          category:'Pes', 
          price:'510$',
        },
        {
          name: 'Maksat Hudaygulyyew', 
          antennas: 'Dahua-42X', 
          category:'Ortaca', 
          price:'200$',
        },
    ]
})

  useEffect(() => {
      localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows])

  const handleDeleteRow = (targetId) => {
    setRows(rows.filter((_, index) => index !== targetId))
  }

  const handleSubmit = (newRow) => {
    rowToEdit === null ?
    setRows([...rows, newRow]) : 
    setRows(rows.map((currRow, index) => {
      if(index !== rowToEdit) return currRow

      return newRow
    }))
  }

  const handleEditRow = (index) => {
    setRowToEdit(index)

    setOpenModal(true)
  }

  return (
    <div className="p-5 w-[80%] h-[55%] ">
      <div className="grid grid-cols-1 mt-20">
        <UserTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
        <button 
        onClick={() => setOpenModal(true)}
         className='block m-auto shadow-xl text-white mt-[1rem] border-none bg-blue-600 p-[0.5rem] rounded-lg hover:bg-blue-800'>Girizmek</button>
        {openModal && <Modal closeModal={() => setOpenModal(false)} onSubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]}/>}
      </div>
    </div>
  )
}

export default Users
