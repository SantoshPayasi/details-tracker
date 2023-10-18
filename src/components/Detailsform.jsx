import React from 'react'
import { useContext } from 'react'
import DetailsProvider from '../context/dataContext'
import "../style/DetailsForm.css"
const Detailsform = () => {
  const {setStartDate, setEndDate, lead, setLead, ddr, setDdr, updateDetailsArray, startDate, endDate, selectedDate, setDateArray}= useContext(DetailsProvider)
  return (
    <>
    <form onSubmit={e=>updateDetailsArray(e)} className='form'>
      <div>
        <label htmlFor='startDate'>StartDate</label>
        <input type="date" id="startDate"  onChange={e=>setStartDate(e.target.value)} value={startDate} required/>
        {/* <input type="date" name="" id="" /> */}
      </div>
      <div>
        <label htmlFor="endDate">EndDate</label>
        <input type="date"  id="endDate" min={startDate} onChange={e=>setEndDate(e.target.value)} value={endDate} required />
      </div>
      {/* <div>
        <label htmlFor='duration'>Duration</label>
        <input type="text" name="duration" id="duration" onChange={}/>
      </div> */}
      <div>
        <label htmlFor='excludedDates'>ExcludedDates</label>
        <input type="date" id="excludedDates" multiple={true} min={startDate} max={endDate} value={selectedDate} onChange={setDateArray} disabled={startDate==false || endDate==false} required/>
      </div>
      <div>
        <label htmlFor='leadCount'>LeadCount</label>
        <input type="text" id="leadCount" placeholder='Enter lead Counter' value={lead} onChange={e=>setLead(e.target.value)} required/>
      </div>
      {/* <div>
        <label htmlFor='ddr'>DDR</label>
        <input type="text" name="ddr" id="ddr" value={ddr} onChange={(e)=>setDdr(e.target.value)} required/>
      </div>
       */}
        <button  className='submit' type="submit">Submit</button>
        <button type='reset' className='reset'>Cancle</button>
      
      
    </form>
    </>
  )
}

export default Detailsform