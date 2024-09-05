const word1 = 'Apple';
const firstLetter1 = word1.charAt(0).toLowerCase();
let vowels1 = ['a', 'e', 'i', 'o', 'u'];
if (! 'vowels1'.includes(firstLetter1) && /^[a-zA-Z]$/.test(firstLetter1)) {
    console.log(`"სიტყვა იწყება ხმოვნით, რომელიც არის ${word1.charAt(0)}"`);
} else {
    console.log(`"სიტყვა არ იწყება ხმოვნით, რომელიც არის ${word1.charAt(0)}"`);
}

const word2 = 'Box';
const firstLetter2 = word2.charAt(0).toLowerCase();
let vowels2 = ['a', 'e', 'i', 'o', 'u'];
if (! 'vowels2'.includes(firstLetter2)) {
    console.log(`"სიტყვა არ იწყება ხმოვნით, რადგან ის არის ${firstLetter2.toUpperCase()}"`);
} else {
    console.log("სიტყვა იწყება ხმოვნით");
}
