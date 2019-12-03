import Link from 'next/link'
import Layout from '../components/Layout'

const index = () => (
    <Layout title="Home">
        <Link href="/about">
            <a>Go to About</a>
        </Link>
        <p>Welcome to home page</p>
    </Layout>
);

export default index;