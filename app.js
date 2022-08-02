// https://calculator.swiftutors.com/return-on-assets-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const returnonAssetsRadio = document.getElementById('returnonAssetsRadio');
const netIncomeAfterTaxRadio = document.getElementById('netIncomeAfterTaxRadio');
const totalAssetsRadio = document.getElementById('totalAssetsRadio');

let returnonAssets;
let netIncomeAfterTax = v1;
let totalAssets = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

returnonAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Income After Tax';
  variable2.textContent = 'Total Assets';
  netIncomeAfterTax = v1;
  totalAssets = v2;
  result.textContent = '';
});

netIncomeAfterTaxRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Assets (ROA)';
  variable2.textContent = 'Total Assets';
  returnonAssets = v1;
  totalAssets = v2;
  result.textContent = '';
});

totalAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Assets (ROA)';
  variable2.textContent = 'Net Income After Tax';
  returnonAssets = v1;
  netIncomeAfterTax = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(returnonAssetsRadio.checked)
    result.textContent = `Return on Assets = ${computeReturnonAssets().toFixed(2)} %`;

  else if(netIncomeAfterTaxRadio.checked)
    result.textContent = `Net Income After Tax = ${computeNetIncomeAfterTax().toFixed(2)}`;

  else if(totalAssetsRadio.checked)
    result.textContent = `Total Assets = ${computeTotalAssets().toFixed(2)}`;
})

// calculation

function computeReturnonAssets() {
  return (Number(netIncomeAfterTax.value) / Number(totalAssets.value)) * 100;
}

function computeNetIncomeAfterTax() {
  return (Number(returnonAssets.value) / 100) * Number(totalAssets.value);
}

function computeTotalAssets() {
  return Number(netIncomeAfterTax.value) / (Number(returnonAssets.value) / 100);
}