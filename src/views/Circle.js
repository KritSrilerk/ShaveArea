import React, { useState } from 'react'
import FooterComp from '../components/FooterComp'
import HeaderComp from '../components/HeaderComp'

function Circle() {
    const [areaCircle, setAreaCircle] = useState(0)
    const [radius, setRsadius] = useState(0)

    const handleChangeRadius = (e) => {
        e.target.value === "" ? setRsadius(0) : setRsadius(e.target.value);
    };

    const calCircleArea = () => {
        setAreaCircle(1 / 2 * 3.17 * (parseFloat(radius) * parseFloat(radius)).toFixed(2))
    };

    return (
        <div>
            <HeaderComp />
            <h3>คำนวณพื้นที่วงกลม</h3>
            ป้อนรัศมี : <input type="number" onChange={handleChangeRadius} />
            <br /><br />
            <button onClick={calCircleArea}>คำนวณพื้นที่วงกลม</button>
            <br /><br />
            พื้นที่วงกลมเป็น : {areaCircle}
            <FooterComp />
        </div>
    )
}

function calAreaCircle() {

}
export default Circle