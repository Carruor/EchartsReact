import React from "react";
import ReactEcharts from "echarts-for-react";
import "./ChartOne.css";

export function ChartOne() {
  const option = {
    title: {
      text: "Investment Targets",
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
      type: "value",
      position: "bottom",
      axisLabel: { show: false },
      axisLine: { show: true },
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "category",
      axisLine: { show: true },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: [
        "Company #6",
        "Company #5",
        "Company #4",
        "Company #3",
        "Company #2",
        "Company #1",
      ],
    },
    series: [
      {
        data: [
          { value: -7000, name: 2000, itemStyle: { color: "green" } },
          { value: 10000, name: 5000 },
          { value: 7000, name: 4000 },
          { value: 7500, name: 3000 },
          { value: 9500, name: 3500 },
          { value: 6000, name: 2000 },
        ],
        tooltip: {
          show: false,
        },
        name: "Invested Ammount",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          formatter: function (data) {
            return `${data.name}`;
          },
          position: "outside",
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
          { value: "1#" },
          { value: "2#" },
          { value: "3#" },
          { value: "4#" },
          { value: "5#" },
          { value: "6#" },
        ],
      },
      {
        name: "Total Invested",
        type: "bar",
        stack: "Total",
        label: {
          show: false,
        },
        data: [
          { value: "2000K" },
          { value: "5000K" },
          { value: "4000K" },
          { value: "3000K" },
          { value: "3500K" },
          { value: "2000K" },
        ],
      },
    ],
  };
  return (
    <div className="chartStyles">
      <ReactEcharts option={option} />
    </div>
  );
}
export default ChartOne;
