import { BarChart, YAxis, XAxis, Bar } from "recharts";

const CustomShapeBarChart = ({ data }) => {
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
         C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
         Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="flex justify-center w-full">
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="bookName" />
        <YAxis />
        <XAxis dataKey="name" />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
};

export default CustomShapeBarChart;
