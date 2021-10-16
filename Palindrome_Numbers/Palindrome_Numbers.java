class Solution {
    public boolean isPalindrome(int x) {
        int remainder = 0;
        int sum = 0;
        int temp = 0;
        
        temp = x; // Sets a temporary value so we can compare later
        while (x > 0){  // a while loop that will keep dividing the integer until 0
            remainder = x % 10; // get the remainder after dividing integer by 10
            sum = (sum*10) + remainder; // the "sum" is reversing the number
            x = x/10; // set a new x
        }
        
        if (temp == sum){
            return true;
        }
        else{
            return false;
        }
}}