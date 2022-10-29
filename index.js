const {createServer} = require('http');
const port = process.env.port || 3000;

const server = createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write(JSON.stringify({
        "slackUsername": "defacto",
        "backend": true,
        "age": 25,
        "bio": "I am a food scientist with a heightened interest in tech. looking to merge food science and IT. Wish me luck!!"
    }));

    return res.end();
});


server.listen(port, (error) =>{
    if (error){
        console.log(error)
    }else{
        console.log('Server is running here: http://localhost:'+port )
    }
})