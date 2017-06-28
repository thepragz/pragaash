function appendText(txt, err){
	if(err) return console.log(err);

		txt = txt + "\nAppended Something!";

}

function notifyUser(err){
	if(err) return console.log(err);
			console.log('Appended Text Avoid Callback HELL!')
}

var fs = require('fs');

function notifyUser(err) {
 	if(err) return console.log(err);
 	console.log('Appended text!');
};

function appendText(err, txt) {
 if (err) return console.log(err);

 txt = txt + '\nAppended something!';
 fs.writeFile(myFile, txt, notifyUser);
}

var myFile = 'input.txt';
fs.readFile(myFile, 'utf8', appendText);
