function generate() {
    const inputText = document.getElementById('inputText').value;
    const MD5Hash = CryptoJS.MD5(inputText).toString();
    const SHA256Hash = CryptoJS.SHA256(inputText).toString();
    const SHA3Hash = CryptoJS.SHA3(inputText).toString();
    document.getElementById('MD5Result').innerText = MD5Hash;
    document.getElementById('SHA256Result').innerText = SHA256Hash;
    document.getElementById('SHA3Result').innerText = SHA3Hash;
}
