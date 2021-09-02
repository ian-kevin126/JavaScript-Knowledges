function acronym(str) {
  var words = str.split(" ")
  var acronym = "";
  for (var i = 0; i<words.length; i++) {
    temp=words[i]
    temp=temp.split("");
    acronym = acronym + temp[0];
  }
  acronym=acronym.toUpperCase(acronym);
  return(acronym);
}
console.log(acronym("Talk to You Later!"))
