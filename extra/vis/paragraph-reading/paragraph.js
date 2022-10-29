
$('.paragraph span').each( function(index, element) {
    console.log($(this)),
    setInterval(highlightWord( $(this) ), 2000);
});

function highlightWord(spanElement) {
    return function(){
        spanElement.addClass("reading");    
    }
}