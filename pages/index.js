import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts'; //


//getStaticProps allows you to tell Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”

//You can also query a database or call an API. This is possible because getStaticProps only runs on the server-side. It will never run on the client-side. 
//It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.
export async function getStaticProps() {

  //get blog posts from the matter data files.  lib/posts.js
  const allPostsData = getSortedPostsData();
  return {

    //pass the posts as props to the home component
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (

    //Call Layout Component
    <Layout home>
      <Head>
        <title>{siteTitle}</title>     {/* Get title from layout component */}
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Ethan Pickett and I'm a Software Engineer. I am curently learing React.js and Next.js. I plan to also learn Three.js to build 3D websites</p>
      </section>

      

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>

          {/* Display the posts that were parsed through as props */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>

              {/*link to the dynamic pages by ID*/}
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              {/* use date component to show date */}
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>

      </section>



    </Layout>
  );
}