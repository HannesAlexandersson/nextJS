import projects from '@/app/api/projects.json'
import client from '@/app/lib/contentful';
import Image from 'next/image';
import style from './slug.module.css';
import Link from 'next/link';
import PageHeader from '@/app/components/PageHeader/PageHeader';
export default async function Project({ params }) {
    const getProjects = async () => {
        const res = await client.getEntries({
          content_type: 'project',
          'fields.slug': params.slug.toLowerCase(),
        });
    
        return res.items;
      };
    
      const data = await getProjects();
    
      if (!data) {
        return (
          <main className="overlay">
            <h1>Loading</h1>
          </main>
        );
      }
    
      if (data.length === 0) {
        return (
          <main className="overlay">
            <h1>No project found</h1>
          </main>
        );
      }
    
      return ( 
    <main className="overlay">     
        <PageHeader className={style.first} header={data[0].fields.title} subHeader={data[0].fields.description}>
            <Image src={data[0].fields.image} width={200} height={200} alt="demoImage"/>
        </PageHeader>
        <div className={style.first}>
            <p>Check out the <Link href={data[0].fields.url}>Github</Link></p>
            <p>Check out the demo <Link href={data[0].fields.demoUrl}>HERE!</Link></p>            
        </div>
    </main>
    );
}
