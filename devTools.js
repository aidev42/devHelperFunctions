function log(){
	if (arguments.length === 1){
		console.log(arguments[0])
	} else if (arguments.length === 2){
		console.log(arguments[0], arguments[1])
	} else if (arguments.length === 3){
		console.log(arguments[0], arguments[1], arguments[2])
	} else{
		console.log('WARNING: too many arguments for log statement')
	}
}

function isDefined(item){
	if (item === undefined){
		return false
	} else {
		return true
	}
}

function isEmpty(item){
	//check if it's an object since empty object not detectable like arrays or strings
	if (typeof item === "object"){
		for(var key in item) {
			if(item.hasOwnProperty(key))
				return false;
		}
		return true;
	} else{
		if (item === "" || item === []){
			return true
		} else {
			return false
		}	
	}
}

function isValue(item){
	if (isDefined(item) && !isEmpty(item)){
		return true
	} else{
		return false
	}
}

function type(item){
	//Customizes Javascript's typeof to distinguish arrays and null from objects
	//1- Undefined
	//2- Null
	//3- Boolean
	//4- Number
	//5- String
	//6- Symbol
	//Non-Primitive
	//7- Array
	//8- Object
	//9- Function

	if (typeof item === 'object'){
		//check btw array null and obj
		if (item === null){
			return 'null'
		} else if (Array.isArray(item)){
			return 'array'
		} else {
			return typeof item
		}
	} else {
		return typeof item
	}
}

function timeNow(){
	var now = new Date()
	return now
	}
	//Allows timeNow.parse to be run as shortcut for parsed current time
	timeNow.parse = function(){
		return parseTime(timeNow())
	}

function parseTime(time){
	return time.toTimeString().split(' ')[0]
}

function timeSince(time){
	//find difference and pass it to parser to convert to HH:MM:SS
	var now = new Date()
	var diff = now - time
	diff /= 1000
	//Now in seconds
	return diff
	}
	//Allows timeSince.minutes(time) to be run quickly
	timeSince.minutes = function(time){
		return timeSince(time) / 60
	}

function logWithTime(item){
	//Especially helpful for debugging asynchronous returns, takes in 1-2 inputs and logs with the time of log
	//ie. logWithTime('x value:',x)
	//will print "x value: [value] logged at [HH:MM:SS]"
	if (arguments.length === 1){
		log(arguments[0],'Logged at: ' + timeNow.parse())
	} else if (arguments.length === 2){
		log(arguments[0], arguments[1], 'Logged at: ' + timeNow.parse())
	} else{
		console.log('WARNING: too many arguments for logWithTime')
	}
}
