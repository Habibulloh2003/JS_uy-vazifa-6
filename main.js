// Foydalanuvchilarning bazasi



for (let i = 1; i <= 3; i++) {
   do {
       var ism = prompt("Ismingizni kiriting!")
   } while (Number(ism) || ism == 0 || ism == null)
   do {
       var age = prompt("Yoshingizni kiriting!")
   } while (isNaN(age) || age == 0 || age == null)
   
     
   const users = {
       
   }    
   users.name = ism
   users.age = age
   console.log(`${i} Foydalanuvchi: Ismi ${users.name}, Yoshi ${users.age} da.`); 
}


// Tovarlar korzinasi



let randObj = cartObj();
let str = '';
let narx = '';
let yet = 9000;

for (const key in randObj) {
    if (key == 'Lavash' || key == 'Sushi') {
       str  = str + `Sizning buyurtmangiz: ${key} ` 
    }
    else{
        str  = str + key
    }
    for (const key2 in randObj[key]) {
        if (key2 == 'info') {
            str = str + ` ${randObj[key][key2]}, ` ;
        }
        else if (key2 == 'price') {
            narx =+ narx + randObj[key][key2]
        }
    }
}
let y = narx + yet;
console.log(`${str} | Yetkazib berish bilan bo'lgan narx ${y} . Yetlazish xaqqi (${yet})`);
  
  