import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './dataSlice'
import LoginSlice from './userSlice'

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    backendData: dataSlice,
  },
})


// exemple for using redux from with in the component :
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice' //note the path

// export function ____ () {
//   const count = useSelector((state) => state.counter.value) // will be replaced
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }