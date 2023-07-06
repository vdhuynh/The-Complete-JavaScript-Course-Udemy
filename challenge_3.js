const scoreDolphins = [96, 108, 89];
const scoreKoalas = [88, 91, 110];
let dolphinSum = 0;
let koalaSum = 0;

scoreDolphins.forEach((score) => {
    dolphinSum += score;
});

scoreKoalas.forEach((score) => {
    koalaSum += score;
});

const averageDolphin = dolphinSum / scoreDolphins.length;
const averageKoalas = koalaSum / scoreKoalas.length;

if (averageDolphin === averageKoalas) {
    console.log("Both win the trophy");
} else if (averageDolphin > averageKoalas) {
    console.log("Dolphins win the trophy");
} else {
    console.log("Koalas win the trophy");
}
