'use strict'
var workingHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM','8PM'];


var  contaner = document.getElementById('bodyId');
  var  article1 = document.createElement('article');
  contaner.appendChild(article1);
   var salesResule = document.createElement('table');
contaner.appendChild(salesResule);
var tr1 = document.createElement('tr');
salesResule.appendChild(tr1);
var myCookies = document.createElement('th');
        tr1.appendChild(myCookies);

var cust=[];
var total=0;

function Location (name,mincustomers,maxcustomers,avgCoockies,Coockies){
    this.name=name;
    this.mincustomers=mincustomers;
    this.maxcustomers=maxcustomers;
    this.avgCoockies=avgCoockies;
   this.Coockies=Coockies; 
}
Location.prototype.randomcust= function () {
            for (let i = 0; i < workingHours.length; i++) {
         var anything  = Math.floor(Math.random() * (this.maxcustomers -this.mincustomers) + this.mincustomers);
         
         cust.push(anything)
                     this.Coockies[i] = Math.floor(cust[i] * this.avgCoockies);
                 total = total + this.Coockies[i];
            }
        }




         Location.prototype.tableHeader= function() { 
   
            myCookies.textContent = "          ";
    for (let i = 0; i < workingHours.length ; i++){
             myCookies = document.createElement('th');
            tr1.appendChild(myCookies);
            myCookies.textContent = workingHours[i] ;
          }
          myCookies = document.createElement('th');
          tr1.appendChild(myCookies);
          myCookies.textContent = "Daily location total";
 
 }


Location.prototype.render=function (){

var tr2 = document.createElement('tr');
salesResule.appendChild(tr2);
var myCookies = document.createElement('td');
        tr2.appendChild(myCookies);
        myCookies.textContent = this.name;
for (let  i = 0; i < workingHours.length ; i++){
         myCookies = document.createElement('td');
        tr2.appendChild(myCookies);
        myCookies.textContent = this.Coockies[i] ;
      }
      myCookies = document.createElement('td');
      tr2.appendChild(myCookies);
      myCookies.textContent = `${total}`;
 }



 Location.prototype.totalsOfTotals= function() { 
var tr3 = document.createElement('tr');
salesResule.appendChild(tr3); 
var myCookies = document.createElement('td');
        tr3.appendChild(myCookies);
        myCookies.textContent ='Total';
        var totalOfTotals = 0 ; 
for (let  i = 0; i < workingHours.length ; i++){
    var colSum = 0 ; 
    for (let j = 0; j < nations.length; j++) {
        
      colSum += nations[j].Coockies[i];        
    }
    totalOfTotals += colSum;
    myCookies=document.createElement('td');
    tr3.appendChild(myCookies); 
    myCookies.innerHTML=colSum ;


      }
     myCookies=document.createElement('td'); 
     tr3.appendChild(myCookies);
     myCookies.textContent= totalOfTotals;
 }
// Location.prototype.hoursrow=function(){
//     var x = document.getElementById("bodyId")
//  var y = document.createElement('table');
//  x.appendChild(y); 
//  var trE1 = document.createElement('tr');
//  y.appendChild(trE1); 
//  var thE1 = document.createElement('th'); 
//     trE1.appendChild(thE1); 
//  thE1.textContent ="   ";
//  for (let i = 0; i < workingHours.length; i++) {
//     var thE1 = document.createElement('th'); 
//     trE1.appendChild(thE1); 
//      thE1.textContent =` ${workingHours[i]}`
// }


// }

// Location.prototype.hoursrow();



//             Location.prototype.render=function(){
//             var x = document.getElementById("bodyId")
//  var y = document.createElement('table');
//  x.appendChild(y); 
// //  var trE1 =  document.createElement('tr');
// //  y.appendChild(trE1);
// //  trE1.textContent=this.name;

// //  var thE1 = document.createElement('th');
// //  pE1.appendChild(thE1);

//   for (let i = 0; i < workingHours.length; i++) {
//      var trE1 = document.createElement('tr'); 
//      trE1.appendChild(thE1); 
//       thE1.textContent =` ${workingHours[i]}`  
//   }
//  thE1.textContent = ` ${total}`
//             }

var Seattle = new Location('Seattle','23','65','6.3',[]);
var Tokyo = new Location('Tokyo','3','24',' 1.3',[]);
var Dubai = new Location('Dubai','11','38','3.7',[]);
var Paris = new Location('Paris','20','38','2.3',[]);
var Lima = new Location('Lima','2','16','4.6',[]);

var nations = [Seattle,Tokyo,Dubai,Paris,Lima]; 
Location.prototype.tableHeader();

for (let i = 0; i < nations.length; i++) {
    nations[i].randomcust(); 
    nations[i].render(); 
    console.log(nations[i]);
}
Location.prototype.totalsOfTotals();





