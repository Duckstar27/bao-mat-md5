function generateMD5() {
    const inputText = document.getElementById('inputText').value;
    const md5Hash = CryptoJS.MD5(inputText).toString();
    document.getElementById('md5Result').innerText = md5Hash;
}