
var list=[];
var cancel=true;

while(cancel){
const chalk = require('chalk');
var readlineSync = require('readline-sync');
var options = ['add', 'list','check', 'remove'],
index = readlineSync.keyInSelect(options, 'Type your command:');
console.log(options[index]);

switch (options[index]) {
    case 'add':
        var ToDo = readlineSync.question("What do you want to do? ");
        list.push({task:ToDo,status:false});
    break;

    case 'list':
        for(let i=0;i<list.length;i++){
            if(list[i].status===false) console.log(chalk.red(list[i].task));
            else console.log(chalk.green(list[i].task));
            ;
        }
    break;
      
    case 'check':
        var newLIST=list.map((task)=>task.status?chalk.green(task.task):chalk.red(task.task));
        
        var ind = readlineSync.keyInSelect(newLIST, 'What todo do you want check/uncheck:');
   
        var newlist=list.map((task,i)=> {if(i===ind)task.status=!task.status})   ; 
    break;
    
    case 'remove':
        var newLIST=list.map((task)=>task.status?chalk.green(task.task):chalk.red(task.task));
        var ind = readlineSync.keyInSelect(newLIST, 'What todo do you want remove:');

        var newlist = list.filter((i)=>i!==list[ind]);
        list=newlist;
        
    break;     


    case undefined:
        cancel=false;
    break;   
    }
}




