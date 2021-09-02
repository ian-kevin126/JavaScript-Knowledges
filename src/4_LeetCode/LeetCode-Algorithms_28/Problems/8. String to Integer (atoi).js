var myAtoi = function(str) {
    let i = 0;
    let sign = 1;
    let res = 0;
    let len = str.length;
    let INT_MAX = 2147483647;
    let INT_MIN = - INT_MAX - 1;
  
    while (str[i] === ' ') i++;
  
    if (str[i] === '+' || str[i] === '-') {
      sign = str[i] === '+' ? 1 : -1;
      i++;
    }
  
    while (str[i] >= '0' && str[i] <= '9') {
      res = (res * 10) + (str[i] - 0);
      if (sign === 1 && res > INT_MAX) return INT_MAX;
      if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
      i++;
    }
  
    return res * sign;
  };