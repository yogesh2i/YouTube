import 'dotenv/config';
export const options={
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_SECRET_KEY,
		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
	}
}
