const first=()=>{
	
	const greet="hi";
	
	const second=()=>{
		alert(greet);//Eventhough greet is in inner function it has read greet so no issues. 
		
}
}

//Closures.
//Child has access to parents but the parents do not have access to kids. here alert(greet) is possible because greet is defined and already stored.

//Currying
// Converting functions which take in 2 argument to one argument.
const multy =(a,b)=>a*b;

// Now in currying

const curryMult =(a)=>(b)=>a*b;

//compose (in Maths)
const func=(f,g)=>(a)=>f(g(a));
const sum=(num)=>num+1;
func(sum,sum)(5); //Here sum is the f and g and a=5;
// Maths remember.

//Advanced Arrays
const arr =[2,36,8,45,10];
const double =[];
const newArray=arr.forEach((num)=>{
	double.push(num*2);
})
console.log(double);
//Map
const mapArray= arr.map((num)=>{
	return num+4;
});
console.log(mapArray);
//filter
const filterArray = arr.filter((num)=>{
	return (num>10);
})
console.log(filterArray);//filters out everything based on condition.
//reduce
const reduceArray = arr.reduce((accumulator,num)=>{
  return accumulator+num;
  console.log(accumulator);//comes as undefined since it does not give anything.
},0);//accumulator by default here is 0;
console.log(reduceArray);//actually reduce does not return an array.

//Advance Objects

//reference type
const Object1={value:10};
const Object2= Object1;
const Object3 ={value:10};
//Here Object1=== Object2 but Object3 is entirely different since it is new and its ADDRESS is different.

//Context
//this pointer reference
console.log(this);
const Object4={
	a:function(){
		console.log(this);
	}
}//this here is Object4

//Instantiation
class Player{
	constructor(name,type){
		this.name=name;
		this.type=type;
	}
	introduce(){

		console.log(`Hi, my name is ${this.name} and I am of type ${this.type}`);
	}
}

class Wizard extends Player{
	constructor(name,type){
		super(name,type);
	}
	play(){
		console.log(`I am a wizard my name is ${this.name}`);
	}
}


const wizard1 = new Wizard('Ajay','Healer');
const wizard2= new Wizard('Tom','magician');


/***Pass by value and reference***/
//ES7
//.includes()
let pet=['cat','dog','rabbit'];
pet.includes('dog');//Gives true since it includes

"hello".includes("h");//Gives true since it includes the 'h'.


//exponential
let square=(x)=>x**2;

const cube=(y)=>y**3;


//.padStart()
//.padEnd()
"turtle".padStart(3);
"Andy".padEnd(10);
//keys, gives keys and then the value


//.flat()
//It converts the nested array to simple array removes the layers

const a=[1,[2,3],4,5];
a.flat();
 const b=[1,2,3,4,5,5,[6,[78,[9]]]];
 b.flat(3); //since I have to remove the 3 layers. same result even if we do flat[50].


 //.flatMap


 const some=[['Cahil',22],['Roman',34],['Batista',44]];
 some.flatMap(stars=>{
 	return stars[1]+10;
 })//adds  10 to all the integer values.

//trimStart()
//trimEnd()
//as it says

//.fromEntries()
Object.fromEntries(some);
 //Gives the data in user object format.


 //Advanced for loops
 //forloop
const veg=['cabbage','tomato','cucumber'];
 for(let i=o;i<veg.length;i++){
 	console.log(veg[i]);
 }

 //forEach
 veg.forEach(veg=>{
 	console.log(veg);
 })

 //for of
 //can be used for iteration of arrays and strings
 for(item of veg){
 	console.log(item); //used to iterate 
 }

 //for in
let  completeVeg={
	cabbage:25,
	tomato:11,
	cucumber:45
}
for(item in completeVeg){
	console.log(item); //used to enumerate over objects.
}
















