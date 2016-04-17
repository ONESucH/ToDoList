var taskMass = [];
var currentData = '';

var dataStorage = function (title, status) {
    this.title = title;
    this.status = status;
};

var AllTask = {
    titleToDOList: document.getElementById('titleToDOList'),
    addNewTaskTodoList: document.getElementById('addNewTaskTodoList'),
    addBtnTodoList: document.getElementById('addBtnTodoList'),
    btnGroupTodoList: document.getElementById('btnGroupTodoList'),
    active: document.getElementById('active'),
    done: document.getElementById('done'),
    remove: document.getElementById('remove'),
    fullDataTodoStorage: document.getElementById('fullDataTodoStorage'),
    TaskList: document.getElementById('TaskList')
};

AllTask.addBtnTodoList.addEventListener('click', InputTextActive);

window.addEventListener('hashchange', function (e) {
    currentData = e.newURL.split('#')[1];
    tasksHandlers(currentData)
});

function InputTextActive() {
    var addNewTaskTodoList = AllTask.addNewTaskTodoList.value;
    var ActiveClick = addNewTaskTodoList.length;
    if(ActiveClick === 0) {
        return false;
    }
    var dataForStorage = new dataStorage(addNewTaskTodoList, 'active');
    AllTask.addNewTaskTodoList.value = '';
    taskMass.push(dataForStorage);
    newLabelList();
    console.log("dataMass:", taskMass);
}

function tasksHandlers(status) {
    addNewList(status);
}

function addNewList(status) {
    AllTask.active.firstElementChild.className= 'btn btn-success';
    AllTask.done.firstElementChild.className= 'btn btn-success';
    AllTask.remove.firstElementChild.className= 'btn btn-success';
    AllTask[status].firstElementChild.className= 'btn btn-success active';
}

function newLabelList() {
    AllTask.TaskList.remove();
    AllTask.TaskList = document.createElement('ul');
    AllTask.TaskList.className = 'list-group';
    AllTask.TaskList.setAttribute("id", "TaskList");
    AllTask.fullDataTodoStorage.appendChild(AllTask.TaskList);
    console.log(AllTask.TaskList);

    taskMass.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item list-group-item-success';
        listItem.appendChild(document.createElement(item.titleToDOList));
        AllTask.TaskList.appendChild(listItem);
        console.log('item:',item);
})
}
function removeLabelList() {
    taskMass.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item list-group-item-success';
        listItem.appendChild(document.createElement(item.titleToDOList));
        AllTask.TaskList.appendChild(listItem);
        console.log('item:',item);
        })
}