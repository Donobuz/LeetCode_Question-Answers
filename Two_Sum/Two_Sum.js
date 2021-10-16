var twoSum = function (nums, target) {


    // Brute Force Method
    //     result = [];

    //     for(let i = 0; i < nums.length; i++){
    //         for(let j = i + 1; j < nums.length; j++){

    //             if(nums[i] + nums[j] === target){
    //                 result.push(i);
    //                 result.push(j);
    //             }
    //         }

    // }
    //         return result;


    let numsHash = {};

    for (let i = 0; i < nums.length; i++) {

        let numsValue = nums[i];

        numsHash[numsValue] = i; // The value in the hashmap has the key of i

    }

    for (let i = 0; i < nums.length; i++) {

        let difference = target - nums[i];

        if (numsHash.hasOwnProperty(difference) && numsHash[difference] !== i){
            return [i, numsHash[difference]];
        }
    }


};

console.log(twoSum([2, 7, 11, 15], 9));