import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

import { getAllPostIds, getPostData } from '../../lib/posts';

//returns the data for provided ID
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id); //getPostData contains an await so we also need to await here
  return {
    props: {
      postData,
    },
  };
}

//returns list of paths for all posts
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths, //paths contains the array of known paths returned by getAllPostIds(), which include the params defined by pages/posts/[id].js
    fallback: false,
  };

}

//component uses the postdata prop to display
export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                {/* use date component to daisplay the date */}
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> {/* display html markdown from the file */}
        </article>
    </Layout>
  );
}