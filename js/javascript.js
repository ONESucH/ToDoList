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
    if(EventHandlerActive === 0){
        return false;
    }
    if(EventHandlerActive >= 46){
        alert('Вы использовали больше 45 символов');
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

function StatusHandlerButtActive(status){
    AllTask.active.firstElementChild.className = 'btn btn-success';
    AllTask.done.firstElementChild.className = 'btn btn-success';
    AllTask.remove.firstElementChild.className = 'btn btn-success';
    AllTask[status].firstElementChild.className = 'btn btn-success active';

    AllTask.active = toDoStorage.filter(function(number) {
        return number > 0;
    });
    console.log('Функия сработала');

function AddNewList() {
    AllTask.TaskList.remove();
    AllTask.TaskList = document.createElement('ul');
    AllTask.TaskList.classList = 'list-group';
    AllTask.TaskList.setAttribute('id', 'TaskList');
    AllTask.fullDataTodoStorage.appendChild(AllTask.TaskList);
    console.log( AllTask.TaskList);
    newMass.forEach( function (item) {
        var newUlList = document.createElement('li');
        var images = document.createElement('img');
        images.setAttribute('src', 'img/ico_mus.png');
        images.className = 'img-rounded';
        newUlList.className = 'list-group-item list-group-item-success';
        newUlList.appendChild(document.createTextNode(item.title));
        newUlList.appendChild(images);
        AllTask.TaskList.appendChild(newUlList);
        console.log('Item', item);
    })
}

function doneList() {
    newMass.forEach( function (item) {
        var newUlList = document.createElement('li');
        var images = document.createElement('img');
        images.setAttribute('src', 'ico_mus.png');
        images.className = 'img-rounded';
        newUlList.className = 'list-group-item list-group-item-primary';
        newUlList.appendChild(document.createTextNode(item.title));
        newUlList.appendChild(images);
        AllTask.TaskList.appendChild(newUlList);
        console.log('Item', item);
    })
}

function removeList() {
    newMass.forEach( function (item) {
        var newUlList = document.createElement('li');
        var images = document.createElement('img');
        images.setAttribute('src', 'img/return.png');
        images.className = 'img-rounded';
        newUlList.className = 'list-group-item list-group-item-danger';
        newUlList.appendChild(document.createTextNode(item.title));
        newUlList.appendChild(images);
        AllTask.TaskList.appendChild(newUlList);
        console.log('Item', item);
    })
}