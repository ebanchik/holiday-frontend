import axios from "axios";
import { useState, useEffect } from "react";
import { HolidaysIndex } from "./HolidaysIndex";
import { HolidaysNew } from "./HolidaysNew";

  export function Content() {
   const [holidays, setHolidays] = useState([]);

   const handleIndexHolidays = () => {
     console.log("handleIndexHolidays");
     axios.get("http://localhost:3000/holidays.json").then((response) => {
       console.log(response.data);
       setHolidays(response.data);
     });
   };

  const handleCreateHoliday = (params, successCallback) => {
    console.log("handleCreateHoliday", params);
    axios.post("http://localhost:3000/holidays.json", params).then((response) => {
      setHolidays([...holidays, response.data]);
      successCallback();
    });
  };

   useEffect(handleIndexHolidays, []);

    return (
      <div>
        <HolidaysNew onCreateHoliday={handleCreateHoliday} />
        <HolidaysIndex holidays={holidays} />
      </div>
    );
  }
