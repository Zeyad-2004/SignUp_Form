const emailRegex = /^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;



function check(){
    let userEmail = $('.email').val();

    const isValidEmail = emailRegex.test(userEmail);

    if (isValidEmail) {        
        // $('input').css('background-color', '#fff');
        // $('input').css('border-color', 'gray');
        // $('input').css('color', 'black');
        // $('.error').css('display', 'none');


        $('.signUp').css('display', 'none');
        $('.success').css('display', 'block');
        $('.success p span').html(userEmail);

        console.log("The email address is valid.");
    } else {
        $('input').css('background-color', '#ffe8e6');
        $('input').css('border-color', 'var(--main)');
        $('input').css('color', 'var(--main)');
        $('.error').css('display', 'block');

        console.log("The email address is invalid.");
    }
}



window.addEventListener('resize', function(){
    if(window.innerWidth < 450){
        $('.image').attr('src', 'media/illustration-sign-up-mobile.svg')
    }
    else {
        $('.image').attr('src', 'media/illustration-sign-up-desktop.svg')
    }
    
})