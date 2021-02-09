let arrayOfUsers = "";
// let arrayof5users;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPosts()


}
// window.onload = function() {
//     getPost5()
  
  
//   }

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then( (json) => arrayOfUsers = json)
}
  

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfUsers)
}

// How to fetch each element by the data searched ** worked in t//
    console.log(arrayOfUsers.results[5].gender)

// const getPost5 = () => {
//     fetch('https://randomuser.me/api/?results=50')
//       .then(res => res.json())
//       .then( (json) => arrayof5users = json)
//   }
  
//   // This function logs the results in your browser's console
//   const display5Post = () => {
//     console.log(arrayOf5users)
//   }

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
//  const displayPost = () => {
//   const allPosts = document.getElementById('all-users')
//   arrayOfPosts.map((post, index) => {
//      const li = document.createElement('li')
//           const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
//      li.appendChild(text)
//      allPosts.append(li)
//    })
//  }

// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other APIs and become a real developer!!