
// / card 1-----------------
document.getElementById('donate-btn').addEventListener('click', function(){   
    const donateInput = document.getElementById('donate-input') ;
    const inputAmount = parseFloat(donateInput.value)
    const donatePreAmount = getTextValueById('donate-pre-amount')
    const mainBalanceNum =getTextValueById('main-balance')

    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert("Please enter a valid positive number");
        donateInput.value = "";       
        return;
      }

      if(inputAmount <= mainBalanceNum){
        const remainingBalance = mainBalanceNum - inputAmount;
        document.getElementById('main-balance').innerText= remainingBalance.toFixed(2);    
        const donateBalance = inputAmount + donatePreAmount
        document.getElementById('donate-pre-amount').innerText = donateBalance.toFixed(2);
        document.getElementById('my_modal_1').showModal();
        donateInput.value = "";
      }    
      else{
        alert('Please valid Amount')
        return
      }    
    // history tab open
    const historyItem = document.createElement('div')
    historyItem.className = 'bg-white p-5 rounded-lg border border-gray-200 w-10/12 mx-auto mb-5 mt-5 space-y-4'
    historyItem.innerHTML= `
    <p class="text-xl font-bold text-black">${inputAmount} Taka is Donate for Flood at Noakhali, Bangladesh</p>
    <p class="text-base text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem , historyContainer.firstChild)
})
// card 2-----------------
document.getElementById('donate-btn2').addEventListener('click', function(){
    const donateInput = document.getElementById('donate-input2') ;
    const inputAmount = parseFloat(donateInput.value)
    const donatePreAmount = document.getElementById('donate-pre-amount2')
    const preAmountNum =parseFloat(donatePreAmount.innerText)
    let mainBalance = document.getElementById('main-balance')
    let mainBalanceNum =parseFloat(mainBalance.innerText)

    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert("Please enter a valid positive number");
        donateInput.value = "";
        return;
      }

      if(inputAmount <= mainBalanceNum){
        const remainingBalance = mainBalanceNum - inputAmount;
        document.getElementById('main-balance').innerText= remainingBalance.toFixed(2);       
        const donateBalance = inputAmount + preAmountNum
        document.getElementById('donate-pre-amount2').innerText = donateBalance.toFixed(2);
        document.getElementById('my_modal_2').showModal();
        donateInput.value = "";
      }
      else{
        alert('Please valid Amount')
      }  
    // history tab open
    const historyItem = document.createElement('div')
    historyItem.className = 'bg-white p-5 rounded-lg border border-gray-200 w-10/12 mx-auto mb-5 mt-5 space-y-4'
    historyItem.innerHTML= `
    <p class="text-xl font-bold text-black">${inputAmount} Taka is Donate for Flood Relief in Feni,Bangladesh</p>
    <p class="text-base text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem , historyContainer.firstChild)
})
// card 3-----------------
document.getElementById('donate-btn3').addEventListener('click', function(){
    const donateInput = document.getElementById('donate-input3') ;
    const inputAmount = parseFloat(donateInput.value)
    const donatePreAmount = document.getElementById('donate-pre-amount3')
    const preAmountNum =parseFloat(donatePreAmount.innerText)
    let mainBalance = document.getElementById('main-balance')
    let mainBalanceNum =parseFloat(mainBalance.innerText)

    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert("Please enter a valid positive number");
        donateInput.value = ""; 
        return;
      }

      if(inputAmount <= mainBalanceNum){
        const remainingBalance = mainBalanceNum - inputAmount;
        document.getElementById('main-balance').innerText= remainingBalance.toFixed(2);       
        const donateNewBalance = inputAmount + preAmountNum
        document.getElementById('donate-pre-amount3').innerText = donateNewBalance.toFixed(2);
        document.getElementById('my_modal_3').showModal();
        donateInput.value = "";
      }
      else{
        alert('Please valid Amount')
      }

      // history tab open
    const historyItem = document.createElement('div')
    historyItem.className = 'bg-white p-5 rounded-lg border border-gray-200 w-10/12 mx-auto mb-5 mt-5 space-y-4'
    historyItem.innerHTML= `
    <p class="text-xl font-bold text-black">${inputAmount} Taka is Aid for Injured in the Quota Movement</p>
    <p class="text-base text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem , historyContainer.firstChild)
})

// history tab switch------------------------
const historyTabEl = document.getElementById('history-tab')
historyTabEl.addEventListener('click', function(){
    historyTabEl.classList.add(
      'bg-[#B4F461]',)
    donationTabEl.classList.add('border')
    showSectionById('history-list')
})
const donationTabEl = document.getElementById('donation-tab');
donationTabEl.addEventListener('click', function(){
    donationTabEl.classList.add(
        'bg-[#B4F461]',
    )
    donationTabEl.classList.remove('border')
    showSectionById2('history-tab')
    showSectionById2('history-click-mainhide')
})




