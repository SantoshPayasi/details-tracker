import { createContext, useState } from "react";
const tableDataContext = createContext({})


export const TableDataProvider = ({children})=>{
    let [tableData, setTableData] = useState( [
        {
            id:1,
            startDate:"2023-10-01",
            endDate:"2023-10-30",
            duration:30,
            selectedDates:["2023-10-02", "2023-10-03", "2023-10-04", "2023-10-05" ],
            noofselectedDates:4,
            leadCount:200,
            drr:500,
            updatedDate:"2023-10-01"
        },
        {
            id:2,
            startDate:"2023-11-01",
            endDate:"2023-11-30",
            duration:35,
            selectedDates:["2023-11-02", "2023-11-03", "2023-11-04", "2023-11-15" ],
            noofselectedDates:4,
            leadCount:300,
            drr:600,
            updatedDate:"2023-11-01"
        }
    ])
    
    const updateTable = (data)=>{
        tableData = [...tableData, data]
        setTableData(tableData)
    }
    return <tableDataContext.Provider value={
        {
            tableData,
            updateTable,
        }
    }>
        {children}
    </tableDataContext.Provider>
}

export default tableDataContext