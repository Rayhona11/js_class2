
// DO WHILE
// let i = 0;
// do{
//     console.log(i);
//    i++
// }while (i < 10)

// For
// break;//  continue
for (let j = 0; j < 100; j++){
    if(j > 50) break
    if(j % 10 === 0){ console.log(j);}
    else{  continue
    //     break
       console.log('Mos emas');
    }
}


let arr = [1,5,12,18,20]
for (let a = 0; a < arr.length; a++){
    console.log(arr[a]);
}

// FOR IN

let obj = {
    name:"Dog",
    age :5
}

for (const key in obj){
    console.log(key);
    console.log(obj[key]);
}


let  group = ["Shaxruz","Farid","Bobur","Shavkat","Xusan","Sardor","Laziz","Tolibjon","Bobur","Rayhona","Nodirbek","Jasmina"];
for (let a = 0; a < group.length; a++){
    console.log(group[a]+ ". 23-gurux talabasi");
}

let c = 0;
do {
    console.log(c);
    c++
}while (c < 21);