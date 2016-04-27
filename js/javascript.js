var newMass = [];
var current = '';
var toDoStorage = [];

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
    TaskList: document.getElementById('TaskList'),
    img: document.getElementById('TaskList')
};

AllTask.addBtnTodoList.addEventListener('click', EventHandler);

window.addEventListener('hashchange', function (e) {
    current = e.newURL.split('#')[1];
    StatusHandler(current);
});

function EventHandler(){
    var EventHandler = AllTask.addNewTaskTodoList.value;
    var EventHandlerActive = EventHandler.length;
    if (EventHandlerActive === 0){
        return false;
    }
    if (EventHandlerActive >= 36){
        alert('Вы использовали больше 35 символов');
        return false;
    }
    var dataStorageIt = new dataStorage(EventHandler, 'active');
    AllTask.addNewTaskTodoList.value = '';
    newMass.push(dataStorageIt);
    AddNewList();
    console.log('data Storage: ', dataStorage);
}

function StatusHandler(status) {
    StatusHandlerButtActive(status);
}

function StatusHandlerButtActive(status) {
    AllTask.active.firstElementChild.className = 'btn btn-success';
    AllTask.done.firstElementChild.className = 'btn btn-success';
    AllTask.remove.firstElementChild.className = 'btn btn-success';
    AllTask[status].firstElementChild.className = 'btn btn-success active';
    if(status === AllTask.active){
        toDoStorage.filter( function (item) {
            return item.active;
        });
    }
    if(status === AllTask.done){
        toDoStorage.filter( function (item) {
            return item.done;
        });
    }
    if(status === AllTask.remove){
        toDoStorage.filter( function (item) {
            return item.remove;
        });
    }
    AddNewList(toDoStorage);
}

function AddNewList() {
    AllTask.TaskList.remove();
    AllTask.TaskList = document.createElement('ul');
    AllTask.TaskList.classList = 'list-group';
    AllTask.TaskList.setAttribute('id', 'TaskList');
    AllTask.fullDataTodoStorage.appendChild(AllTask.TaskList);
    console.log(AllTask.TaskList);
    newMass.forEach( function (item) {
        var newUlList = document.createElement('li');
        var images = document.createElement('img');
        images.setAttribute('src', 'img/ico_mus.png');
        images.className = 'img-rounded';
        newUlList.setAttribute('onclick', 'doneList('+ toDoStorage + ')');
        images.setAttribute('onclick', 'removeList');
        newUlList.className = 'list-group-item list-group-item-success';
        newUlList.appendChild(document.createTextNode(item.title));
        AllTask.TaskList.appendChild(newUlList);
        newUlList.appendChild(images);
        console.log('Item', newUlList);
    });
}

function doneList() {
    AllTask.TaskList.remove();
    AllTask.TaskList = document.createElement('ul');
    AllTask.TaskList.classList = 'list-group list-group-item-warning';
    AllTask.TaskList.setAttribute('id', 'TaskList');
    AllTask.fullDataTodoStorage.appendChild(AllTask.TaskList);
}

function removeList() {
    AllTask.TaskList.remove();
    AllTask.TaskList = document.createElement('ul');
    AllTask.TaskList.classList = 'list-group list-group-item-danger';
    AllTask.TaskList.setAttribute('id', 'TaskList');
    AllTask.fullDataTodoStorage.appendChild(AllTask.TaskList);
}