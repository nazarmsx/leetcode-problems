class Solution {
    // Given an integer x, return true if x is a palindrome, and false otherwise.
    public boolean isPalindrome(int x) {
        boolean isPalindrome = true;
        List < Integer > digits = new ArrayList < Integer > ();
        int curr = x;
        if (x < 0) {
            return false;
        }

        while (curr > 0) {
            int remaninder = curr % 10;
            digits.add(remaninder);
            curr = curr / 10;
        }
        int j = digits.size() - 1;
        for (int i = 0; i < digits.size(); i++) {
            if (digits.get(i) != digits.get(j)) {
                isPalindrome = false;
                break;
            }
            j = j - 1;
        }

        return isPalindrome;
    }
}