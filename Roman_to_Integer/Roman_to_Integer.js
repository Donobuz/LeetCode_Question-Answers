let romanToInt = (s) => {
    
    let sum = 0;
    let romanLetterMap = new Map();

    romanLetterMap.set('I', 1);
    romanLetterMap.set('V', 5);
    romanLetterMap.set('X', 10);
    romanLetterMap.set('L', 50);
    romanLetterMap.set('C', 100);
    romanLetterMap.set('D', 500);
    romanLetterMap.set('M', 1000);

    let reverseChar = s.split("").reverse(); // puts the string into an array reversed. e.g string = XIVCD => [D,C,V,I,X];
    let checkCharacter = '';
    let currentLetterValue = 0;


    for(let i = 0; i < reverseChar.length; i++){

        let currentCharacter = reverseChar[i];


        if (currentCharacter === "V" || currentCharacter === "X"){
            checkCharacter = reverseChar[i+1];
            currentLetterValue = romanLetterMap.get(reverseChar[i]);
            sum += currentLetterValue;

            if(checkCharacter === "I"){
                sum -= 1;
                i++;
            }
        }

        else if (currentCharacter === "L" || currentCharacter === "C"){
            checkCharacter = reverseChar[i+1];
            currentLetterValue = romanLetterMap.get(reverseChar[i]);
            sum += currentLetterValue;

            if(checkCharacter === "X"){
                sum -= 10;
                i++;
            }
        }

        else if (currentCharacter === "D" || currentCharacter === "M"){
            checkCharacter = reverseChar[i+1];
            currentLetterValue = romanLetterMap.get(reverseChar[i]);
            sum += currentLetterValue;

            if(checkCharacter === "C"){
                sum -= 100;
                i++;
            }
        }

        else{
            currentLetterValue = romanLetterMap.get(reverseChar[i]);
            sum += currentLetterValue;
        }

        console.log("The current sum is: " + sum);



    }

    return sum;

    
    
};

console.log(romanToInt("LVIII"));