let name = "Sabbir Ahmed";
let age = 24;
let birthday = "January 21"
let detroitGC = true;
let lifeEvents = ["I was born in Bangladesh", "I moved to the usa in 2001", "2020 LE COVID happened", "bootcamp started"]

if (detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
}
else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
}

for (let i = 0; i <= lifeEvents.length - 1; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
    let randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber != 5) {
        counter++;
        console.log(`${randomNumber}!==5`);
    } else {
        counter++;
        console.log(`5===5. it took ${counter} iterations to randomly generate the number 5`);
        break;
    }
}

//Extra practice question for lab below 

let hours = 41;
let wage = 10;
let pay = (hours * wage);
let overtime = (((hours - 40) * 15) + 400);


if (hours >= 50) {
    pay = overtime;
}
else {
    pay = (hours * wage);
}
console.log(pay);

//number of weeks to make a million 

let million = (1000000 / pay);
console.log(`Working ${hours} hours at ${wage} dollars an hour every week, it would take a person ${million} weeks exactly to earn A million dollars. Yikes!`)
