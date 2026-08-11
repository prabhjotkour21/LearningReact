import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Counter: {count}
        </h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white text-2xl font-bold px-6 py-2 rounded-lg"
          >
            +
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white text-2xl font-bold px-6 py-2 rounded-lg"
          >
            -
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
