import { useCallback, useState, useEffect, useRef} from 'react'

function App() {

  //dependencies useState hook
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //use callback hook(Password generator)
  const passwordGenerator = useCallback( ()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str += "0123456789"; 
    }

    if(charAllowed){
      str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }

    for (let i=1; i<=length; i++){
      let char = (Math.random() * str.length + 1);
      pass += str.charAt(char);

    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword] );

  const copyPasswordToClipboard = useCallback( ()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  
  
  //useEffect implementation
  useEffect(() =>{
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator]);

  //useRef hook
  const passwordRef = useRef(null);
  

  return (
    <>
      
      
      <div className='border-solid border-2 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 p-7 text-black-600 bg-gray-500'>
        
        <h1 className='text-center text-4xl text-white pb-5'>Password Generator</h1>
        <div className='flex'>
          <input 
            type="text" 
            value={password} 
            className='outline-none w-full py-1 mt-4 px-3 rounded-xl' 
            placeholder='Password'
            readOnly 
            ref={passwordRef}
          />
          <button 
            className='bg-blue-300 mt-4 px-3 ml-2 rounded-xl align-center'
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        
        <div className='flex text-sm gap-x-2 mt-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range" 
                min={8} 
                max={100} 
                value={length} 
                className='cursor-pointer' 
                onChange={(e)=>{setLength(e.target.value)}}
              />
              <label> Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
                  type="checkbox" 
                  defaultChecked={numberAllowed}
                  id="numberInput" 
                  onChange={() => {
                    setNumber((prev) => !prev);
                  }}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            
            <div className='flex items-center gap-x-1'>
              <input 
                  type="checkbox" 
                  defaultChecked={charAllowed}
                  id="charInput" 
                  onChange={() => {
                    setCharacter((prev) => !prev);
                  }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
        </div>

      </div>
    </>
  )
}

export default App
