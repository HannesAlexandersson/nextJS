'use client'
import Link from 'next/link';
import style from './nav.module.css';





export default function Navbar() {
    return (
     <div className={style.nav}>
        <ul className={style.lista}>

            <li className={style.listgrej}>
                <Link className={style.link} href="/" >Home</Link>
            </li>

            <li className={style.listgrej}>
              <Link className={style.link} href="/about" >About</Link>
            </li>    

            <li className={style.listgrej}>
              <Link className={style.link} href="/projects" >Projects</Link>
            </li>     

            <li className={style.listgrej}>
              <Link className={style.link} href="/merch" >Merchandize</Link>
            </li>

        </ul>
     </div>
    );
  }