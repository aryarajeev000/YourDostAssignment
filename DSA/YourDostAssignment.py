def find_second_largest_unique(arr):
    if len(arr) < 2:
        return -1

    arr.sort()
    largest = arr[-1]

    low = 0
    high = len(arr) - 1
    result = -1

    # binary search for the largest value < largest
    while low <= high:
        mid = low + (high - low) // 2

        if arr[mid] < largest:
            result = arr[mid]
            low = mid + 1
        else:
            high = mid - 1

    return result


# main
n = int(input())
arr = list(map(int, input().split()))

res = find_second_largest_unique(arr)

if res == -1:
    print(res)
    print("Not enough unique elements")
else:
    print("second largest unique element is:", res)
