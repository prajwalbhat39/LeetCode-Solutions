/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    function isDigit(char) {
        return char >= '0' && char <= '9';
    }

    let result = ""
    let digitRead = false
    let signRead = false
    for(let i =0 ; i< s.length ; i++){
        if(s[i] === " " && digitRead === false && signRead === false){
            continue;
        }else if(s[i] === " " && (digitRead === true || signRead === true)){
            break;
        }else if((s[i] === "-" || s[i] === "+")  && signRead === false &&  digitRead === false){
            result +=  s[i]
            signRead = true;

        }else if((s[i] === "-" || s[i] === "+") &&  signRead === true && digitRead === true){
            break;
        }else if((s[i] === "-" || s[i] === "+") &&  signRead === true && digitRead === false){
              result = ""
              signRead = true;
              break;
        }else if(isDigit(s[i])){

            result += s[i]
            digitRead =true;

        }else if(!isDigit(s[i])){
            break;
        }
    }
    if(result === "-" || result === "+"){
        return 0;
    }
    result = Number(result);

    if (result < -(2 ** 31)) {
        return -(2 ** 31);
    }

    if (result > (2 ** 31) - 1) {
        return (2 ** 31) - 1;
    }
    // console.log(result)
    return result
};