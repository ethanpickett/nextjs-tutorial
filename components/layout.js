import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css'; //This is what CSS Modules does: It automatically generates unique class names. As long as you use CSS Modules, you don’t have to worry about class name collisions.
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Ethan Pickett';
export const siteTitle = 'Next.js Sample Website';

//create layout component that can be used to add elements to all pages, such as images, title, links
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>

      {/* Set metadata */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta //meta tags (like og:image), which are used to describe a page's content
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>

        {/* Adjust image and title size dependant on homepage or not */}
        {home ? (
          <>
            <Image //Added images with next/image, which are preloaded with the priority attribute
              priority
              src="/images/Ethan.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image  //Added images with next/image, which are preloaded with the priority attribute
                priority
                src="/images/Ethan.jpeg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>

            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>

          </>
        )}
      </header>

      <main>{children}</main>

      {/* If not homepage then add return home link */}
      {!home && (
        <div className={styles.backToHome}>

          {/* Link to homepage */}
          <Link href="/">← Back to home</Link>
        </div>
      )}

    </div>
  );
}