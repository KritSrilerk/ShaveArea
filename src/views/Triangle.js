import React, { useState } from 'react'
import FooterComp from '../components/FooterComp'
import HeaderComp from '../components/HeaderComp'

function Triangle() {
    const [areaTriangle, setAreaTriangle] = useState(0)
    const [Base, setBase] = useState(0)
    const [High, SetHigh] = useState(0)

    const handleChangeBase = (e) => {
        e.target.value === "" ? setBase(0) : setBase(e.target.value);
    };

    const handleChangeHigh = (e) => {
        e.target.value === "" ? SetHigh(0) : SetHigh(e.target.value);
    };

    const calTriangleArea = () => {
        setAreaTriangle((parseFloat(Base) * parseFloat(High) / 2).toFixed(2))
    };

    return (
        <div>
            <HeaderComp />
            <h3>คำนวณพื้นที่สามเหลี่ยม</h3>
            ป้อนความสูง: <input type="number" onChange={handleChangeHigh} />
            <br /><br />
            ป้อนฐาน : <input type="number" onChange={handleChangeBase} />
            <br /><br />
            <button onClick={calTriangleArea}>คำนวณพื้นที่สามเหลี่ยม</button>
            <br /><br />
            พื้นที่สามเหลี่ยมเป็น : {areaTriangle}
            <FooterComp />
        </div>
    )
}

export default Triangle