// Seattle.randomcust();
// Seattle.render();
// Tokyo.randomcust();
// Tokyo.render();
// Dubai.randomcust();
// Dubai.render();
// Paris.randomcust();
// Paris.render();
// Lima.randomcust();
// Lima.render();




// var seattle = {
//     name: 'seattle',
//     avgCoockies: 6.3,
//     cust: [],
//     cookies: [],
//     total: 0,
//     customers: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//           var anything  = Math.floor(Math.random() * (65 - 23) + 23);
          
//           this.cust.push(anything)
//             this.cookies[i] = Math.floor(this.cust[i] * this.avgCoockies);
//             this.total = this.total + this.cookies[i];

//         }
//         console.log(this.cust);
//         console.log(this.cookies);

//  return this.total, this.cookies 
//     }

// }
// seattle.customers()
// // console.log(seattle.name);
    


// var tokyo = {
//     name: 'Tokyo',
//     avgCoockies: 1.3,
//     cust: [],
//     cookies: [],
//     total: 0,
//     customers: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//           var anything  = Math.floor(Math.random() * (24 - 3) + 3);;
          
//           this.cust.push(anything)
//             this.cookies[i] = Math.floor(this.cust[i] * this.avgCoockies);
//             this.total = this.total + this.cookies[i];

//         }
//         console.log(this.cust);
//         console.log(this.cookies);

//  return this.total, this.cookies 
//     }
// }
// tokyo.customers();


// var dubai = {
//     name: 'Dubai',
//     avgCoockies: 3.7,
//     cust: [],
//     cookies: [],
//     total: 0,
//     customers: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//           var anything  = Math.floor(Math.random() * (38 - 11) + 11);;
          
//           this.cust.push(anything)
//             this.cookies[i] = Math.floor(this.cust[i] * this.avgCoockies);
//             this.total = this.total + this.cookies[i];

//         }
//         console.log(this.cust);
//         console.log(this.cookies);

//  return this.total, this.cookies 
//     }
// }
// dubai.customers();



// var paris = {
//     name: 'Paris',
//     avgCoockies: 2.3,
//     cust: [],
//     cookies: [],
//     total: 0,
//     customers: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//           var anything  = Math.floor(Math.random() * (24 - 3) + 3);;
          
//           this.cust.push(anything)
//             this.cookies[i] = Math.floor(this.cust[i] * this.avgCoockies);
//             this.total = this.total + this.cookies[i];

//         }
//         console.log(this.cust);
//         console.log(this.cookies);

//  return this.total, this.cookies
//     }
// }
// paris.customers();

// var lima = {
//     name: 'Lima',
//     avgCoockies: 4.6,
//     cust: [],
//     cookies: [],
//     total: 0,
//     customers: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//           var anything  = Math.floor(Math.random() * (16 - 2) + 2);;
          
//           this.cust.push(anything)
//             this.cookies[i] = Math.floor(this.cust[i] * this.avgCoockies);
//             this.total = this.total + this.cookies[i];

//         }
//         console.log(this.cust);
//         console.log(this.cookies);

//  return this.total, this.cookies
//     }
// }
// lima.customers();

// var x = document.getElementById("bodyId")
// var y = document.createElement('article');
// x.appendChild(y); 
// var pE1 =  document.createElement('p');
// y.appendChild(pE1);
// pE1.textContent='Seattle';

// var ulE1 = document.createElement('ul');
// pE1.appendChild(ulE1);

//  for (let i = 0; i < workingHours.length; i++) {
//     var liE1 = document.createElement('li'); 
//      ulE1.appendChild(liE1); 
//      liE1.textContent =`${workingHours[i]}  coockies    ${seattle.cookies[i]}`  
//  }
//  liE1.textContent = `Total: ${seattle.total}`








// var pE2 =  document.createElement('p');
// y.appendChild(pE2);
// pE2.textContent='Tokyo';

// var ulE2 = document.createElement('ul');
// pE2.appendChild(ulE2);

//  for (let i = 0; i < workingHours.length; i++) {
//     var liE2 = document.createElement('li'); 
//      ulE2.appendChild(liE2); 
//      liE2.textContent =`${workingHours[i]}  coockies   ${tokyo.cookies[i]}`  
//  }
//  liE2.textContent = `Total: ${tokyo.total}`



//  var pE3 =  document.createElement('p');
// y.appendChild(pE3);
// pE3.textContent='Dubai';

// var ulE3 = document.createElement('ul');
// pE3.appendChild(ulE3);

//  for (let i = 0; i < workingHours.length; i++) {
//     var liE3 = document.createElement('li'); 
//      ulE3.appendChild(liE3); 
//      liE3.textContent =`${workingHours[i]}  coockies   ${dubai.cookies[i]}`  
//  }
//  liE3.textContent = `Total: ${dubai.total}`



//  var pE4 =  document.createElement('p');
// y.appendChild(pE4);
// pE4.textContent='Paris';

