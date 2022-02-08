/* DATENSTRUKTUREN */

/* Primitives */

// let a;// (älter var) Definition oder Deklaration

// Wertzuweisung / Assingment
// a = true;       // boolean (true, false)
// a = "Hallo";    // string
// a = 2;          // number

// console.log(typeof a);
// console.log(a);

/* Arrays - Datenstrukturen */ 
// let arr;
// arr = new Array();
// arr = [];
// arr = [true,false,false,true];

// Index beginnt immer mit 0
// console.log(arr);               
// console.log(arr[0]);            
// console.log(arr[3]);            
// console.log(arr.length);        // Arraylänge
// console.log(arr[arr.length-1]); // letztes Element KLAMMER AUFPASSEN
// console.log(arr[5]);            // Gibt es nicht

/* Array - Info, nicht Klausurrelevant */
// let arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

/** Objekte */
// Navigation über Bezeichner


// let obj = {};

// obj = {x:10, y:"Hi"};

// console.log(obj);
// console.log(obj.x);     // Dot-Syntax
// console.log(obj.y);

// obj = {
//     val0: 10,
//     sub1:   {
//         val1: "hi",
//         val2: 2
//             }
//         }

// console.log(obj);
// console.log(obj.sub1.val2); {{{{{{{NESTED OBJECT}}}}}}}
// console.log(obj.sub1.val1);



/** DOM */

// DOM - Modell der HTML Struktur
// DOM - Document object Model
// DOM - Nach dem parsen / Laden der HTML-Seite

// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi"
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!"

/** Entscheidungsstrukturen | Control Flow */

let cond;  // ??

cond = true;
cond = 6 > 4;       // true
cond = 6 < 4;       // false
cond = 4 == 4;      // true  - Test auf Gleichheit
cond = 4 === "4";   // false - Gleichheit Inhalt und Datentyp

if (cond){
    console.log("Aussage wahr");
}else{
    console.log("Aussage falsch");
}

// switch (key){
//      case value:
//          break;
//      default;
//          break;
//}

// https://github.com/01-PP/03_Entscheidungsstrukturen
