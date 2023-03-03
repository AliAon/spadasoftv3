import { tab } from "@testing-library/user-event/dist/tab"
import { Fragment, useState } from "react"

const TabView=(props)=>{
    const {index,tabs}=props
    const numindex=Number(index)
    return(
       <div>{tabs[numindex]?.content}</div>
    )
}
export default TabView