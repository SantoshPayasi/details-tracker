import { createContext, useContext, useState } from "react";
import React from "react";
import tableDataContext from "./tableDataContext";
import dayjs from "dayjs";
const DetailsContext = createContext({});

export const DataProvider = ({ children }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // const [duration, setDuration] = useState("");
  let [selectedDates, setSelectedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("")
  // const [noofselelectedDays, setNoofselelectedDays] = useState(0);
  const [lead, setLead] = useState(0);
  const [ddr, setDdr] = useState(0);
  // const [lastUpdate, setLastupdate] = useState("");
  const {tableData, updateTable} = useContext(tableDataContext)


  // Function to initiallizing data of all veriables

  const reinitializeData =()=>{
    setSelectedDates("YYYY-MM-DD")
    setStartDate("YYYY-MM-DD")
    setEndDate("YYYY-MM-DD")
    // setDuration("YYYY-MM-DD")
    setSelectedDates([])
    setSelectedDate("YYYY-MM-DD")
    // setNoofselelectedDays(0)
    setLead(0)
    setDdr(0)
  }

  // Function to update array details

  const updateDetailsArray= (e) =>{
      e.preventDefault()
      const SDate = new Date(startDate).getTime()
      const EDate = new Date(endDate).getTime()
      const duration = (EDate-SDate)/(24*60*60*1000) 
      const updatedDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
      const NewEntry = {
        id: tableData.length+1,
        startDate: startDate,
        endDate:endDate,
        duration:duration,
        selectedDates:selectedDates,
        noofselectedDates: selectedDates.length,
        leadCount:lead,
        drr:ddr,
        updatedDate: dayjs(updatedDate).format("YYYY-MM-DD")
    }

    // Function called to add details which is defined in tableDataProvider

    updateTable(NewEntry)

    // Reinitializing all state veriables
    
    reinitializeData();
      
  }

  const setDateArray=(e)=>{
    setSelectedDate(e.target.value)
  if(!selectedDates.includes(e.target.value)){
    selectedDates = [...selectedDates, e.target.value]
    setSelectedDates(selectedDates)
  }
  console.log(selectedDates)
  }

  return (
    <DetailsContext.Provider
      value={{
        setStartDate,
        startDate,
        endDate,
        setDateArray,
        setEndDate,
        // setDuration,
        setSelectedDates,
        selectedDate,
        // setNoofselelectedDays,
        setLead,
        lead,
        setDdr,
        ddr,
        // setLastupdate,

        updateDetailsArray
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsContext;
