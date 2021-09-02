var isMatch = function(s, p) {
    let regex = new RegExp(p)
	return s.match(regex) ? s === s.match(regex)[0] : false
};