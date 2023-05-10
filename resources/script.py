

import json

with open("words.json", "r", encoding='utf-8') as file:
  fileStr = file.read()
  arr = json.loads(fileStr)
  for d in arr:
    if(',' in d['english']):
      split = d['english'].split(', ')
      d['english'] = [split[0], split[1]]
    else:
      d['english'] = [d['english']]
  for i in arr:
    print(i)