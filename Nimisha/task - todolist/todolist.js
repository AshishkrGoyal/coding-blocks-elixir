
window.onload = function ()
{
    var todoList = [];
    var output = document.getElementById("output");
    var addtodo2 = document.getElementById("done");
    //console.log(addtodo2);
    var input = document.getElementById("getValue");
    /*var todoList = JSON.parse(localStorage.getItem('todo'));*/
    console.log(addtodo2);





    var display = function () {
        output.innerHTML = '';
        for (var i = 0; i < todoList.length; i++) {
            output.innerHTML += '<li >' + todoList[i].value + '</li>';
        }
    };

   /* if (todoList!= null) {
        console.log('to do is not empty');
        display();
    }
    else {
        console.log('to do is empty');
        todoList = [];
    }*/

    addtodo2.onclick = function () {
        console.log('entered the onclick function');
        var todo = input.value;
        console.log("to do is " + todo);
        todoList.push({
            'value': input.value,
            'done': false
        });
        display();
        /*localStorage.setItem('todo', todoList);*/
    }


    };
