import { useState, useEffect } from 'react';
import React from 'react'
import "../assets/styles/footer.scss";

export default function Footer() {
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
    return (
        <div className="footer">
            <p> PieLanger bir PencilPie ürünüdür. ©  {date} Tüm hakları saklıdır. </p>
        </div>
    )
}
