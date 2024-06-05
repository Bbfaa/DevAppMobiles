function ajouterTache() {
    const taskField = document.getElementById('taskField');
    const taskListEnCours = document.getElementById('taskListEnCours');
    const taskListTerminees = document.getElementById('taskListTerminees');

    if (taskField.value)
    {
        let newItem = document.createElement('li');
        newItem.innerHTML = taskField.value;
        taskListEnCours.appendChild(newItem);
        $(taskListEnCours).listview('refresh');

        $(newItem).on('swiperight', function(e) {
            taskListEnCours.removeChild(this);
            taskListTerminees.appendChild(this);
            $(taskListEnCours).listview('refresh');
            $(taskListTerminees).listview('refresh');
        });

        $(newItem).on('swipeleft', function(e) {
            $(this).hide('slow', function () {
                $(this).remove();
            });
        });
    }
    taskField.value = '';
    taskField.focus();

}


function reinitialiserListe() {
    const taskField = document.getElementById('taskField');
    const taskListEnCours = document.getElementById('taskListEnCours');
    const taskListTerminees = document.getElementById('taskListTerminees');

    taskField.value = '';
    taskListEnCours.innerHTML = '';
    taskListTerminees.innerHTML = '';

    $(taskListEnCours).listview('refresh');
    $(taskListTerminees).listview('refresh');
    taskField.focus();
}




