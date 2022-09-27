var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0; i<navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        interval = setInterval(scrollVertically, 1, targetSection);
    });
}
var prev;
function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    if(prev == targetSectionCoordinates.top){
        clearInterval(interval);
        return;
    }
    prev=targetSectionCoordinates.top;
    window.scrollBy(0, 40);
}