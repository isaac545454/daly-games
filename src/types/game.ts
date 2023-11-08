export interface GameProps {
	id: number
	title: string
	description: string
	image_url: string
	platforms?: string[] | null
	categories?: string[] | null
	data_release: string
}
