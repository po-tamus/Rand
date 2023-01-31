#stack: is_empty, push, pop, peek, size
#queue data structures: enqueue, dequeue, is_empty, size

class Stack: 
    def __init__(self):
        self.items = []

    def is_empty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        last = len(self.items) - 1
        return self.items[last]

    def size(self):
        return len(self.items)

def stringReverse(string):
    stackString = Stack()
    revString = ""
    for char in string:
        stackString.push(char)
    for char in range(stackString.size()):
        revString += stackString.pop()
    print(revString)

strInput = input("Enter a string to be reversed: ")
stringReverse(strInput)

class Queue: 
    def __init__(self):
        self.items = []

    def is_empty(self):
        return self.items == []

    def enqueue(self, item):
        self.items.insert(0, item)
        """replace = [item]
        for char in self.items:
            replace.append(char)
        self.items = replace
        return self.items"""

    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)
        
dummy = Queue()
dummy.enqueue("yo")
dummy.enqueue("the")

#binary search tree in python

#val=None in the constructor of the BSTNode class is a default parameter if no value is passed

class BSTNode: 
    #initializes the node with left, right = None and sets the value
    def __init__(self, val=None):
        self.left = None
        self.right = None
        self.val = val

    #method to insert a node to the tree. if the value of the node is None, set the current node to that value and return

    def insert(self, val):
        if self.val == None: 
            self.val = val
            return
    #if the given value to insert is already in the tree, return
        if self.val == val: 
            return 
    #if the given value to insert is less than the current value, check to see if their is a left child node (less).
    #if there is a left node, the insert method is recursively called on that left node. If there isn't a left node,
    #it is created as a leaf node and set to the given value.
        if self.val > val: 
            if self.left:
                self.left.insert(val)
                return
            self.left = BSTNode(val)
            return
    #if the given value to insert is greater than the current node value, right node existence is checked. If it exists, insert
    #is recursively called. If it doesn't exist, a leaf node is created on the right and set to the given value.
        if self.right:
            self.right.insert(val)
            return
        self.right = BSTNode(val)
        return
    #simple methods to find the min and max values in the tree. sets a variable current equal to the current node object
    #while loop for while there is an existing left (less) node, current is equal to that left (less) node. Once the search
    #reaches the node with the least value, the while loop breaks and the nodes value is returned
    def get_min(self):
        current = self
        while current.left != None:
            current = current.left
        return current.val
    #sets current equal to current node. While a left (less) node exists, current is set to that node until there are no
    #less nodes left. The value is returned.
    def get_max(self):
        current = self
        while current.right != None:
            current = current.right
        return current.val
    
    def delete(self, val):
        if self == None:
            return self
            #if the value is less than the current value, check if there is a left child (less). This method takes two 
            # parameters: self (this) and the given value to delete. Therefore, when the given value is less, the left value
            # is set equal to the calling of the method (recursive) because that left node is set as self (this).
        if val < self.val:
            if self.left:
                self.left = self.left.delete(val)
                #why returning self instead of just return? This method is called recursively, self is placed on the stack
                return self
            #same for a value greater than the current node's value. check if there is right node. if there is, recursively
            #call the delete method with the right node as self and the value as val
        if val > self.val: 
            if self.right:
                self.right = self.right.delete(val)
                return self
            #?
        if self.right == None:
            return self.left
        if self.left == None:
            return self.right
            #when the given node to delete has both a left and right child node, either find the smallest node on the right
            #or the largest node on the left to replace the node being removed. In this case, the smallest node on the right is 
            #chosen. the while loop finds the smallest right node. Afterwards, the removal node is replaced with the smallest
            #right node and the smallest right node is deleted
        min_larger_node = self.right
        while min_larger_node.left:
            min_larger_node = min_larger_node.left
        self.val = min_larger_node.val
        self.right = self.right.delete(min_larger_node.val)
        return self

    #prints before recursive call: 
    def preorder(self, node):
        if node.val == None:
            return
        print(node.val)
        self.left.preorder(node.left)
        self.right.preorder(node.right)
    #prints between recursive call, therefore printing in increasing order
    def inorder(self, node):
        if node.val == None:
            return
        self.left.preorder(node.left)
        print(node.val)
        self.right.preorder(node.right)
    #prints after recursive call:
    def postorder(self, node):
        if node.val == None:
            return
        self.left.preorder(node.left)
        self.right.preorder(node.right)
        print(node.val)
    #notice that the exists method returns only a method call and doesn't set a variable value to a method call
    #exists method is not changing anything, delete value changes value
    def exists(self, val):
        if val == self.val:
            return True
        if val < self.val:
            if self.left == None:
                return False
            return self.left.val.exists(val)
        if val > self.val:
            if self.right == None:
                return False
            return self.right.val.exists(val)

    def levelOrder(self, node):
        print(node.val)

#if node is not None vs if node != None

class Hashtable:
    def __init__(self):
        pass

#default parameters for nodes in the linked list are a value of 0 and no pointer
class LinkedListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class SinglyLinkedList:
    
    def count(node, val):
        current = node.head
        count = 1
        while node.next != None:
            current = node.next
            count+=1
        return count
    
    def middleNode(count, node):
        pass
