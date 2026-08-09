export const seedTransactions = [
  { id: 1, title: 'حقوق ماهانه', amount: 52000000, type: 'income', category: 'درآمد', date: '۱۴۰۵/۰۵/۰۱' },
  { id: 2, title: 'اجاره خانه', amount: 18500000, type: 'expense', category: 'مسکن', date: '۱۴۰۵/۰۵/۰۳' },
  { id: 3, title: 'خرید سوپرمارکت', amount: 3200000, type: 'expense', category: 'خوراک', date: '۱۴۰۵/۰۵/۰۶' },
  { id: 4, title: 'پروژه آزاد', amount: 14500000, type: 'income', category: 'فریلنس', date: '۱۴۰۵/۰۵/۰۸' },
  { id: 5, title: 'باشگاه و سلامت', amount: 1800000, type: 'expense', category: 'سلامت', date: '۱۴۰۵/۰۵/۱۰' },
];

export const categories = ['درآمد', 'مسکن', 'خوراک', 'حمل‌ونقل', 'تفریح', 'سلامت', 'فریلنس', 'پس‌انداز'];

export const budgets = [
  { category: 'مسکن', spent: 18500000, limit: 20000000 },
  { category: 'خوراک', spent: 9200000, limit: 12000000 },
  { category: 'حمل‌ونقل', spent: 3100000, limit: 5000000 },
  { category: 'تفریح', spent: 2400000, limit: 4000000 },
];

export function calculateSummary(transactions) {
  return transactions.reduce(
    (summary, item) => {
      if (item.type === 'income') summary.income += item.amount;
      if (item.type === 'expense') summary.expense += item.amount;
      summary.balance = summary.income - summary.expense;
      return summary;
    },
    { income: 0, expense: 0, balance: 0 },
  );
}

export function formatToman(value) {
  return `${new Intl.NumberFormat('fa-IR').format(value)} تومان`;
}
