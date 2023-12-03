"use client";
import { Card, LineChart, Title } from "@tremor/react";

const chartdata = [
  {
    day: "Mon",
    "This Week": 0.34,
    "Previous Week": 1.53,
  },
  {
    day: "Tue",
    "This Week": 1.11,
    "Previous Week": 1.58,
  },
  {
    day: "Wed",
    "This Week": 1.26,
    "Previous Week": 1.61,
  },
  {
    day: "Thu",
    "This Week": 1.59,
    "Previous Week": 1.61,
  },
  {
    day: "Fri",
    "This Week": 1.47,
    "Previous Week": 1.67,
  },
  {
    day: "Sat",
    "This Week": 1.73,
    "Previous Week": 1.67,
  },
  {
    day: "Sun",
    "This Week": 1.88,
    "Previous Week": 1.67,
  },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const LineChartComp = () => (
  <Card>
    <Title>Net Sales</Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="day"
      categories={["This Week", "Previous Week"]}
      colors={["red", "green"]}
      valueFormatter={valueFormatter}
    />
  </Card>
);

export default LineChartComp;
