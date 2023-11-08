import { Container } from '@/components/Container'
import { GameProps } from '@/types/game'
import Image from 'next/image'
import Link from 'next/link'

async function getDalyGame(): Promise<GameProps> {
	try {
		const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`)
		return response.json()
	} catch {
		throw new Error('Failed to fetch data')
	}
}

export default async function Home() {
	const dalyGame = await getDalyGame()

	return (
		<main className="flex ">
			<Container>
				<h1>Separamos um jogo exclusivo para você</h1>
				<Link href={`/game/${dalyGame.id}`}>
					<section className="w-full bg-black rounded-lg">
						<Image src={dalyGame.image_url} alt={dalyGame.title} priority quality={100} width={100} height={100} />
					</section>
				</Link>
			</Container>
		</main>
	)
}
