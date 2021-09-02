function countBlanks(st) {
 l=st.length;
 st = st.split(" ");
 st = st.join("");
 return(l-st.length);
}
sentence= "The quick brown fox did something.";
console.log("In:"+sentence);
console.log(countBlanks(sentence));
