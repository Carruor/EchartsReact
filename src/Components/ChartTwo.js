import React from "react";
import ReactEcharts from "echarts-for-react";
import "./ChartTwo.css";

export function ChartTwo() {
  const option = {
    title: {
      text: "Predicted Investments",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 50,
      bottom: 50,
    },
    xAxis: {
      type: "category",
      data: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],

      axisLabel: { show: true },
      axisLine: { show: true },
      position: "bottom",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },

    yAxis: [
      {
        type: "value",

        axisLine: { show: true },

        axisLabel: {
          formatter: "{value} %",
        },
      },
    ],
    series: [
      {
        data: [
          { value: 50 },
          { value: 0 },
          { value: 60 },
          { value: 75 },
          { value: 65 },
          { value: 55 },
          { value: 30 },
          { value: 50 },
          { value: 60 },
          { value: 0 },
          { value: 80 },
          { value: 60 },
        ],
        tooltip: {
          show: false,
        },
        name: "Invested Ammount",
        type: "bar",
        stack: "Total",
        label: {
          show: false,
        },
      },
      {
        name: "Investment Number",
        type: "bar",
        stack: "Total",
        label: {
          show: false,
        },
        data: [
          { value: -30, itemStyle: { color: "red" } },
          { value: -40, itemStyle: { color: "red" } },
          { value: 0, itemStyle: { color: "red" } },
          { value: 0, itemStyle: { color: "red" } },
          { value: -10, itemStyle: { color: "red" } },
          { value: -20, itemStyle: { color: "red" } },
          { value: 0, itemStyle: { color: "red" } },
          { value: 0, itemStyle: { color: "red" } },
          { value: -10, itemStyle: { color: "red" } },
          { value: -25, itemStyle: { color: "red" } },
          { value: -30, itemStyle: { color: "red" } },
          { value: -15, itemStyle: { color: "red" } },
        ],
        tooltip: {
          show: false,
        },
      },
    ],
  };
  return (
    <div className="chart2Styles">
      <ReactEcharts option={option} />
    </div>
  );
}
export default ChartTwo;
