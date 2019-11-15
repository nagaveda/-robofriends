const users=[
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/photos'
];

 Promise.all(users.map(url=>{
    return fetch(url).then(data=>data.json());
})).then(array=>{
    console.log(array[0]);
    console.log(array[1]);
})
