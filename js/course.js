$(document).ready(function () {
    $("#txtCoursID").focus();
    Courses();
})

function Courses() {
    for(var i=0;i<course.length;i++){
        var tblcours = "<tr>"+
            "<td>"+course[i].cid+"</td>"+
            "<td>"+course[i].cname+"</td>"+
            "<td>"+course[i].description+"</td>"+
            "<td>"+course[i].duration+"</td>"+
            "<td><i class=\"fas fa-trash\"></i></td>"+
            "</tr>";
        $("#tblCourse tbody").append(tblcours);
    }
    DeleteCourse();

    $("#tblCourse tbody tr").click(function () {
        var cid=$(this).find("td:first-child").text();
        var cname=$(this).find("td:nth-child(2)").text();
        var cdescription=$(this).find("td:nth-child(3)").text();
        var cduration=$(this).find("td:nth-child(4)").text();

        $("#txtCoursID").val(cid);
        $("#txtCourseName").val(cname);
        $("#txtCourseDescription").val(cdescription);
        $("#txtCourseDuration").val(cduration);

    });
}

function DeleteCourse() {
    $("#tblCourse tbody i").click(function () {
        if (confirm("Are you sure to delete this customer?")) {
            var row = $(this).parents("tr");
            row.fadeOut(1000, function () {
                row.remove();
            });
        }
    });
}