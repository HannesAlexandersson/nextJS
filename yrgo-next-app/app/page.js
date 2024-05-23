import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  
  return (
    <main className="overlay">
      <div className={styles.wrapper}>
        <h1>This is the landingpage</h1>
      </div>
      <div className={styles.cont}>
        <p>and this is me</p>
        <Image
        className={styles.myImage}
          src="/codeStyles.jpeg"
          width={369}
          height={492}
          alt="a picture of Cody Styles"
        />
      </div>
   </main>
  );
}
