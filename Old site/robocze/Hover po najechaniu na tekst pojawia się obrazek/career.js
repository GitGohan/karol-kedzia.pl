var thumbs = $('#thumb li a'); //zawiera wszystkie odnosniki
var container = $('#main'); //element, w który będą wrzucane zdjęcia w pełnym rozmiarze

thumbs.click(function(event){
    container.empty(); // opróżniamy kontener z poprzedniego zdjęcia
    event.preventDefault(); // blokujemy domyslną akcję dla kliknięcia
    var href = $(this).attr('href'); // pobieramy hrefa z klikniętego linka
    $('<img src="'+href+'" alt="img">').appendTo(container); // tworzymy nowy element img i doajemy pobranego wczesniej hrefa
    //$('<img src="'+href+'" alt="img">').appendTo(container).hide().fadeIn();  // zakomentować linię powyżej i odkomentować tą dla bardziej zbajerowanego efektu ;)
});
