//変数
let hw = 'Hello';

//定数
const hw2 = 'Good Bye';

//配列
let fruits = ['りんご','ぶどう','みかん']; //length = 3

//ループ文
// let index = 0;
// while(index < fruits.length){ //= 3
//     //繰り返したい命令
//     console.log(index);
//     index++; //index=1
// }

//条件分岐
// if (fruits.length > 2){
//     console.log('食べたい');
// }else{
//     console.log('食べない');
// }

//関数
const test = (arg) => {　//引数（arg）で任意の実行回数に
    //ここに実行したい命令を書く
    if (fruits.length > arg){
        console.log('食べたい');
    }else{
        console.log('食べない');
    }
};

test(2);// ←引数(arg)

//オブジェクト
const apple = {
    color: 'red',
    size: 'midium',
    kanso: () => {  //←の()
        console.log('おいしい');
    }
};

// console.log(window.innerHeight);//関数の呼び出しは上記の（）が必要
//window.alert('test');//「window」ブラウザ全体になにかさせたいときのオブジェクト
//console.log(document);//「document」ページ全体になにかさせたいときのオブジェクト

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
        //命令を書く
        window.alert('ボタンが押されました');
    });//ボタンなどを引っ張ってこれる　[ElementsByTagName]←HTMLのタグを引っ張れる　「addEventLithner」←引数を2つ指定できる





