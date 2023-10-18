import React, { useEffect } from 'react'
import "../style/PreviewBox.css"
const PreviewBox = ({data}) => {
  return (
    <div className='main-div'>
        <section><span className='PreviewHeading'>id :</span><span className='Value'>{data.id}</span></section>
        <section ><span className='PreviewHeading'>StartDate :</span> <span className='Value'>{data.startDate}</span></section>
        <section ><span className='PreviewHeading'>EndDate :</span> <span className='Value'>{data.endDate}</span></section>
        <section ><span className='PreviewHeading'>Month, Year :</span> <span className='Value'>{`${new Date(data.startDate).getMonth()+1}, ${new Date(data.endDate).getFullYear()}`}</span></section>
        <section ><span className='PreviewHeading'>LeadCount :</span> <span className='Value'>{data.leadCount}</span></section>
        <section ><span className='PreviewHeading'>DRR :</span> <span className='Value'>{(data.noofselectedDates>0)? Math.floor(Number(data.leadCount)/Number(data.noofselectedDates)): "0"}</span></section>
        <section ><span className='PreviewHeading'>SelectedDays :</span> <span className='Value'>{data.selectedDates.length}</span></section>
        
        <section className='selectedDates'>
            <h3>selectedDates</h3>
            <div> 
               { (data.selectedDates.length>0)?data.selectedDates.map(item=> <span id={data.id}>{item}, </span>):"-" } 
            </div>
        </section>

    </div>
  )
}

export default PreviewBox