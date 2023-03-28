$('form').on('submit', function(e){
    e.preventDefault();

    const nomeTarefa = $('#nome-tarefa').val();
    const novoItem = $('<li></li>');
    $(novoItem).html(nomeTarefa);
    $(novoItem).appendTo("ul");

    $("li").click(function() {
        if ($(this).css('text-decoration-line') === 'line-through') {
            $(this).css('text-decoration-line', 'none'); 
        } else {
            $(this).css('text-decoration-line', 'line-through'); 
        }
    });

}) 

