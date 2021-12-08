import { useState, useMemo , useRef , useEffect } from 'react';

function Culculator() {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)
    const InputValue = useRef(0)
    const factorial= useMemo( ()=> factorialOf (number), [number]);
    const num = 0

    const handleValue = e =>{
            setNumber(Number(e.target.value));
    }
    
useEffect(() => {
    InputValue.current.focus();
         
    console.log('ref',InputValue.current.value);
}, [])



    const run = () => {
              setInc( i => i +1)
    }

    function factorialOf (n){
       console.log('factorialOf (n) called!')
       return n <= 0 ? 1: n * factorialOf(n - 1)
    }



     const buttonClick = ()=>{
        InputValue.current.focus();
         
        console.log('ref',InputValue.current.value);
    }

    return (
        <div>
            <input value={number} onChange={handleValue} />
               <span>   is {factorial} </span>
            <button onClick={run}> Re-rendr </button>

       <div  className="my-4">
           <input   ref ={InputValue} type="text" /> 
           <span>   is  { InputValue.current.value } </span>
           <button className='mx-4'  onClick = {buttonClick}> Run </button>
       </div>
        </div>
    )
}

export default Culculator
