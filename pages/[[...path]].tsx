import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
	min-height: 100vh;
	max-width: 1280px;
	margin: 0 auto;
`;

const Nav = styled.nav`
	display: grid;
	gap: var(--margin);
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

const ArticleCard = styled.div`
	background: var(--tone-1);
	transition: box-shadow 0.1s ease, background 0.1s ease;
	border-radius: 16px;
	&:hover {
		background: var(--panel);
		box-shadow: 0 2px 24px rgba(0, 0, 0, 0.1);
		figure {
			img {
				transform: scale(120%);
			}
			&::before {
				opacity: 0;
			}
		}
	}
	figure {
		line-height: 1;
		overflow: hidden;
		&::before {
			opacity: 1;
			transition: opacity 0.1s ease;
			z-index: 5000;
		}
		img {
			transform-origin: center center;
			transition: transform 0.6s ease;
		}
	}
`;

const PlainAnchor = styled.a`
	color: inherit;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		text-decoration: none;
	}
`;

const Home: NextPage = ({headers}: any) => {
	return (
		<Container className="container">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<header className="text-center py-5">
				<h1 className="text-bold">ブログタイトル</h1>
				<aside className="text-125 text-dimmed">ブログのサンプルページ。</aside>
			</header>

			<Nav>
				{Array(50).fill(null).map((_, i) => (
					<PlainAnchor key={i}>
						<ArticleCard className="card shadow-2">
							<figure className="fluid bottom-shadow">
								<img src="https://placekitten.com/256/150" className="fluid" alt="cat" />
							</figure>
							<div className="body">
								<h1>テスト {i + 1}</h1>
								<p className="text-dimmed">Lorem ipsum dolor sit amet.</p>
							</div>
						</ArticleCard>
					</PlainAnchor>
				))}
			</Nav>
			
			<footer className="text-center py-5 mt-auto text-gray-12">
				(C)2022 Xeltica Studio
			</footer>
		</Container>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return {
		props: {
			headers: ctx.req.headers,
		},
	};
};

export default Home;
