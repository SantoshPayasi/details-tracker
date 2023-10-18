import "./style/App.css";
import Detailsform from "./components/Detailsform";
import { DataProvider } from "./context/dataContext";
import { TableDataProvider } from "./context/tableDataContext";
import DetailsTable from "./Tables/detailsTable";
import PreviewBox from "./components/PreviewBox";
import { useState } from "react";
function App() {
  const [data, setData] = useState(null)
  return (
     <TableDataProvider>
        <DataProvider>
          <h1>Enter Details</h1>
          <Detailsform />
          <hr></hr>
          <h1>Details Table</h1>
          <DetailsTable previewData={setData} />
          <hr></hr>
          { data!=null?<h1>Preview Details</h1>:null}
         { data!=null?<PreviewBox data={data}/>:null}
        </DataProvider>
      </TableDataProvider>
 
        
     
  
  );
}

export default App;
