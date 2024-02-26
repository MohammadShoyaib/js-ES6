// access the value of object wghich is in the array
/* const Data = [{ id:1,name:'bosak', address: 'mohicor'}];
console.log(Data[0].address);

const arraData = [{id:32,  name:'nalak'},{id:35,  name:'chalak'},{id:30,  name:'malek'}];
console.log(arraData[1].id);
const abhay = [{name:'sanjay',class: '13th'}]
console.log(abhay[0].name);

// access the value of an array which is in the object


const DDR = {
    name: 'sahidul',
    address:[
        {address1: 'baluahat'},
        
        {address2:' daridoho'}
    ]
}

console.log(DDR.address[1]);

const xyz = {
    name : 'sanjida',
    class: '12th',
    data:[
        {gpa:'5.00',height:'5 feet 2 inch',result:'pass',weight:'50kg'}
    ]
}
console.log(xyz.data[0].result);


const randomObject = {
    name: "RandomObject",
    type: ["random", "object", "example"],
    data: {
      value1: Math.random() * 100,
      value2: Math.random() * 200,
      value3: Math.random() * 300,
       dataC : [10,320,3,5,65]
    }
  };
  console.log(randomObject.data.dataC[2]+randomObject.data.dataC[4]);

  console.log(randomObject.type[0]+ ' '+randomObject.data.value2);
  console.log(randomObject.data.value2*randomObject.data.dataC[4]);
 */
//   map
// system 1
/* const number = [2,2,3,65,65,86,663];
const double = [];
for (const num of number) {
    const doubled = num*2;
    double.push(doubled);
}
   */
// normal map

/* const number = [2,3,5,6,8];

function doubleIt (num){
    return num*2;
}
const result = number.map(doubleIt);
console.log(`result is: ${result}`);

// practice

const numberr = [2,3,5,63,58,68,6,8];
function Map(Num){
    return Num-2;
}
const Result = numberr.map(Map);
console.log(Result);

const a = [1,2,2,3,5,3,5];
function b(c){
    return c+3.3;
}

const d = a.map(b);

console.log(`result is: ${d}`);


const abc = [10,20,3,0,60,5];
const xx = (nm) => nm*2;
const xcx = abc.map(xx);
console.log(`outout is: ${xcx}`);

const rabbit = [10,32,0,30,3,41];
const ox = (cow) => cow-2.32;
const cat = rabbit.map(ox);

const output = `output is : ${cat}`;
console.log(output);

const name = [10,20,320,2];
const xyx = name.map(n => n*2);
console.log(xyx);

const praMap = [22,33,55,88,66,33,5558,5];
const myx = praMap.map(x => x-2.25);
console.log(`result is : ${myx}`);

const another = [22,33,53,53,5];
const cvc = another.map(zx => zx-5);
console.log(`output of cvc : ${cvc}`);
// filter

const players = [10,203,20,3,56,58];
const selected = players.filter(p => p>55);
console.log(selected);

const pp = [10,20,30,50,80];
const px = pp.filter(f => f>33);

console.log(px);

//  find
const findd = [10,20,30,30,30,5202,5];
const sece = findd.find( c => c>10 );
console.log(sece);

// reduce 
// important 

const numbx = [10,20,30,50];
const total = numbx.reduce((one, two) =>one+two,0);
console.log(total);

const nmbr = [1,2,3,7];
const toal = nmbr.reduce((x,y) =>x+y,0);
console.log(toal);

const rdx = [10,20,30];
const qwex = rdx.reduce((c,d) => (c-d));
console.log(qwex);

const red = [2,3,12];
const vvv = red.reduce((e,f) => e*f);
console.log(`result is : ${vvv}`);

 */
// js class
// has some properties
// constructor
class Product{
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}




