import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { c } = useSelector(state => state.custom);

  const addBtn = () => {
    dispatch({
      type: "INCREMENT"
    })
  }

  const RemBtn = () => {
    dispatch({
      type: "DECREMENT"
    })
  }
  return (
    <div>
      <h1 className='text-4xl ml-36 mt-5'>{c}</h1>
      <br />
      <div className='flex'>
        <button type="button" className="m-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg" onClick={RemBtn}>Decrement</button>
        <button type="button" className="m-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg" onClick={addBtn}>Increment</button>
      </div>
    </div>
  )
}

export default App