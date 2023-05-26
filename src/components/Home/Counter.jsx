import React from 'react';

const Counter = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-2xl w-full px-10 py-5'>
            <div className="grid grid-cols-4 md:divide-x md:divide-y-0 divide-y">
                <div className="md:col-span-1 col-span-4 text-center">
                    <h2 className="text-4xl pt-2 font-poppins font-extrabold text-white">32 +</h2>
                    <h2 className="text-xl font-poppins lowercase font-bold text-white">Projects</h2>
                </div>
                <div className="md:col-span-1 col-span-4 text-center">
                    <h2 className="text-4xl pt-2 font-poppins font-extrabold text-white">32 +</h2>
                    <h2 className="text-xl font-poppins lowercase font-bold text-white">Commint</h2>
                </div>
                <div className="md:col-span-1 col-span-4 text-center">
                    <h2 className="text-4xl pt-2 font-poppins font-extrabold text-white">32 +</h2>
                    <h2 className="text-xl font-poppins lowercase font-bold text-white">coffee</h2>
                </div>
                <div className="md:col-span-1 col-span-4 text-center flex items-center justify-center">
                    <div className='md:pt-0 pt-2'>
                        {/* <h2 className="text-xl pt-2 font-poppins font-extrabold text-white">🍦</h2> */}
                        <a href="https://www.buymeacoffee.com/mahbubdev1" target="_blank" rel="noopener noreferrer">
                        <button className="text-lg font-poppins font-semibold bg-white px-3 py-2 rounded-full">Buy me a coffee 🍦</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;