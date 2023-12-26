import axios from "axios";
import { useState, useEffect } from "react";
import { HolidaysIndex } from "./HolidaysIndex";

  export function Content() {
   const [holidays, setHolidays] = useState([]);

   const handleIndexHolidays = () => {
     console.log("handleIndexHolidays");
     axios.get("http://localhost:3000/holidays.json").then((response) => {
       console.log(response.data);
       setHolidays(response.data);
     });
   };

   useEffect(handleIndexHolidays, []);

    return (
      <div>
       <HolidaysIndex holidays={holidays} />
      </div>
    );
  }