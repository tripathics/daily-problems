#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    // naive approach: palindrome string
    bool isPalindrome(int x)
    {
        if (x < 0)
            return false;

        // convert number to string
        string x_str = to_string(x);

        int l = 0, r = x_str.size() - 1;
        while (l < r)
        {
            if (x_str[l] != x_str[r])
                return false;
            l++;
            r--;
        }
        return true;
    }

    // naive approach: using inbuilt reverse function
    bool isPalindrome2(int x)
    {
        if (x < 0)
            return false;
        string x_str = to_string(x);
        string x_str_cp = x_str;
        reverse(x_str_cp.begin(), x_str_cp.end());
        return x_str == x_str_cp;
    }
};

int main(void)
{
    int n;
    Solution obj;
    cin >> n;
    cout << obj.isPalindrome(n) << endl;
    return 0;
}