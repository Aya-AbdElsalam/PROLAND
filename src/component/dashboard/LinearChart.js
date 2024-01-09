import { ResponsiveLine } from "@nivo/line";
export default function LinearChart({ data }) {
  return (
    <ResponsiveLine
      height={400}
      data={data}
      margin={{ top: 50, bottom: 50, left: 35, right: 15 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      areaBaselineValue={70}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 25,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      colors={{ scheme: "blues" }}
      lineWidth={8}
      enablePoints={false}
      enableArea={true}
      areaOpacity={0.2}
      enableSlices="x"
      useMesh={false}
      legends={[
        {
          anchor: "left",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 5,
          itemDirection: "left-to-right",
          itemWidth: 90,
          itemHeight: 20,
          itemOpacity: 1,
          symbolSize: 20,
          symbolShape: "square",
          symbolBorderColor: "black",
          symbolBorderWidth: "3px",
          itemTextColor: "white",
          itemBackground: "black",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 1, .3)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
