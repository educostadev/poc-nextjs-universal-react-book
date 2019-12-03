import Link from 'next/link'

const index = () => (
    <div>
        <h1>HOME</h1>
        <Link href="/about">
            <a>Go to About</a>
        </Link>
        <p>Welcome to home page</p>
    </div>
);

export default index;