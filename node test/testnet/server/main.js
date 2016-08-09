var net = require('net');


var client = new net.Socket();

client.connect(54321,'localhost',function(){
    console.log('���ӷ������ɹ�');
    client.write('�����������!','UTF8',function(){
        console.log('��������������Ϣ�ɹ�');
    });
});