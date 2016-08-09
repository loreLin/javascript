var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs'),
    path = require('path');
request('http://chanyouji.com/trips/586250', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        $ = cheerio.load(body); //body就是页面的body
        var aImgArray = [];  //存放图片路径的数组
        $("img").each(function(index,value){
            aImgArray.push($(value).attr("src"));  //这个方式由于img图片是异步加载的 所以获取的src都有undefined
        });
      //  console.log(aImgArray);

        //分析页面代码 发现路径都是以js代码存放  放在script标签中

        $("script").each(function(a,b){
                //console.log($(b).text());
            if($(b).text().substr(0,11) == "_G_trip_id="){
                   var aTextArray = $(b).text().split('"photo":{"src":');
                    var aSrcList = [];
                    for(var len = aTextArray.length,i=0;i<aTextArray.length;i++){
                        var index = aTextArray[i].indexOf(",");
                        aSrcList.push(aTextArray[i].substr(1,index-2));
                    }
                  console.log(aSrcList);
                getAndSavePic(aSrcList);
            }

          //  console.log("========================="+a+"=============================");
        });
      var str = '"photo":{"src":"http://p.chanyouji.cn/1418896399/BDE9E99A-62A7-4AC3-BC18-9293D32DA5F8.jpg","width":1600,"height":1600},';
    }
});


function getAndSavePic(aSrcList){
    for(var len=aSrcList.length,i=1;i<len;i++){

        var filename = parseUrlForFileName(aSrcList[i]);  //生成文件名
        downloadImg(aSrcList[i],filename,function(){
            console.log(filename + ' done');
        });
    }

}
function parseUrlForFileName(address) {
    var filename = path.basename(address);
    return filename;
}

var downloadImg = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        // console.log('content-type:', res.headers['content-type']);  //这里返回图片的类型
        // console.log('content-length:', res.headers['content-length']);  //图片大小
        if (err) {
            console.log('err: '+ err);
            return false;
        }
        console.log('res: '+ res);
        request(uri)
            .on("error",function(err){
                console.log(error);
            })
            .pipe(fs.createWriteStream('111/'+filename)).on('close', callback);  //调用request的管道来下载到 images文件夹下
    });
};
//http://www.cnblogs.com/gaojun/p/4159488.html