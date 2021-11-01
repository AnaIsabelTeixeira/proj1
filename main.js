//WD2_2021
//ANA ISABEL TEIXEIRA
//PROJ_01

let verbs, nouns, adjectives, adverbs, preposition;

nouns = ["privacy", "policy", "showtime", "responsibility", "control", "checkup", "setting", "interaction", "person", "world", "stuff", "tower", "student", "browser", "OS", "product", "third-party app", "content", "battery", "spreadsheet", "time", "URL", "crash", "voice", "message", "cookie", "pixel tag", "technology", "thing", "religion", "face", "pattern", "malware", "spam", "language", "history", "data", "fraud", "law", "password", "regulation", "confidentiality", "domain", "destruction", "violation", "contract", "mountain bike", "flower", "user", "restaurant", "engine", "map"]; //50

verbs = ["uses", "trusts", "is", "works", "protects", "puts", "understands", "updates", "manages", "exports", "deletes", "sensors", "matches", "creates", "contacts", "wants", "chooses", "comments", "saves", "writes", "dims", "crashes", "uploads", "matters", "watches", "views", "purchases", "communicates", "shares", "syncs", "plays", "offers", "fails", "protects", "builds", "helps", "exists", "sees", "controls", "shows", "learns", "appears", "modifies", "remembers", "terminates", "processes", "abuses", "writes", "performs", "discloses"]; //50

adjectives = ["unique", "incognito", "big", "hard", "good", "sensitive", "explanatory", "safe", "potential", "misspelled", "visible", "signed-in", "legal", "technical", "private", "physical", "unauthorised", "strict", "disciplined", "contractual", "explicit", "prominent", "significant", "useful", "personalised", "digital", "local", "low", "trusted", "Bluetooth-enabled", "sexual", "governmental", "public", "different", "confidential", "risky", "legitimate", "accidental", "malicious", "European", "basic", "suspicious", "customised", "new", "common", "covered", "relevant", "signed-out", "similar", "secure"]; //50 

adverbs = ["periodically", "properly", "regularly", "directly", "frequently", "privately", "safely", "completely", "anonymously", "automatically", "finally", "non-personally", "personally", "continuously", "clearly", "legally", "often", "accidentally", "daily", "totally", "periodically", "properly", "regularly", "directly", "frequently", "privately", "safely", "completely", "anonymously", "automatically", "finally", "non-personally", "personally", "continuously", "clearly", "legally", "often", "accidentally", "daily", "totally", "finally", "non-personally", "personally", "continuously", "clearly", "legally", "often", "accidentally", "daily", "totally" ]; //50, 20

preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards", "in", "at", "to", "beside", "over", "across" ]; //16

function randGen() {
	return Math.floor(Math.random() * 5);            
}

function sentence() {
	let rand1 = Math.floor(Math.random() * 50);
	let rand2 = Math.floor(Math.random() * 50);
	let rand3 = Math.floor(Math.random() * 50);
	let rand4 = Math.floor(Math.random() * 50);
	let rand5 = Math.floor(Math.random() * 50);
	let rand6 = Math.floor(Math.random() * 16);
			
	return "The " + adjectives[rand1] + " " + nouns[rand1] + " " + adverbs[rand4] + " " + verbs[rand1] + " " + nouns[rand2] + " " + "because the " + nouns[rand3] + " " + adverbs[rand5] + " " + verbs[rand2] + " " + preposition[rand6] + " a " + adjectives[rand2] + " " + nouns[rand4] + " which"+ " " + verbs[rand3] + " a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand5] + ".";
            };
            sentence();

console.log(sentence());

var maxWords = 50;
var interval = 150;
var time = 0;
var words = document.getElementsByClassName('word');
var word = words[0];
var wordSize = word.offsetWidth;
var content = sentence();

var prevEvent;
var currentEvent;
var maxSpeed = 0, prevSpeed = 0, maxPositiveAcc = 0, maxNegativeAcc = 0;

document.addEventListener('mousemove',
						  
	function wordTrail(event) {
	
	currentEvent = event;
	
	if(event.timeStamp > time + interval && words.length <= maxWords) {
	time = event.timeStamp;
	addWord();
	}});


/*setInterval(wordSpeed, 100)

function wordSpeed() {
		
		if (prevEvent && currentEvent) {	
			var movementX = Math.abs(currentEvent.screenX - prevEvent.screenX);
			var movementY = Math.abs(currentEvent.screenY - prevEvent.screenY);
			var movement = Math.sqrt(movementX * movementX + movementY * movementY);
			var speed = 10 * movement;
			var acceleration = 10 * (speed - prevSpeed);
		}

		prevEvent = currentEvent;
		prevSpeed = speed;

		const minWeightValue = 100;
		const maxWeightValue = 800;
		
		const minStretchValue = 50;
		const maxStretchValue = 200;
		
		const minSpeed = 0;
		const maxSpeed = 13000;

		const maxAcc = 80000;
		const minAcc = -5000;

		const percentSpeed = Math.round( (100 * speed) / maxSpeed);
		const percentAcc = Math.round( 100 * (acceleration - minAcc) / (maxAcc - minAcc));

		const newWeight = Math.round (percentSpeed * (maxWeightValue - minWeightValue) / 100 + minWeightValue);
		
		const newStretch = Math.round (percentAcc * (maxStretchValue - minStretchValue) / 100 + minStretchValue);
};*/

let  index = 0;
let string = content.split(" ");

function addWord() {
	
	var wordClone = word.cloneNode();
	
	//wordClone.style.setProperty("--weight", newWeight);
	//wordClone.style.setProperty("--stretch", newStretch);
	wordClone.textContent = string[index];
	wordClone.style.backgroundColor = 0;
//	wordClone.style.width = wordClone.style.height = randomSize();
	wordClone.style.left = event.clientX + 'px';
	wordClone.style.top = event.clientY + 'px';
//	wordClone.style.transform = "translate("+randomLocation()+", "+randomLocation()+")";
	document.body.appendChild(wordClone);

	index++;
	
//falta repetir texto quando chegar ao fim
	
	if(words.length === maxWords) {
    removeWord ();
	addWord();
  }
}

function removeWord() {
  document.body.removeChild(words[1]);
}

function randomLocation() {
  return Math.floor(Math.random() * (wordSize * 2)) - (wordSize) + 'px'; 
}