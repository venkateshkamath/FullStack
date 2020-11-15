// It is like the promise, but better with the syntax.


async function getUser(){
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resp.json();
	console.log(data);
}

// This is better when it comes to syntax sugar.
const urls = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/albums'
] ;

async function getData(){
	try{
	const[users,posts,albums] = await Promise.all(urls.map((url)=>{
		fetch(url).then(resp=>resp.json());
	}))
	console.log('users',users);
	console.log('posts',posts);
	console.log('albums',albums);
}
catch(error){
	console.log("Error is",error);
}
}


//await Promise.all., since once it is fetched then everything will async.

// try {} will be executed first , if error in try, then catch will throw an error.
