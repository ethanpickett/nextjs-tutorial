import Link from 'next/link';
import Head from 'next/head'; //include the hteml <head>
import Script from 'next/script'; // include html <script>
import Layout from '../../components/layout';

export default function FirstPost() {
  return (


    <Layout>

      {/* using metadata */}
      <Head>
        <title>First Post</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" //strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
        onLoad={() =>  //onLoad is used to run any JavaScript code immediately
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>First Post</h1>
      
    </Layout>
  );
}