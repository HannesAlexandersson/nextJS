import style from './page.module.css';

export default function About() {
    return (
      <main className="overlay">
      <div className={style.wrapper}>
        <h1>This is the about page</h1>
        <p>
          This is some text that tells you who I am and what Im doing. 
          its mainly nonsense and doesnt actually tell you anything worth knowing about me at all. 
          Thats becouse this isnt real, Im not real and this page isnt real. Nothing is real. Ok perhaps you are real, but im
          not sure yet. One thing is for real tho and thats the fact that im hungry. 
        </p>
      </div>
     </main>
    );
  }