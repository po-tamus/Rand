# practice reversing a string recursively

def recRev(str):
    n = len(str) - 1
    if len(str) == 0:
        return ""
    return str[n] + recRev(str[0:n])

print(recRev("bruh"))