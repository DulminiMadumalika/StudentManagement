// loadAllCourseID();
// $("#cmbCourseID").val("");
//
// function loadAllCourseID() {
//     for (var i = 0; i < course.length; i++) {
//         var cid = course[i].cid;
//         var html = '<option value="' + cid + '">' + cid + '</option>';
//         $("#cmbCourseID").append(html);
//     }
//     $("#cmbCourseID").change(function () {
//         var courseID = $(this).val();
//         for (var i = 0; i < course.length; i++) {
//             if (course[i].cid == courseID) {
//                 $("#lblCourseName").text(course[i].cname);
//                 break;
//             }
//         }
//     });
// }
//
//
//
//
//
//

$(document).ready(function () {
    for (var j=0; j<course.length; j++) {
        var courseID=course[j].cid;
        $("#cmbCourseID").append("<option>"+courseID+"</option>");

    }
})

$("#cmbCourseID").change(function () {
    var courseID=$("#cmbCourseID").val();

    for (var j=0; j<course.length; j++) {

        if (courseID==course[j].cid){
            $("#lblCourseName").text(course[j].cname);
        }

    }

    $("#txtBatchId").focus();
})

$("#btnSave").click(function () {
    var batchId=$("#txtBatchId").val();
    var batchName=$("#txtBatchName").val();
    var courseId=$("#cmbCourseID").val();
    var courseName=$("#lblCourseName").text();

    var html="<tr>" +
        "<td>"+batchId+"</td>" +
        "<td>"+batchName+"</td>" +
        "<td>"+courseId+"</td>" +
        "<td>"+courseName+"</td>" +
        "<td class='deleteIcon'><i class=\"fas fa-trash-alt\" style='font-size: 25px'></i></td>" +
        "</tr>";

    $("#tblCourse tbody").append(html);


    $("#tblCourse tbody tr:last-child td:last-child").click(function () {
            if (confirm("Are you sure whether you want to delete this record?")) {
                var row = $(this).parents("tr");
                $(this).parents("tr").fadeOut(200, function () {
                        row.remove();
                    }
                )
            }
        }
    )})
