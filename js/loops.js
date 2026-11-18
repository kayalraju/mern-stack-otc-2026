
// for(let i=0; i<10; i++){
//     console.log(i);
// }


//while

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }


//loop brack

// for(let i=0; i<=10; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }

//continue
// for(let i=0; i<=10; i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i);
// }

// for of loop

//const language=["html","css","js","nodejs","expressjs","mongodb","reactjs","ts","nextjs","tailwindcss","bootstrap"];

//console.log(language);

//syntax of for of loop

// for(let variable of valuer){
//     //execute
// }

// for(let lang of language){
//     console.log(lang);
// }

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// let sum=0
// for(let number of numbers){
//     sum+=number;
   
// }
//  console.log(sum);



// for in loop


// for(let key in obj){
//     //execute
// }


const employee={
    name:"raju",
    age:26,
    statu:false,
    course:"nodejs",
    salary:15000,
    company:"webskitters",
    city:"kolkata"
}

//console.log(employee.course);

for(let key in employee){
    console.log(key,employee[key]);
}