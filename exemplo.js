/*
	Atividade desenvolvida por Phillipe e Josênele,
	alunos do curso de computação da UEPB para a cadeira de 
	Desenvolvimento de Interface Gráfica.
*/


const get = document.querySelector("#get")
const post = document.querySelector("#post")
const put = document.querySelector("#put")
const del = document.querySelector("#delete")


//GET
get.addEventListener("click",(e)=>{
	fetch('https://demo3796954.mockable.io').then(response=>response.json()).then(data=>console.log(data)).catch(err => console.log(err));
})

//POST
post.addEventListener("click",(e)=>{

	fetch('http://demo3796954.mockable.io/post', {
	method: "POST",
	body: JSON.stringify({"data":"example"})}
	).then(response=>response.json()).then(data=>console.log(data)).catch(err => console.log(err));
})

//PUT
put.addEventListener("click",(e)=>{

	fetch('http://demo3796954.mockable.io/put', {
	method: "PUT",
	body: JSON.stringify({"data":"example"})}
	).then(response=>response.json()).then(data=>console.log(data)).catch(err => console.log(err));
})

//DELETE
del.addEventListener("click",(e)=>{

	fetch('http://demo3796954.mockable.io/delete', {
	method: "DELETE",
	body: JSON.stringify({"data":"example"})}
	).then(response=>response.json()).then(data=>console.log(data)).catch(err => console.log(err));
})
