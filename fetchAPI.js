// Busca por alimento (nome do alimento em português, nome do alimento em inglês ou nome científico do alimento), considerando os grupos de alimentos: 
serão listados todos os alimentos, com dados disponíveis, considerando a base de dados escolhida (TBCA – Avaliação de Ingestão de Nutrientes ou TBCA – Biodiversidade e Alimentos Regionais);

//Busca pelo grupo do alimento: serão listados todos os alimentos do grupo escolhido, com suas especificações, considerando a TBCA – Avaliação de Ingestão de Nutrientes ou TBCA – Biodiversidade e Alimentos Regionais;

//Tipo de alimento: serão listados todos os alimentos do grupo e tipo de alimento escolhidos, com suas especificações, considerando a TBCA – Avaliação de Ingestão de Nutrientes;

//Busca por componente: serão listas todos os alimentos considerando quantidade do nutriente, conforme o grupo de alimentos ao qual pertencem, considerando a TBCA – Avaliação de Ingestão de Nutrientes. 
Os relatórios para consulta poderão ser apresentados em ordem crescente ou descrente do componente no alimento.



fetch('https://www.tbca.net.br/')
 .then(response => response.json()) // converter para json
 .then(data => {  }) 
 .catch(error => {console.error('Erro:', error);
 });


fetch('https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx')
// Tratamento do sucesso
 .then(response => response.json()) // converter para json
 .then(data => {  })  //imprimir dados
 .catch(error => {console.error('Erro:', error);
 });


fetch('https://www.tbca.net.br/')
    .then(response => response.json()) 
    .then(json => console.log(json))   
    .catch(err => console.log('Erro de solicitação', err)); 
});


fetch('https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx', {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}  
})
.then(response => response.json())
.then(json => console.log(json));  
.catch(err => console.log(err)); 
})


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
.then(response => response.json())
.then(json => console.log(json))  
.catch(err => console.log(err)); 
})

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
.then(response => response.json()) 
.then(json => console.log(json)) 
.catch(err => console.log(err)); 
})


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
.catch(err => console.log(err)); 
})

fetch(‘https://www.tbca.net.br/', {
method: ‘DELETE’
headers: {"Content-type": "application/json;charset=UTF-8"}   
})
.then(response => response.json()) 
.then(json => console.log(json));  
.catch(err => console.log(err)); 
})
