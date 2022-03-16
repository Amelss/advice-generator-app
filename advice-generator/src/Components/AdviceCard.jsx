import React, { useEffect, useState, } from 'react'
import axios from 'axios'


export default function AdviceCard() {
    
    
    const [quote, setQuote] = useState({})

    const getQuote = async () => {
        await axios
          .get(`https://api.adviceslip.com/advice`)
          .then((res) => {
              setQuote(res.data.slip); 
          })
          .catch((err) => {
            console.log(err);
          });
    }

    useEffect(() => {
        getQuote()
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        getQuote();
       
    }

  return (
      <div className='py-20'>
          <div className='bg-darkGrayBlue rounded-xl mx-auto w-72 pt-8 xl:w-96 '>
                  <h1 className='text-neonGreen font-manrope text-[11px] text-center uppercase tracking-[.25em] font-bold'>Advice #{quote.id }</h1>
                  <p className='text-center px-3  py-10 text-xl font-bold text-white font-manrope'>"{quote.advice}"</p>
              <img src="./images/pattern-divider-mobile.svg" alt="divider" className='pb-14 px-4 xl:hidden' />
              <img src="./images/pattern-divider-desktop.svg" alt="divider" className='hidden xl:block pb-14 px-5 ' />
              
             
          </div>
           <button onClick={handleClick} className='bg-neonGreen rounded-full w-14 py-4 px-4 -mt-8 flex mx-auto shadow-none xl:shadow-lg hover:shadow-neonGreen ' >
                 <img src="./images/icon-dice.svg" alt="dice" className='w-24' /> 
              </button>
    </div>
  )
}

