function sendtoWhatsapp(){
    let number = "+6281317062042";

    let name = document.getElementById('icon_prefix').value;
    // let email = document.getElementById('email').value;
    // let message = document.getElementById('icon_prefix2').value;

    var url = "https://wa.me/" + number + "?text="
    // + "Name :" +icon_prefix+ "?text="
    // + "email :" +email+ "%0a"
    // + "message :" +icon_prefix2+ "%0a%0a";

    window.open(url, '_blank').focus();
}






























