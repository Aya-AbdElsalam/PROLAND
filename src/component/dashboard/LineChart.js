import { ResponsiveLine } from "@nivo/line";
export default function MyResponsiveLine({ data }) {
  return (
    <ResponsiveLine
      height={400}
      data={data}
      margin={{ top: 10, bottom: 50, left: 35, right: 15 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "paired" }}
      lineWidth={6}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor="black"
      pointLabelYOffset={-12}
      useMesh={true}
    />
  );
}
