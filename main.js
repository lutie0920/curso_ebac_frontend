$('form').on('submit', function(e){
    e.preventDefault();

    const nomeTarefa = $('#nome-tarefa').val();
    const novoItem = $('<li></li>');
    $(novoItem).html(nomeTarefa);
    $(novoItem).appendTo("ul");

    $("li").click(function() {
        $(this).css('text-decoration-line', 'line-through'); 
    });

    $('#nome-tarefa').val('');
}) 

