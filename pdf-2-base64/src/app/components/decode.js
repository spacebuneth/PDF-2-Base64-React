'use client'
import { useState } from 'react';


export default function Decode({prop, prop2}) {
  const [FileBlob, SetFileBlob] = useState(null);
    //const base64String = prop;

    //const newBlob = new File([], 'test.pdf', {type:'application/pdf', lastModified: Date.now()});
    
    // Function to convert Base64 string to Blob
function handleClickCovert() {
  const newFile = base64ToBlob(prop);

}

function base64ToBlob(base64, contentType = "application/pdf",
  sliceSize = 512) {
  console.log(base64)
  const byteCharacters = atob(base64);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length;
      offset += sliceSize) {
      const slice = byteCharacters.slice(
          offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
  }

  const blob = new File (byteArrays, 'test', { type: contentType, lastModified: Date.now() });
  SetFileBlob(blob);
  prop2(blob);
}

    function download() {
        if (!FileBlob) {
          alert("No File Selected!")
          return
        }
        const blob = FileBlob;
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
      
        link.href = url
        link.download = blob.name
        document.body.appendChild(link)
        link.click()
      
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      }
    
    return (
      <>
        <button onClick={handleClickCovert}>Convert To File</button>
        <button onClick={download}>download</button>
      </>
    );

}



