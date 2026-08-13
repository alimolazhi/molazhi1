export const roles = ['OWNER','ADMIN','MANAGER','ACCOUNTANT','CASHIER','WAITER','KITCHEN','INVENTORY'];
export const permissions = ['dashboard:view','pos:write','orders:write','menu:write','inventory:write','purchase:write','accounting:write','staff:write','ai:view','settings:write','audit:view'];
export const users = [{ id:'u1', name:'مدیر مجموعه', phone:'09120000000', pin:'1234', roles:['OWNER','ADMIN'], active:true }];
export const branches = [{ id:'b1', name:'شعبه مرکزی', city:'تهران' }];
export const tables = Array.from({length:18},(_,i)=>({id:`t${i+1}`, title:`میز ${i+1}`, seats:[2,4,4,6,2,8][i%6], status:['free','busy','reserved','cleaning','out'][i%5], floor:i<10?'سالن اصلی':'بالکن'}));
export const categories = [{id:'c1',name:'قهوه'},{id:'c2',name:'نوشیدنی سرد'},{id:'c3',name:'غذا'},{id:'c4',name:'دسر'}];
export const products = [
 {id:'p1',sku:'COF-CAP',name:'کاپوچینو',categoryId:'c1',price:145000,tax:9,station:'COFFEE',active:true,margin:62,image:'☕',modifiers:['شات اضافه','شیر بادام'],variants:['کوچک','بزرگ'],recipe:[['coffee',18,'g'],['milk',180,'ml'],['sugar',5,'g']]},
 {id:'p2',sku:'COF-LAT',name:'لاته',categoryId:'c1',price:155000,tax:9,station:'COFFEE',active:true,margin:59,image:'🥛',modifiers:['کارامل','وانیل'],variants:['داغ','سرد'],recipe:[['coffee',16,'g'],['milk',220,'ml']]},
 {id:'p3',sku:'FOD-BRG',name:'برگر مخصوص',categoryId:'c3',price:390000,tax:9,station:'GRILL',active:true,margin:44,image:'🍔',modifiers:['پنیر','قارچ'],variants:['تک','دوبل'],recipe:[['beef',180,'g'],['bun',1,'pcs']]},
 {id:'p4',sku:'DES-CHK',name:'چیزکیک',categoryId:'c4',price:210000,tax:9,station:'DESSERT',active:true,margin:51,image:'🍰',modifiers:['سس توت'],variants:['اسلایس'],recipe:[['cheese',80,'g'],['sugar',20,'g']]},
 {id:'p5',sku:'CLD-MOJ',name:'موهیتو',categoryId:'c2',price:165000,tax:9,station:'BAR',active:true,margin:66,image:'🍹',modifiers:['یخ کمتر'],variants:['کلاسیک'],recipe:[['mint',10,'g'],['lemon',40,'g']]}
];
export const customers = [{id:'cu1',name:'نیما رضایی',phone:'09124445566',wallet:450000,points:120,address:'تهران، ولیعصر',total:6800000,last:'۱۴۰۵/۰۵/۲۱'}];
export const inventory = [
 {id:'coffee',name:'دانه قهوه',stock:4200,min:2500,max:12000,unit:'g',cost:2_400,supplier:'رستری آلفا',warehouse:'اصلی',expiry:'۱۴۰۵/۰۹/۰۱'},
 {id:'milk',name:'شیر',stock:16000,min:8000,max:30000,unit:'ml',cost:45,supplier:'لبنیات سپید',warehouse:'یخچال',expiry:'۱۴۰۵/۰۵/۲۵'},
 {id:'beef',name:'گوشت برگر',stock:2600,min:3000,max:12000,unit:'g',cost:3_200,supplier:'پروتئین ممتاز',warehouse:'فریزر',expiry:'۱۴۰۵/۰۶/۰۶'},
 {id:'bun',name:'نان برگر',stock:22,min:30,max:120,unit:'pcs',cost:28_000,supplier:'نان روز',warehouse:'خشک',expiry:'۱۴۰۵/۰۵/۲۴'},
 {id:'sugar',name:'شکر',stock:9000,min:2000,max:15000,unit:'g',cost:120,supplier:'بازار',warehouse:'خشک',expiry:'۱۴۰۶/۰۱/۰۱'}
];
export const orders = [
 {id:'o1001',tableId:'t2',customerId:'cu1',type:'DINE_IN',status:'PREPARING',createdAt:Date.now()-18*60000,items:[{productId:'p1',qty:2,note:'کم‌شکر'},{productId:'p4',qty:1}],discount:50000,payments:[]},
 {id:'o1002',tableId:'t5',customerId:null,type:'TAKEAWAY',status:'READY',createdAt:Date.now()-34*60000,items:[{productId:'p3',qty:1}],discount:0,payments:[]}
];
export const staff = [{id:'e1',name:'سارا احمدی',role:'CASHIER',shift:'صبح',attendance:'حاضر',salary:28000000,performance:94},{id:'e2',name:'آرش مرادی',role:'KITCHEN',shift:'عصر',attendance:'حاضر',salary:32000000,performance:89}];
export const suppliers = [{id:'s1',name:'رستری آلفا',debt:12000000},{id:'s2',name:'لبنیات سپید',debt:4200000}];
export const reservations = [{id:'r1',customer:'لیلا کریمی',date:'۱۴۰۵/۰۵/۲۳',time:'۲۰:۳۰',guests:4,table:'میز ۷',status:'تایید شده',note:'کنار پنجره'}];
export const cash = {opening:8000000,receipts:18600000,payouts:2400000,refunds:450000,expected:23750000,actual:23600000};
export const auditLogs = [{id:'a1',action:'Login',actor:'مدیر مجموعه',target:'سیستم',time:'امروز ۰۹:۰۰'},{id:'a2',action:'Price Change',actor:'مدیر مجموعه',target:'کاپوچینو',time:'دیروز ۱۸:۱۰'}];
export const settings = {loyaltyRate: { amount:100000, points:10 }, taxDefault:9, currency:'تومان', aiSafeMode:true};
export const entities = ['users','roles','permissions','user_roles','branches','floors','rooms','tables','categories','products','product_variants','modifiers','modifier_items','recipes','recipe_items','orders','order_items','order_modifiers','order_status_history','payments','payment_methods','refunds','discounts','taxes','warehouses','inventory_items','stock_movements','suppliers','purchase_orders','purchase_items','waste_records','customers','customer_addresses','customer_points','customer_wallet','employees','employee_shifts','attendance','payroll','accounts','transactions','expenses','revenues','cash_registers','cash_movements','kitchen_orders','kitchen_order_items','kitchen_stations','reservations','notifications','audit_logs','system_settings','ai_predictions','ai_insights','ai_actions'];
