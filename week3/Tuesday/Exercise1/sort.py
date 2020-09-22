import time

Input = []

# asking for  input
# asking for  input
# asking for  input


while True:
    N = input("how many numbers you want to sort:")
    if isinstance(N, int):
        for i in N:
            Input.append(input(f'enter {i}th number:'))
    else:
        print("input is invalid please try again or exit")
    time.sleep(2)