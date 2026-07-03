import React from 'react'
import { InlineWidget, PopupWidget  } from 'react-calendly'
import './Consultation.css'

function Consultation() {
    return (
        <div className="consultation-container">
            <a className="disclaimer">Note: Please be aware that the available meetings are illustrative. Murray is not currently accepting students.</a>
        <InlineWidget  url="https://calendly.com/murraymclellanielts/30min"  />
        </div>
    )
}

export default Consultation