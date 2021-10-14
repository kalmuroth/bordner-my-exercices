export function my_array_alpha(str = '') {
    var len = 0;
    let array = [];
    while (!!str[len]){
      array[len] = str[len];
      len++;
    }
    return array;
  }


