const txtElement = ['freelancer', 'web Develover','Graphic Designer'];
let count =0;
let txtIndex =0;
let currentTXt ='';
let words ='';

(function ngetik(){
	count = 0;
}

currentTXt = txtElement{count}

words = currentTXt.slice(0, ++txtIndex);
document.querySelector('.efek-ngetik').textContent = words;

if(words.length == currentTXt.length){
	count++;
	txtIndex = 0;
}

seTimeout(ngetik, 500);

})();