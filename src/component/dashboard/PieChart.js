import { ResponsivePie } from "@nivo/pie";

export default function MyResponsivePie({ data }) {
  return (
    <ResponsivePie
      height={400}
      data={data}
      margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "blues" }}
      borderWidth={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0.2"]],
      }}
      enableArcLinkLabels={false}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "Order Canceled",
          },
          id: "dots",
        },

        {
          match: {
            id: "Order Pending",
          },
          id: "lines",
        },
        {
          match: {
            id: "Order returned",
          },
          id: "dots",
        },
      ]}
      motionConfig="stiff"
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: false,
          translateX: 37,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 120,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolBorderWidth: "10px",
          itemTextColor: "white",
          symbolShape: "square",
          itemBackground: "black",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
                itemBackground: "white",
              },
            },
          ],
        },
      ]}
    />
  );
}
