// Busca por alimento (nome do alimento em português, nome do alimento em inglês ou nome científico do alimento), considerando os grupos de alimentos: 
serão listados todos os alimentos, com dados disponíveis, considerando a base de dados escolhida (TBCA – Avaliação de Ingestão de Nutrientes ou TBCA – Biodiversidade e Alimentos Regionais);

//Busca pelo grupo do alimento: serão listados todos os alimentos do grupo escolhido, com suas especificações, considerando a TBCA – Avaliação de Ingestão de Nutrientes ou TBCA – Biodiversidade e Alimentos Regionais;

//Tipo de alimento: serão listados todos os alimentos do grupo e tipo de alimento escolhidos, com suas especificações, considerando a TBCA – Avaliação de Ingestão de Nutrientes;

//Busca por componente: serão listas todos os alimentos considerando quantidade do nutriente, conforme o grupo de alimentos ao qual pertencem, considerando a TBCA – Avaliação de Ingestão de Nutrientes. 
Os relatórios para consulta poderão ser apresentados em ordem crescente ou descrente do componente no alimento.

**Fetch APi Javascript TACO
// Solicitação GET.
fetch('https://www.tbca.net.br/')
// Tratamento do sucesso
 .then(response => response.json()) // converter para json
 .then(data => {  })  //imprimir dados
 .catch(error => {console.error('Erro:', error);
 });

**Fetch APi Javascript DRI / RDA
// Solicitação GET.
fetch('https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx')
// Tratamento do sucesso
 .then(response => response.json()) // converter para json
 .then(data => {  })  //imprimir dados
 .catch(error => {console.error('Erro:', error);
 });

// Solicitação GET.
fetch('https://www.tbca.net.br/')
// Tratamento do sucesso
    .then(response => response.json())  // converter para json
    .then(json => console.log(json))    //imprimir dados no console
    .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch

// Solicitação GET.
fetch('https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx', {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}   // passa um objeto JSON para a propriedade "headers"
})
.then(response => response.json())   // converter para json
.then(json => console.log(json));  //imprimir dados no console
.catch(err => console.log(err)); // lidar com os erros por catch

//Solicitação POST.
fetch(‘https://www.tbca.net.br/', {
method: ‘POST’,
body: JSON.stringify({
userId: 1,
title: “clean room”,
completed: false
}),
headers: {
“Content-type”: “application/json; charset=UTF-8”
}
})
.then(response => response.json()) // converter para json
.then(json => console.log(json))  //imprimir dados no console

//Solicitação PUT.
fetch(‘https://www.tbca.net.br/', {
method: ‘PUT’,
body: JSON.stringify({
userId: 1,
id: 5,
title: “hello task”,
completed: false
}),
headers: {
“Content-type”: “application/json; charset=UTF-8”
}
})
.then(response => response.json()) // converter para json
.then(json => console.log(json)) //imprimir dados no console

//Solicitação PATCH.
fetch(‘https://www.tbca.net.br/', {
method: ‘PATCH’,
body: JSON.stringify({
completed: true
}),
headers: {
“Content-type”: “application/json; charset=UTF-8”
}
})
.then(response => response.json())
.then(json => console.log(json))

//Solicitação DELETE.
fetch(‘https://www.tbca.net.br/', {
method: ‘DELETE’
})
