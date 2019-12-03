import Link from "next/link";
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on("routeChangeStart", () => {
    NProgress.start();
});

Router.events.on("routeChangeComplete", () => { NProgress.done(); });
Router.events.on("routeChangeError", () => { NProgress.done(); });

export default ({ children, title }) => (
    <div className="root">
        <Head>
            <title>Next Portifolio</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        </Head>
        <header>
            <Link href="/"><a>Home </a></Link>
            <Link href="/about"><a>About </a></Link>
            <Link href="/hireme"><a>Hire me</a></Link>
        </header>

        <h1>{title}</h1>

        {children}

        <footer>&copy; {new Date().getFullYear()}</footer>

        <style jsx>{`
            .root {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            header {
                width: 100%;
                display: flex;
                justify-content:space-around;
                padding: 1em;
                font-size: 1.2rem;
                background: indigo;
            }
            header a {
                color: darkgrey;
                text-decoration: none;
            }
            header a:hover {
                font-weight: bold;
                color: lightgrey;
            
            }
            footer {
                padding: 1em;
            }
            body {
               margin: 0;
               font-size: 110%;
               background= #f0f0f0;
            }
        `}</style>
    </div>
)