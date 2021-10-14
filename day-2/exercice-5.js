export function my_display_combv2(){
    var array = []
    var count = 0
    for (let i = 0 ; i<=9; i++){
        for (let x = 0 ; x<=9; x++){
            for (let j = 0 ; j<=9; j++){
                if (j != x && x != i && i != j){
                    array[count] = `${i} ${x} ${j}`
                    count++
                }
                if (j == 9 && x == 8 && i == 7){
                    return array
                }
             }  
        }
    }
}
