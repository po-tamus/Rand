def revString(str):
    ans = ""
    for i in range(len(str)):
        ans += str[len(str)-i - 1]
    return ans

print(revString("casino"))

def arrSum(arr):
    sum = 0
    for i in range(len(arr)):
        for j in range(len(arr[i])):
            sum += arr[i][j]
    return sum

print(arrSum([[1,2,3], [4,5,6]]))

def twoSum(list, num):
    for i in range(len(list)):
        for j in range(len(list)):
            if list[i] + list[j] == num:
                return [i, j]

print(twoSum([3, 5, 7, 4], 11))