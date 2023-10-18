import React from "react";
import { useContext } from "react";
import tableDataContext from "../context/tableDataContext";
import DataTable from "react-data-table-component";
const DetailsTable = ({previewData}) => {
  const { tableData } = useContext(tableDataContext);
  const columns = [
    {
      name: "Action",
    },
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "StartDate",
      selector: (row) => row.startDate,
      wrap:true
    },
    {
      name: "EndDate",
      selector: (row) => row.endDate,
      wrap:true
    },
    {
      name: "Month, Year",
      selector: (row) => {
       return `${new Date(row.startDate).getMonth()+1}, ${new Date(row.endDate).getFullYear()} `
      },
    },
    {
      name: "Date Excluded",
      selector: (row) =>
        row.selectedDates.length > 0
          ? row.selectedDates.map((item) => {
              return <span id={row.id}>{item}, </span>;
            })
          : "0",
       
    },
    {
      name: "Number of Days",
      selector: (row) => row.noofselectedDates,
    },
    {
      name: "LeadCount",
      selector: (row) => row.leadCount,
    },
    {
      name: "Expected DRR",
      selector: (row) => {
        if(row.noofselectedDates>0){
          return Math.floor(Number(row.leadCount)/Number(row.noofselectedDates))
        }
        else{
          return "0"
        }
      },
    },
    {
      name: "Last Updated",
      selector: (row) => row.updatedDate,
    },
  ];

  return (
   
      <DataTable
        columns={columns}
        data={tableData}
        onRowClicked={(e, row)=>{
          console.log(e)
          previewData(e)
        }}
        customStyles={{
          rows: {
            style: {
              marginBottom: "10px",
              overflow:"hidden",
              maxWidth:"100%",
              cursor:"pointer"
            },
          },
          headCells:{
            style:{
                fontSize:"1rem",
                fontWeight:"bold",
                overflow:"hidden"
            }
          }
        }}
      />
    
  );
};

export default DetailsTable;
