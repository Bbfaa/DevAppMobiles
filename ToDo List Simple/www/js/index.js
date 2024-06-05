function ajouterTache() {
    const taskField = document.getElementById('taskField');
    const taskList = document.getElementById('taskList');

    if (taskField.value)
    {
        let newItem = document.createElement('li');
        newItem.innerHTML = taskField.value;
        taskList.appendChild(newItem);

        $(newItem).on('swiperight', function(e) {
            $(this).toggleClass('termine');
        });

        $(newItem).on('swipeleft', function(e) {
            $(this).hide('slow', function () {
                $(this).remove();
            });
        });
    }

}

function reinitialiserListe() {
    const taskField = document.getElementById('taskField');
    taskList.innerHTML = '';

    taskField.value = '';
    taskList.innerHTML = '';
    taskField.focus();
}