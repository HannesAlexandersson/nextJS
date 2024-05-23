
import projects from '@/app/api/projects.json';
import Link from 'next/link';
import PageHeader from '../components/PageHeader/PageHeader';
import style from './projects.module.css';

export default function Projects() {
   
    return (
         <>
            <PageHeader className={style.wrapper} header="Projects" subHeader="Feel free to check out my fake projects" />


            <ul>
            {projects.map((project) => (
                <li key={project.id}><Link href={`/projects/${project.slug}`}>{project.title}</Link></li>
                
            ))}
            </ul>
        </>
    );
  }