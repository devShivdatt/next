import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  console.log("test");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Main page
      </main>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
