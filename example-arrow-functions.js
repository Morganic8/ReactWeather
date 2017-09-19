var names = ['Morgan', 'Rachel', 'Tyler', 'Trevor'];
//
// names.forEach(function (name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));


// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Morgan'))

// var person = {
//   name: 'Morgan',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//
//   }
// };
//
// person.greet();

function add (a, b){
  return a + b;
}

var returnNum = (a, b) => console.log(a+b);
returnNum(2,4);
