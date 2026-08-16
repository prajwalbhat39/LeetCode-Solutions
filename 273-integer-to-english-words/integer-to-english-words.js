/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
const numberMap = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",

    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
};

const magnitudeMap = {
    0: "",
    3: "Thousand",
    6: "Million",
    9: "Billion"
};
let resultString = ""
let tempString = ""
let count = 0;
if(num === 0){
    return "Zero";
}
if(num === 1000){
    return "One Thousand"
}

while(num % 1000 > 0 || Math.floor(num /1000) != 0){
    tempString = ""
    temp = num % 1000;
    num = Math.floor(num / 1000);
    hundredsPlace = Math.floor(temp /100);
    temp = temp %100
    if(temp <=19 && temp > 9)
    {
        tensPlace = temp;
        temp = 0;
    }else{
        tensPlace = Math.floor(temp /10);
        tensPlace = tensPlace* 10;
        temp = temp%10;
    }
    if(numberMap[hundredsPlace]){
        tempString +=  numberMap[hundredsPlace];
        tempString += " ";
    }
     if(hundredsPlace > 0){
        tempString += "Hundred";
        tempString += " "
    }
    if(numberMap[tensPlace]){
        tempString += numberMap[tensPlace];
        tempString += " ";
    }
    if(numberMap[temp]){
        tempString +=  numberMap[temp];
        if(count > 0){
            tempString += " "
        }
    }
    if(magnitudeMap[count] && (hundredsPlace > 0 || tensPlace>0 || temp>0)){
        tempString += magnitudeMap[count];
        tempString += " ";
    }
    
    resultString = tempString + resultString ;
    
    count+=3;
}


resultString = (resultString[0].toUpperCase() + resultString.slice(1)).trim();
return resultString;



};