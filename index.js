// Write your code here!

//WRITTEN USING .THEN.... . CATCH
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(posts => {
// //console.log(posts);
// })
// .catch(error => {

// console.error('Error fetching user data:', error);
// });

//WRITTEN USING ASYNC/AWAIT... PREFERABLE
async function fetchAndDisplayPosts() {
  //fetch in a function. called at the bottom
  //try...catch block
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    //waits to call displayPosts until data is fetched
    displayPosts(posts);
  } catch (error) {
    //error handling. creates new list item to load in case of error
    const postList = document.querySelector('#post-list');
    const errorMessage = document.createElement('li');
    errorMessage.textContent = 'Failed to load post data. Try again later';
    postList.appendChild(errorMessage);
    console.error('Error', error);
  }
}
function displayPosts(posts) {
  //create variable for post list
  const postList = document.querySelector('#post-list');
  //loop over each post
  posts.forEach((post) => {
    //create a list item
    const listItem = document.createElement('li');
    //create a heading
    const heading = document.createElement('h1');
    //add key title as text content to heading
    heading.textContent = post.title;
    //create a paragraph
    const par = document.createElement('p');
    //add key body to par
    par.textContent = post.body;
    //append each item
    listItem.appendChild(heading);
    listItem.appendChild(par);
    postList.appendChild(listItem);
  });
}
fetchAndDisplayPosts();
