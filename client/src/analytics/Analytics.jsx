import "./Analytics.css";
import SayaData from "./raw_data.csv";
//IMPORTANT: to install papaparse use "npm i papaparse react-chartjs-2" AND THEN install "npm i papaparse react-chartjs-2 chart.js"
import Papa from "papaparse";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// Change the function name to "Analytics" or whatever we want to call it
function Analytics() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    Papa.parse(SayaData, {
      download: true,
      header: true,
      dynamicTyping: true,
      delimiter: "",
      complete: (result) => {
        console.log(result);
        setChartData({
          //to select different fields to generate the chart, change the following. "item.whateverField"
          // the field names appear under the object when you inspect "object" under console. Keep clicking the carrots until you see the field names
          //the "labels" in the following line will control the x-axis of the chart
          labels: result.data.map((item, index) => item.meter_local_time),
          datasets: [
            {
              // You can change the label, which is the header of the chart and color of the bar graph here
              label: "FLOW RATE",
              // the data field "data" underneath is the y-axis of the chart
              data: result.data.map((item, index) => item.flow),
              borderColor: "black",
              backgroundColor: "red",
            },
          ],
        });
        setChartOptions({
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              // The text underneath will appear above the label
              text: "TOTAL WATER FLOW",
            },
          },
        });
      },
    });
  }, []);
  return (
    <div>
      <h1>Saya Analytics</h1>
      {chartData.datasets.length > 0 ? (
        <div>
          <Bar options={chartOptions} data={chartData} />
        </div>
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
}
// Change to the function name here
export default Analytics;
// SAYA: to connect to postgresSQL, follow the steps on the
// following link:https://medium.com/@dophuoc/connect-d3-js-visualization-with-sql-database-18ff5e495e0a
// Be sure to use the D3 library for future forcasting ...

// For senior design : Make sure to have the .csv file in the analytics directory(raw-data.csv).
