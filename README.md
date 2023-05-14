# latin vocabulary trainer

open source latin vocabulary trainer using cambridge latin course vocabulary words

## to-do

- part of speech for all words
- macrons on all words
- verb & noun endings trainer
- gender on all nouns

## words & word format

### nouns

gender: masculine, feminine, or neuter, or both masculine and feminine<br>
case: all nouns are nominative<br>
number: all nouns are singular

```json
{
  "latin": "coquus",
  "english": ["cook", "chef"],
  "stage": "1",
  "part": "noun",
  "gender": "masculine",
  "case": "nominative",
  "number": "singular"
}
```

### verbs

tense: all verbs are present<br>
person: all verbs are third person (he/she/it)<br>
number: all verbs are singular

```json
{
  "latin": "laborat",
  "english": ["works", "is working"],
  "stage": "1",
  "part": "verb",
  "tense": "present",
  "person": "third",
  "number": "singular"
}
```

### adjectives (adj.)

```json
{
  "latin": "magnus",
  "english": ["big"],
  "stage": "3",
  "part": "adjective"
}
```

### interjections (inter.)

latin word always ends in "!"

```json
{
  "latin": "salve!",
  "english": ["hello!", "hi!", "hello", "hi"],
  "stage": "3",
  "part": "interjection"
}
```

### pronouns (pro.)

```json
{
  "latin": "ego",
  "english": ["i"],
  "stage": "4",
  "part": "pronoun"
}
```

### adverbs (adv.)

```json
{
  "latin": "non",
  "english": ["not"],
  "stage": "3",
  "part": "adverb"
}
```

### prepositions (prep.)

### conjunctions (conj.)

```json
{
  "latin": "et",
  "english": ["and"],
  "stage": "3",
  "part": "conjunction"
}
```

### numerals (num.)

```json
{
  "latin": "unus",
  "english": ["one"],
  "stage": "12",
  "part": "numeral"
}
```
