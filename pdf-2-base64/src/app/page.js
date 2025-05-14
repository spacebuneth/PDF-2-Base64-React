'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Upload from "./components/upload";
import { useState } from "react";

export default function Home() {

  const [FileString, SetFileString] = useState('Print Base64');//for lifting up state from child component

      function copyToClipboard() {
        navigator.clipboard.writeText(FileString);    
      }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>PDF Encoder For IQ x Soon</h3>
        <Upload prop={SetFileString}/>
        <div>Base64 String <button onClick={copyToClipboard}>COPY</button>:</div>
        <div className={styles.div}>{FileString}</div>
      </main>
    </div>
  );
}
