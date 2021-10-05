import React from 'react';
import './Choice.css'
const Choice = () => {
    return (
        // This is the part where i describe why you learn with us
        <div>
            <div className="mb-3 mt-16">
                <h2 className="text-4xl text-center  font-bold">
                    Why Learn a language online with Lingua?
                </h2>
                <h3 className="text-lg text-center ">
                All roads lead to fluency with Lingoda. We’ll take you from learning a language to living a language.
                </h3>
            </div>
             {/* There are four reason to describe why are best */}
            <div>
            <div className="">
                    <div className ="">
                        <div>
                        <div className="md:flex  md:max-w-6xl max-w-sm mx-auto ">
                        <div className="md:w-full flex justify-center shadow-2xl my-4 rounded-lg  mx-4">
                            {/* Part-1 */}
                            <div className="md:w-full mx-2 my-2 w-full bg-white ">
                                <div className=" ">
                                    <img className="svg-img" src="https://www.lingoda.com/wp-content/uploads/2020/10/201006_illu_homepage-01.svg" alt="" />
                                </div>
                                <div className="pb-2 text-center">
                                    <h3 className="text-xl pb-2">Enjoy small group classes</h3>
                                    <p>
                                    Our teachers encourage you to talk and provide in-class personalised feedback so that you’re constantly improving.
                                    </p>
                                </div>                 
                            </div>
                        </div>
                        {/* Part-2 */}
                        <div className="md:w-full flex justify-center shadow-2xl my-4 rounded-lg  mx-4">
                            <div className="md:w-full mx-2 my-2 w-full bg-white ">
                                <div className=" ">
                                    <img className="svg-img" src="https://www.lingoda.com/wp-content/uploads/2020/10/201006_illu_homepage-02.svg" alt="" />
                                </div>
                                <div className="pb-2 text-center">
                                    <h3 className="text-xl pb-2">Customise your schedule</h3>
                                    <p>
                                    24/7 online language courses: learn day or night, weekday or weekend..
                                    </p>
                                </div>
                                    
                            </div>
                        </div>
                        {/* Part-3 */}
                        <div className="md:w-full flex justify-center shadow-2xl my-4 rounded-lg mx-4">
                            <div className="md:w-full mx-2 my-2 w-full bg-white ">
                                <div className=" ">
                                    <img className="svg-img" src="https://www.lingoda.com/wp-content/uploads/2020/10/201008_illu_homepage-03.svg" alt="" />
                                </div>
                                <div className="pb-2 text-center">
                                    <h3 className="text-xl pb-2">Learn from the best</h3>
                                    <p>
                                    Qualified, native-speaking teachers leading your class.
                                    </p>
                                </div>
                                    
                            </div>
                        </div>
                        {/* Part-4 */}
                        <div className="md:w-full flex justify-center shadow-2xl my-4 rounded-lg mx-4">
                            <div className="md:w-full mx-2 my-2 w-full bg-white ">
                                <div className=" ">
                                    <img className="svg-img" src="https://www.lingoda.com/wp-content/uploads/2020/10/201006_illu_homepage-04.svg" alt="" />
                                </div>
                                <div className="pb-2 text-center">
                                    <h3 className="text-xl pb-2">Beginner to advanced</h3>
                                    <p>
                                    CEFR aligned language courses catering for all learning levels
                                    </p>
                                </div>   
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Choice;