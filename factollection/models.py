import requests
import random    
class Fact():   
    def Date_Fact(month, day):
        response = requests.get(f'http://numbersapi.com/{month}/{day}/date?json')
        return response.json()
        
    def Random_Num_Fact():
        num = random.randint(0, 99)
        response = requests.get(f'http://numbersapi.com/{num}/?json')
        fact = response.json()
        if (fact['found'] == False):
            num_fact = Fact.Random_Num_Fact()
        else:
            num_fact = fact
        return num_fact
        

