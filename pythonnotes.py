#notes for python syntax

#[for i in range(0, n):] first parameter is inclusive, second is *exclusive*

#lambda functions

exlist = map(lambda n: n**2, [0, 1, 2, 3, 4])
print(exlist)

#printf works like .format, but more efficient for different variables in the same : print(f"my name is {nameVar}.") 
# instead of print("my name is {nameVar}".format())
#both require the declaration of variables but printf allows for cleaner code

nameVar = "gilbert"
itemVar = "snacks"

print(f"my name is {nameVar} and I love {itemVar}.")

print("my name is {nameVar1} and i love {itemVar1}".format(nameVar1 = "gilbreezy", itemVar1 = "snacks"))

#the "not" keyword inverts a value

voop = True
voop = not voop
#prints false
print(voop)

#file system management: "with" keyword automatically closes the file, w is write, as f is similar to "for f in array:"
with open("notesfile.txt", "w") as f:
    pass

#list comprehension 
#threading/multithreading

#python spread operator like (...) in js is *
butter = [1, 2, 3]
butter1 = [0, *butter, 4]
print(butter1)

#shallow copy doesn't reference the same memory address, but allocates the same data to a new address

butter2 = list(butter1)
butter2.append(12)

butter3 = butter1.copy()
print("this is butter3, which is butter1.copy: " + str(butter3))

print("Non mutated list \"butter1\" after appending 12 to butter2: " + str(butter1))

#slice: start index is inclusive, end index is exclusive

slicedButter = butter[0:2]
print(slicedButter)

beforeSet = [1,2,1,2,1,2,1,2,5,7,4]
print("this is a list converted to a set: " + str(set(beforeSet)))

#use enumerate for indexing values

yort = [3, 4, 5, 8, 2, 0]

for thing in enumerate(yort):
    print(thing)


#split and join are opposites

flub = "federal state treasury attorney general defense interior justice"

flubSep = flub.split(" ")
print(flubSep)

flubJoin = ", ".join(flubSep)
print(flubJoin)

#api = application programming interface
# rest api is representational state transfer