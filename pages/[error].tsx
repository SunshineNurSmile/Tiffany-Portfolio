import type { NextPage } from "next";
import Head from "next/head";

const pageNotFound: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Error | 404</title>
            </Head>

            <main>
                <div>Page Not Found</div>
            </main>
        </div>
    );
};

export default pageNotFound;
