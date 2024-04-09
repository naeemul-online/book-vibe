


import {BarChart, YAxis, XAxis, Bar } from "recharts";

const CustomShapeBarChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 400,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 300,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 200,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 278,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 189,
      pv: 4800,
      amt: 2181,
    },
  ];
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
        <XAxis dataKey="name"  />
        <YAxis />
        <XAxis dataKey="name" />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
};

export default CustomShapeBarChart;



