export function my_is_posi_neg(nbr){
    switch (true){
        case nbr < 0 :
            return "NEGATIVE";
        case nbr === 0 :
            return "NEUTRAL";
        default:
            return "POSITIF";
        }
    }
