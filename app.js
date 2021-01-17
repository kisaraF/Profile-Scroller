//Select elements
let profileInfo = document.getElementById('profileDisplay');
let img = document.getElementById('imageDisplay');
let btn = document.getElementById('next');

btn.addEventListener('click' , doThis);

const data = [
	{
		name : 'John Doe',
		age : 32,
		gender : 'male',
		lookingFor : 'female',
		location : 'Boston MA',
		image : "https://randomuser.me/api/portraits/men/1.jpg"
	},
	{
		name : 'Jane Doe',
		age : 25,
		gender : 'female',
		lookingFor : 'male',
		location : 'Miami FL',
		image : "https://randomuser.me/api/portraits/women/11.jpg"
	},
	{
		name : 'Rocket Smith',
		age : 28,
		gender : 'male',
		lookingFor : 'female',
		location : 'California',
		image : "https://randomuser.me/api/portraits/men/33.jpg"
	}
]

//Profile Iterator
const iterate = (name) => {
	let index = 0;
	return{
		next : () => {
			return index < name.length ?
			{value : name[index++] , done : false} :
			{done : true};
		}
	}
}

const start = iterate(data);

doThis(); //Make first profile keep loaded to window

function doThis() {

	const thisProfile = start.next().value;	

	if(thisProfile !== undefined){
		profileInfo.innerHTML = `<ul class= 'list-group'>
								<li class= 'list-group-item'>Name: ${thisProfile.name}</li>
								<li class= 'list-group-item'>Age: ${thisProfile.age}</li>
								<li class= 'list-group-item'>Gender: ${thisProfile.gender}</li>
								<li class= 'list-group-item'>Into: ${thisProfile.name}</li>
								<li class= 'list-group-item'>Location: ${thisProfile.location}</li>
							 </ul>`;

		imageDisplay.innerHTML = `<img src=${thisProfile.image}>`;
	}else{
		window.location.reload(); //Reloads page again
	}

	
}