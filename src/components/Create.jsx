import React, { useEffect, useState } from 'react';
import { waitForTransactionReceipt, writeContract } from '@wagmi/core';
import { config } from './utils/data';
import abi from './contracts/memeFactory.json';
import { useAccount } from 'wagmi';
import { parseEther } from 'viem';
import memeDataArray from './data';

const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    Symbol: '',
    description: '',
    totalSupply: '',
    percent: '',
    image: null,
    imageURL: '',
  });

  const { address } = useAccount();
  const [tokenAddress, setTokenAddress] = useState('');

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({
            ...formData,
            image: file,
            imageURL: reader.result,
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      const { id, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };


  const handleSubmit = async () => {


    const data = await writeContract(config, {
      abi,
      address: '0x672b8065cA81781737CFF3972C9D7cB622fb6AC2',
      functionName: 'createMemecoin',
      args: [
        formData?.name,
        formData?.Symbol,
        formData?.description,
        address,  
        formData?.totalSupply,
        parseEther(formData?.percent),
      ],
    });

    const transactionReceipt = await waitForTransactionReceipt(config, {
      confirmations: 2,
      hash: data,
    })

    const newTokenAddress = transactionReceipt?.logs[0].address;
    setTokenAddress(newTokenAddress);

    const newMemeData = {
      id: data,
      imageUrl: formData.imageURL,
      creator: address,
      address: newTokenAddress,
      tokenName: formData.name,
      description: formData.description,
    };

    console.log(newMemeData);

    memeDataArray.push(newMemeData);

    console.log('After', memeDataArray);

    setFormData({
      name: '',
      Symbol: '',
      description: '',
      totalSupply: '',
      percent: '',
      image: null,
      imageURL: '',
    });

  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950">
      <div className="absolute flex flex-col bottom-0 left-0 right-0 top-0 bg-custom-grid bg-custom-size flex justify-center items-center">
      <div >
      <h1 className='text-lg font-medium text-white mt-[2px]'>Complete steps to launch your token</h1>
      </div>  
      <form className="bg-slate-900 rounded px-8 pt-6 pb-8 mb-4 text-white shadow-xl shadow-blue-500 mt-[20px]">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border-blue-500 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <label className="block text-sm font-bold mb-2 mt-2" htmlFor="Symbol">
              Symbol
            </label>
            <input
              className="shadow appearance-none border-blue-500 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="Symbol"
              type="text"
              placeholder="Symbol"
              value={formData.Symbol}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border-blue-500 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="totalSupply">
              Total Supply
            </label>
            <input
              className="shadow appearance-none border-blue-500 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="totalSupply"
              type="number"
              placeholder="Total Supply"
              value={formData.totalSupply}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="percent">
              Percent
            </label>
            <input
              className="shadow appearance-none border-blue-500 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="percent"
              type="text"
              placeholder="Percent"
              value={formData.percent}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="image">
              Image Upload
            </label>
            <input
              className="shadow appearance-none border-blue-500 bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border border-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
