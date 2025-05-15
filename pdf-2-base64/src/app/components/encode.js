'use client'

import {useState} from 'react';
import { useEffect } from 'react';


export default function Encode({prop}) {

    const [encodedString, SetEncodedString] = useState('')
    useEffect(() => {
        //triggered when state changes
        prop(encodedString);
        console.log(encodedString);
    }, [encodedString]);

    function handleFile() {
        const file = document.getElementById("pdf-file").files[0];
        const reader = new FileReader();

        reader.addEventListener(
            "loadend",
            () => {
                EncodePDF(reader.result);
            },
            false,
        );

        if (file) {
            reader.readAsDataURL(file); // when done reading pdf trigger event
        }
    };

    function EncodePDF(result) {
        const base64String = result;
        const encoded = base64String.substring(base64String.indexOf(',') +1);
        SetEncodedString(encoded);
    };

    return (
        <>
            <input type="file" id="pdf-file" name="pdf-file" accept=".pdf" onChange={handleFile}/>
        </>
    );
}