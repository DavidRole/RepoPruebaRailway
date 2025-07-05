function save() {
    const task = $("#toDo").val().trim();

    if (task === "") {
        $("#validation").text("Por favor ingrese una tarea para agregar");

        return;
    } else if (task.length < 4 ) {
        $("#validation").text("La tarea debe tener más de 5 carateres");

        return;
    }

    var newRow =
        `
    <tr>
        <td>${task}</td>
        <td>
            <div class="form-check"> <!-- Added Bootstrap wrapper -->
                <input class="form-check-input check-completado" type="checkbox">
            </div>
        </td>
    </tr> 
    `

    document.querySelector("#tblToDo tbody").insertAdjacentHTML("beforeend", newRow);
    $("#toDo").val("");
    $("#validation").text("");

}

$(document).on("change", ".check-completado", function () {
    if ($(this).is(":checked")) {
        $(this).closest("tr").fadeOut(500, function () {
            $(this).remove();
            //cambia el estado
        });
        $("#lastTaskDone").text($(this).closest("tr").find("td:first").text());
        //boton de entregado a activo
    }
});