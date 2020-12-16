import requests
import json
    
class Fact():   
    def Date_Fact(month, day):
        response = requests.get(f'http://numbersapi.com/{month}/{day}/date?json')
        fact = response.json()
        return fact