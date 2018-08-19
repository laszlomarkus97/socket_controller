var app = require('express')();
var http = require('http').Server(app);
var io=require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection',(socket)=>{
	console.log("User connected");
	socket.on('data',(msg)=>{
			console.log(msg);
			socket.broadcast.emit('browser-data', msg);
	})
})
http.listen(3000, function(){
  console.log('listening on *:3000');
});