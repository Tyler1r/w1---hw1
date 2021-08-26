const message = "Hello world"

// vanilla javascript 
// document.addEventListener('DOMContentLoaded', () => {
//     const div = document.querySelector('.container')
//     div.innerHTML = '<h1>' + message + '</h1>'
// })

// react 

// Since we imported ReactDOM in our inde.html we can then use the ReactDOM in our file 

// render is a method in reactDOM that lets us see our app on the browser 
// two arguments 

ReactDOM.render(
    // JSX - mixtur of JS and HTML 
    // in JSX the way we tell it to read JS is by the {}
    // anything inside the curly brackets gets treated as javascript
    <h1>{meesage}</h1>,
    // second document 
    document.querySelector('.container')
)