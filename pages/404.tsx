import type { NextPage } from 'next';
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>ページねえよ</h1>
		</div>
	);
};

export default NotFoundPage;