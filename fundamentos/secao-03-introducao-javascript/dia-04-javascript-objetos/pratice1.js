let player = {
    namePerson: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
};

console.log ('a jogadora ' + player.namePerson + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');


player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log ('a jogadora ' + player.namePerson + ' ' + player.lastName + ' foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes');

console.log ('a jogadora possui ' + player.medals['golden'] + ' medalhas de ouro e ' + player.medals['silver'] + ' medalhas de prata');