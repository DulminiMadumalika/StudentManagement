$('h1').css('color','blue');

$(window).on('load',function () {
    $('#txtFullName').focus();

    $('#txtFullName').focus(function () {
        console.log("focus");
        $('#txtFullName').select();
    });

    $('#txtAddress').focus(function () {
        console.log("focus");
        $('#txtAddress').select();
    });

    $('#txtNIC').focus(function () {
        console.log("focus");
        $('#txtNIC').select();
    });
});

//var rnum = 1;

$('#btnAdd').click(function addFunction(){
    var valid = valFunction();
    var rnum = 0;
    // $('#tblStudents tbody tr').last('td').first().val();
    if($('#tblStudents tbody tr').length == 0){
        rnum = 10;
    }else{
        var numArray = [];
        numArray = $('#tblStudents tbody tr ').children('td:nth-child(2)').text();
        console.log(numArray[1]);
        // var max = parseInt(numArray[0]);
        //
        // for(var i=1; i<numArray.length; i++){
        //     console.log(numArray[i]);
        //     if(max<parseInt(numArray[i])){
        //         max = parseInt(numArray[i]);
        //     }
        // }
        // rnum = max;
    }

    rnum++;
    if(valid){
        $('#tblStudents').append('<tr><td>'+ rnum+"" +'</td><td>'+$('#txtFullName').val()+'</td><td>'+ $('#txtAddress').val() +'</td><td>'+ $('#txtNIC').val() +'</td><td><img src="images/recyclebin.png" style="width: 48px;height: 48px;"></td></tr>');
        manageFooter();

        $('#tblStudents tbody tr').hover(function () {
            $('#tblStudents tbody tr').css( 'cursor', 'pointer' );
        });

        $('#tblStudents tbody tr').click(function () {
            $('#tblStudents tbody tr').css( 'cursor', 'all-scroll' );
        });

        $('#tblStudents tbody').find('tr img').hover(function () {
            $(this).attr("src","images/recyclebin-hover.png");
        }, function() {
            $(this).attr("src","images/recyclebin.png");
        });

        // $('#tblStudents tbody').last('tr').find('img').css('background-color','yellow');

        $('#tblStudents tbody').children().last().find('img').click(function () {
            var bool = confirm("Are Sure to Delete this Row ? ");
            if(bool){
                setInterval(removeFunction($(this)), 4000);
                // $(this).parents('tr').remove();
            }
        });

        $('#txtFullName').val("");
        $('#txtAddress').val("");
        $('#txtNIC').val("");
        $('#txtFullName').focus();
    }

});

function removeFunction(raw){
    console.log('came to fade out');

    raw.parents('tr').fadeOut( "slow", function() {
        console.log('came to remove');
        raw.parents('tr').remove();
        manageFooter();
    });
    //raw.parents('tr').remove();
}

function manageFooter(){
    if($('#tblStudents tbody tr').length == 0){
        console.log("footer");
        $('#tblStudents tfoot').show();
    }else{
        $('#tblStudents tfoot').hide();
    }
}

function valFunction() {
    var nameVal = true;
    var addVal = true;
    var nicVal = true;

    if($('#txtFullName').val().trim().length == 0){
        $('#txtFullName').css('border-color','red');
        nameVal = false;
    }
    if($('#txtAddress').val().trim().length == 0){
        $('#txtAddress').css('border-color','red');
        addVal = false;
    }
    if($('#txtAddress').val().trim().length == 0){
        $('#txtNIC').css('border-color','red');
        nicVal = false;
    }else{
        if($('#txtNIC').val().length >9){
            nicVal = false;
        }else{
            var regExp = /^\d{9}/;
            nicVal = regExp.test($('#txtNIC').val());
        }
        if(!nicVal){
            $('#txtNIC').css('border-color','red');
        }
    }

    if(!nameVal){
        $('#txtFullName').focus();
        // $('#txtFullName').css('box-shadow', '10px 10px 5px red');
    }
    else if(!addVal){
        $('#txtAddress').focus();
    }
    else if(!nicVal){
        $('#txtNIC').focus();
    }

    return(nameVal && addVal && nicVal);
}

$('#txtFullName').keypress(function () {
    $('#txtFullName').css('border-color','#ced4da');
});

$('#txtAddress').keypress(function () {
    $('#txtAddress').css('border-color','#ced4da');
});

$('#txtNIC').keypress(function () {
    $('#txtNIC').css('border-color','#ced4da');
});

$('#tblStudents tbody').disableSelection();

