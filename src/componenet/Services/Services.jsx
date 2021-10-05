
import useData from '../../Hooks/usedata';
import Choice from '../Choice/Choice';
import Details from '../Details/Details';

const Services = () => {
    // Here I use exter hooks by calling
    const [dataList] = useData(); 
    return (
        <div>
            <div>
                <Choice></Choice>
            </div>
            <div className="bg-gray-100">
            <div className="w-4/5 md:mx-auto  my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center ">
                {
               dataList.map(data => <Details key={data.id} info={data}></Details>)
                }
                </div>

            </div>
        </div>
        </div>
    );
};

export default Services;