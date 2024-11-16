import { useState } from 'react'
import { CgClose } from 'react-icons/cg'

const Modal = ({ onSubmit, closeModal, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
    name: '',
    price: '',
    anten: '',
    category: ''
  })

  const handleChange = (e) => {
    setFormState({
        ...formState,
        [e.target.name]: e.target.value 
    })
  }

  const validateForm = () => {
    if(formState.name && formState.price) {
        return true
    } else
    return false
  }

  const handleSumbit = (e) => {
    e.preventDefault()

    if(!validateForm()) return

    onSubmit(formState)
    
    closeModal()
  } 

  return (
    <div
        className='fixed duration-300 z-50 left-0 top-0 w-full h-full flex items-center justify-center bg-black/65'>
        <div className='rounded-xl p-8 bg-white w-[25em] dark:bg-gray-800 dark:text-white'>
          <span
            onClick={() => closeModal()} 
            className='absolute top-36 cursor-pointer text-xl right-[38%]'>
            <CgClose />
          </span>
            <form>
                <div className='flex flex-col mb-[1rem] font-mono'>
                    <label htmlFor='users'>Ulanyjynyn ady: </label>
                    <input 
                    name='name' 
                    className='outline-none border-2 border-blue-500 rounded-lg p-1.5 text-black'
                    onChange={handleChange} 
                    value={formState.name}/>
                </div>
                <div className='flex flex-col mb-[1rem]'>
                    <label htmlFor='antennas'>Anten: </label>
                    <select name='antennas' 
                    onChange={handleChange} 
                    className='outline-none border-2 border-blue-500 rounded-lg p-1.5 text-black'>
                        <option value =""></option>
                        <option value='Union-24'>Union-24</option>
                        <option value='Mono-142FX'>Mono-142FX</option>
                        <option value='Dahua-42X'>Dahua-42X</option>
                        <option value='Dahua-69XP'>Dahua-69XP</option>
                        <option value='Alhua-12FX'>Alhua-12FX</option>
                        <option value='Tooway-PX24'>Tooway-PX24</option>
                    </select>
                </div>
                <div className='flex flex-col mb-[1rem]'>
                    <label htmlFor='category'>Kategoriya: </label>
                    <select name='category' 
                     value={formState.category}
                     onChange={handleChange}
                     className='outline-none border-2 border-blue-500 rounded-lg p-1.5 text-black'>
                        <option value =""></option>
                        <option value="Yokary">Yokary</option>
                        <option value="Ortaca">Ortaça</option>
                        <option value="Pes">Pes</option>
                    </select>
                </div>
                <div className='flex flex-col mb-[1rem]'>
                    <label htmlFor='price'>Bahasy: </label>
                    <input name='price' 
                         onChange={handleChange}
                         value={formState.price} 
                         className='outline-none border-2 border-blue-500 rounded-lg p-1.5 text-black'/>
                </div> 
                <button 
                    type='submit'
                    onClick={handleSumbit}
                    className='block m-auto shadow-xl mt-[1rem] text-white border-none bg-blue-600 p-[0.5rem] rounded-lg hover:bg-blue-800'>
                        Tassykla
                </button>
            </form>
        </div>
    </div>
  )
}

export default Modal
