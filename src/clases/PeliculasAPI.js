const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6bb6d434e3mshb576913057f5585p1aedf9jsn03c38afbd0de',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt0944947', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));