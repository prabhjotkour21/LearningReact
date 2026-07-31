import { useState ,useCallback ,useEffect ,useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [isNumber, setIsNumber] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumber) str += "0123456789"
    if (isChar) str += "!@#$%^&*(){}:<>?`"
    for (let i = 1; i <=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass +=str.charAt(char)
    }
    setPassword(pass)
  },[length,isNumber,isChar,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => {
    passwordGenerator()
  },[length,isChar,isNumber,passwordGenerator])

  return (
    <>
      <div className='w-full  max-x-md mx-auto shadow-md rounded-lg px-4 my-8 text-oragne-500 bg-gray-800'> 
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-nonw bg-blue-700 text-whihte px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(i) => { setlength(i.target.value) }}
              
            />
            <label>length: {  length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              onChange={()=>{setIsNumber((prev)=>!prev)}}
            />
            <label>Number </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={isChar}
              id="charInput"
              onChange={()=>{setIsChar((prev)=>!prev)}}
            />
            <label>Char </label>
          </div>
        </div>
     </div>
     
    </>
  )
}

export default App
