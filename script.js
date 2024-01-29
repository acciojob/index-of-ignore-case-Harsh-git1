function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let i = 0;
	let fam = s2[0];
	while (i < s1.length) {
		let fc = s1[i];

		if(fc === fam) {
			let sm = s1.substring(i, i+s2.length);
			if(sm === s2) return i;
		}
		i++;
	}
	return -1;
}
indexOfIgnoreCase(s1, s2);
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

