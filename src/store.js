import * as seed from './data.js';
const KEY = 'molazhi_erp_state_v1';
export const money = (n) => `${new Intl.NumberFormat('fa-IR').format(Math.round(n || 0))} تومان`;
export const faNum = (n) => new Intl.NumberFormat('fa-IR').format(n || 0);
export function loadState(){ const saved = localStorage.getItem(KEY); return saved ? JSON.parse(saved) : structuredClone({ ...seed, session:null, orderStatusHistory:[], stockMovements:[], notifications:[{id:'n1',title:'هشدار موجودی',body:'گوشت برگر و نان برگر زیر حداقل هستند.',read:false}], aiActions:[], tempOrders:[] }); }
export function saveState(state){ localStorage.setItem(KEY, JSON.stringify(state)); }
export function orderTotal(state, order){ return order.items.reduce((sum,it)=>{ const p=state.products.find(x=>x.id===it.productId); return sum + (p?.price || 0) * it.qty; },0) - (order.discount || 0); }
export function todaySales(state){ return state.orders.filter(o=>!['CANCELLED','REFUNDED'].includes(o.status)).reduce((s,o)=>s+orderTotal(state,o),0); }
export function consumeRecipe(state, order){ order.items.forEach((it)=>{ const product=state.products.find(p=>p.id===it.productId); product?.recipe?.forEach(([id,qty,unit])=>{ const inv=state.inventory.find(i=>i.id===id); if(inv){ inv.stock = Math.max(0, inv.stock - qty*it.qty); state.stockMovements.unshift({id:crypto.randomUUID(),type:'CONSUMPTION',item:id,qty:qty*it.qty,unit,orderId:order.id,time:new Date().toISOString()}); } }); }); }
export function addAudit(state, action, target){ state.auditLogs.unshift({id:crypto.randomUUID(), action, actor:state.session?.name || 'سیستم', target, time:new Date().toLocaleString('fa-IR')}); }
export function lowStock(state){ return state.inventory.filter(i=>i.stock <= i.min); }
