/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let i = 0;
    let totalSum =0;
    const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
    while(i< s.length){
        if(s[i] === "I"){
            if(s[i+1] === "V"){
                totalSum += 4;
                i+=2;
            }
            else if(s[i+1] === "X"){
                totalSum +=9;
                i+=2;
            }
            else{
                totalSum+=1;
                i+=1
            }
        }else if(s[i] === "X"){
            if(s[i+1] === "L"){
                totalSum += 40;
                i+=2;
            }
            else if(s[i+1] === "C"){
                totalSum +=90;
                i+=2;
            }
            else{
                totalSum+=10;
                i+=1
            }

        }else if(s[i] === "C"){
            if(s[i+1] === "D"){
                totalSum += 400;
                i+=2;
            }
            else if(s[i+1] === "M"){
                totalSum +=900;
                i+=2;
            }
            else{
                totalSum+=100;
                i+=1
            }
        }else{
            totalSum += romanMap[s[i]];
            i+=1
        }


        }
        return totalSum
    
};