function removeBlanks(st) {
 st = st.split(" ");
 st = st.join("");
 return(st);
}
sentence= "The quick brown fox did something.";
console.log("In:"+sentence);
sentence=removeBlanks(sentence);
console.log("Out:"+sentence);
