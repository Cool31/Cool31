# Alpha vintage
import pandas as pd
import pandas_datareader as pdr
ts = pdr.av.time_series.AVTimeSeriesReader( ['IBM', 'TCS', 'ICICI Bank', 'ITC', 'HUL' , 'SBI', 'Infosys', 'Reliance Industries', 'RIL', 'wipro', 'NTPC', 'IOC'], api_key="your api key'")
df = ts.read()
df.index = pd.to_datetime(df.index, format='%Y-%m-%d')
# plotting the opening and closing value 
df[['open','close']].plot()
print(df)