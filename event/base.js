function preventDefault(event){
	if(event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
}
function addEvent(element,type,handler){
	if(element.addEventListener){
        element.addEventListener(type,handler,false);
    }else if(element.attachEvent){
		element.attachEvent('on' + type,handler);
	}else{
		element['on' + type] = handler;
	}
}
function getEvent(event){
	var e = event || window.event;
	return e;
}
function getTarget(event){
	if(event.target){
		return event.target;
	}else{
		return event.srcElement;
	}
}
