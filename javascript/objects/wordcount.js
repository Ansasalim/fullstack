var text="hello hai hello hai"
// wordcount={hello:2 hai;2}

// step 1:split string into words by using space
// var words=text.split(" ")//word=["hello","hai","hello","hai"]
// console.log(words);
var wordCount={}
// for(let word of words){
//     // word=hello
//     if(word in wordCount){
//         wordCount[word]+=1

//     }
//     else{
//         wordCount[word]=1
//     }
// }
// console.log(wordCount);

text.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
console.log(wordCount);
