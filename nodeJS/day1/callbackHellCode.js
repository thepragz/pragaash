var fs= require('fs');

var myFile = 'input.txt';

fs.readFile(myFile, 'utf8', function(err, txt){
	if (err) return console.log(err);

	txt = txt + ' \nAppended Something!';
	fs.writeFile(myFile, txt, function(err){
		if(err) return console.log(err);
		console.log('Appended text!')
	})
})