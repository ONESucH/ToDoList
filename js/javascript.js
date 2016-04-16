var AllElements = {
    titleToDOList: document.getElementById('titleToDOList'),
    addNewTaskTodoList: document.getElementById('addNewTaskTodoList'),
    addBtnTodoList: document.getElementById('addBtnTodoList'),
    btnGroupTodoList: document.getElementById('btnGroupTodoList'),
    active: document.getElementById('active'),
    done: document.getElementById('done'),
    remove: document.getElementById('remove'),
    fullDataTodoStorage: document.getElementById('fullDataTodoStorage'),
    TaskList : document.getElementById('TaskList')
};

AllElements.addNewTaskTodoList.addEventListener('click', clickingTest);

function clickingTest() {
    var clickingTestUsers = AllElements.addNewTaskTodoList.value;
    var valueTask = clickingTestUsers.value;
    if(valueTask === 0){
        return false;
    }
    console.log("clickingTest-Сработал:");
}
