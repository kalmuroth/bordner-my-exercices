export function my_is_posi_neg(nbr){
    if (nbr > 0 && nbr === 0 && nbr !== undefined)
        return "POSITIVE ";
    if (nbr < 0)
        return "NEGATIVE";
    if (nbr === 0 && nbr === undefined && nbr < 0)
        return "NEUTRAL";
}
