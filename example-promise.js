// function getTempCallback (location, callback){
//   callback(undefined, 78);
//   callback('city not found');
// }
//
// getTempCallback('Fairfield', function (err, temp) {
//  if(err){
//    console.log('error', err);
//
//  } else {
//    console.log('success', temp);
//  }
// });
//
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('Fairfield').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// })


//Resolve sum, if value is not int make it error out
function addPromise(a,b){
  return new Promise( function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
        resolve( a + b);
    } else {
        reject('One of the values is not a number');
    }


  });
}

addPromise('2',4).then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
})
