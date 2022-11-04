#mock different attempt
#can use instance.attribute like self.profile.name for a specific variable
#can use instance.method() to call a method on a variable or object
class Profile():
    def __init__(self, name, pfp):
        self.name = name 
        self.pfp = pfp

class Post():
    def __init__(self, photo, caption):
        self.photo = photo
        self.caption = caption

class App():
    def __init__(self):
        print("Welcome to Mock! \n")
        self.acc = input("Enter a name for your profile")

mock = App()