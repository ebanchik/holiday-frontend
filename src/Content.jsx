import axios from "axios";
import { useState, useEffect } from "react";
import { HolidaysIndex } from "./HolidaysIndex";
import { HolidaysNew } from "./HolidaysNew";
import { Modal } from "./Modal"
import { HolidaysShow} from "./HolidaysShow"

  export function Content() {
   const [holidays, setHolidays] = useState([]);
   const [isHolidaysShowVisible, setIsHolidaysShowVisible] = useState(false);
   const [currentHoliday, setCurrentHoliday] = useState({});

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

  const handleShowHoliday = (holiday) => {
      console.log("handleShowHoliday", holiday);
      setIsHolidaysShowVisible(true);
      setCurrentHoliday(holiday);
    };

  const handleUpdateHoliday = (id, params, successCallback) => {
    console.log("handleUpdateHoliday", params);
    axios.patch(`http://localhost:3000/holidays/${id}.json`, params).then((response) => {
      setHolidays(
        holidays.map((holiday) => {
          if (holiday.id === response.data.id) {
            return response.data;
          } else {
            return holiday;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsHolidaysShowVisible(false);
  };

  const handleDestroyHoliday = (holiday) => {
    console.log("handleDestroyHoliday", holiday);
    axios.delete(`http://localhost:3000/holidays/${holiday.id}.json`).then((response) => {
      setHolidays(holidays.filter((h) => h.id !== holiday.id));
      handleClose();
    });
  }

   useEffect(handleIndexHolidays, []);

    return (
      <div>
        <HolidaysNew onCreateHoliday={handleCreateHoliday} />
        <HolidaysIndex holidays={holidays} onShowHoliday={handleShowHoliday}/>
        <Modal show = {isHolidaysShowVisible} onClose={handleClose}>
          <HolidaysShow holiday={currentHoliday} onUpdateHoliday={handleUpdateHoliday} onDestroyHoliday={handleDestroyHoliday}/>
        </Modal>
      </div>
    );
  }
