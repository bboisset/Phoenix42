// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const getAccessToken = async (code: string) => {
	console.log(`grant_type=authorization_code&client_id=${process.env.UID}&client_secret=${process.env.SECRET_KEY}&code=${code}&scope=public&redirect_uri=https://localhost:3000/dashboard`)
	const response = await fetch('https://api.intra.42.fr/oauth/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: `grant_type=authorization_code&client_id=${process.env.UID}&client_secret=${process.env.SECRET_KEY}&code=${code}&scope=public&redirect_uri=https://localhost:3000/dashboard`
	});
	console.log({ response });
};

type Data = {
	client_secret: number
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const code = req.query.code;
	if (code) {
		await getAccessToken(code as string);
	}
	res.status(200).json({ client_secret: 0 })
}
