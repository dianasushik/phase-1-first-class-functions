const  chai =  (chai) => 'chai';
const spy = (spies) => 'spies';

function receivesAFunction(spy) {
     return spy(spy);
};


function returnsANamedFunction() {
   return function spies(){
    'spies'
   }
}

function returnsAnAnonymousFunction() {
  return function() {
    'annonymous'
  }
}