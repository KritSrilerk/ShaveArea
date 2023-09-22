import React, { useState } from 'react'
import FooterComp from '../components/FooterComp'
import HeaderComp from '../components/HeaderComp'

function Square() {
    const [areaSquare, setAreaSquare] = useState(0)
    const [width, setWidth] = useState(0)
    const [long, SetLong] = useState(0)

    const handleChangeLong = (e) => {
        e.target.value === "" ? SetLong(0) : SetLong(e.target.value);
    };

    const handleChangeWidth = (e) => {
        e.target.value === "" ? setWidth(0) : setWidth(e.target.value);
    };

    const calSquareArea = () => {
        setAreaSquare((parseFloat(width) * parseFloat(long)).toFixed(2))
    };

    return (
        <div>
            <HeaderComp />
            <h3>คำนวณพื้นที่สี่เหลี่ยม</h3>
            ป้อนความกว้าง: <input type="number" onChange={handleChangeWidth} />
            <br /><br />
            ป้อนความยาว : <input type="number" onChange={handleChangeLong} />
            <br /><br />
            <button onClick={calSquareArea}>คำนวณพื้นที่สี่เหลี่ยม</button>
            <br /><br />
            พื้นที่สี่เหลี่ยมเป็น : {areaSquare}
            <FooterComp />
        </div>
    )
}

export default Square    