$("document").ready(function () {
    /*global $, window, console */
    var userName, userPhone, userAddress, userNamesArr ,searchItem, index;
    userNamesArr = [];
    $('#addUser').click(function () {
        userName = $("#name").val();
        userPhone = $("#phone").val();
        userAddress = $("#address").val();
        userNamesArr.push(userName);
        console.log(userNamesArr);
        $('.users > ul').append("<li><ul><li id='userName'> Name : " + userName + "</li><li>Phone : " + userPhone + "</li><li>Address : " + userAddress + "</li>  </ul><button id='delete'>Delete</button></li>")
    });

    $("#searchUsers").click(function () {
        searchItem = $("#searchItem").val();
        // console.log(searchItem);
        index = userNamesArr.indexOf(searchItem);
        // console.log(index);
        if (index !== -1) {
            $(".users > ul > li").css('display', 'none');
            userNamesArr.forEach(function (item) {
                if (searchItem === item) {
                    $(".users > ul > li").eq(index).css('display', 'grid');
                }
            });
        } else {
            alert("Can't find this username");
        }
    });
    $(document).on('click', "#delete", function () {
        // console.log("delete");
        $(this).parent().remove();
    })

});