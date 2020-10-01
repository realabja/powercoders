

def check(input):

    list_of_parantehsis = new list

    for i in input:
        if i is in ["{","["]
            list_of_parantehsis.append(i)
        if i is in ["}", "]"]
            list_of_parantehsis.pop()
    if list_of_parantehsis is not empty:
         raise error

