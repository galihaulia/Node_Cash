$(document).ready( () => {
    $("#file").on("change", (e) => {
        var filename = e.target.value.split('\\').pop();
        $("#image").val(filename);
    });
});