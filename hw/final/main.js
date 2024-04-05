// Model => Retrieve, store, process data
// View => User interface
// Controller => Manage view and data & handle uers actions

const Api = (() => {
    // Fetch data from server
    const url = "http://localhost:4232/courseList";
    const getData = fetch(url).then((res) => res.json());
    return {
      getData,
    };
  })();
  
  // only define the view function: have not apply data yet
  const View = (() => {
    const domStr = {
      container: "#course-table",
      selectedCourse: "#selected-course-table"
    };
  
    const creatTmp = (arr) => {
      let tmp = "";
      arr.forEach((course, index) => {
        const courseType = course.required ? "Compulsory" : "Elective";
        const classType = course.courseId % 2 === 1 ? "odd-course" : "even-course";
        tmp += `<div id="course-${course.courseId}" class= "course-container ${classType}" data-credit="${course.credit}">
        <div>${course.courseName}</div>
        <div>Course Type: ${courseType}</div>
        <div>Credit: ${course.credit}</div>
      </div>`;
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
        this._totalCredit = 0;
      }
      get getTodoList() {
        return this._todoList;
      }

      get totalCredit() {
        return this._totalCredit;
      }

      set newTodoList([element, arr]) {
        this._todoList = arr;
        // const todoContainer = document.querySelector(domStr.container);
        const tmp = creatTmp(this._todoList);
        // take an element and an array 
        render(element, tmp);
      }

      updateTotalCredit(credit) {
        this._totalCredit += credit; // Add or subtract credit
       // Update only the total credit number
        document.getElementById('total-credit').textContent = `Total Credit: ${this._totalCredit}`;

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


    const init = (appendPalce) => {
      getData.then((data) => {
        state.newTodoList = [appendPalce,data];
      });
    };

    const getCreditFromCourse = (courseElement) => {
        return parseInt(courseElement.getAttribute('data-credit'));
    };

    const willCauseOverload = (creditChange, totalCredit) => {
        return totalCredit + creditChange > 18;
    };


    const moveSelectedCourses = () => {
        const selectedCourses = document.querySelectorAll('.course-container.selected');
        const selectedCourseTable = document.querySelector('#selected-course-table');
    
        // Move selected courses to the "Selected Courses" bucket
        selectedCourses.forEach(course => {
            
            selectedCourseTable.appendChild(course);
        });
    
        // Clear the selection
        selectedCourses.forEach(course => {
            course.classList.remove('selected');
            course.removeAttribute('selected');
        });
    };

      

    const showConfirmationWindow = () => {
        const totalCredits = state.totalCredit;
        const confirmationMessage = `You have chosen ${totalCredits} credits for this semester. You cannot change once you submit. Do you want to confirm?`;
        if (confirm(confirmationMessage)) {

            moveSelectedCourses();
            // Now you have the selected courses data in the 'selectedCourses' array

            document.getElementById('select-button').disabled = true;
        }
    };


    const toggleSelection = (event) => {
        if (event.target.classList.contains("course-container")) {
            const course = event.target;
            const credit = getCreditFromCourse(course); 

            const creditChange = course.style.backgroundColor === 'deepskyblue' ? -credit : credit;
            const totalCreditAfterToggle = state.totalCredit + creditChange;

            if (!willCauseOverload(creditChange, state.totalCredit)) {
                if (course.style.backgroundColor === 'deepskyblue') {
                    // If course is already selected, remove the selection and reset background color
                    course.style.backgroundColor = ''; // Remove inline background color
                    course.classList.remove('selected');
                    state.updateTotalCredit(-credit);
                } else {
                    // If course is not selected, select it and set background color
                    course.style.backgroundColor = 'deepskyblue';
                    course.classList.add('selected');
                    state.updateTotalCredit(credit);
                }
            } else {
                // Display alert if selecting the course would exceed the credit limit
                alert("You can only choose up to 18 credits in one semester");
            }
        }
    };

    const attachEventListeners = () => {
        const courseContainer = document.querySelector(domStr.container);
        courseContainer.addEventListener("click", toggleSelection);
         // Attach event listener to the select button
        document.getElementById('select-button').addEventListener("click", showConfirmationWindow);
    };
  
  const bootstrap = ()=>{
     const todoContainer = document.querySelector(domStr.container)
      init(todoContainer);
      attachEventListeners();
    }
    return {
      bootstrap
    }
  })(View, Model);
  
  // run the initial data, then addTodo() to add new data
  Controller.bootstrap();