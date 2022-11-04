#this program is a digital emulation of the card game war
from random import shuffle

class Card():
    suits = ["spades", "hearts", "diamonds", "clubs"]

    values = [None, None, "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

    def __init__(self, value, suit):
        self.suit = suit
        self.value = value

    def __lt__(self, c2):
        if self.value < c2.value:
            return True
        elif self.value == c2.value:
            if self.suit < c2.suit:
                return True
            else:
                return False
        else:
            return False

    def __gt__(self, c2):
        if self.value > c2.value:
            return True
        elif self.value == c2.value:
            if self.suit > c2.suit:
                return True
            else:
                return False
        else:
            return False

    def __repr__(self):
        value = self.values[self.value] + " of " + self.suits[self.suit]
        return value

class Deck():
    def __init__(self):
        self.cards = []
        for i in range(2, 15):
            for j in range(4):
                self.cards.append(Card(i,j))
        shuffle(self.cards)

    def rm_card(self):
        if len(self.cards) == 0:
            return
        return self.cards.pop()

class Player():
    def __init__(self, name):
        self.name = name
        self.wins = 0
        self.card = None

class Game():
    def __init__(self):
        name1 = input("p1 name: ")
        name2 = input("p2 name: ")
        self.deck = Deck()
        self.p1 = Player(name1)
        self.p2 = Player(name2)
        #gets input for player names, creates deck with deck class, and creates players with player class

    def wins(self, winner):
        w = "{} wins this round!".format(winner)
        print(w)

    def draw(self, p1n, p1c, p2n, p2c):
        d = "{} drew {} and {} drew {}".format(p1n, p1c, p2n, p2c)
        print(d)

    def play_game(self):
        cards = self.deck.cards
        #cards variable uses deck variable from init, which declared from deck class using ".cards" (list made in deck class)
        print("Beginning War!")
        while len(cards) >= 2:
            response = input("Enter w to play or q to quit: ")
            if response.upper() == "Q":
                break
            p1c = self.deck.rm_card()
            p2c = self.deck.rm_card()
            #pops card from deck for each player. ".deck" is in the deck class
            p1n = self.p1.name
            p2n = self.p2.name
            #these variables use self.p1 from init (they are objects of the class player)
            #, which uses ".name" from players class
            self.draw(p1n, p1c, p2n, p2c)
            #calls draw method from this same class
            if p1c > p2c:
                self.p1.wins += 1
                #".wins" is from the player class
                self.wins(self.p1.name)
            else:
                self.p2.wins += 1
                self.wins(self.p2.name)
        win = self.winner(self.p1, self.p2)
        print("War is over! {} wins.".format(win))

    def winner(self, p1, p2):
        if p1.wins > p2.wins:
            return p1.name
        elif p1.wins < p2.wins:
            return p2.name
        return "It was a tie!"

war = Game()
war.play_game()

            

