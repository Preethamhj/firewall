const CryptoJS = require("crypto-js");
const { SECRET_KEY } = require("../config/cryptoConfig");

exports.decryptPayload = (cipherText) => {
    try {
        const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
        const decoded = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decoded);
    } catch (err) {
        console.error("❌ Error decrypting payload:", err);
        return null;
    }
};

exports.encryptPayload = (data) => {
    try {
        const json = JSON.stringify(data);
        return CryptoJS.AES.encrypt(json, SECRET_KEY).toString();
    } catch (err) {
        console.error("❌ Error encrypting payload:", err);
        return null;
    }
};
