// Model => Retrieve, store, process data
// View => User interface
// Controller => Manage view and data & handle uers actions

const Api = (() => {
  // Fetch data from server
  const url = "https://jsonplaceholder.typicode.com/todos";
  const getData = fetch(url).then((res) => res.json());
  return {
    getData,
  };
})();

// only define the view function: have not apply data yet
const View = (() => {
  const domStr = {
    container: ".todolist_container",
    inputBox: "#user-input",
    addBtn: "#addBtn",
  };

  const creatTmp = (arr) => {
    let tmp = "";
    arr.forEach((todo, index) => {
      tmp += `<li id="todo-${index}">
        <span>${todo.title}</span>
        <button class="delete-btn">X</button>
      </li>`;
    });
    return tmp;
  };

  // display the data to html
  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  return {
    domStr,
    creatTmp,
    render,
  };
})();

// apply the data to view function
const Model = ((view, api) => {
  // const todos =[
  //   { title: 'Movie' },
  //   { title: 'Lunch' },
  //   { title: 'Homework' },
  //   { title: 'Take a nap' },
  // ];
  const { getData } = api;

  const { domStr, creatTmp, render } = view;

  class State {
    constructor() {
      this._todoList = [];
    }
    get getTodoList() {
      return this._todoList;
    }
    set newTodoList(arr) {
      this._todoList = arr;
      const todoContainer = document.querySelector(domStr.container);
      const tmp = creatTmp(this._todoList);
      // take an element and an array 
      render(todoContainer, tmp);
    }
  }

  return {
    // todos,
    getData,
    State,
  };
})(View, Api); // This is to pass the View fucntion and Api function to the model as input. 

const Controller = ((view, model) => {
  const { getData, State } = model;
  const { domStr } = view;

  const state = new State();
  const init = () => {
    getData.then((data) => {
      state.newTodoList = data;
    });
  };

  // Add event listener
  const addTodo = () => {
    const userInput = document.querySelector(domStr.inputBox);
    const btn = document.querySelector(domStr.addBtn);
    console.log("t: " + btn)
    btn.addEventListener("click", () => {
      let item = {
        title: userInput.value,
      };
      const newTodos = [item, ...state.getTodoList];
      state.newTodoList = newTodos;
      // clear the user input
      userInput.value = "";
    });
  };

  // Function to delete a item
  const deleteTodo = (index) => {
    console.log("index: " + index)
    const updatedTodos = state.getTodoList.filter((_, i) => i !== index);
    state.newTodoList = updatedTodos;
  };

const bootstrap = ()=>{
    init();
    addTodo();
    // Add event listener for delete button click
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
        // Extract the index from the ID of the parent <li> element
        const index = parseInt(event.target.parentNode.id.split("-")[1]);
        deleteTodo(index);
      }
    });
  }
  return {
    bootstrap
  }
})(View, Model);

// run the initial data, then addTodo() to add new data
Controller.bootstrap();