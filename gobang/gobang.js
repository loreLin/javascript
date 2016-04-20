window.onload = start;
var th = document.getElementsByTagName("th");
var record = new Array(100);
var top = 0;
var flag = 1;
var win = 0;
function start() {
    document.getElementById("newStart").onclick = newStart;
    document.getElementById("back").onclick = back;
    for (var i = 0; i < 100; i++) {
        th[i].id = i;
        th[i].onclick = changePic;
    }
}
function changePic () {
    if (this.className == "" && flag == 1&&win==0) {
        this.className = "white";
        flag = 0;
        record[top] = this.id;
        top++;
        if (isWin(this.id, "white")) {
            alert("白棋获胜");
            win = 1;
        }
    }
    else if (this.className == "" && flag == 0&&win==0) {
        this.className = "black";
        flag = 1;
        record[top] = this.id;
        top++;
        if (isWin(this.id, "black")) {
            alert("黑棋获胜");
            win = 1;
        }
    }
}
function isWin(i, color) {
    if (lie(i, color)) return true;
    if (hang(i, color)) return true;
    if (xie(i, color)) return true;
    return false;
}
function lie(i, color) {
    var sum = 0;
    var thId;
    i = Number(i);//将i转化为数字
    thId = i + 10;
    while (thId < 100 && th[thId].className == color) {
        sum++;
        thId = thId + 10;
    }
    thId = i - 10;
    while (thId >= 0 && th[thId].className == color) {
        sum++;
        thId = thId - 10;
    }
    if (sum >= 4) return true;
    else return false;
}
function hang(i, color) {
    var sum = 0;
    var thId;
    i = Number(i);//将i转化为数字
    thId = i % 10;
    thId--;
    while (thId >= 0 && th[i - i % 10 + thId].className == color) {
        sum++;
        thId--;
    }
    thId = i % 10;
    thId++;
    while (thId < 10 && th[i + thId - i % 10].className == color) {
        sum++;
        thId++;
    }
    if (sum >= 4) return true;
    else return false;
}
function xie(i, color) {
    var sum = 0;
    var thId;
    i = Number(i);
    thId = i + 11;
    while (thId < 100 && th[thId].className == color&&thId%10!=9) {
        sum++;
        thId = thId + 11;
    }
    thId = i - 11;
    while (thId >= 0 && th[thId].className == color&&thId%10!=0) {
        sum++;
        thId = thId - 11;
    }
    if (sum >= 4) return true;
    sum = 0;
    thId = i + 9;
    while (thId < 100 && th[thId].className == color&&thId % 10 != 0) {
        sum++;
        thId = thId + 9;
    }
    thId = i - 9;
    while (thId >= 0 && th[thId].className == color&&thId%10!=9) {
        sum++;
        thId = thId - 9;
    }
    if (sum >= 4) return true;
      return false;
}
function newStart() {
    for (var i = 0; i < 100; i++)
        th[i].className = "";
    win = 0;
}
function back() {
    if (top != 0) {
        top--;
        th[record[top]].className = "";
        if (flag == 1) flag = 0;
        else flag = 1;
    }
}
