const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '50ea460c65msh9b251d8a5747921p1204a7jsn2eb5e50e7816',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}









function openMenu() {
document.body.classList += ' menu--open'
}

function closeMenu() {
    document.body.classList.remove('menu--open')
    }