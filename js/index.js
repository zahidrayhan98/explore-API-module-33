// function loadUser2(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then (data => displayUser2(data))
// }

//   function displayUser2(data){
//     const ul =document.getElementById('user-details');
//     for (const user of data){
//         console.log(user.name);
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.append(li);



//     }
   
    
//   }


function loadData4  (){
 fetch ('https://jsonplaceholder.typicode.com/users')
 .then (res => res.json())
  .then (data => userData4(data))

}
function  userData4(data){
    const ul = document.getElementById('user-details');
    for ( const user of data){
        console.log(user.email);
        const li = document.createElement('li');
        li.innerText =user.email;
        ul.append(li);
    }
}


function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
  }


  function patchPost (){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }


  function createPost (){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }

