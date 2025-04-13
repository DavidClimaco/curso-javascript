//Fetch
/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json));
*/
//Fetch más profesional
let url = 'https://jsonplaceholder.typicode.com';
let query = 'comments?postId=5'

//GET: pedir información
/*fetch(`${url}/${query}`)
    .then(response => response.json())
    .then(json => console.log(json));
*/
//POST: enviar información
let requestBody = {
    title: 'Titulo1',
    body: 'Body1',
    userId: 1
} 
/*fetch(`${url}/posts`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/JSON; charset=UTF-8'},
    body: JSON.stringify(requestBody)
})
    .then(response => response.json())
    .then(json => console.log(json));
*/
//PUT: editar información
/*let post = 10;
let bodyPut = {
    id: 101,
    title: 'Titulo Prueba',
    body: 'Body prueba',
    userId: 1,
}
fetch(`${url}/posts/${post}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/JSON; charset=UTF-8'},
    body: JSON.stringify(bodyPut)
})
    .then(response => response.json())
    .then(json => console.log(json));
*/
//PATCH: editar información: (solo se edita una parte)
/*let post = 10;
let bodyPatch = {
    title: 'Titulo grande',
}
fetch(`${url}/posts/${post}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/JSON; charset=UTF-8'},
    body: JSON.stringify(bodyPatch)
})
    .then(response => response.json())
    .then(json => console.log(json));
*/
//DELETE: borrar un elemento
let post = 90;
fetch(`${url}/posts/${post}`, {
    method: 'DELETE',
});