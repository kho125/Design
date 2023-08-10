const phoneNumberInput = document.getElementById("phone-number-input222");

phoneNumberInput.addEventListener("input", function () {
    const inputValue = phoneNumberInput.value;
    const formattedValue = formatPhoneNumber(inputValue);
    phoneNumberInput.value = formattedValue;
});

function formatPhoneNumber(phoneNumber) {
    const numbersOnly = phoneNumber.replace(/\D/g, "");
    const areaCode = numbersOnly.slice(0, 3);
    const middlePart = numbersOnly.slice(3, 7);
    const lastPart = numbersOnly.slice(7);

    let formattedPhoneNumber = "";
    if (areaCode) {
        formattedPhoneNumber += areaCode;
    }
    if (middlePart) {
        formattedPhoneNumber += "-" + middlePart;
    }
    if (lastPart) {
        formattedPhoneNumber += "-" + lastPart;
    }

    return formattedPhoneNumber;
}
