var dataTodo = [];
var currentHashName = location.hash.split('#')[1];

var dataStorage = function (title, status, index) {
    this.title = title;
    this.status = status;
    this.index = index
};

/**
 * Инициализация dom елементов
 * @type {{titleToDOList: Element, addNewTaskTodoList: Element, addBtnTodoList: Element, btnGroupTodoList: Element, active: Element, done: Element, remove: Element, fullDataTodoStorage: Element, TaskList: Element, img: Element}}
 */
var allTask = {
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

dataTodo = setAndGetDataFromStorage('read');
setCurrentTab();
allTask.addBtnTodoList.addEventListener('click', EventHandler);

window.addEventListener('hashchange', getCurrentHashName);

/**
 * Функция нужна для добавления задачи в тодоЛист
 * @constructor
 */
function EventHandler() {
    var EventHandler = allTask.addNewTaskTodoList.value;
    var EventHandlerActive = EventHandler.length;
    if (EventHandlerActive === 0) {
        return;
    }
    if (EventHandlerActive >= 36) {
        alert('Вы использовали больше 35 символов');
        return;
    }
    var dataStorageIt = new dataStorage(EventHandler, 'active', dataTodo.length);
    allTask.addNewTaskTodoList.value = '';
    dataTodo.push(dataStorageIt);
    location.hash = 'active';
    setCurrentTab();
    renderAllData();
    console.log(dataTodo);
}

/**
 * Устанавливает 'active' ТАБ, нужен для добавления задачи в тодо лист
 */

/**
 * Устанавливает текущий таб по хешу, вызывается у события hashchange
 */
function setCurrentTab() {
    if (!currentHashName) {
        currentHashName = 'active';
        location.hash = 'active';
    }
    allTask.active.firstElementChild.className = 'btn btn-success';
    allTask.done.firstElementChild.className = 'btn btn-success';
    allTask.remove.firstElementChild.className = 'btn btn-success';
    allTask[currentHashName].firstElementChild.className = 'btn btn-success active';
    renderAllData();
}

/**
 * Получает текущий хеш
 */
function getCurrentHashName(e) {
    currentHashName = e.newURL.split('#')[1];
    setCurrentTab();
}

/**
 * Отрисовка всех данных с массива
 */
function renderAllData() {
    removeDomElementsAndAgainSetTheir();
    dataTodo.forEach(function (item) {
        if (item.status !== currentHashName) {
            return false;
        }
        var newUlList = document.createElement('li');
        var images = document.createElement('img');
        if (item.status === 'active') {
            newUlList.className = 'list-group-item list-group-item-success';
            newUlList.setAttribute('onclick', 'doneItemStorage(' + item.index + ')');
            images.setAttribute('src', 'img/ico_mus.png');
            images.setAttribute('onclick', 'removeItemStorage(' + item.index + ')');
        }
        if (item.status === 'done') {
            newUlList.className = 'list-group-item list-group-item-warning';
            images.setAttribute('src', 'img/ico_mus.png');
            newUlList.setAttribute('onclick', 'unDoneItemStorage(' + item.index + ')');
            images.setAttribute('onclick', 'removeItemStorage(' + item.index + ')');
        }
        if (item.status === 'remove') {
            newUlList.className = 'list-group-item list-group-item-danger';
            images.setAttribute('onclick', 'unRemoveItemStorage(' + item.index + ')');
            images.setAttribute('src', 'img/return.png');
        }
        images.className = 'img-rounded';
        newUlList.appendChild(document.createTextNode(item.title));
        allTask.TaskList.appendChild(newUlList);
        newUlList.appendChild(images);
    });
    setAndGetDataFromStorage('save');
}

/**
 * Удаляет ul и заного его создает и вставляет в DOM
 */
function removeDomElementsAndAgainSetTheir() {
    allTask.TaskList.remove();
    allTask.TaskList = document.createElement('ul');
    allTask.TaskList.classList = 'list-group';
    allTask.TaskList.setAttribute('id', 'TaskList');
    allTask.fullDataTodoStorage.appendChild(allTask.TaskList);
}

function doneItemStorage(index) {
    dataTodo[index].status = 'done';
    renderAllData();
}

function removeItemStorage(index) {
    setTimeout(function () {
        dataTodo[index].status = 'remove';
    }, 100);
    renderAllData();
}

function unRemoveItemStorage(index) {
    dataTodo[index].status = 'active';
    renderAllData();
}

function unDoneItemStorage(index) {
    dataTodo[index].status = 'active';
    renderAllData();
}

function setAndGetDataFromStorage(type) {
    if (type === 'read') {
        return JSON.parse(localStorage.getItem('todoList'));
    }
    if (type === 'save') {
        var jsonTodo = JSON.stringify(dataTodo);
        localStorage.setItem('todoList', jsonTodo)
    }
}
