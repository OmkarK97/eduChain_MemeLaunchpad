import React, { useState } from 'react';

const Presale = () => {
  const [inputValue, setInputValue] = useState('');

  const handleReset = () => setInputValue('');
  const handleSetValue = (value) => setInputValue(value);

  const renderCaption = () => {
    if (inputValue === '0') {
      return '0 CAPTION';
    } else if (inputValue === '0.1') {
      return '758593085893.08 CAPTION';
    } else if (inputValue === '0.2') {
      return '910311703071.70 CAPTION';
    } else {
      return '';
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-custom-grid bg-custom-size flex flex-col items-center pt-16">
        <div className='w-1/4 flex justify-center items-center h-screen/3 border border-blue-500 rounded-lg flex-col pb-[40px] shadow-xl shadow-blue-500'>
          <div>
            <h1 className='text-white text-4xl font-semibold shadow-md shadow-blue-500 text-center mt-[30px]'>Presale</h1>
          </div>

          <div className='border border-transparent mt-[40px] flex justify-between gap-x-12'>
            <button className='text-white border border-blue-500 rounded-lg h-[40px] px-[4px] py-[2px] border-2 font-medium'>Switch to caption</button>
            <button className='text-white border border-blue-500 rounded-lg h-[40px] px-[4px] py-[2px] border-2 font-medium'>Set Slippage</button>
          </div>

          <div className='mt-[40px]'>
            <input 
              className='bg-transparent text-white placeholder-white border border-blue-500 rounded-lg h-[40px]' 
              placeholder='Enter percentage' 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className='mt-[20px] flex justify-between w-2/3'>
            <button 
              className='text-white border border-blue-500 rounded-lg h-[40px] px-[4px] py-[2px] border-2 font-medium'
              onClick={handleReset}
            >
              Reset
            </button>
            <button 
              className='text-white border border-blue-500 rounded-lg h-[40px] px-[4px] py-[2px] border-2 font-medium'
              onClick={() => handleSetValue('0.1')}
            >
              0.1 ETH
            </button>
            <button 
              className='text-white border border-blue-500 rounded-lg h-[40px] px-[4px] py-[2px] border-2 font-medium'
              onClick={() => handleSetValue('0.2')}
            >
              0.2 ETH
            </button>
          </div>

          <div className='mt-[10px] text-white text-center'>
            {renderCaption()}
          </div>

          <div className='mt-[20px] w-2/3 px-4 border border-blue-500 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-[5px] text-2xl rounded-lg flex justify-center'>
            <button className='text-white'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presale;
