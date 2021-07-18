const postal_mapping = {
    "Kathmandu": {
        "sitapaila": "14",
        "kotipur": "15",
    },
    "Lalitpur": {
        "Mahalaxmi": "123",
        "gwarko": "23467"
    },
    "Bhaktapur": {
        "SuryaBinayak": "4567",
        "KamalBinayak": "2398"
    }
}

const district = document.getElementById('district');
const postOffice = document.getElementById('postOffice');
const getCode = document.getElementById('getCode');

district.addEventListener('change', (e) => {
    const districName = e.target.value;
    const postOfficeNames = postal_mapping[districName];
    postOffice.innerHTML = "";
    for (let key in postOfficeNames) {
        postOffice.innerHTML += `<option value="${key}">${key}</option>`;
    }
});

getCode.addEventListener('click', ()=>{
    const districtName = district.value;
    const postOfficeName = postOffice.value;
    const postalCode = postal_mapping[districtName][postOfficeName];
    document.getElementById('code').innerHTML = postalCode;
    copyIcon = document.getElementById('copyIcon')
    copyIcon.addEventListener('click', ()=>{
        copyText(postalCode);
    });
});

const copyText = (code) =>{
    const el = document.createElement('textarea');
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

