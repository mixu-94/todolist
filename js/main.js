
// window.addEventListener('load', () => {

const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");

const list_el = document.getElementById("Todo-liste-container");

form.addEventListener('submit', (e) => {
    //e.preventDefault() - Prevents the page from refreshing
    e.preventDefault();

    // input-value ''
    const task = input.value;

    // Create div with class task. container for output list 
    const task_el = document.createElement('div');
    task_el.classList.add('task');
    // append task to Todo-liste-container
    list_el.appendChild(task_el);

    // create div with class content: for output Text in list
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
    // div content append to task
    task_el.appendChild(task_content_el);

    // Output the text of the list after sending
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');
    // input(output Text) list append to task content
    task_content_el.appendChild(task_input_el);

    // Create a div and add the action class
    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');
    // append action to task div
    task_el.appendChild(task_actions_el);

    //  create div edit button / add edit class
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';

    //  Create div delete button / add class delete
    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Delete';
    // append edit und delete button
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    // Input value after submission
    input.value = '';



});
// });