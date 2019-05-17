$(window).on('load', function () {
    for(var i=0; i<student.length; i++){
        $('#cmbStudentid').append(
            '<option>'+ student[i].sid +'</option>'
        );

        $('#cmbStudentid').change(function () {
            var sid = $('#cmbStudentid option:selected').text();
            findName(sid);
        });
    }
    findName($('#cmbStudentid').val());

    for(var i=0; i<course.length; i++){
        $('#cmbCourse').append(
            '<option>'+ course[i].cid +'</option>'
        );

        $('#cmbCourse').change(function () {
            var cid = $('#cmbCourse option:selected').text();
            findCourse(cid);
        });
    }
    findCourse($('#cmbCourse').val());

    for(var i=0; i<batch.length; i++){
        $('#cmbBatch').append(
            '<option>'+ batch[i].bid +'</option>'
        );

        $('#cmbBatch').change(function () {
            var bid = $('#cmbBatch option:selected').text();
            findBatch(bid);
        });
    }
    findBatch($('#cmbBatch').val());
});

function findName(sid){
    for(var i=0; i<student.length; i++){
        if(student[i].sid == sid){
            $('#txtstudentname').val(student[i].sname);
            return;
        }
    }
}

function findCourse(cid){
    for(var i=0; i<course.length; i++){
        if(course[i].cid == cid){
            $('#txtCourse').val(course[i].cname);
            return;
        }
    }
}

function findBatch(bid){
    for(var i=0; i<batch.length; i++){
        if(batch[i].bid == bid){
            $('#txtBatchname').val(batch[i].bname);
            return;
        }
    }
}

$('#btnRegister').click(function () {
    console.log("Add New Register");
});