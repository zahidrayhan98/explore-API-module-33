
  function loadPosts (){
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
  }
    function displayPosts(posts){
        const postContainer =document.getElementById('post-container');
        for (const post of posts){
            

            const postDiv = document.createElement('div');
            postDiv.classList.add('post')

            postDiv.innerHTML=`
            <h3> user: ${post.userId} </h3>
            <h3> id:${post.id} </h3>
            <p> body:${post.body} </p>
            
            `
            postContainer.append(postDiv);
            
        }
    }

  loadPosts();
