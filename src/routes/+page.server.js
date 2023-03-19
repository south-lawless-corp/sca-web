import PocketBase from 'pocketbase';
import { error } from '@sveltejs/kit';

// I know it's bad practice but Cloudflare Pages makes it hard lol
const pb = new PocketBase(import.meta.env.POCKETBASE);
const authData = await pb.admins.authWithPassword(
	import.meta.env.POCKETBASE_ID,
	import.meta.env.POCKETBASE_PW
);

export async function load({ params }) {
	const articles = await pb.collection('sca_articles').getList(1, 6, { sort: '-created' });
	const publicArticles = articles.items.filter((a) => a.public);

	return {
		post: publicArticles
	};
}
