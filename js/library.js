function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
function showSectionById(id){
    document.getElementById('history-click-mainhide').classList.add('hidden');
    document.getElementById('donation-tab').classList.remove('bg-[#B4F461]');   
    document.getElementById(id).classList.remove('hidden');
}

function showSectionById2(id){
    document.getElementById('history-list').classList.add('hidden');  
    document.getElementById(id).classList.remove('bg-[#B4F461]');
    document.getElementById(id).classList.remove('hidden');
}