// var ulE4 = document.createElement('ul');
// pE4.appendChild(ulE4);

//  for (let i = 0; i < workingHours.length; i++) {
//     var liE4 = document.createElement('li'); 
//      ulE4.appendChild(liE4); 
//      liE4.textContent =`${workingHours[i]}  coockies   ${paris.cookies[i]}`  
//  }
//  liE4.textContent = `Total: ${paris.total}`



//  var pE5 =  document.createElement('p');
// y.appendChild(pE5);
// pE5.textContent='Lima';

// var ulE5 = document.createElement('ul');
// pE5.appendChild(ulE5);

//  for (let i = 0; i < workingHours.length; i++) {
//     var liE5 = document.createElement('li'); 
//      ulE5.appendChild(liE5); 
//      liE5.textContent =`${workingHours[i]}  coockies   ${lima.cookies[i]}`  
//  }
//  liE5.textContent = `Total: ${lima.total}`







// var  contaner = document.getElementById('sales');
//   var  article1 = document.createElement('article');
//   contaner.appendChild(article1);
//    var salesResule = document.createElement('table');
// contaner.appendChild(salesResule);
// var tr1 = document.createElement('tr');
// salesResule.appendChild(tr1);
// var myCookies = document.createElement('th');
//         tr1.appendChild(myCookies);

// function City (name,avgCoockies,customers,cookiesSold,total,minCus,maxCus){
//     this.name=name;
//     this.avgCoockies = avgCoockies; 
//     this.customers = customers; 
//     this.cookiesSold = cookiesSold; 
//     this.total = total; 
//     this.minCus= minCus; 
//     this.maxCus = maxCus; 
// }
//  City.prototype.cusCount= function() {
//     for (let i = 0; i < workingHours.length; i++) {
//         var anything = Math.floor(Math.random() * (this.maxCus- this.minCus) + this.minCus);
//         this.customers.push(anything);
//         var somthing = Math.floor(this.customers[i] * this.avgCoockies);
//         this.cookiesSold.push(somthing);
//         this.total = this.total + this.cookiesSold[i];
        
//     }
//     console.log(this.customers);
//     console.log(this.cookiesSold);
//     console.log(this.total);
    
//     return this.total, this.cookiesSold;
    
    
// }
//  City.prototype.tableHeader= function() { 
   
//             myCookies.textContent = "          ";
//     for (let i = 0; i < workingHours.length ; i++){
//              myCookies = document.createElement('th');
//             tr1.appendChild(myCookies);
//             myCookies.textContent = workingHours[i] ;
//           }
//           myCookies = document.createElement('th');
//           tr1.appendChild(myCookies);
//           myCookies.textContent = "Daily location total";
 
//  }


// City.prototype.render=function (){

// var tr2 = document.createElement('tr');
// salesResule.appendChild(tr2);
// var myCookies = document.createElement('td');
//         tr2.appendChild(myCookies);
//         myCookies.textContent = this.name;
// for (let  i = 0; i < workingHours.length ; i++){
//          myCookies = document.createElement('td');
//         tr2.appendChild(myCookies);
//         myCookies.textContent = this.cookiesSold[i] ;
//       }
//       myCookies = document.createElement('td');
//       tr2.appendChild(myCookies);
//       myCookies.textContent = `${this.total}`;
//  }



//  City.prototype.totalsOfTotals= function() { 
// var tr3 = document.createElement('tr');
// salesResule.appendChild(tr3); 
// var myCookies = document.createElement('td');
//         tr3.appendChild(myCookies);
//         myCookies.textContent ='Total';
//         var totalOfTotals = 0 ; 
// for (let  i = 0; i < workingHours.length ; i++){
//     var colSum = 0 ; 
//     for (let j = 0; j < nations.length; j++) {
        
//        colSum    +=  nations[j].cookiesSold[i];
        
//     }
//     totalOfTotals += colSum;
//     myCookies=document.createElement('td');
//     tr3.appendChild(myCookies); 
//     myCookies.innerHTML=colSum ;


//       }
//      myCookies=document.createElement('td'); 
//      tr3.appendChild(myCookies);
//      myCookies.textContent= totalOfTotals;
//  }

// var seattle = new City ('Seattle',6.3,[],[],0,23,65);
// var tokyo = new City("Tokyo",1.3,[],[],0,3,24);
// var dubai = new City("Dubai",3.7,[],[],0,4,38);
// var paris = new City ("Paris",4.7,[],[],0,6,38);
// var lima = new City("Lima",6.3,[],[],0,23,65);

// var nations = [seattle,tokyo,dubai,paris,lima]; 
// City.prototype.tableHeader();

// for (let i = 0; i < nations.length; i++) {
//     nations[i].cusCount(); 
//     nations[i].render(); 
//     console.log(nations[i]);
// }
// City.prototype.totalsOfTotals();









 






