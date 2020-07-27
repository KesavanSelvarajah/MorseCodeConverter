const msg_ = document.getElementById("msg");
const mc_ = document.getElementById("mc");

const upload_msg = document.getElementById("upload-msg");
const download_msg = document.getElementById("download-msg");

const upload_mc = document.getElementById("upload-mc");
const download_mc = document.getElementById("download-mc");

msg_.addEventListener('keyup', function() {
		mc_.value= textToMorseCode(msg_.value.trim().toUpperCase());
})

mc_.addEventListener('keyup', function() {
		msg_.value= textFromMorseCode(mc_.value.trim(), 0);
})

Morse_Code = {
	"A": "•–",      "B": "–•••",    "C": "–•–•", 
	"D": "–••",     "E": "•",       "F": "••–•", 
	"G": "––•",     "H": "••••",    "I": "••", 
	"J": "•–––",    "K": "–•–",     "L": "•–••", 
	"M": "––",      "N": "–•",      "O": "–––", 
	"P": "•––•",    "Q": "––•–",    "R": "•–•",
	"S": "•••",     "T": "–",       "U": "••–",
	"V": "•••–",    "W": "•––",     "X": "–••–",  
	"Y": "–•––",    "Z": "––••",

	"1": "•–––– ",  "2": "••–––",   "3": "•••–– ",
	"4": "••••– ",  "5": "••••• ",  "6": "–••••",
	"7": "––•••",   "8": "–––••",   "9": "––––•",
	"0": "–––––"
};

Reverse_Morse_Code = {
	"•–":   "A",    "–•••":  "B",    "–•–•": "C", 
	"–••":  "D",    "•":     "E",    "••–•": "F", 
	"––•":  "G",    "••••":  "H",    "••":   "I", 
	"•–––": "J",    "–•–":   "K",    "•–••": "L", 
	"––":   "M",    "–•":    "N",    "–––":  "O",
	"•––•": "P",    "––•–":  "Q",    "•–•":  "R",
	"•••":  "S",    "–":     "T",    "••–":  "U",
	"•••–": "V",    "•––":   "W",    "–••–": "X",
	"–•––": "Y",    "––••":  "Z",

	"•––––": "1",  "••–––": "2",  "•••––": "3",
	"••••–": "4",  "•••••": "5",  "–••••": "6",
	"––•••": "7",  "–––••": "8",  "––––•": "9",
	"–––––": "0"
};


function textToMorseCode(inpt) {
	let oupt = "";
	if(inpt == "") return "";
	
	for(let i=0; i< inpt.length; i++ ) {
		if(Morse_Code[inpt[i]] != undefined)
			oupt += Morse_Code[inpt[i]];
		else
			oupt += inpt[i];

		oupt += " ";
	}
	return oupt;
}

function convertToDotDash(mc){
	conv_mc = "";
	
	if(/•/.test(mc) && /–/.test(mc)) 
		return mc;
	
	if(/0/.test(mc) && /1/.test(mc)) {
		for(let i=0; i<mc.length; i++) {
			if(mc[i] == '0')
				conv_mc += '•';
			else if(mc[i] == '1')
				conv_mc += '–';
			else
				conv_mc += mc[i];
		}
	}
	
	if(/./.test(mc) && /-/.test(mc)) {
		for(let i=0; i<mc.length; i++) {
			if(mc[i] == '.')
				conv_mc += '•';
			else if(mc[i] == '-')
				conv_mc += '–';
			else
				conv_mc += mc[i];
		}
	}	
	return conv_mc;
}

function textFromMorseCode(inpt, opt) {
	let oupt = "";
	inpt = convertToDotDash(inpt);
	
	codes = inpt.split(" ");
	for(let i=0; i<codes.length; i++) {
		if(Reverse_Morse_Code[codes[i]] != undefined) 
			if(opt == 0)
				oupt += Reverse_Morse_Code[codes[i]];
			else
				oupt += Reverse_Morse_Code[codes[i]] + " ";
		else
			if(opt == 0)
				oupt += codes[i];
			else
				oupt += codes[i] + " ";
	}
	return oupt;
}


