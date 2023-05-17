import React from 'react'

interface props {
    // handleBtnClick:()=>void,
    hour:number
}

const Button = ({hour}:props)=>{
  
    console.log("button" , hour)
    return (
        <button onClick={()=>{}}>btn click</button>
    )
}


export default React.memo(Button);