fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fures=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc',{
"method" : "GET" ,
	headers: {
		'X-RapidAPI-Key': '50ea460c65msh9b251d8a5747921p1204a7jsn2eb5e50e7816',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
});
// const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '50ea460c65msh9b251d8a5747921p1204a7jsn2eb5e50e7816',
// 		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
// 	}
// };
then(response => {
	console.log(response);
})
.catch(error => {
	console.error(error);
});

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
Main();




function openMenu() {
document.body.classList += ' menu--open'
}

function closeMenu() {
    document.body.classList.remove('menu--open')
    }