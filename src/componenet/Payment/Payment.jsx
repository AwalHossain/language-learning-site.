import React from 'react';

const Payment = () => {
  return (
    <div>
      <div className="bg-gray-300">
    <div className="py-12">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
            <div className="md:flex ">
                <div className="w-full p-4 px-5 py-5">
                    <div className="flex flex-row">
                        <h2 className="text-3xl font-semibold">Easy</h2>
                        <h2 className="text-3xl text-green-400 font-semibold">Peasy</h2>
                    </div>
                    <div className="flex flex-row pt-2 text-xs pt-6 pb-5"> <span className="font-bold">Information</span> <small className="text-gray-400 ml-1">{'>'}</small> <span className="text-gray-400 ml-1">Shopping</span> <small className="text-gray-400 ml-1">{'>'}</small> <span className="text-gray-400 ml-1">Payment</span> </div> <span>Customer Information</span>
                    <div className="relative pb-5"> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="E-mail" /> <span className="absolute text-blue-500 right-2 top-4 font-medium text-sm">Log out</span> </div> <span>Shipping Address</span>
                    <div className="grid md:grid-cols-2 md:gap-2"> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="First name*" /> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Last name*" /> </div> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Company (optional)" /> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Address*" /> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Apartment, suite, etc. (optional)" />
                    <div className="grid md:grid-cols-3 md:gap-2"> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Zipcode*" /> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="City*" /> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="State*" /> </div> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Country*" /> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Phone Number*" />
                    <div className="flex justify-between items-center pt-2"> <button type="button" className="h-12 w-24 text-blue-500 text-xs font-medium">Return to cart</button> <button type="button" className="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white">Continue to Shipping</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default Payment;