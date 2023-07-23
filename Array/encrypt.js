const CryptoJS = require('crypto-js');

function encrypt(text) {
    let encryptedBase64Key = "RVdibUZ0WlNJNklrcHZhVA==";
    let parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);
    let encryptedData = CryptoJS.AES.encrypt(text, parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encryptedData.toString();
}

function decrypt(text) {
    let parsedBase64Key = CryptoJS.enc.Base64.parse("RVdibUZ0WlNJNklrcHZhVA==");
    let decryptedData = CryptoJS.AES.decrypt(text.trim(), parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    let decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}

let enc = encrypt("Shubham");
let dec = decrypt("HpEDHqqoO1vWM7L+61uwRg==")
console.log(enc);
console.log(dec);
