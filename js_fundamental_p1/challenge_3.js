const teamDolphins = [97, 112, 101];
const teamKoalas = [109, 95, 123];

function calcAverage(scores){
    let sum = 0;
    let matches = scores.length;
    for (let score of scores){
        sum += score;
    }
    return Math.round(sum/matches);
}

const markOfDolphins = calcAverage(teamDolphins);
const markOfKoalas = calcAverage(teamKoalas);

if (markOfDolphins < 100 && markOfKoalas < 100){
    console.log("No one win the trophy.")
}else if (markOfDolphins > markOfKoalas && markOfDolphins > 100){
    console.log(`Team Dolphins won the trophy with ${markOfDolphins} scores.`);
}else if (markOfKoalas > markOfDolphins && markOfKoalas > 100){
    console.log(`Team Dolphins won the trophy with ${markOfKoalas} scores.`);
}