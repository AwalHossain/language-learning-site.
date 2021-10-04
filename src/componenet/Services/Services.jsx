
import useData from '../../Hooks/usedata';
import Details from '../Details/Details';

const Services = () => {
    // Here I use exter hooks by calling
    const [dataList] = useData(); 
    return (
        <div>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
                {
               dataList.map(data => <Details key={data.id} info={data}></Details>)
                }
                </div>

            </div>
        </div>
    );
};

export default Services;