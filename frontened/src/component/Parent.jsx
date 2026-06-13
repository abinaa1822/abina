import React from "react"
import Parent from './component/parent'
const Parent = () => {
    return (
        //Fragment tag
        <>
    <div>Parent</div>
    <h1>Hello world</h1>
    <Parent />
    </>
    )
}

export default Parent
