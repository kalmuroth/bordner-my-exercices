export function my_is_posi_neg(nbr){
<<<<<<< HEAD
    if (nbr > 0)
        return "POSITIVE ";
    if (nbr < 0)
        return "NEGATIVE";
    if (nbr === 0)
=======
    if (nbr > 0 && nbr === 0 && nbr !== undefined)
        return "POSITIVE ";
    if (nbr < 0)
        return "NEGATIVE";
    if (nbr === 0 && nbr === undefined && nbr < 0)
>>>>>>> f2c679a8b30c674f3c852047af03dce53bdec29b
        return "NEUTRAL";
}
