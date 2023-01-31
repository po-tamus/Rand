#recursive problems
"""
*USE THE /"RECURSIVE LEAP OF FAITH/"
n + function(n-1)
assuming that (n-1) will work

"""
def sum(n):
    if n == 0:
        return 0
    else: 
        print(n)
        return n + sum(n-1)

print(sum(5))

"""def grid_paths(n, m):
    if n == 1 or m == 1: 
        return 1
    else:
        return grid_paths(n, m-1) + grid_paths(n-1, m)

print(grid_paths(5, 6)"""

def partition(n, m):
    if m == 1:
        return 1
    else: 
        return 2