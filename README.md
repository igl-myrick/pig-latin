# _Pig Latin Translator_

#### By _**India Lyon-Myrick**_

#### _A program designed to translate English words or phrases into Pig Latin._

## Technologies Used

* _HTML_
* _JavaScript_

## Description

_Input a word, or phrase, into the page. The program will then convert it to Pig Latin and output it to the page._

## Setup/Installation Requirements

* _Clone the repository to a folder of choice on your machine (by either using the "Code" button on the GitHub page, or in a terminal application using `git clone https://github.com/igl-myrick/pig-latin`)_
* _Using a file explorer or terminal application, open the top level of the folder_
* _Open index.html_

## Known Bugs

* _Program can not currently handle punctuation._

## License

MIT:

Copyright (c) _1/9/2024_ _India Lyon-Myrick_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests

Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "If a word begins with consonants, it will move the opening consonants to the end of the word."
Code: pigLatin("word");
Expected Output: "ordw"

Test: "It will additionally add "ay" to words beginning with consonants."
Code: pigLatin("word");
Expected Output: "ordway"

Test: "It will move both "q" and "u" if a word begins with "qu"."
Code: pigLatin("quest");
Expected Output: "estquay"