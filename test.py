def twoSum(nums, target):
    length = len(nums)
    acc = 0
    output = []
    for i in range(0, length):
        for j in range(i + 1, length):
            acc = nums[i] + nums[j]
            output.append(i)
            output.append(j)
            if(acc == target):
                return output
            acc = 0
            output = []

def threeSum(nums, target):
    length = len(nums)
    acc = 0
    output = []
    for i in range (0, length):
        output.append(i)
        num = nums[i]
        two = twoSum(nums, (target - num))
        #print(two)
        if two != None:
            output += two
        for item in output:
            acc += nums[item]
        if acc == target:
            return output
        acc = 0
        output = []
                    
print(threeSum([1,2,3,4,5,6,7,8,9,10], 27))
        

    
        
        
        