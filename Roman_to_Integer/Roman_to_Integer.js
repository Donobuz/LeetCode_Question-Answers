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


        // Check if the current index value is a V or an X e.g 5 or a 10
        // if so add the value of the letter to the sum, but also check if I is after the letter; if so, subtract 1 from sum.
        if (currentCharacter === "V" || currentCharacter === "X"){
            checkCharacter = reverseChar[i+1];
            currentLetterValue = romanLetterMap.get(reverseChar[i]);
            sum += currentLetterValue;

            if(checkCharacter === "I"){
                sum -= 1;
                i++;
            }
        }

        // Check if the current index value is a L or an C e.g 50 or a 100
        // if so add the value of the letter to the sum, but also check if X is after the letter; if so, subtract 10 from sum.
        else if (currentCharacter === "L" || currentCharacter === "C"){
            checkCharacter = reverseChar[i+1];
            currentLetterValue = romanLetterMap.get(reverseChar[i]);
            sum += currentLetterValue;

            if(checkCharacter === "X"){
                sum -= 10;
                i++;
            }
        }

        // Check if the current index value is a D or an M e.g 500 or a 1000
        // if so add the value of the letter to the sum, but also check if C is after the letter; if so, subtract 100 from sum.
        else if (currentCharacter === "D" || currentCharacter === "M"){
            checkCharacter = reverseChar[i+1];
            currentLetterValue = romanLetterMap.get(reverseChar[i]);
            sum += currentLetterValue;

            if(checkCharacter === "C"){
                sum -= 100;
                i++;
            }
        }

        // This is last case where if none of the letters appear before letters above, just add value to sum.
        else{
            currentLetterValue = romanLetterMap.get(reverseChar[i]);
            sum += currentLetterValue;
        }

        console.log("The current sum is: " + sum);



    }

    return sum;

    
    
};

console.log(romanToInt("LVIII"));