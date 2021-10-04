import React from 'react';

const SignUp = () => {
    return (
        <div>
            <div className=" antialiased bg-grey-lightest">

  {/* <!-- Content --> */}
  <div className="w-full bg-grey-lightest" style={{paddingTop: "4rem"}}>
    <div className="container mx-auto py-8">
      <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
            <div className="py-4 px-8">
                <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="first_name">First Name</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your first name" />
                    </div>
                    <div className="w-1/2 ml-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Your last name" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address" />
                </div>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password" />
                    <p className="text-grey text-xs mt-1">At least 6 characters</p>
                </div>
                <div className="flex items-center justify-between mt-8">
                    <button className="bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" type="submit">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
        <p className="text-center my-4">
            <a href="/" className="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</a>
        </p>
    </div>
  </div>
  {/* <!-- Footer --> */}
  <footer className="w-full bg-grey-lighter py-8">
    <div className="container mx-auto text-center px-8">
        <p className="text-grey-dark mb-2 text-sm">This is a product of <span className="font-bold">Your Company</span></p>
    </div>
  </footer>
</div>
        </div>
    );
};

export default SignUp;