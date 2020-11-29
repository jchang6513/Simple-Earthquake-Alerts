import axios from "axios";

export const queryEarthquake = ({
  starttime = "2020-11-22",
  endtime = 2020 - 11 - 29,
  minmagnitude
}) => {
  axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query", {
    params: {
      format: "geojson",
      starttime,
      endtime,
      minmagnitude
    }
  });
};
