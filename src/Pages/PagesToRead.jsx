import { useLoaderData } from "react-router-dom";
import CustomShapeBarChart from "../Components/CustomShapeBarChart/CustomShapeBarChart";

const PagesToRead = () => {
  const data = useLoaderData()
  return (
    <div>
     <CustomShapeBarChart key={data.id} data={data}></CustomShapeBarChart>
    </div>
  );
};

export default PagesToRead;
