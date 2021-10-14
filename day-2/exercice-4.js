export function my_display_comb(){
    var array = []
    var count = 0
    for (let i = 0 ; i<=2; i++){
        for (let j = 0 ; j<=99; j++){
            array[count] = `${i} ${j}`
            count++
        }  
    }
    return array
}


