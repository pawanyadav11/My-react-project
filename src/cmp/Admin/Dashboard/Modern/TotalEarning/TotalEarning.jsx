import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import Chart from "react-apexcharts";
import "./TotalEarning.css";
import {
  useState
} from "react";

const TotalEarning = ()=>{
  const options = {
    chart: {
      toolbar: {
        tools: {
          download: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        }
      },
      sparkline: {
        enabled: true
      }
    },
    theme: {
      palette: "palette8"
    },
    title: {
      text: "$10,000",
      offsetX: 8,
      offsetY: 8,
      style: {
        fontSize: "18px"
      }
    }
  };
  const [series] = useState([
    {
      name: "Earning",
      data: [10,25,100,67,78,34,500,200,1000,45,74,84]
    }
  ]);
  const design = (
    <>
    <Grid item xs={12} sm={4}>
     <Card className="chart-box">
     <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       Total Earning
      </Typography>
      <Chart
      options={options}
      series={series}
      height="160px"
      type="area"
      className="chart"
      >
      </Chart>
     </CardContent>
     </Card>
    </Grid>
    </>
  );
  return design
}

export default TotalEarning;
