export function my_size_alpha(str = '') {
    let len = 0;
    while (!!str[len])
      len++;
    return len;
  }