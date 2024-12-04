/**
 * Alcuni post dovranno rimanere senza immagine, quindi avere la proprietà image = undefined
 */

export const posts = [
	{
		id: 1,
		title: 'Titolo del Post',
		image: 'https://picsum.photos/id/237/600/400' ,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html', 'css'],
		published: true,
		category: 'Tech',
	},
	{
		id: 2,
		title: 'Titolo del Post',
		image: undefined ,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'css'],
		published: true,
		category: 'Tech',
	},
	{
		id: 3,
		title: 'Titolo del Post',
		image: 'https://picsum.photos/600/400' ,
		content:
			'Ciao Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'php'],
		published: true,
		category: 'Tech',
	},
	{
		id: 4,
		title: 'Titolo del Post',
		image: 'https://picsum.photos/600/400',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html'],
		published: false,
		category: 'Tech',
	},
]