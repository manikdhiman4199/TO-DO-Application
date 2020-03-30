$(document).ready(function () {
    $('form').submit(function (e) { 
        let textFieldData = { item : $('#textField').val() };
        console.log(textFieldData);
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/todo",
            data: textFieldData
        }).done((data) => {
            location.reload();
        });
    });
    $("li").on('click', function () {
        var item = $(this).text().replace(/ /g, "-");
        console.log("Delete req")
        $.ajax({
            type: "DELETE",
            url: "/todo/"+item
        }).done((data) => {
            location.reload();
        });
    });
});