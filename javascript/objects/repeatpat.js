var pattern="ABABBC"
// find first recursive character
var repeat={}
for(let char of pattern){
//    char=A
    if(char in repeat){
      console.log(`${char} is the first recursive character` );
       break
    }
    else{
        repeat[char]=1
    }
}
