#Twitter sentiment analysis
import re
import tweepy 
from tweepy import OAuthHandler 
from textblob import TextBlob
class TwitterClient(object):        
    def __init__(p):     
     consumer_key = 'XXXXXXXXXXXXXXXXXXXXXXXX'
    consumer_secret = 'XXXXXXXXXXXXXXXXXXXXXX'
    access_token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    access_token_secret = 'XXXXXXXXXXXXXXXXXXXXXXXXX'
    try: 
     p.auth = OAuthHandler(consumer_key, consumer_secret)
     p.auth.set_access_token(access_token, access_token_secret) 
     p.api = tweepy.API(p.auth)
    except: 
     print("Error: Authentication Failed") 

    def cln(p,  tt): 
    return  ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())    def xp(p, tweet): 
    analysis = TextBlob(p.cln(tweet)) 
    if analysis.sentiment.polarity > 0: 
     return 'positive'
    elif analysis.sentiment.polarity == 0: 
      return 'neutral'
    else: 
      return 'negative'

    def twt(p, query, count = 10): 
     tweets = [] 
     try: 
     ft= p.api.search(q = query, count = count)      
     for tweet in ft
     fx= {} 
     fx['text'] = tweet.text 
     fx['sentiment'] = p.xp(tweet.text) 
    if tweet.retweet_count > 0: 
   if fx not in tweets: 
    tweets.append(fx) 
    else: 
    tweets.append(fx)  
    return tweets 
    except tweepy.TweepError as e: 
   print("Error : " + str(e)) 
   def main():
    api = TwitterClient() 
    tweets = api.twt(query = 'Girish Chandra Chaturvedi', count = 200) 
    ptweets = == 'positive'] 
    print("Positive tweets percentage: {} %".format(100*len(ptweets)/len(tweets))) 
    ntweets = == 'negative'] 
    print("Negative tweets percentage: {} %".format(100*len(ntweets)/len(tweets))) 
    print("Neutral tweets percentage: {} % \".format(100*(len(tweets) -(len( ntweets )+len( ptweets)))/len(tweets))) 
    print("\n\nPositive tweets:") 
    for tweet in ptweets[:10]: 
    print(tweet['text']) 
    print("\n\nNegative tweets:") 
    for tweet in ntweets[:10]: 
    print(tweet['text']) 
    if __name__ == "__main__": 
    main()