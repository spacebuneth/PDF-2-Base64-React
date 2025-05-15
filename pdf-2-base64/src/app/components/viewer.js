'use client'
import { useState } from 'react';

export default function Viewer({prop}){
    console.log('prop viewer' + prop)
    const [urlPDF, SetUrlPDF] = useState(<>View PDF</>)

    function embedIframe() {

        if (!prop) {
            alert("No File Selected!")
            return
          }

        const blob = prop;
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
          
        SetUrlPDF(url);
    }

    


    return (

        <>
            <button id='viewBtn' onClick={embedIframe}>View</button>
            <iframe src={urlPDF} height="600" width="600" ></iframe>
        </>
    )
}