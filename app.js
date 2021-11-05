// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
// a
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(jokeJS1);
// b
p1.innerText = jokeJS1.setup;
// c
p2.innerText = jokeJS1.punchline;



// https://friends-quotes-api.herokuapp.com/


// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);
// a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
// b
.then(res => {
   const friendsJS2 = res.data.quote;
    // c
    p3.innerText = res.data.character;
    p4.innerText = friendsJS2
})
// d
.catch(err => {
    console.log(`Failure to obtain quote`);
    console.log(err);
})

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);
// a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
// b
async function randomQuote() {
    try {
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
        // c
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;
        // d
    } catch (err) {
        console.log(`Failure to obtain quote`);
        console.log(err);
    }
}
randomQuote();


// https://www.tvmaze.com/api
// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);
// a
async function tvMazeFunc() {
    try {
        const seasonEp = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
        p7.innerText = seasonEp.data.name;

    } catch (err) {
        console.log(`Failure to obtain information`);
        console.log(err);
    }
}
tvMazeFunc();