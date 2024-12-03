function funcCheckIfSame() {
    email = document.getElementById("email");
    email2 = document.getElementById("email2");

    if (email.value !== email2.value) {
        alert("Email and Email Confirmation do not match");
        return false;
    }
    return true;
}

function turnOnOtherType() {
    const dropdown = document.getElementById('type');
    const otherTypeBox = document.getElementById('otherTypeBox');
    const otherTypeInput = document.getElementById('otherType');

    if (dropdown.value === 'other') {
        otherTypeBox.classList.remove('hidden');
        otherTypeInput.required = true;
    } else {
        otherTypeBox.classList.add('hidden');
        otherTypeInput.required = false;
    }
}


function turnOnOtherState() {
    const dropdown = document.getElementById('state');
    const otherStateBox = document.getElementById('otherStateBox');
    const otherStateInput = document.getElementById('otherState');

    if (dropdown.value === 'Other') {
        otherStateBox.classList.remove('hidden');
        otherStateInput.required = true;
    } else {
        otherStateBox.classList.add('hidden');
        otherStateInput.required = false;
    }
}

document.getElementById('type').addEventListener('change', turnOnOtherType);
document.getElementById('state').addEventListener('change', turnOnOtherState);
