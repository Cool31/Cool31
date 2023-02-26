#facebook sentiment analysis
import time
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import nltk
import io
import unicodedata
import numpy as np
import re
import string
from numpy import linalg
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.tokenize import PunktSentenceTokenizer
from nltk.corpus import webtext
from nltk.stem.porter import PorterStemmer
from nltk.stem.wordnet import WordNetLemmatizer
 
with open('stock.txt', encoding ='UTF-8') as pex:

   dattex = pex.read()

sent_tokenizer = PunktSentenceTokenizer(dattex)

sents = sent_tokenizer.tokenize(dattex)
 
print(word_tokenize(dattex))

print(sent_tokenize(dattex))
 
porter_stemmer = PorterStemmer()
 
nltk_tokens = nltk.word_tokenize(dattex)
 
for w in nltk_tokens:

   print ("Actual: % s Stem: % s" % (w, porter_stemmer.stem(w)))

wordnet_lemmatizer = WordNetLemmatizer()

nltk_tokens = nltk.word_tokenize(dattex)
 
for w in nltk_tokens:
   print ("Actual: % s Lemma: % s" % (w, wordnet_lemmatizer.lemmatize(w)))

text = nltk.word_tokenize(dattex)

print(nltk.pos_tag(dattex))
 
pet = SentimentIntensityAnalyzer() 

tokenizer = nltk.data.load('tokenizers / punkt / english.stock')
 
with open('stock.txt', encoding ='UTF-8') as pex:

   for dattex in pex.read().split('\n'):
    print(dattex)

scores = pet.polarity_scores(dattex)
for key in sorted(scores):
    print('{0}: {1}, '.format(key, scores[key]), end ='')
print()