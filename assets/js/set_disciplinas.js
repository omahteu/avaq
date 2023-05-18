var disciplinas = ["Introdução à Teologia", "Bibliologia", "Vivência Cristã", "Metodologia do Trabalho Acadêmico"]

disciplinas.forEach(function(item){
    $('#disciplinas').append('<option>' + item + '</option>');
});