import Link from 'next/link'
import Layout from '../components/Layout';

export default () => (
    <Layout title="About">
        
        <Link href="/">
            <a>Go to home</a>
        </Link>
        <p>Front End</p>
        <img src="/static/js.png" alt="Javascript" />
    </Layout>
);

