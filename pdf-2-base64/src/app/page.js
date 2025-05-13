import Image from "next/image";
import styles from "./page.module.css";
import Upload from "./components/upload";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>PDF Encoder For IQ x Soon</h3>
        <Upload />
      </main>
    </div>
  );
}
