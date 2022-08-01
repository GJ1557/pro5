$('.sec3 h2 span').eq(0).click(function() {
    $('.sec3 h2 span').removeClass('on')
    $(this).addClass('on')
    $('.sec3>.inner>ul>li').removeClass('on')
    $('.sec3>.inner>ul>li').eq(0).addClass('on')
    console.log('1')
})
$('.sec3 h2 span').eq(1).click(function() {
    $('.sec3 h2 span').removeClass('on')
    $(this).addClass('on')
    $('.sec3>.inner>ul>li').removeClass('on')
    $('.sec3>.inner>ul>li').eq(1).addClass('on')
})

$('.modal').click(function() {
    $(this).removeClass('on')
})
function joinform_check() {
    let uid = document.getElementById('uid')
    let pwd = document.getElementById('pwd')

    if (uid.value == '') {
        alert('아이디를 입력해주세요')
        uid.focus()
        return false
    }  
    if (uid.value.length < 6) {
        alert('최소6자의 아이디를 입력해주세요')
        uid.focus()
        return false
    }  
    if (pwd.value == '') {
        alert('패스워드를 입력해주세요')
        pwd.focus()
        return false
    }
    let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    if (!pwdCheck.test(pwd.value)) {
        alert('패스워드는 영문,숫자,특수문자 3종류 포함 최소8자 ~ 최대 20자 입니다.')
        pwd.focus()
        return false
    }
    $('.modal').addClass('on')
}
$('.modal2').click(function() {
    $(this).removeClass('on')
})
function order_check() {
    let order = document.getElementById('order')
    let orderpwd = document.getElementById('orderpwd')

    if (order.value == '') {
        alert('주문번호와 비밀번호를 모두 입력해주세요')
        return false
    }  
    if (orderpwd.value == '') {
        alert('주문번호와 비밀번호를 모두 입력해주세요')
        return false
    }
    let num_check=/^[0-9]*$/;
    if (!num_check.test(order.value)) {
        alert('주문번호는 숫자만 적혀있습니다.')
        order.focus()
        return false
    }
    $('.modal2').addClass('on')
}