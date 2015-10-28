#QuickSort

def quick_sort(items, left, right):
    if(len(items) > 1):
        index = partition(items, left, right)
        if(left < index - 1):
            quick_sort(items, left, index - 1)
        if(index < right):
            quick_sort(items, index, right)
    return items

def partition(items, left, right):
    pivot = items[(right + left)/2]
    while(left <= right):
        while(items[left] < pivot and left <= right):
            left += 1
        while(items[right] > pivot and right >= left):
            right -= 1
        if(left <= right):
            swap(items, left, right)
            left += 1
            right -= 1
    return left

def swap(items, lindex, rindex):
    temp = items[lindex]
    items[lindex] = items[rindex]
    items[rindex] = temp
    return None

items = [5, 4, 7, 5, 1, 6]
print items
quick_sort(items, 0, len(items) - 1)
print items

