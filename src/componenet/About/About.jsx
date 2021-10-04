import React from 'react';
import './About.css'
const About = () => {
    return (
        // About Us 
        
            <div>
                <div className="md:flex justify-center my-6">
                <div className=" mx-4  py-4 px-8 ">
                    <div>
                        <img className="img" src=" https://www.lingoda.com/wp-content/uploads/2021/01/210107_method-page-illus_final_vv.svg" alt="" />
                    </div>
                    <div>
                        <h2 className="text-2xl my-2">We are givining you Real-life examples</h2>
                        <p>Our lessons are filled with easy to learn examples from real-life situations, which can be applied from day 1.</p>
                    </div>
                    </div>
                    <div  className=" mx-4  py-4 px-8">
                    <div>
                        <img className="img" src=" https://www.lingoda.com/wp-content/uploads/2021/02/210224_method-page-illus_final_illustraion_2_EN.svg" alt="" />
                    </div>
                    <div>
                        <h2 className="text-2xl my-2">Real-life topics</h2>
                        <p>Our topics are action-oriented and based on everyday situations so that you’re always learning relevant vocabulary..</p>
                    </div>
                    </div>
                    <div  className=" mx-4  py-4 px-8">
                    <div>
                        <img className="img" src=" https://www.lingoda.com/wp-content/uploads/2021/01/210107_method-page-illus_final_illustraion_3.svg" alt="" />
                    </div>
                    <div>
                        <h2 className="text-2xl my-2">Real-life language</h2>
                        <p>Our focus is on teaching you natural sounding language that will help you communicate easily with locals.</p>
                    </div>
                    </div>
                    
                </div>
               
           {/* Testimonial  Card start point */} 
               <div className="md:flex mx-4">
            <div className="max-w-md mx-4  py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className="flex justify-center md:justify-end -mt-16">
                    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="emage" />
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">Best for Beginers</h2>
                    <p className="mt-2 text-gray-600">Learning a new language pushes your brain to get familiar with new grammar and vocabulary rules. It allows you to train your memory to remember new words, make connections between them, and use them in contextual situations.</p>
                </div>
                <div className="flex justify-end mt-4">
                    <a href="/" className="text-xl font-medium text-indigo-500">John Doe</a>
                </div>
            </div>
             {/* Testimonial  Card end poin */}
            <div className="max-w-md mc-4 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className="flex justify-center md:justify-end -mt-16">
                    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="emage" />
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">Business Communication</h2>
                    <p className="mt-2 text-gray-600">Time management and multitasking are two skills that will always help you. Multilingual people have the ability to switch between languages. Their ability to think in different languages and be able to communicate in more than one language helps with multitasking</p>
                </div>
                <div className="flex justify-end mt-4">
                    <a href="/" className="text-xl font-medium text-indigo-500">Anthony mark</a>
                </div>
            </div>
            {/* Testimonial  Card end poin */}

            <div className="max-w-md mx-4 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className="flex justify-center md:justify-end -mt-16">
                    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="emage" />
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">Travellers Guidence</h2>
                    <p className="mt-2 text-gray-600">Fully immersing yourself in a language learning environment means not only learning the basics of that language. It means learning how to communicate in another language with your peers or participating in extracurricular activities in that specific language</p>
                </div>
                <div className="flex justify-end mt-4">
                    <a href="/" className="text-xl font-medium text-indigo-500">Ross Gallahager</a>
                </div>
            </div>
        </div>
            </div>

    

    );
};

export default About;