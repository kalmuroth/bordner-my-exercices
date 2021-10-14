export function my_string_is_number(str){
    var nombre = 0
    var i = 0
    const tab = ["0","1","2","3","4","5","6","7","8","9"]
    while (str[nombre] != undefined){
      while (i < 10){
        if (str[nombre] == tab[i]) {
          return true;
        }
        i++
      }
      i = 0;
      nombre++;
    }
    return false;
}
