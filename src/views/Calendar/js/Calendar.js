import React from 'react'
import { InlineWidget } from "react-calendly";
const Calendar = () => {
  return (
    <div className="container">
       
        <InlineWidget url="https://calendly.com/gantavya99/30min" />
        <a href="https://www.picktime.com/2589fe2f-b893-43d5-85de-e19631262090" 
        className="ptbkbtn" target="_blank"><img border="none" 
        src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-gray.png"
         alt="Book an appointment with Daac Saab"/></a>
        
    </div>
    
  )
}

export default Calendar