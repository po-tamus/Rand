#simple bank account simulator
class Holder():
    def __init__(self, name):
        self.name = name
        self.balance = 0

class Account():
    def __init__(self):
        self.holder = Holder(input("Enter an account name: "))
        

    def useAccount(self):
        response = ""
        while response != "q":
            print("\nInput d to deposit an amount\nInput w to withdraw an amount\nEnter v to view your balance\n")
            response = input("What would you like to do: ")
            if response == "d":
                deposit = input("Enter deposit amount: ")
                self.holder.balance += int(deposit)
            elif response == "w":
                withdrawal = int(input("Enter withdrawal amount: "))
                if self.holder.balance >= withdrawal:
                    self.holder.balance -= withdrawal
                else: 
                    print("\nInsufficient funds")
            elif response == "v":
                pass
            else: 
                print("Invalid input")
            print("Total balance: " + str(self.holder.balance))

bankAccount1 = Account()
bankAccount1.useAccount()
