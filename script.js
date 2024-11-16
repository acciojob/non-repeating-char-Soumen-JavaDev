function firstNonRepeatedChar(str) {
  const map=new Map();

	for(let char of str){
		map.set(char,(map.get(char) ||0)+1);
	}
	for(let i of str){
		if(map.get(i)===1){
			return i;
		}
	}
	return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
