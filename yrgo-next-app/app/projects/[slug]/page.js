import projects from '@/app/api/projects.json'
import Image from 'next/image';
import style from './slug.module.css';
import Link from 'next/link';
import PageHeader from '@/app/components/PageHeader/PageHeader';
export default async function Project({ params }) {
    
    const projectTitle = params.slug.toLowerCase();
    const matchingProject = projects.find( (project) => project.slug.toLowerCase() === projectTitle);

    
    
    if(!matchingProject){
        return <>Loading</>
    }else{
    return (
    <main>      
        <PageHeader className={style.first} header={matchingProject.title} subHeader={matchingProject.description}>
            <Image src={matchingProject.image} width={200} height={200} alt="demoImage"/>
        </PageHeader>
        <div className={style.first}>
            <p>Check out the <Link href={matchingProject.github}>Github</Link></p>
            <p>Check out the demo <Link href={matchingProject.demo}>HERE!</Link></p>            
        </div>
    </main>
    );
}
}