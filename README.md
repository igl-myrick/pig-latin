Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "If a word begins with consonants, it will move the opening consonants to the end of the word."
Code: pigLatin("word");
Expected Output: "ordw"

Test: "It will add "ay" to words beginning with consonants."
Code: pigLatin("word");
Expected Output: "ordway"