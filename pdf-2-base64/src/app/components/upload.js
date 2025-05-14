'use client'

import {useState} from 'react';
import { useEffect } from 'react';


export default function Upload({prop}) {
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
            reader.readAsArrayBuffer(file); // when done reading pdf trigger event
        }
    };

    function EncodePDF(result) {
        const buffer = result;
        const binaryString = arrayBufferToBinaryString(buffer);
        const base64String = btoa(binaryString);
        SetEncodedString(base64String);
    };


    function arrayBufferToBinaryString(buffer) { //helper function
        let binaryString = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
          binaryString += String.fromCharCode(bytes[i]);
        }
        return binaryString;
      }

    return (
        <>
            <input type="file" id="pdf-file" name="pdf-file" accept=".pdf" onChange={handleFile}/>
        </>
    );
}