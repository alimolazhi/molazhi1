import { budgets, calculateSummary, categories, formatToman, seedTransactions } from './finance.js';

let transactions = [...seedTransactions];
const $ = (selector) => document.querySelector(selector);

function renderSummary() {
  const summary = calculateSummary(transactions);
  $('#income').textContent = formatToman(summary.income);
  $('#expense').textContent = formatToman(summary.expense);
  $('#balance').textContent = formatToman(summary.balance);
  $('#saving-rate').textContent = `${Math.max(0, Math.round((summary.balance / summary.income) * 100)) || 0}٪`;
}

function renderTransactions() {
  $('#transactions').innerHTML = transactions.map((item) => `<article class="transaction"><div><strong>${item.title}</strong><span>${item.category} • ${item.date}</span></div><b class="${item.type}">${item.type === 'income' ? '+' : '-'} ${formatToman(item.amount)}</b></article>`).join('');
}

function renderBudgets() {
  $('#budgets').innerHTML = budgets.map((budget) => {
    const pct = Math.min(100, Math.round((budget.spent / budget.limit) * 100));
    return `<div class="budget"><div><strong>${budget.category}</strong><span>${formatToman(budget.spent)} از ${formatToman(budget.limit)}</span></div><div class="bar"><i style="width:${pct}%"></i></div></div>`;
  }).join('');
}

function initializeForm() {
  $('#category').innerHTML = categories.map((category) => `<option>${category}</option>`).join('');
  $('#transaction-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const amount = Number($('#amount').value);
    const title = $('#title').value.trim();
    if (!title || !Number.isFinite(amount) || amount <= 0) return;
    transactions = [{ id: Date.now(), title, amount, type: $('#type').value, category: $('#category').value, date: 'امروز' }, ...transactions];
    event.target.reset();
    renderSummary();
    renderTransactions();
  });
}

initializeForm();
renderSummary();
renderBudgets();
renderTransactions();
