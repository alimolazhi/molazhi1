import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSummary, formatToman } from '../src/finance.js';

test('calculateSummary totals income, expenses, and balance', () => {
  const summary = calculateSummary([
    { amount: 1000, type: 'income' },
    { amount: 250, type: 'expense' },
    { amount: 400, type: 'income' },
  ]);
  assert.deepEqual(summary, { income: 1400, expense: 250, balance: 1150 });
});

test('formatToman appends Persian currency label', () => {
  assert.equal(formatToman(120000), '۱۲۰٬۰۰۰ تومان');
});
