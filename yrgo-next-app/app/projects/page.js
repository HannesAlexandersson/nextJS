
import client from '@/app/lib/contentful';
import ProjectCard from '@/app/components/ProjectCard/ProjectCard';

import PageHeader from '../components/PageHeader/PageHeader';
import style from './projects.module.css';

export default async function Projects() {   

    /* client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)
 */
    const getProjects = async () => {
        const res = await client.getEntries();
       
        return res.items;
      };

    const data = await getProjects();
   
    return (
        <main className="overlay">
            <div className={style.container}>
                <PageHeader className={style.wrapper} header="Projects" subHeader="Feel free to check out my fake projects" />


            
                {data.map((project) => (
                    <ProjectCard 
                    key={project.fields.id}
                    title={project.fields.title}
                    slug={project.fields.slug}
                    description={project.fields.description}
                    />   
                ))}
            </div>
        </main>
    );
  }