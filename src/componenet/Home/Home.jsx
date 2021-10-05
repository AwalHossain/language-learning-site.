import { Link } from 'react-router-dom';
import useData from '../../Hooks/usedata';
import Banner from '../Banner/Banner';
import Choice from '../Choice/Choice';
import Details from '../Details/Details';
import Works from '../Works/Works';
import './Home.css'

// Main home page 
const Home = () => {
   const [dataList] = useData()
    return (
        <div>
            <div>
                 <Banner></Banner>
            </div>
            <div>
                <Choice></Choice>
            </div>
            <div className=" mx-auto px-4 md:px-12 antialiased bg-gradient-to-r from-blue-500 via-green-300 t antialiased bg-gradient-to-r from-blue-200 via-red-300to-green-800">
                <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
                {
               dataList.slice(0, 4).map(data => <Details key={data.id} info={data}></Details>)
                }
                <div className="text-center mb-3">
                   {/* Here is Button to go to services page */}
                <Link to="/services">
                <button className="bg-blue-800 text-white rounded-6 p-2 px-4 text-center text-xl font-medium">See More</button>
                </Link>
                </div>
                </div>

            </div>
            <div>
                <h1 className="text-5xl font-bold text-center my-5">About</h1>
            </div>
            <div>
                {/* Why You choose use section start here & About */}
                <div className="md:flex justify-center my-6">
                    <div className=" mx-4 text-center   py-4 px-8 ">
                        <div className="text-center mx-24">
                            <img className="img" src=" https://www.lingoda.com/wp-content/uploads/2021/01/210107_method-page-illus_final_vv.svg" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl my-2">We are givining you Real-life examples</h2>
                            <p>Our lessons are filled with easy to learn examples from real-life situations, which can be applied from day 1.</p>
                        </div>
                    </div>
                    <div  className=" mx-4 text-center   py-4 px-8">
                        <div className="text-center mx-24">
                                <img className="img" src=" https://www.lingoda.com/wp-content/uploads/2021/02/210224_method-page-illus_final_illustraion_2_EN.svg" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl my-2">Real-life topics</h2>
                            <p>Our topics are action-oriented and based on everyday situations so that you’re always learning relevant vocabulary..</p>
                        </div>
                    </div>
                    <div  className=" mx-4 text-center  py-4 px-8">
                        <div className="text-center mx-24">
                            <img className="img" src=" https://www.lingoda.com/wp-content/uploads/2021/01/210107_method-page-illus_final_illustraion_3.svg" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl my-2 ">Real-life language</h2>
                            <p>Our focus is on teaching you natural sounding language that will help you communicate easily with locals.</p>
                        </div>
                    </div>
                    
                </div>
                   {/* Why You choose use section end here */}
            </div>
            <div>
                {/* Works component being called here */}
                <div>
                <h1 className="text-5xl font-bold text-center my-5">How it work</h1>
            </div>
                <Works></Works>
            </div>

            
        </div>
    );
};

export default Home;