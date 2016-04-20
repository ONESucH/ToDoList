var newMass = [];
var current = '';

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

AllTask.addBtnTodoList.addEventListener('click', EventHandler);

window.addEventListener('hashchange', function (e) {
    current = e.newURL.split('#')[1];
    StatusHandler(current)
});

function EventHandler(){
    var EventHandler = AllTask.addNewTaskTodoList.value;
    var EventHandlerActive = EventHandler.length;
    if(EventHandlerActive === 0){
        return false;
    }
    var dataStorageIt = new dataStorage(EventHandler, 'active');
    AllTask.addNewTaskTodoList.value = '';
    newMass.push(dataStorageIt);
    AddNewList();
    console.log('data Storage: ', newMass);
}

function StatusHandler(status) {
    StatusHandlerButt(status);
}

function StatusHandlerButt(status) {
    AllTask.active.firstElementChild.className = 'btn btn-success';
    AllTask.done.firstElementChild.className = 'btn btn-success';
    AllTask.remove.firstElementChild.className = 'btn btn-success';
    AllTask[status].firstElementChild.className = 'btn btn-success active';
}

function AddNewList() {
    AllTask.TaskList.remove();
    AllTask.TaskList = document.createElement('ul');
    AllTask.TaskList.classList = 'list-group';
    AllTask.TaskList.setAttribute("id", "TaskList");
    AllTask.fullDataTodoStorage.appendChild(AllTask.TaskList);
    console.log(AddNewList);

    newMass.forEach( function (item) {
        var newUlList = document.createElement('li');
        newUlList.className = 'list-group-item list-group-item-success';
        newUlList.appendChild(document.createTextNode(item.title));
        console.log('Item: ', item);
        AllTask.TaskList.appendChild(newUlList);
    })
}

function removeNewList() {
    newMass.forEach( function (item) {
        var newUlList = document.createElement('li');
        newUlList.className = 'list-group-item list-group-item-success';
        newUlList.appendChild(document.createTextNode(item.title));
        console.log('Item: ', item);
        AllTask.TaskList.appendChild(newUlList);
    })
}
