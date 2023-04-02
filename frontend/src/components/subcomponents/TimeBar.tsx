import React from 'react'

interface TimeBarProps {
  time: number
}

const TimeBar = (props: TimeBarProps) => {
  return (
    <div style={{width:"70%", margin: "0 auto", padding:30}}>
      <div 
          className="time-left-bar" 
          style={{    width: `${props.time / 10 * 100}%`,
                      height:30,
                      backgroundColor:"#295a8c", 
                      borderRadius:30
                  }}
      ></div>
    </div>
  )
}

export default TimeBar