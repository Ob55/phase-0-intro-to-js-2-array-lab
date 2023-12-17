// Write your solution here!
 let cats;

 cats = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendCat(Ralph){
     cats.push(Ralph)
   }
   function destructivelyPrependCat(Bob) {
     cats.unshift(Bob);
   }
    function destructivelyRemoveLastCat(){
     cats.pop()
    }
    function destructivelyRemoveFirstCat(){
     cats.shift()
    }
    let catss = ["Milo","Otis", "Garfield"];
    function appendCat(Broom){
     const newCat =[...catss,Broom];
     return newCat;
    }

    let brianCats = ["Milo","Otis", "Garfield"];
     function prependCat(Arnold){
          const beginningCat =[Arnold , ...brianCats];
          return beginningCat;
     }
     let removesCat =["Milo","Otis", "Garfield"];
       function removeLastCat(){
         const removelCats = brianCats.slice(0 , -1)        
         return removelCats;
     }      
     let firstCat =["Milo","Otis", "Garfield"];
       function removeFirstCat(){
         const changeCats = firstCat.slice(1)        
         return changeCats;
       }