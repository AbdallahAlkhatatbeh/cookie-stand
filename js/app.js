'use strict'
var workingHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

var seattle = {
    name: 'seattle',
    avgCoockies: 6.3,
    cust: [],
    cookies: [],
    total: 0,
    customers: function () {
        for (let i = 0; i < workingHours.length; i++) {
          var anything  = Math.floor(Math.random() * (65 - 23) + 23);
          
          this.cust.push(anything)
            this.cookies[i] = Math.floor(this.cust[i] * this.avgCoockies);
            this.total = this.total + this.cookies[i];

        }
        console.log(this.cust);
        console.log(this.cookies);

 return this.total, this.cookies 
    }

}
seattle.customers()
// console.log(seattle.name);
    


var tokyo = {
    name: 'Tokyo',
    avgCoockies: 1.3,
    cust: [],
    cookies: [],
    total: 0,
    customers: function () {
        for (let i = 0; i < workingHours.length; i++) {
          var anything  = Math.floor(Math.random() * (24 - 3) + 3);;
          
          this.cust.push(anything)
            this.cookies[i] = Math.floor(this.cust[i] * this.avgCoockies);
            this.total = this.total + this.cookies[i];

        }
        console.log(this.cust);
        console.log(this.cookies);

 return this.total, this.cookies 
    }
}
tokyo.customers();


var dubai = {
    name: 'Dubai',
    avgCoockies: 3.7,
    cust: [],
    cookies: [],
    total: 0,
    customers: function () {
        for (let i = 0; i < workingHours.length; i++) {
          var anything  = Math.floor(Math.random() * (38 - 11) + 11);;
          
          this.cust.push(anything)
            this.cookies[i] = Math.floor(this.cust[i] * this.avgCoockies);
            this.total = this.total + this.cookies[i];

        }
        console.log(this.cust);
        console.log(this.cookies);

 return this.total, this.cookies 
    }
}
dubai.customers();



var paris = {
    name: 'Paris',
    avgCoockies: 2.3,
    cust: [],
    cookies: [],
    total: 0,
    customers: function () {
        for (let i = 0; i < workingHours.length; i++) {
          var anything  = Math.floor(Math.random() * (24 - 3) + 3);;
          
          this.cust.push(anything)
            this.cookies[i] = Math.floor(this.cust[i] * this.avgCoockies);
            this.total = this.total + this.cookies[i];

        }
        console.log(this.cust);
        console.log(this.cookies);

 return this.total, this.cookies
    }
}
paris.customers();

var lima = {
    name: 'Lima',
    avgCoockies: 4.6,
    cust: [],
    cookies: [],
    total: 0,
    customers: function () {
        for (let i = 0; i < workingHours.length; i++) {
          var anything  = Math.floor(Math.random() * (16 - 2) + 2);;
          
          this.cust.push(anything)
            this.cookies[i] = Math.floor(this.cust[i] * this.avgCoockies);
            this.total = this.total + this.cookies[i];

        }
        console.log(this.cust);
        console.log(this.cookies);

 return this.total, this.cookies
    }
}
lima.customers();

var x = document.getElementById("bodyId")
var y = document.createElement('article');
x.appendChild(y); 
var pE1 =  document.createElement('p');
y.appendChild(pE1);
pE1.textContent='Seattle';

var ulE1 = document.createElement('ul');
pE1.appendChild(ulE1);

 for (let i = 0; i < workingHours.length; i++) {
    var liE1 = document.createElement('li'); 
     ulE1.appendChild(liE1); 
     liE1.textContent =`${workingHours[i]}  coockies    ${seattle.cookies[i]}`  
 }
 liE1.textContent = `Total: ${seattle.total}`








var pE2 =  document.createElement('p');
y.appendChild(pE2);
pE2.textContent='Tokyo';

var ulE2 = document.createElement('ul');
pE2.appendChild(ulE2);

 for (let i = 0; i < workingHours.length; i++) {
    var liE2 = document.createElement('li'); 
     ulE2.appendChild(liE2); 
     liE2.textContent =`${workingHours[i]}  coockies   ${tokyo.cookies[i]}`  
 }
 liE2.textContent = `Total: ${tokyo.total}`



 var pE3 =  document.createElement('p');
y.appendChild(pE3);
pE3.textContent='Dubai';

var ulE3 = document.createElement('ul');
pE3.appendChild(ulE3);

 for (let i = 0; i < workingHours.length; i++) {
    var liE3 = document.createElement('li'); 
     ulE3.appendChild(liE3); 
     liE3.textContent =`${workingHours[i]}  coockies   ${dubai.cookies[i]}`  
 }
 liE3.textContent = `Total: ${dubai.total}`



 var pE4 =  document.createElement('p');
y.appendChild(pE4);
pE4.textContent='Paris';

var ulE4 = document.createElement('ul');
pE4.appendChild(ulE4);

 for (let i = 0; i < workingHours.length; i++) {
    var liE4 = document.createElement('li'); 
     ulE4.appendChild(liE4); 
     liE4.textContent =`${workingHours[i]}  coockies   ${paris.cookies[i]}`  
 }
 liE4.textContent = `Total: ${paris.total}`



 var pE5 =  document.createElement('p');
y.appendChild(pE5);
pE5.textContent='Lima';

var ulE5 = document.createElement('ul');
pE5.appendChild(ulE5);

 for (let i = 0; i < workingHours.length; i++) {
    var liE5 = document.createElement('li'); 
     ulE5.appendChild(liE5); 
     liE5.textContent =`${workingHours[i]}  coockies   ${lima.cookies[i]}`  
 }
 liE5.textContent = `Total: ${lima.total}`








 






 