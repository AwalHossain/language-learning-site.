import React from 'react';

const Works = () => {
    return (
        <div>
        {/* How it work card  */}
            <div className="md:flex m-3 justify-between mt-24 ml-16 ">
                <div className="md:w-1/2 mr-6">
                    <img src="https://www.lingoda.com/wp-content/webp-express/webp-images/uploads/2021/01/630x410_Method-Hero_2x.jpg.webp" alt="" />
                </div>
                <div className='my-4'>
                    <h1 className="text-7xl font-bold">The most efficient way to fluency</h1>
                    <h2 className="text-3xl font-medium my-3">Discover why the Lingoda Method is so special to language learning.</h2>
                    <button className="bg-blue-900 px-16 py-2 text-2xl text-white my-3">Start free 7-day trial</button>
                </div>
            </div >
            {/* Honest Partt */}
            <div className="text-center w-1/2 mx-auto p-4 mt-32 mb-10">
                <h1 className="text-4xl text-black font-bold">Let's be honest</h1>
                <p className="text-xl text black text-center  ">Learning a language is hard work, no matter what any of those apps might tell you. Making real progress is like training for a marathon. You need to set goals, build a daily habit and stay focused. Thanks to our interactive methods, based on 20 years of research by Cambridge and Oxford experts, with Lingoda you’re set up for success</p>
            </div>
        </div>
    );
};

export default Works;