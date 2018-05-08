$("document").ready(function () {
    /*global $, window, console */
    var userName, userPhone, userAddress, userNamesArr;
    //    userNamesArr = ['Ahmed', 'Mohammed', 'Sameh', 'Ali', 'Tito', 'Tota', ];
    userNamesArr = [];
    $('#addUser').click(function () {
        userName = $("#name").val();
        userPhone = $("#phone").val();
        userAddress = $("#address").val();
        userNamesArr.push(userName);
        //            console.log(userName,userAddress,userPhone);
        $('.users > ul').append("<li><ul><li id='userName'> Name : " + userName + "</li><li>Phone : " + userPhone + "</li><li>Address : " + userAddress + "</li>  </ul><button id='delete'>Delete</button></li>")
    });
    //    $("#delete").on('click',(function () {
    //        $(this).parent().remove();
    //        console.log("delete");
    //    }));

    $(document).on('click', "#delete", function () {
        $(this).parent().remove();
        console.log("delete");
    })
    $("#searchUsers").click(function () {
        var searchItem = $("#searchItem").val();
        //            console.log(searchItem);
        $(".users ul li").css('display', 'none');
        //        userNamesArr.forEach(function (item) {
        //            var index = userNamesArr.indexOf(item);
        //            if (index !== -1) {
        //                var listItemIndex = '.users > ul > li:nth-child(' + index + ')';
        //                var listItem = $(listItemIndex);
        //                if (searchItem === item) {              $(listItem).parent().css('display','block');
        ////                    console.log(listItem);
        //                    //                        console.log(index);
        //
        //                }
        //            }
        var index = userNamesArr.indexOf(searchItem);
        console.log(index);
        $(".users ul li").eq(index).parent().css('display', 'block');


    });
});
