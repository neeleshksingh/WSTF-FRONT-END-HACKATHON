import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";

const BarGraph = () => {
  const data = Array.from({ length: 70 }, (_, i) => ({
    uv: Math.floor(Math.random() * 5000)
  }));

  return (
    <ResponsiveContainer height={89}>
      <BarChart width={730} height={250} data={data}>
        <XAxis dataKey="index" tick={false} />
        <Bar dataKey="uv">
          {data.map((entry, index) => (
            <Bar
              key={index}
              dataKey="uv"
              fill={index >= 19 && index <= 30 ? "#FF708B" : "#DBDFF1"}
              {...entry}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
