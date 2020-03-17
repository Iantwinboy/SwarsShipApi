const app = document.getElementById('root');

const headline = document.createTextNode('Ships of the Starwars Universe');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(headline);
app.appendChild(container);

document.getElementById("root").style.backgroundColor = "black";


const urls = ['https://swapi.co/api/starships/'];
 
		



(async function IIFFE() {
  const starShips = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  loopArray = await starShips[0].results;
	
  let i = 0;


	loopArray.forEach(function(objects) {
		objects.picture = starShipPictures[i];
		i = i+1;
	});


  	loopArray.forEach(function(objects) {
			
			  const card = document.createElement('div');
			  card.setAttribute('class', 'card');

	  		
			  const h1 = document.createElement('h1');
			  h1.textContent = objects.name;

	
			  const img = document.createElement('img');
				img.src = objects.picture;

			
			  const triangle = document.createElement('p');
			  triangle.setAttribute('class', 'triangle');

			
			  const ul = document.createElement('ul');


			  const li1 = document.createElement('li');
			  li1.textContent = "Starship class: " + objects.starship_class;

			  const li2 = document.createElement('li');
			  li2.textContent = "Manufacturer: " + objects.manufacturer;

			  const li3 = document.createElement('li');
			  li3.textContent = "Crew: " + objects.crew;

			  const li4 = document.createElement('li');
			  li4.textContent = "Max atmosphering speed: " + objects.max_atmosphering_speed;	  

			  const li5 = document.createElement('li');
			  li5.textContent = "Hyperdrive rating: " + objects.hyperdrive_rating;

			  const li6 = document.createElement('li');
			  li6.textContent = "Cargo capacity: " + objects.cargo_capacity + " kg";

			  const li7 = document.createElement('li');
			  li7.textContent = "Consumables: " + objects.consumables;

	  
	  		
	  		  container.appendChild(card);


			  card.appendChild(h1);
			  card.appendChild(img);
		      card.appendChild(triangle);  
			  card.appendChild(ul);
			 	ul.appendChild(li1);
			  	ul.appendChild(li2);
			  	ul.appendChild(li3);
			  	ul.appendChild(li4);
			  	ul.appendChild(li5);
			  	ul.appendChild(li6);
			  	ul.appendChild(li7);
});
}());

const starShipPictures = [
	'https://vignette.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest?cb=20180903230846',
	'https://vignette.wikia.nocookie.net/starwars/images/6/6e/Sentinel_negvv.png/revision/latest/scale-to-width-down/999?cb=20170411232732',
	'https://vignette.wikia.nocookie.net/starwars/images/9/9d/DSI_hdapproach.png/revision/latest?cb=20130221005853',
	'https://vignette.wikia.nocookie.net/starwars/images/4/43/MillenniumFalconTFA-Fathead.png/revision/latest/scale-to-width-down/1000?cb=20161110011442',
	'https://vignette.wikia.nocookie.net/starwars/images/4/45/BTL-B_Y-wing_BF2.png/revision/latest/scale-to-width-down/1000?cb=20171129235141',
	'https://vignette.wikia.nocookie.net/starwars/images/b/b2/X-wing_2_Fathead.png/revision/latest?cb=20161004003758',
	'https://vignette.wikia.nocookie.net/starwars/images/1/1d/Vader_TIEAdvanced_SWB.png/revision/latest?cb=20160915042032',
	'https://vignette.wikia.nocookie.net/starwars/images/b/ba/Slave_I_DICE.png/revision/latest/scale-to-width-down/999?cb=20170825000729',
	'https://vignette.wikia.nocookie.net/starwars/images/a/a9/Imperial_shuttle.png/revision/latest/scale-to-width-down/999?cb=20150827042115',
	'https://vignette.wikia.nocookie.net/starwars/images/5/50/NBfrigate.JPG/revision/latest?cb=20061215024715'
]