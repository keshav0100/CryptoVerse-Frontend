import { Button } from "@/components/ui/button";
import { fetchMarketChart } from "@/State/Coin/Action";
import React, { use, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";

const StockChart = ({ coinId }) => {
  const dispatch = useDispatch();
  const { coin } = useSelector((store) => store);
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
      data: coin.marketChart.data,
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

  useEffect(() => {
    dispatch(
      fetchMarketChart({ coinId, days: 30, jwt: localStorage.getItem("jwt") })
    );
  }, [dispatch, coinId, activeLabel]);

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
