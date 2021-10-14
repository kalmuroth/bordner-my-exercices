import {my_size_alpha} from '../day-1/exercice-4.js'

export function my_alpha_reverse(str){  
    var result = ""
    var i = 0
    var j = 0
    var l = my_size_alpha(str)
    
    while (i++ < l) {
        var k = i
        if (str[i] === " " || (i === l - 1) && k++) {
            while (--k >= j) result += str[k]
            j = i + 1
            result += " "
        }
    }
    return result;
  }
