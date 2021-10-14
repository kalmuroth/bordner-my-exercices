export function my_display_comb(){
    var array = []
    var count = 0
    var count_deux = 0
    while (count < 99){
        while (count_deux < 99){
            array[count_deux] = count_deux
            count_deux++
        } 
        array[count] = count  
        count++   
    }
    return array
}
console.log(my_display_comb());