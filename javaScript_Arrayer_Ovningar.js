// Svara på nedan frågor med hjälp av den här arrayen:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];


//Skapa en array med hjälp av forEach som ger alla användarnamnen en "!" till alla
const anvandarNamn = [];
const uttropsTeckenArray = array.forEach((user)=> {
	let { anvandarNamn } = user;
	 username = username + "!";
	 newArray.push(username);
});
console.log(anvandarNamn);



//Skapa en med hjälp av map som ger alla användarnamn en "? på slutet av alla efternamnen
const namnFragetacken = array.map((username) => {
let { anvandarNamn } = user;
return username + "?";
});
console.log('mapArray', namnFragetacken);

//Filtrera arrayen att bara inkludera dem som är i lag röd
const lagRod = array.filter(user => {
	return user.team === "red";
})
console.log('Filter', lagRod);

//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);

const arrayNum = [1,2,4,5,8,9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

const answer = array.map(user => {
	user.item = user.item.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);







