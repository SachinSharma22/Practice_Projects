const balanceAmount = document.getElementById('balance-amount');
const incomeAmount = document.getElementById('income-amount');
const expensesAmount = document.getElementById('expenses-amount');
const descriptionText = document.getElementById('description-text');
const amount = document.getElementById('amount');
const transactionBtn = document.getElementById('transaction-btn');
const expensesList1 = document.getElementById('expenses-list1');
const expensesList2 = document.getElementById('expenses-list2');
const expensesList3 = document.getElementById('expenses-list3');
const expensesList4 = document.getElementById('expenses-list4');
const historyList1 = document.getElementById('list1');
const historyList2 = document.getElementById('list2');
const historyList3 = document.getElementById('list3');
const historyList4 = document.getElementById('list4');

const addIncome = document.getElementById("add-logo");
incomeAmount.textContent = '';
balanceAmount.textContent = '';
expensesAmount.textContent = '';

let yourIncome;

addIncome.addEventListener('click', function() {
    yourIncome = prompt("Enter your income:");
    incomeAmount.textContent = `$ ${yourIncome}.00`;
})

function showExpenses() {
    console.log("Every thing is ok: ")
    let jsDivTag = document.createElement('div');
    jsDivTag.className = "jsDiv";
    let liTag1 = document.createElement('li');
    let liTag2 = document.createElement('li');
    let liTag3 = document.createElement('li');
    let liTag4 = document.createElement('li');
    const deletBtn = document.createElement('button');
    deletBtn.textContent = "Delete";
   
    if(descriptionText.value === '' || amount.value === ''){
        alert("Write something about:");
        return;
    }

    function descriptionTextValue() {
        let enteredDescriptionText = descriptionText.value;
        return enteredDescriptionText
    }
    liTag2 = descriptionTextValue();
    console.log(liTag2);
    

    function currentDate(){
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;

    }
    liTag1 = currentDate();
   
    console.log(liTag1);

    let totalAmount;
    function enteredAmount() {
        totalAmount = amount.value;
        return totalAmount;

    } 
    liTag3 = enteredAmount();
    console.log(liTag3);

    // Calculation goes here for expenses and balance amout
    function balanceCalculation(callback) {
        balanceAmount.textContent = `$ ${yourIncome - totalAmount}.00`;
        callback();
    }

    let finalAmount = 0;
    finalAmount = +finalAmount + +totalAmount;
    function expensesCalculation() {
        expensesAmount.textContent = `$${finalAmount}.00`;
    }

    balanceCalculation(expensesCalculation);
   

   
    console.log("every thing is ok:");

   expensesList1.append(liTag1);
   expensesList2.append(liTag2);
   expensesList3.append("$", liTag3 ,".00");
   expensesList4.append(deletBtn);

  

   function clearInputbox() {
    descriptionText.value = '';
    amount.value = '';
   }

   clearInputbox();

   function removeExpensesList() {
    setTimeout(() => {
        historyList1.append(liTag1);
        historyList2.append(liTag2);
        historyList3.append("$", liTag3,".00");
        historyList4.append(deletBtn);
    },1000);

    
    expensesList1.remove();
    expensesList2.remove();
    expensesList3.remove();
    expensesList4.remove();


    function clearHistory() {
        historyList1.remove();
        historyList2.remove();
        historyList3.remove();
        historyList4.remove();
    }

    deletBtn.addEventListener('click', clearHistory);
   }

//    Delete button task on expenses list
deletBtn.addEventListener('click', removeExpensesList);


}

transactionBtn.addEventListener('click',showExpenses);