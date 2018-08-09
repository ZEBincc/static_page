//登陆提交

$(function () {
    $("#btn").click(function () {
        $.ajax({
            type:"post",
            url:"",
            data:{

            },
            dataType:"json",
            success:function (data) {
                console.log("data参数传入成功",data);
            },
            error: function (data) {
                console.log("出错了");
                console.log("错误代码");
                console.log(data.meta.errmsg);
                console.log(data.meta.errcode);
            }
        })
    })
});

