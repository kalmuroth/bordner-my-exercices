import {my_display_alpha} from './exercice-1.js'

export function my_display_alpha_reverse(){  
  var alpha = my_display_alpha();
  var len = 0;
  let array = [];
  var string = "";
  while (alpha[len] !== undefined){
    array[len] = "";
    len++;
  }
  var maxLen = len;
  while (len != 0 && alpha[maxLen-len]  !== undefined){
    array[len] = alpha[maxLen-len];
    var string =  array[len] + string;
    len--;
  }
  return string;
}
<<<<<<< HEAD
=======
console.log(my_display_alpha_reverse());
>>>>>>> f2c679a8b30c674f3c852047af03dce53bdec29b
