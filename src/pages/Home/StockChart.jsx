import { Button } from "@/components/ui/button";
import React from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = () => {
  const [activeLabel, setActiveLabel] = React.useState("1 Day");

  const timeSeries = [
    {
      keyword: "DIGITAL_CURRENCY_DAILY",
      key: "Time Series(Daily)",
      label: "1 Day",
      value: 1,
    },
    {
      keyword: "DIGITAL_CURRENCY_WEEKLY",
      key: "Weekly Time Series",
      label: "1 Week",
      value: 7,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY",
      key: "Monthly Time Series",
      label: "1 Month",
      value: 30,
    },
  ];

  const series = [
    {
      data: [
        [1640995200000, 47000],
        [1641081600000, 47500],
        [1641168000000, 46800],
        [1641254400000, 47200],
        [1641340800000, 46900],
        [1641427200000, 47800],
        [1641513600000, 48200],
        [1641600000000, 47600],
        [1641686400000, 48500],
        [1641772800000, 49200],
        [1641859200000, 48800],
        [1641945600000, 49500],
        [1642032000000, 50100],
        [1642118400000, 49800],
        [1642204800000, 51200],
        [1642291200000, 52000],
        [1642377600000, 51500],
        [1642464000000, 52800],
        [1642550400000, 53200],
        [1642636800000, 52900],
        [1642723200000, 54100],
        [1642809600000, 55000],
        [1642896000000, 54500],
        [1642982400000, 55800],
        [1643068800000, 56200],
      ],
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: "350",
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    markers: {
      colors: ["#FFFFFF"],
      size: 0,
      strokeColors: "#fff",
      strokeWidth: 1,
      style: "hollow",
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
        gradientToColors: ["#FFFFFF"],
      },
    },
    colors: ["#9CA3AF"],
    grid: {
      show: true,
      borderColor: "#e0e0e0",
      strokeDashArray: 4,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
  const handleActiveLabelChange = (label) => {
    setActiveLabel(label);
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {timeSeries.map((item, index) => (
          <Button
            onClick={() => handleActiveLabelChange(item.label)}
            key={`${item.keyword}-${index}`}
            variant={activeLabel === item.label ? "default" : "outline"}
            size="sm"
            className="font-extrabold"
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height="450"
        />
      </div>
    </div>
  );
};

export default StockChart;
