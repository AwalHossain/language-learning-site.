
import { Link } from 'react-router-dom';
import useData from '../../Hooks/usedata';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';


// Main home page 
const Home = () => {
   const [dataList] = useData()
    // console.log(dataList.slice(0, 3))
    return (
        <div>
            <Banner></Banner>
            <div className="container  mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
                {
               dataList.slice(0, 4).map(data => <Details key={data.id} info={data}></Details>)
                }
                </div>

            </div>
            <div className="text-center mb-3">
                <Link to="/services">
                <button className="bg-blue-800 text-white rounded-2 p-2 text-center text-xl font-medium">See More</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;