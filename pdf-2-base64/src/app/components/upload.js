'use client'

import {useState} from 'react';


export default function Upload() {
    const [fileContent, SetFileContent] = useState(null);

    function handleFile() {
       
        const file = document.getElementById("pdf-file").files[0];
        const reader = new FileReader();


        reader.addEventListener(
            "load",
            () => {
                SetFileContent(reader.result);
            },
            false,
        );

        reader.addEventListener(
            "loadend",
            () => {
                EncodePDF();
            },
            false,
        );

        if (file) {
            reader.readAsDataURL(file); // when done reading pdf trigger event
        }


    };

    function EncodePDF() {
        const buffer = fileContent;
        console.log(buffer)
    };

    function DecodePDF() {

    }
    

    return (
        <>
            <input type="file" id="pdf-file" name="pdf-file" accept=".pdf" onChange={handleFile}/>
        </>
    );
}