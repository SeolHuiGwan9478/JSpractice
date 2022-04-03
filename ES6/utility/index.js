//forof, forEach, map
const members = ['영훈', '윤수', '희관', '우성'];

for(let member of memebers){
    console.log(`${member}님이 입장하셨습니다.`);
}

//forEach와 map은 각 배열에 있는 프로퍼티
members.forEach((member) => {
    console.log(`${member}님이 입장하셨습니다.`);
});
members.forEach((member, i) => {
    console.log(`${i} ${member}님이 입장하셨습니다.`);
});

//map
const firtNames = ['영훈', '윤수', '희관', '우성']
const lastNames = ['강', '이', '설', '신'];

const fullNames = firstNames.map((firstNames, i) => {
    return lastNames[i] + firstNames;
})

members.forEach((member) => {
    console.log(`${member}님이 입장하셨습니다.`);
    members.push('주연');
});

console.log(members);

//filter와 find
const devices = [
    { name: 'GalaxyNote', brand: 'Samsung'},
    { name: 'MacbookPro', brand: 'Apple'},
    { name: 'iPad', brand: 'Apple'},
    { name: 'GalaxyWatch', brand: 'Samsung'},
    { name: 'Gram', brand: 'LG'},
    { name: 'GalaxyBook', brand: 'Samsung'},
    { name: 'SurfacePro', brand: 'MS'},
    { name: 'MacbookAir', brand: 'Apple'},
];

const apples = devices.filter((el) => el.brand === 'Apple');

console.log(apples);

const myLaptop = devices.find((el) => el.name === 'Gram');

console.log(myLaptop);