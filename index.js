const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Helo my over programming smarty node js!!!")
});


const users = [
    {id: 1, name: 'Hanif', email: 'hanif1@gmail.com', phone:' 01788888888'},
    {id: 2, name: 'kalam', email: 'kalam@gmail.com', phone:' 01788888888'},
    {id: 3, name: 'jamal', email: 'jamal@gmail.com', phone:' 01788888888'},
    {id: 4, name: 'akash', email: 'akash@gmail.com', phone:' 01788888888'}, 
    {id: 5, name: 'bathash', email: 'bathash@gmail.com', phone:' 01788888888'}, 
    {id: 6, name: 'shurjo', email: 'shurjo@gmail.com', phone:' 01788888888'}, 
    {id: 7, name: 'alo', email: 'alo@gmail.com', phone:' 01788888888'}, 
]


app.get('/users', (req, res)=>{

    // Query search system filter vy search query
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const match = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(match)
    }
    else{
        res.send(users)
    }
    
});


app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(u=> u.id == id)
    res.send(user)
});

app.get('/furits/mango/fazle', (req, res) => {
    res.send('fozle mango awsome testi')
});

app.post('/user', (req, res) => {
    console.log('Resquest', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/furits', (req, res)=>{
    res.send(['mango', 'apple', 'oranges'])
});

app.listen(port, () => {
    console.log("Done listening port", port)
})