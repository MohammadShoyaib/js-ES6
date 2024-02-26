const a = 20;
const b = 10;
const sum = `the result is : ${a+b}`;
console.log(sum);

const one = 11;
const two = 52;
const result = `result of ${a} + ${b} is : ${a+b}`;
console.log(result);

const nameOne = 'shoyaib';
const nameTwo = 'shanto';
const combined = `name is : ${nameOne} ${nameTwo}`;
console.log(combined);

const x = 'name one';
const y = 'name two';
const com = `name value is : ${x} ${y}`;
console.log(com);

const c = 10;
const d = 30;
const e = `result is : ${c-d} `;
console.log(e);

const challange = `hi ami muhammad shoyaib
apni ke? apnar name ki?
apnar basa koi
apni khawa dawa korchen
naki khawa dawa bad dichen`;

console.log(`output is: ${challange}`);


// arrow function

const add = (a,b) => a+b;

const Sum  = add(2,5);
console.log(Sum);

const addition = (m,n) => m+n;
const res = addition(3,8);
console.log(`result is : ${res}`);

const multiplication = (aa,bb) => aa*bb;
const Result = multiplication(9,7);
console.log(`result of aa * bb is : ${Result}`);

const fuction = (cx = 0,cb = 2) => cx -cb;
const vbx = fuction (10);
console.log(`rwsult is : ${vbx}`);
// obj

const getAge = (person) => person.age;
const OneV = {name : 'Emon', age : 22};
const jsx = getAge(OneV);
console.log(jsx);


const getName = (person) => person.name;
const obj = {name:'emon', age:22,hobby:'smoking'};
const emobj = getName(obj);
console.log(`output is: ${emobj}`);

// array

const Index = (value) => value[1];
const indexV = ['shamim','tamim','ramim','hamim',10,20,25];
const indexR = Index(indexV);
console.log(`result is : ${indexR}`);

const array = (index) => index[5];
const indexArray = [10,25,35,358,358,542,'ramim','tamim','shamim'];
const indexResult = array(indexArray);
console.log(`outout is ${indexResult}`);


const abc = (rbs) => rbs[1];
const cbc = ['bilash','chhonda','eti','puja'];
const tsh = abc(cbc);
console.log(`bilash er gf holo: ${tsh}`);

// large arrow function

const fun =(g,h,i) =>{
    const Onee = g + h + i;
    const Oneee = g - h - i;
    const Oneeee = g * h * i;

    return Onee;
}

const vx = fun(3,5,8);
console.log(vx);

// video 7
// new video

const actor = {
    name: 'sriti',
    age :20,
    class : '12th',
    title : 'gandi'
}

const Num = actor.title;
const vv = actor.name;
const outo = `Output is: ${Num} ${vv}`;
console.log(outo);
// destructure

function doubleArra (a,b){
    return[a*3,b-4];
}
const [onE,twO] = doubleArra(3,8);
console.log(onE,twO);

function mainX (q,r){
    return [r-q,q+r];
}
const [jx,sx] = mainX(2.7,33.7);
console.log(`result is: ${jx}, ${sx}`);

// keys

const glass = {name:'glass',color:'golden',price:12,isCleaned:true};
const keys = Object.keys(glass);
console.log(keys);

const ValUes = Object.values(glass);
console.log(`Values are: ${ValUes}`);
