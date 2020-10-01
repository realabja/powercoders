import time

Input = []

# asking for  input
# asking for  input
# asking for  input


def main():
    while True:
        N = input("how many numbers you want to sort:")
        print(type(N))
        if isinstance(int(N), int):
            for i in range(int(N)):
                while True:
                    try:
                        Input.append(int(input(f'enter {i + 1}th number:')))
                        break
                    except ValueError:
                        print("please try again with a number")

        else:
            print("input is invalid please try again with a number or exit")
        print(Input)
        time.sleep(1)
        quick_sort(Input)
        for number in Input:
            print(Input.pop())


def quick_sort(array):
    if len(array) <= 1:
        return array
    else:
        print(array)
        left = []
        right = []
        pivot = array.pop()
        length = len(array)
        for i in range(length-1):
            d1 = array[i]
            d2 = pivot
            if d1 <= d2:
                left.append(array[i])
            else:
                right.append(array[i])
        print("-------------------------------------------------------")
        print("before recursive call left")
        print(left)
        left = quick_sort(left)
        print(left)
        print("after recursive call left")
        print("-------------------------------------------------------")
        left.append(pivot)
        print("after adding pivot")
        print(left)
        print("right side")
        print(right)

        right = quick_sort(right)
        print(right)
        return left.append(right)


a = [123,132,312,3213,212,31,23,12312,3,123,12,3,123,12,3,12,3,131,231,2312,312,3,12,312,312,3,123123,12,3,123,1,2312,312,3123,]

quick_sort(a)
