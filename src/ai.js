import { lowStock, money, orderTotal, todaySales } from './store.js';
export function askAI(state, question){
 const q = question.trim(); const sales = todaySales(state); const totals = new Map();
 state.orders.forEach(o=>o.items.forEach(i=>totals.set(i.productId,(totals.get(i.productId)||0)+i.qty)));
 const topId = [...totals.entries()].sort((a,b)=>b[1]-a[1])[0]?.[0]; const top = state.products.find(p=>p.id===topId);
 const danger = lowStock(state); const cost = state.inventory.reduce((s,i)=>s+i.stock*i.cost,0); const profit = sales * .48;
 if(!q) return 'لطفاً سؤال مدیریتی خود را درباره فروش، سود، هزینه، انبار، مشتریان یا کارکنان بنویسید.';
 if(q.includes('فروش')) return `فروش ثبت‌شده امروز ${money(sales)} است. ${top ? `پرفروش‌ترین محصول ${top.name} بوده است.` : 'برای رتبه‌بندی محصول داده کافی وجود ندارد.'}`;
 if(q.includes('پرفروش')) return top ? `پرفروش‌ترین محصول فعلی ${top.name} با ${totals.get(top.id)} عدد فروش است.` : 'هنوز داده فروش کافی برای تعیین محصول پرفروش نداریم.';
 if(q.includes('تمام') || q.includes('موجودی')) return danger.length ? `کالاهای در خطر اتمام: ${danger.map(i=>`${i.name} (${i.stock} ${i.unit})`).join('، ')}. پیشنهاد خرید ایجاد شود اما خرید نهایی نیازمند تأیید شماست.` : 'هیچ کالایی زیر حداقل موجودی نیست.';
 if(q.includes('سود')) return `سود ناخالص برآوردی امروز ${money(profit)} است. اگر سود کم شده باشد، تخفیف بالا، ضایعات یا افزایش بهای مواد اولیه را بررسی کنید.`;
 if(q.includes('فردا') || q.includes('پیش')) return state.orders.length < 5 ? 'برای پیش‌بینی قابل اعتماد داده کافی وجود ندارد؛ پس از چند روز فروش، Forecast AI فعال‌تر می‌شود.' : `Forecast AI پیشنهاد می‌کند برای فردا روی مواد پرفروش و کالاهای کم‌موجودی تمرکز شود. ارزش موجودی فعلی ${money(cost)} است.`;
 return `تحلیل AI Manager: فروش ${money(sales)}، سود برآوردی ${money(profit)}، تعداد سفارش ${state.orders.length}، هشدار موجودی ${danger.length} مورد. عملیات حساس مانند Refund، خرید یا تغییر قیمت فقط پس از تأیید انجام می‌شود.`;
}
export const agents = ['Sales AI','Inventory AI','Finance AI','Customer AI','Staff AI','Forecast AI','Anomaly AI'];
