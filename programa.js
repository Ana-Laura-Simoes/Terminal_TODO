var list=["codar","repirar","dormir"];

var readlineSync = require('readline-sync'),
options = ['add', 'list','check', 'remove'],
index = readlineSync.keyInSelect(options, 'Type your command:');


if(options[index]==="add") {
    var ToDo = readlineSync.question("What do you want to do? ");
    //list = list + ToDo;
    list.push(ToDo);

};

if(options[index]==="list"){

    for(let i=0;i<list.length;i++){
        console.log(list[i]);
    }
}

if(options[index]==="check"){
        
     var ind = readlineSync.keyInSelect(list, 'What todo do you want check/uncheck:');

}

if(options[index]==="remove"){
    var ind = readlineSync.keyInSelect(list, 'What todo do you want remove:');

var newli = list.filter((i)=>i!==list[ind]);
list=newli;

    console.log(list);
}



