function generate() {
    const inputText = document.getElementById('inputText').value;
    const MD5Hash = CryptoJS.MD5(inputText).toString();
    const SHA256Hash = CryptoJS.SHA256(inputText).toString();
    const SHA3Hash = CryptoJS.SHA3(inputText).toString();
    document.getElementById('MD5Result').innerText = MD5Hash;
    document.getElementById('SHA256Result').innerText = SHA256Hash;
    document.getElementById('SHA3Result').innerText = SHA3Hash;
}
function checkMD5() {
    const md5Hash = document.getElementById('md5Hash').value.trim();
    const plainText = document.getElementById('plainText').value;
    const generatedMD5 = CryptoJS.MD5(plainText).toString();
    const result = document.getElementById('MD5');
    if (generatedMD5 === md5Hash) {
        result.textContent = "Kết quả: Mã MD5 khớp!";
        result.style.color = "green";
    } else {
        result.textContent = "Kết quả: Mã MD5 không khớp!";
        result.style.color = "red";
    }
}

function checkSHA256() {
    const SHA256Hash = document.getElementById('SHA256Hash').value.trim();
    const plainText = document.getElementById('plainText').value;
    const generatedSHA256 = CryptoJS.SHA256(plainText).toString();
    const SHA256 = document.getElementById('SHA256');
    if (generatedSHA256 === SHA256Hash) {
        SHA256.textContent = "Kết quả: Mã SHA-256 khớp!";
        SHA256.style.color = "green";
    } else {
        SHA256.textContent = "Kết quả: Mã SHA-256 không khớp!";
        SHA256.style.color = "red";
    }
}

function checkSHA3() {
    const SHA3Hash = document.getElementById('SHA3Hash').value.trim();
    const plainText = document.getElementById('plainText').value;
    const generatedSHA3 = CryptoJS.SHA3(plainText).toString();
    const result = document.getElementById('SHA3');
    if (generatedSHA3 === SHA3Hash) {
        result.textContent = "Kết quả: Mã SHA-3 khớp!";
        result.style.color = "green";
    } else {
        result.textContent = "Kết quả: Mã SHA-3 không khớp!";
        result.style.color = "red";
    }
}