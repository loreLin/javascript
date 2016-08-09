var net = require('net');
var server = new net.Server();

server.on('connection',function(socket)
{
    console.log('connection�¼�:'+socket);

    socket.on('data',function(data){
        console.log(data.toString());
    });
});

//server.on('error',function(err){
  //  console.log(err);

//});

server.on('listening',function(){
    console.log("listening �¼�:");
});

server.on('close',function(){
    console.log('close event');
});

server.listen(54321,'localhost',100,function(socket){
    console.log('listen success');

});

process.on('uncaughtException',function(err){
    console.log("Caught exception:" +err);
})

