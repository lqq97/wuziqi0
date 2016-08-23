/**
 * Created by 做信的恋人 on 2016-08-21.
 */
var chessBox=document.getElementById('chessBox');
var chessBoxUl=chessBox.getElementsByTagName('ul')[0];
var arr=[];//表示二维数组；对应棋盘的交点

function chessBoxFun(rows){//rows表示我需要的行数
    var cols=chessBox.clientWidth/40;//每一行有几个;//clientWidth节点的可视宽度
    var frag=document.createDocumentFragment();//碎片
    for(var i=0;i<=rows;i++)
    {
        arr[i]=[];//定义一维数组的元素为数组
        for(var j=0;j<=cols;j++)
        {
            arr[i][j]=false;//false表示没有落子,tru表示落子;
            if(i!=rows &&j!=cols){
                var li=document.createElement('li');
                frag.appendChild(li);
            }
        }
    }
    chessBoxUl.appendChild(frag);
}
chessBoxFun(10);//创建棋盘

var boolOrder=true;//true表示下黑子,false表示下白子;

chessBox.onclick=function(e) {

    var event = window.event || e;
    var bodyChessBoxPosX = chessBox.offsetLeft - 3;//得到节点于父级的距离（position有关）
    var bodyChessBoxPosY = chessBox.offsetTop - 3;
    var pageX = event.pageX;
    var pageY = event.pageY;
    var chessBoxWidth = chessBox.clientWidth;
    var chessBoxHight = chessBox.clientHeight;



    if (pageX < bodyChessBoxPosX || pageY < bodyChessBoxPosY || pageX > bodyChessBoxPosX + mouseQpx || pageY > bodyChessBoxPosY + mouseQpy) {
        return;
    }

    var mouseQpx = pageX - bodyChessBoxPosX;
    var mouseQpy = pageY - bodyChessBoxPosY;
    var liWidth = 40;

    var x = Math.round(mouseQpx / liWidth);
    var y = Math.round(mouseQpy / liWidth);


    if (arr[y][x]) {
        alert('棋子已经存在,请换个位子下棋');
        return;//强制退出循环;
    }
    arr[y][x] = true;//记录坐标有子;


        var current = document.getElementById('current');//箭头节点
        var span = document.createElement('span');

        if (boolOrder) {
            span.className = 'black';
            boolOrder = false;
            arr[y][x]='black';
            current.style.top = '78px';
        } else {
            span.className = 'white';
            boolOrder = true;
            arr[y][x]='white';
            current.style.top = '2px';
        }
        span.setAttribute('style', 'position:absolute;left:' + (x * liWidth - 15) + 'px;top:' + (y * liWidth - 15) + 'px');
        chessBox.appendChild(span);
        winFun(x, y,arr[y][x] );


        console.log(mouseQpx, mouseQpy, x, y);
        console.log(bodyChessBoxPosX, bodyChessBoxPosY, pageX, pageY);

}
function winFun(x,y,color){
    var num=0;
    for( var i=y-4,j=x-4;i<=y+4,j<=x+4;i++,j++){
        if(i>=0 &&j>=0){
            if(arr[i]!=null){
                if(arr[i][j]==color){
                    num++;
                    if(num==5){
                        return alert(color+'赢了');
                    }
                }
                else{
                    num=0;
                }
            }
        }
    }
    var num=0;
    for( var i=y+4,j=x-4;i<=y-4,j<=x+4;i--,j++){
        if(i>=0 &&j>=0){
            if(arr[i]!=null){
                if(arr[i][j]==color){
                    num++;
                    if(num==5){
                        return alert(color+'赢了');
                    }
                }else{
                    num=0;
                }
            }
        }
    }


    var num=0;
    for( var i= y,j=x-4;j<=x+4;j++){
        if(i>=0 &&j>=0){
            if(arr[i]!=null){
                if(arr[i][j]==color){
                    num++;
                    if(num==5){
                        return alert(color+'赢了');
                    }
                }else{
                    num=0;
                }
            }
        }
    }


    var num=0;
    for( var j= x,i=y-4;i<=y+4;i++){
        if(i>=0 &&j>=0){
            if(arr[i]!=null){
                if(arr[i][j]==color){
                    num++;
                    if(num==5){
                        return alert(color+'赢了');
                    }
                }else{
                    num=0;
                }
            }
        }
    }






}







