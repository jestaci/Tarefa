$(document).ready(function(){
    $('.nova-tarefa-botao').click(function() {
        $('.tarefas-container').slideDown();

            const recuperarInput = $('.nova-tarefa-input').val();
            const novaTarefa = $('<li></li>');
            $(`<li>${recuperarInput}</li>`).appendTo(novaTarefa);
            $(novaTarefa).appendTo('ul');
            $('.nova-tarefa-input').val('');
    })
    $('.tarefas-container').click(function(){
        $(this).toggleClass('concluida')
    });

})

