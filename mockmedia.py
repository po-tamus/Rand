#this program is a mock social media app

class Profile():
    profiles = []

    def __init__(self, name, num, pfp):
        self.name = name
        self.num = num
        self.pfp = pfp
        self.profiles.append((self.name, self.num, self.pfp))

    def view_profiles(self):
        print(self.profiles)

class Post():
    posts = []

    def __init__(self, picture, caption):
        self.caption = caption
        self.picture = picture
        self.posts.append((self.picture, self.caption))
        

    def view_posts(self):
        print(self.posts)
        
class App():
    def __init__(self):
        print("Welcome to mock!")
        
        while True:
            command = input("""Enter \"log\" to log in to an account
or 
Enter \"new\" to create a new one (3 max): """)
            print("\n")
            command = command.upper()
            if command == "NEW":
                name = input("Enter your new account name: ")
                pfp = input("Enter your new profile picture: ")
                print("\n")
                self.profile = Profile(name, pfp)
                
            elif command == "LOG":
                break
                

    
    def run(self):

        while True:
            command = input("""Enter \"post\" to create a post
Enter \"view posts\" to view your posts 
Enter \"view profile\" to view your profile 
Enter \"quit\" to quit """)
            print("\n")
            command = command.upper()
            if command == "POST":
                picture = input("Enter a photo to post (description): ")
                caption = input("Enter a caption for your post: ")
                print("\n")
                newPost = Post(picture, caption)
            elif command == "VIEW POSTS":
                newPost.view_posts()
            elif command == "VIEW PROFILE":
                self.profile.view_profiles()
            elif command == "QUIT":
                break
app = App()
app.run()