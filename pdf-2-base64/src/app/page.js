'use client'

import styles from "./page.module.css";

import Encode from "./components/encode";
import Decode from "./components/decode";
import Viewer from "./components/viewer";

import { useState } from "react";

export default function Home() {

  const [FileString, SetFileString] = useState(null);//for lifting up state from child component
  const [FileBlob, SetFileBlob] = useState(null);

      function copyToClipboard() {
        if (FileString) {
          navigator.clipboard.writeText(FileString);
          alert('Base64 PDF Copied to Clipboard!') 
        } else {
          alert('Clipboard is empty!')
        }
           
      }

  return (
    <div className={styles.page}>
      <main className={styles.main }>
        <h3>IQ x Soon Onchain PDF Archive</h3>
        <Encode prop={SetFileString}/>
        <Decode prop={FileString} prop2={SetFileBlob}/>
        
        <Viewer prop={FileBlob}/>
        <div>Base64 String <button onClick={copyToClipboard}>COPY</button>:</div>
        <div className={styles.div}>{FileString}</div>
      </main>
    </div>
  );
}
