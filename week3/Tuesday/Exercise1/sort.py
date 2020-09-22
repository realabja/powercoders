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
        left = []
        right = []
        new_array = []
        pivot = array.pop()
        length = len(array)

        for i in range(length):
            d1 = array[i]
            d2 = pivot
            if d1 <= d2:
                left.append(array[i])
            else:
                right.append(array[i])
        left = quick_sort(left)
        left.append(pivot)
        right = quick_sort(right)
        print(left)
        print(right)
        return left.append(right)

main()