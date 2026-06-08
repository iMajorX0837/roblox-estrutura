import{r as N,c as V,A as F,C as B,T as X,S as H}from"./vendor-C5Zg5fZi.js";var P={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=N,j=Symbol.for("react.element"),x=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,y=Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function L(r,i,e){var s,c={},t=null,b=null;e!==void 0&&(t=""+e),i.key!==void 0&&(t=""+i.key),i.ref!==void 0&&(b=i.ref);for(s in i)K.call(i,s)&&!Q.hasOwnProperty(s)&&(c[s]=i[s]);if(r&&r.defaultProps)for(s in i=r.defaultProps,i)c[s]===void 0&&(c[s]=i[s]);return{$$typeof:j,type:r,key:t,ref:b,props:c,_owner:y.current}}f.Fragment=x;f.jsx=L;f.jsxs=L;P.exports=f;var o=P.exports;function k(r,i){let e;try{e=r()}catch{return}return{getItem:c=>{var t;const b=h=>h===null?null:JSON.parse(h,void 0),g=(t=e.getItem(c))!=null?t:null;return g instanceof Promise?g.then(b):b(g)},setItem:(c,t)=>e.setItem(c,JSON.stringify(t,void 0)),removeItem:c=>e.removeItem(c)}}const O=r=>i=>{try{const e=r(i);return e instanceof Promise?e:{then(s){return O(s)(e)},catch(s){return this}}}catch(e){return{then(s){return this},catch(s){return O(s)(e)}}}},w=(r,i)=>(e,s,c)=>{let t={storage:k(()=>localStorage),partialize:n=>n,version:0,merge:(n,E)=>({...E,...n}),...i},b=!1;const g=new Set,h=new Set;let d=t.storage;if(!d)return r((...n)=>{console.warn(`[zustand persist middleware] Unable to update item '${t.name}', the given storage is currently unavailable.`),e(...n)},s,c);const u=()=>{const n=t.partialize({...s()});return d.setItem(t.name,{state:n,version:t.version})},m=c.setState;c.setState=(n,E)=>(m(n,E),u());const l=r((...n)=>(e(...n),u()),s,c);c.getInitialState=()=>l;let S;const q=()=>{var n,E;if(!d)return;b=!1,g.forEach(p=>{var A;return p((A=s())!=null?A:l)});const R=((E=t.onRehydrateStorage)==null?void 0:E.call(t,(n=s())!=null?n:l))||void 0;return O(d.getItem.bind(d))(t.name).then(p=>{if(p)if(typeof p.version=="number"&&p.version!==t.version){if(t.migrate){const A=t.migrate(p.state,p.version);return A instanceof Promise?A.then(v=>[!0,v]):[!0,A]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,p.state];return[!1,void 0]}).then(p=>{var A;const[v,G]=p;if(S=t.merge(G,(A=s())!=null?A:l),e(S,!0),v)return u()}).then(()=>{R?.(S,void 0),S=s(),b=!0,h.forEach(p=>p(S))}).catch(p=>{R?.(void 0,p)})};return c.persist={setOptions:n=>{t={...t,...n},n.storage&&(d=n.storage)},clearStorage:()=>{d?.removeItem(t.name)},getOptions:()=>t,rehydrate:()=>q(),hasHydrated:()=>b,onHydrate:n=>(g.add(n),()=>{g.delete(n)}),onFinishHydration:n=>(h.add(n),()=>{h.delete(n)})},t.skipHydration||q(),S||l},Z=w,W=20,z=50;function M(r){const i=r>W,e=i?r*z/100:0,s=i?r-e:r;return{originalPrice:r,discountedPrice:Math.round(s*100)/100,discount:Math.round(e*100)/100,hasDiscount:i}}function J(r){return M(r).discountedPrice}const _=V()(Z((r,i)=>({isOpen:!1,isClosing:!1,items:[],setIsOpen:e=>r({isOpen:e}),setIsClosing:e=>r({isClosing:e}),addItem:e=>{const{items:s}=i(),c=s.find(t=>t.productId===e.productId);r(c?{items:s.map(t=>t.productId===e.productId?{...t,quantity:t.quantity+e.quantity}:t)}:{items:[...s,e]})},removeItem:e=>{r({items:i().items.filter(s=>s.productId!==e)})},updateQuantity:(e,s)=>{s<=0?i().removeItem(e):r({items:i().items.map(c=>c.productId===e?{...c,quantity:s}:c)})},clearCart:()=>r({items:[]}),getTotalPrice:()=>i().items.reduce((e,s)=>{const c=J(s.productPrice);return e+c*s.quantity},0),getTotalItems:()=>i().items.reduce((e,s)=>e+s.quantity,0)}),{name:"cart-storage",partialize:r=>({items:r.items})}));function T({categoryName:r,categoryId:i,sections:e}){const{addItem:s}=_(),[c,t]=N.useState(!1);N.useEffect(()=>{window.scrollTo(0,0)},[]);const b=d=>{window.location.hash=`product/${i}/${d.id}`,window.scrollTo(0,0)},g=(d,u)=>{u.stopPropagation(),s({productId:d.id,productName:d.name,productPrice:d.price,productImage:d.image,quantity:1}),window.location.hash="checkout",window.scrollTo(0,0)},h=d=>{const u=`section-${d}`,m=document.getElementById(u);if(m){const S=m.getBoundingClientRect().top+window.pageYOffset+-100;window.scrollTo({top:S,behavior:"smooth"})}t(!1)};return o.jsxs("div",{className:"container py-4",children:[o.jsx("div",{className:"flex flex-col gap-4",children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("a",{href:"/",className:"w-9 h-9 flex items-center justify-center rounded-lg border bg-background hover:bg-muted transition",children:o.jsx(F,{className:"w-5 h-5"})}),o.jsx("h3",{className:"text-2xl font-bold",children:r})]}),o.jsxs("div",{className:"relative",children:[o.jsxs("button",{onClick:()=>t(!c),className:"flex items-center justify-between gap-3 px-4 py-2.5 bg-muted border border-foreground/10 rounded-cc hover:bg-muted-solid/80 transition-colors min-w-[200px]",children:[o.jsx("span",{className:"font-medium text-sm",children:"Todas as sessões"}),o.jsx(B,{className:`w-4 h-4 transition-transform ${c?"rotate-180":""}`})]}),c&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>t(!1)}),o.jsx("div",{className:"absolute top-full right-0 mt-2 w-[280px] bg-black border border-foreground/10 rounded-cc shadow-2xl z-20 max-h-[400px] overflow-y-auto",children:o.jsx("div",{className:"p-2 space-y-1",children:e.map((d,u)=>o.jsx("button",{onClick:()=>h(u),className:"w-full text-left px-3 py-2.5 rounded-md hover:bg-foreground/10 transition-colors text-sm",children:d.title},u))})})]})]})]})}),o.jsx("div",{className:"space-y-6 mt-3",children:e.map((d,u)=>o.jsxs("div",{id:`section-${u}`,className:"min-h-[300px] scroll-mt-24",children:[o.jsx("h3",{className:"bg-primary/20 border-2 border-primary w-fit py-2 px-4 rounded-cc text-sm sm:text-base font-semibold backdrop-blur-sm",children:d.title}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 mt-4 sm:mt-8",children:d.products.map(m=>o.jsx("div",{className:"relative",children:o.jsxs("div",{className:"h-full flex flex-col group rounded-xl overflow-hidden border-2 border-white/10 bg-white/[1%] backdrop-blur-sm hover:border-primary transition-all hover:scale-[102%] w-full",children:[o.jsxs("div",{onClick:()=>b(m),className:"relative border-b-2 border-white/10 h-[240px] sm:h-[280px] flex items-center justify-center p-2 bg-background/50 cursor-pointer",children:[m.outOfStock&&o.jsx("p",{className:"absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 font-bold text-sm lg:text-xl text-white whitespace-nowrap",children:"ESTOQUE ESGOTADO"}),o.jsx("img",{className:`transition object-cover w-full h-full ${m.outOfStock?"blur-sm opacity-80":""}`,src:m.image,alt:m.name,loading:"lazy"})]}),o.jsxs("div",{className:"p-2 sm:p-3 flex flex-col h-full flex-1",children:[o.jsx("p",{onClick:()=>b(m),className:"text-xs sm:text-base font-medium line-clamp-2 leading-none mb-2 cursor-pointer",children:m.name}),o.jsx("div",{className:"mt-auto mb-2.5",children:o.jsxs("div",{className:"flex justify-between items-start mb-1",children:[o.jsxs("div",{className:"flex-1",children:[(()=>{const l=M(m.price);return o.jsxs(o.Fragment,{children:[l.hasDiscount&&o.jsxs("div",{className:"flex gap-2 items-center mb-1",children:[o.jsxs("p",{className:"text-xs sm:text-sm leading-none line-through text-muted-foreground",children:["R$ ",l.originalPrice.toFixed(2)]}),o.jsxs("div",{className:"h-5 rounded-md text-xs bg-green-500/20 px-1 text-green-400 border border-green-500/30 inline-flex gap-1 items-center whitespace-nowrap",children:[o.jsx(X,{className:"w-3 h-3"}),o.jsx("span",{className:"text-xs font-semibold",children:"-50%"})]})]}),m.originalPrice&&m.discount&&o.jsxs("div",{className:"flex gap-2 items-center mb-1",children:[o.jsxs("p",{className:"text-xs sm:text-sm leading-none line-through text-muted-foreground",children:["R$ ",m.originalPrice.toFixed(2)]}),o.jsx("div",{className:"h-5 rounded-md text-xs bg-primary/10 px-1 text-primary border border-primary/20 inline-flex gap-1 items-center whitespace-nowrap",children:o.jsxs("span",{className:"text-xs font-semibold",children:[m.discount,"% OFF"]})})]}),o.jsxs("p",{className:`text-sm sm:text-lg font-bold ${l.hasDiscount?"text-green-400":""}`,children:["R$ ",l.discountedPrice.toFixed(2)]})]})})(),o.jsx("p",{className:"text-xs sm:text-sm text-muted-foreground",children:"À vista no Pix"})]}),o.jsx("div",{className:"flex items-center gap-1 sm:gap-2",children:o.jsx("div",{className:"size-6 sm:size-8 bg-[#32bcad26] border border-[#32bcad4d] rounded-md p-1",children:o.jsx("img",{src:"https://cdn.centralcart.com.br/public/gateway-icons/icon-pix.svg",alt:"PIX",className:"w-full"})})})]})}),o.jsxs("button",{onClick:l=>g(m,l),className:"text-xs sm:text-sm h-8 sm:h-10 px-3 w-full rounded sm:rounded-md font-semibold flex gap-2 items-center justify-center whitespace-nowrap btn-primary",children:[o.jsx(H,{className:"w-3 h-3 sm:w-4 sm:h-4"}),"Comprar agora"]})]})]})},m.id))})]},u))})]})}const I=[{title:"🎁 CAIXAS MISTERIOSAS",products:[{id:"caixa-estilos-lutas",name:"『 🎁 』CAIXA DE ESTILOS DE LUTAS",image:"https://i.ibb.co/dwQBpHDj/2cd94079-2fd0-42f8-85b9-0444bb018e36.png",price:8.99,description:`『 🎁 』CAIXA DE ESTILOS DE LUTAS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"caixa-espadas-armas",name:"『 🎁 』CAIXA DE ESPADAS E ARMAS",image:"https://i.ibb.co/jvVwQTXy/90b4d97d-8362-470e-9750-5b60751ae6ee.png",price:9.99,description:`『 🎁 』CAIXA DE ESPADAS E ARMAS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"caixa-frutas-miticas",name:"『 🎁 』CAIXA DE FRUTAS MÍTICAS",image:"https://i.ibb.co/zWY86nNx/12ab9cee-0be6-4c52-afd9-426c427813b3.png",price:14.99,description:`『 🎁 』CAIXA DE FRUTAS MÍTICAS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"caixa-racas-v4-full",name:"『 🎁 』CAIXA DE RAÇAS V4 FULL",image:"https://i.ibb.co/YF1qTDys/2028a387-5f98-45ca-b850-828b3cdc525e.png",price:14.99,description:`『 🎁 』CAIXA DE RAÇAS V4 FULL

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"caixa-gamepass",name:"『 🎁 』CAIXA DE GAMEPASS",image:"https://i.ibb.co/xSygK685/af5a8c78-ebbf-4baa-8f91-39969b703bd2.png",price:19.99,description:`『 🎁 』CAIXA DE GAMEPASS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"caixa-frutas-permanentes",name:"『 🎁 』CAIXA DE FRUTAS PERMANENTES",image:"https://i.ibb.co/FkjvFxB4/14f38b38-c967-4521-b1b9-8082a7ba552b.png",price:29.99,description:`『 🎁 』CAIXA DE FRUTAS PERMANENTES

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]},{title:"🍀 CONTAS ALEATÓRIAS",products:[{id:"conta-aleatoria-level-1000",name:"『 🎲 』 CONTA LEVEL 1000~2800",image:"https://i.ibb.co/YFKh2yxs/2ee36fe4-4729-4fa0-8849-cd81704cfad2.png",price:4.99,description:`『 🎲 』 CONTA LEVEL 1000~2800

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"conta-aleatoria-level-1500",name:"『 🎲 』 CONTA LEVEL 1500~2800",image:"https://i.ibb.co/YFKh2yxs/2ee36fe4-4729-4fa0-8849-cd81704cfad2.png",price:5.99,description:`『 🎲 』 CONTA LEVEL 1500~2800

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"conta-aleatoria-level-2000",name:"『 🎲 』 CONTA LEVEL 2000~2800",image:"https://i.ibb.co/YFKh2yxs/2ee36fe4-4729-4fa0-8849-cd81704cfad2.png",price:6.99,description:`『 🎲 』 CONTA LEVEL 2000~2800

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]},{title:"🥊 ESTILOS DE LUTAS",products:[{id:"godhuman-level-maximo",name:"『 👊 』 GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/352k50m2/364c2a56-107e-47d9-806d-5ef7eb2a9578.png",price:8.99,description:`『 👊 』 GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"sanguine-godhuman-level-maximo",name:"『 🩸 』 SANGUINE ART + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/XxJRJdPd/664160e6-70a5-4a11-867c-9a54b307bc92.png",price:19.99,description:`『 🩸 』 SANGUINE ART + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"sanguine-cdk-godhuman-level-maximo",name:"『 🩸 』 SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/7JBj8mmw/35ce98e3-6d64-435a-bcab-aaaebd7dffde.png",price:29.99,description:`『 🩸 』 SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]},{title:"🤺 ESPADAS E ARMAS",products:[{id:"skull-guitar-godhuman-level-maximo",name:"『 🎸 』 SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/HfvBvCjm/dc329519-9185-463d-9f47-04eedff5009c.png",price:9.99,description:`『 🎸 』 SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"shark-anchor-cdk-godhuman-level-maximo",name:"『 ⚓️⚔️ 』 SHARK ANCHOR + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/hJHm8pxj/b89bcbbf-51e2-460f-ac77-671a142b338d.png",price:24.99,description:`『 ⚓️⚔️ 』 SHARK ANCHOR + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]},{title:"🍍 FRUTAS",products:[{id:"frutas-miticas-0-13-bf",name:"『 🍍 』 0~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO",image:"https://i.ibb.co/pjbH2jKd/71a10a82-9948-4008-9122-5522e7f1ad9b.png",price:8.99,description:`『 🍍 』 0~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"frutas-miticas-1-13-godhuman-bf",name:"『 🍍 』 1~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/GSJX1ZN/38a4f3a4-ec4e-43f3-98c7-858fcebc8002.png",price:9.99,description:`『 🍍 』 1~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"frutas-miticas-2-13-godhuman-bf",name:"『 🍍 』 2~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/60tn49bd/e3f73036-5d8d-42d8-b171-eecd96604a6f.png",price:14.99,description:`『 🍍 』 2~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"frutas-miticas-3-13-godhuman-bf",name:"『 🍍 』 3~13 MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/60tn49bd/e3f73036-5d8d-42d8-b171-eecd96604a6f.png",price:19.99,description:`『 🍍 』 3~13 MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"frutas-miticas-4-13-godhuman-bf",name:"『 🍍 』 4~13 MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/60tn49bd/e3f73036-5d8d-42d8-b171-eecd96604a6f.png",price:24.99,description:`『 🍍 』 4~13 MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"buddha-godhuman-bf",name:"『 🛕 』 BUDDHA NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/tT7r9WCN/5f831726-093e-4c0f-87d9-a341a2df4b71.png",price:8.99,description:`『 🛕 』 BUDDHA NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"portal-godhuman-bf",name:"『 🌀 』 PORTAL NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/GQJKFnWM/d39cff80-9ac6-45d4-80dd-3f6538a4728e.png",price:8.99,description:`『 🌀 』 PORTAL NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"trex-godhuman-bf",name:"『 🦖 』 T-REX NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/x8FF50ND/8b2e359c-6fdf-43ac-ab37-36c18f37a576.png",price:9.99,description:`『 🦖 』 T-REX NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gas-godhuman-bf",name:"『 💨 』 GAS NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/Q7RN1m6J/13a674c6-be5f-4d63-b537-58e814a1a692.png",price:12.99,description:`『 💨 』 GAS NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"yeti-godhuman-bf",name:"『 ❄️ 』 YETI NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/qMr8nsGk/b6d41850-8b16-4728-b577-c7d9761cf6b1.png",price:19.99,description:`『 ❄️ 』 YETI NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"tiger-godhuman-bf",name:"『 🐯 』 TIGER NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/Y7Q0MRnK/c2194629-ebb0-4afa-a5f5-de74db027b6f.png",price:39.99,description:`『 🐯 』 TIGER NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"tiger-frutas-miticas-bf",name:"『 🐯🍍 』 TIGER NO INVENTÁRIO + 1~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/0yR7T0Qr/9355ce95-8a8f-4df3-96e4-710e3b8095ed.png",price:39.99,description:`『 🐯🍍 』 TIGER NO INVENTÁRIO + 1~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"kitsune-godhuman-bf",name:"『 🦊 』 KITSUNE + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/7tjR9n2Q/67fb76fc-96af-4718-bde9-4a02daca428d.png",price:39.99,description:`『 🦊 』 KITSUNE + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"kitsune-inventario-godhuman-bf",name:"『 🦊 』 KITSUNE NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/7tjR9n2Q/67fb76fc-96af-4718-bde9-4a02daca428d.png",price:49.99,description:`『 🦊 』 KITSUNE NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"yeti-cdk-skull-guitar-bf",name:"『 ❄️⚔️🎸 』 YETI + CDK + SKULL GUITAR + GOD HUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/zThrxwHF/5c14daf6-04ef-4313-b148-b715e057adbb.png",price:24.99,description:`『 ❄️⚔️🎸 』 YETI + CDK + SKULL GUITAR + GOD HUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"tiger-cdk-skull-guitar-bf",name:"『 🐯⚔️🎸 』 TIGER + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/Cs9LKchX/b9d5f519-53e1-4a3b-9582-14bc9a7bbad6.png",price:44.99,description:`『 🐯⚔️🎸 』 TIGER + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"kitsune-inventario-cdk-skull-bf",name:"『 🦊⚔️🎸 』 KITSUNE NO INVENTÁRIO + CDK + SKULL GUITAR + GOD HUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/xqwPWtVF/c607083d-53a4-43d8-9664-9cca22f9d345.png",price:59.99,description:`『 🦊⚔️🎸 』 KITSUNE NO INVENTÁRIO + CDK + SKULL GUITAR + GOD HUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"kitsune-yeti-inventario-bf",name:"『 🦊❄️ 』 KITSUNE NO INVENTÁRIO + YETI NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/8DpbwMJY/6fd51bc3-0800-49a2-9aa0-20efac2a4582.png",price:59.99,description:`『 🦊❄️ 』 KITSUNE NO INVENTÁRIO + YETI NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]},{title:"👤 RAÇAS",products:[{id:"raca-draco-v3-godhuman-dragonheart-dragonstorm-max",name:"『 🐲 』 RAÇA V3 DRACO + GODHUMAN + DRAGONHEART + DRAGONSTORM + LEVEL MÁXIMO",image:"https://i.ibb.co/NnLcSsJP/b5f0227c-86a4-4568-82da-fbf0bb5d0886.png",price:49.99,description:`『 🐲 』 RAÇA V3 DRACO + GODHUMAN + DRAGONHEART + DRAGONSTORM + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-aleatoria-godhuman-max",name:"『 🎁 』 RAÇA V4 ALEATÓRIA + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/0VhzhHWg/5d0caf50-898d-4c43-adad-e8c3544e3023.png",price:19.99,description:`『 🎁 』 RAÇA V4 ALEATÓRIA + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-aleatoria-cdk-godhuman-max",name:"『 🎁 』 RAÇA V4 ALEATÓRIA + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/CKVFJx7n/332cdf9a-b2d3-444b-8dcc-6e6172aca9e9.png",price:22.99,description:`『 🎁 』 RAÇA V4 ALEATÓRIA + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-aleatoria-full-godhuman-max",name:"『 🎁 』 RAÇA V4 ALEATÓRIA FULL + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/fdW07Jdm/725ba22a-dcb7-4be9-96ef-60e9fe0cb70c.png",price:27.99,description:`『 🎁 』 RAÇA V4 ALEATÓRIA FULL + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-aleatoria-full-skull-guitar-godhuman-max",name:"『 🎁 』 RAÇA V4 ALEATÓRIA FULL + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/8gxXTN68/1e07a682-6c7f-48d1-a812-55087241189b.png",price:28.99,description:`『 🎁 』 RAÇA V4 ALEATÓRIA FULL + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-aleatoria-full-cdk-godhuman-max",name:"『 🎁 』 RAÇA V4 ALEATÓRIA FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/XfHq0MnV/bf9df022-78e8-4252-8c1b-ac230fe7a8d2.png",price:29.99,description:`『 🎁 』 RAÇA V4 ALEATÓRIA FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-aleatoria-full-cdk-skull-guitar-godhuman-max",name:"『 🎁 』 RAÇA V4 ALEATÓRIA FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/h1CsLW1R/fcf71fa5-b58b-4838-aa2b-908b9303b73e.png",price:32.99,description:`『 🎁 』 RAÇA V4 ALEATÓRIA FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-human-godhuman-max",name:"『 🙎‍♂️ 』 RAÇA V4 HUMAN + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/5X2BNVkT/1c427bf6-6ad8-4883-81a4-4f028d640565.png",price:19.99,description:`『 🙎‍♂️ 』 RAÇA V4 HUMAN + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-mink-godhuman-max",name:"『 🐰 』 RAÇA V4 MINK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/k6QXBBXJ/98ce8fd2-6b62-4a11-91cc-129e1d666334.png",price:19.99,description:`『 🐰 』 RAÇA V4 MINK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-cyborg-godhuman-max",name:"『 🤖 』 RAÇA V4 CYBORG + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/CsQbD5v9/d1388b68-56a9-44dc-805a-2cbed67f74ea.png",price:22.99,description:`『 🤖 』 RAÇA V4 CYBORG + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-cyborg-cdk-godhuman-max",name:"『 🤖 』 RAÇA V4 CYBORG + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/5hPVGLcn/59b12434-158f-45b5-be59-bc02d57449ad.png",price:24.99,description:`『 🤖 』 RAÇA V4 CYBORG + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-mink-full-godhuman-max",name:"『 🐰 』 RAÇA V4 MINK FULL + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/1tWdGWvh/30ae9f0f-e1e3-44f1-9285-929f782a3d63.png",price:27.99,description:`『 🐰 』 RAÇA V4 MINK FULL + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-angel-full-godhuman-max",name:"『 😇 』 RAÇA V4 ANGEL FULL + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/h6YXqzX/f7c552a2-df6e-41ec-94f3-3b3a7093894b.png",price:27.99,description:`『 😇 』 RAÇA V4 ANGEL FULL + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-shark-full-godhuman-max",name:"『 🦈 』 RAÇA V4 SHARK FULL + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/TxjNQSVY/c3e3ee39-febe-498c-b8cb-b08959687e85.png",price:27.99,description:`『 🦈 』 RAÇA V4 SHARK FULL + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-ghoul-full-godhuman-max",name:"『 👨‍🎤 』 RAÇA V4 GHOUL FULL + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/fVjRTykr/3cd660e2-2bb4-4be9-bfa4-6907e3baf2aa.png",price:29.99,description:`『 👨‍🎤 』 RAÇA V4 GHOUL FULL + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-human-full-cdk-godhuman-max",name:"『 🙎‍♂️ 』 RAÇA V4 HUMAN FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/SwPmv4yf/55e0f0b3-d6f0-4d4e-a72e-02fa8ae7e90e.png",price:29.99,description:`『 🙎‍♂️ 』 RAÇA V4 HUMAN FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-mink-full-cdk-godhuman-max",name:"『 🐰 』 RAÇA V4 MINK FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/fYxJst8x/f8fcfe7c-91d9-4293-97a9-7209270c192f.png",price:29.99,description:`『 🐰 』 RAÇA V4 MINK FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-angel-full-cdk-godhuman-max",name:"『 😇 』 RAÇA V4 ANGEL FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/CpyZCCCm/5c9f4106-96ef-425a-911f-b7c23aefafea.png",price:29.99,description:`『 😇 』 RAÇA V4 ANGEL FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-shark-full-cdk-godhuman-max",name:"『 🦈 』 RAÇA V4 SHARK FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/RpByB8zW/4e37a246-9917-4c3c-a24a-4fae43fc51cd.png",price:29.99,description:`『 🦈 』 RAÇA V4 SHARK FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-ghoul-full-cdk-godhuman-max",name:"『 👨‍🎤 』 RAÇA V4 GHOUL FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/wNZ4z90p/87134607-2c78-401e-840f-37487bd8c383.png",price:32.99,description:`『 👨‍🎤 』 RAÇA V4 GHOUL FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-cyborg-full-cdk-godhuman-max",name:"『 🤖 』 RAÇA V4 CYBORG FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/35BQSY6f/ae4adcf1-7edf-4eb5-9651-533402f0a5ff.png",price:32.99,description:`『 🤖 』 RAÇA V4 CYBORG FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-draco-full-cdk-godhuman-max",name:"『 🐲 』 RAÇA V4 DRACO FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/HT1WsDT6/6b30c431-1515-47a2-a661-d27d56f1be1d.png",price:59.99,description:`『 🐲 』 RAÇA V4 DRACO FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-draco-full-skull-guitar-godhuman-max",name:"『 🐲 』 RAÇA V4 DRACO FULL + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/fdQzh59d/df5fdbab-97eb-4e74-82c9-89203819663b.png",price:63.99,description:`『 🐲 』 RAÇA V4 DRACO FULL + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-draco-full-skull-guitar-godhuman-valkyrie-mirror-max",name:"『 🐲 』 RAÇA V4 DRACO FULL + SKULL GUITAR + GODHUMAN + VALKYRIE + MIRROR + LEVEL MÁXIMO",image:"https://i.ibb.co/Vc2dxfHy/32991bd2-4af2-4651-964b-17021c59d239.png",price:64.99,description:`『 🐲 』 RAÇA V4 DRACO FULL + SKULL GUITAR + GODHUMAN + VALKYRIE + MIRROR + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-draco-full-cdk-godhuman-valkyrie-mirror-max",name:"『 🐲 』 RAÇA V4 DRACO FULL + CDK + GODHUMAN + VALKYRIE + MIRROR + LEVEL MÁXIMO",image:"https://i.ibb.co/QFYQNgzX/af01a97a-861e-480e-a295-8aff27880064.png",price:67.99,description:`『 🐲 』 RAÇA V4 DRACO FULL + CDK + GODHUMAN + VALKYRIE + MIRROR + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-human-full-cdk-skull-guitar-godhuman-max",name:"『 🙎‍♂️⚔️🎸 』 RAÇA V4 HUMAN FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/fYKD5VPc/5a0310ce-8e84-4118-9488-151c5d4d5661.png",price:39.99,description:`『 🙎‍♂️⚔️🎸 』 RAÇA V4 HUMAN FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-mink-full-cdk-skull-guitar-godhuman-max",name:"『 🐰⚔️🎸 』 RAÇA V4 MINK FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/xq7DLKVT/b73ca293-0f18-4b44-b6d4-b3682b48c6e3.png",price:39.99,description:`『 🐰⚔️🎸 』 RAÇA V4 MINK FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-shark-full-cdk-skull-guitar-godhuman-max",name:"『 🦈⚔️🎸 』 RAÇA V4 SHARK FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/PZYKvH04/80d1effc-26b5-4eda-a63a-9b7fd2737972.png",price:39.99,description:`『 🦈⚔️🎸 』 RAÇA V4 SHARK FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-v4-draco-full-cdk-skull-guitar-godhuman-max",name:"『 🐲⚔️🎸 』 RAÇA V4 DRACO FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/PZYKvH04/80d1effc-26b5-4eda-a63a-9b7fd2737972.png",price:69.99,description:`『 🐲⚔️🎸 』 RAÇA V4 DRACO FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]},{title:"🌟 ESPECIAIS",products:[{id:"especial-1",name:"『 🎁🩸 』 RAÇA V4 ALEATÓRIA FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/r2GYVZ1m/7bb3e6f4-aad0-4d6b-9956-e02e6f4471da.png",price:39.99,description:`『 🎁🩸 』 RAÇA V4 ALEATÓRIA FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-2",name:"『 😇🩸 』 RAÇA V4 ANGEL FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/m53R9cMW/cc0c40b7-852e-4c96-b2da-d09d2e32314e.png",price:39.99,description:`『 😇🩸 』 RAÇA V4 ANGEL FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-3",name:"『 🐲🩸 』 RAÇA V4 DRACO FULL + SANGUINE ART + GODHUMAN + VALKYRIE + MIRROR + LEVEL MÁXIMO",image:"https://i.ibb.co/zhNpdXNg/597896c5-139c-49ec-87bc-33ab85ef5f5c.png",price:62.99,description:`『 🐲🩸 』 RAÇA V4 DRACO FULL + SANGUINE ART + GODHUMAN + VALKYRIE + MIRROR + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-4",name:"『 😇🩸🎸 』 RAÇA V4 ANGEL FULL + SANGUINE ART + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/x8708DGQ/9ca165c4-6ab5-4e01-acb4-aafa6150160e.png",price:42.99,description:`『 😇🩸🎸 』 RAÇA V4 ANGEL FULL + SANGUINE ART + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-5",name:"『 🦈🩸🎸 』 RAÇA V4 SHARK FULL + SANGUINE ART + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/XffHPSyP/37cc62ee-7cc6-47de-9ae5-33fd78488fbd.png",price:42.99,description:`『 🦈🩸🎸 』 RAÇA V4 SHARK FULL + SANGUINE ART + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-6",name:"『 🤖🩸🎸 』 RAÇA V4 CYBORG FULL + SANGUINE ART + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/HL0FDQ0Y/be81b89f-8802-4003-b527-4b11aec58c7b.png",price:44.99,description:`『 🤖🩸🎸 』 RAÇA V4 CYBORG FULL + SANGUINE ART + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-7",name:"『 🐲🩸🎸 』 RAÇA V4 DRACO FULL + SANGUINE ART + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/Mk6ct027/68285eea-4b6b-4067-b3cb-c1488199f4e5.png",price:62.99,description:`『 🐲🩸🎸 』 RAÇA V4 DRACO FULL + SANGUINE ART + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-8",name:"『 🤖🩸⚔️ 』 RAÇA V4 CYBORG FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/W4dBSQHs/da9a78eb-bbbe-433b-bb01-3add73296825.png",price:49.99,description:`『 🤖🩸⚔️ 』 RAÇA V4 CYBORG FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-9",name:"『 🐲🩸⚔️ 』 RAÇA V4 DRACO FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/rR0Q3YsB/d63a54cf-3fe5-4533-a908-ccd3f61aab49.png",price:69.99,description:`『 🐲🩸⚔️ 』 RAÇA V4 DRACO FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-10",name:"『 🤖🩸⚔️🎸 』 RAÇA V4 CYBORG FULL + SANGUINE ART + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/1tmLhmM8/2a2161e0-8491-4098-b949-af1b40554ab8.png",price:59.99,description:`『 🤖🩸⚔️🎸 』 RAÇA V4 CYBORG FULL + SANGUINE ART + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-11",name:"『 💀 』10~30 MILHÕES DE BOUNTY + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/gLhhVs4g/a983f392-61a1-472d-96d1-7fb2a660e560.png",price:39.99,description:`『 💀 』10~30 MILHÕES DE BOUNTY + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-12",name:"『 💀 』10~30 MILHÕES DE BOUNTY + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/5X7MK3b2/cd22da9a-8f40-4cbc-9d7d-0b7210244d6e.png",price:42.99,description:`『 💀 』10~30 MILHÕES DE BOUNTY + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-13",name:"『 💀🩸 』10~30 MILHÕES DE BOUNTY + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/TDX9PnYQ/fe1664af-15bd-44d5-a89a-dff528349d60.png",price:49.99,description:`『 💀🩸 』10~30 MILHÕES DE BOUNTY + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-14",name:"『 💀🎁⚔️ 』10~30 MILHÕES DE BOUNTY + RAÇA V4 ALEATÓRIA FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/606VhSyP/0aa3f2f1-cd16-4bc8-aaa4-881156b89c6b.png",price:59.99,description:`『 💀🎁⚔️ 』10~30 MILHÕES DE BOUNTY + RAÇA V4 ALEATÓRIA FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-15",name:"『 💀😇⚔️ 』10~30 MILHÕES DE BOUNTY + RAÇA V4 ANGEL FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/nM2XYHS4/6b7b2f94-94c6-4fb1-a43f-687d81dc76db.png",price:59.99,description:`『 💀😇⚔️ 』10~30 MILHÕES DE BOUNTY + RAÇA V4 ANGEL FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-16",name:"『 💀🤖⚔️ 』10~30 MILHÕES DE BOUNTY + RAÇA V4 CYBORG FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/848h3prT/41bc31fc-358e-4fde-97ac-10fa06192798.png",price:64.99,description:`『 💀🤖⚔️ 』10~30 MILHÕES DE BOUNTY + RAÇA V4 CYBORG FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-17",name:"『 💀🐲⚔️ 』10~30 MILHÕES DE BOUNTY + RAÇA V4 DRACO FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/SXkRbcQC/21ec4297-0393-46f6-98d1-2d2b053e6e08.png",price:69.99,description:`『 💀🐲⚔️ 』10~30 MILHÕES DE BOUNTY + RAÇA V4 DRACO FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-18",name:"『 💀🐲⚔️🎸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 DRACO FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/67ShQn1q/6424b0cf-89ef-4c1f-b8f2-179f729d6195.png",price:74.99,description:`『 💀🐲⚔️🎸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 DRACO FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-19",name:"『 💀🦈🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 SHARK FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/FbrYFRpx/52ac26e3-d373-48b2-8490-6d9f7510b205.png",price:64.99,description:`『 💀🦈🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 SHARK FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-20",name:"『 💀🤖🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 CYBORG FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/Q3jxx23F/2db311f3-41a0-476a-b416-94bf8717bf29.png",price:69.99,description:`『 💀🤖🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 CYBORG FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-21",name:"『 💀🐲🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 DRACO FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/vWmwLxN/e6803f83-0d88-4380-9402-1829f776a98c.png",price:84.99,description:`『 💀🐲🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 DRACO FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-22",name:"『 💀🎁🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 ALEATÓRIA + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/JwBZbsD3/d12c8110-87b0-449d-a1ec-c4b25759dadd.png",price:69.99,description:`『 💀🎁🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 ALEATÓRIA + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-23",name:"『 💀👨‍🎤🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 GHOUL FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/r2B62wWM/54fc8285-4832-4d62-b4fa-2c1a42550fc7.png",price:79.99,description:`『 💀👨‍🎤🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 GHOUL FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-24",name:"『 💀🤖🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 CYBORG FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/R4TXwkkz/ff7cb5ab-8bf5-4136-a074-5d23acedb1a9.png",price:79.99,description:`『 💀🤖🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 CYBORG FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-25",name:"『 💀🐲🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 DRACO FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/GvMD2PVC/5fd0588c-54f2-4f3f-abf5-eda3119a1a04.png",price:89.99,description:`『 💀🐲🩸 』10~30 MILHÕES DE BOUNTY + RAÇA V4 DRACO FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-26",name:"『 💀🦊🤖🩸 』10~30 MILHÕES DE BOUNTY + KITSUNE + RAÇA V4 CYBORG FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/psjvMBy/dec31a2b-c4a5-4bc7-92bb-1c39fe2d873f.png",price:99.99,description:`『 💀🦊🤖🩸 』10~30 MILHÕES DE BOUNTY + KITSUNE + RAÇA V4 CYBORG FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-27",name:"『 💀😇⚔️ 』30 MILHÕES DE BOUNTY + RAÇA V4 ANGEL FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/svxWjqG4/5a077dd5-d81a-48b0-b865-6208de949121.png",price:99.99,description:`『 💀😇⚔️ 』30 MILHÕES DE BOUNTY + RAÇA V4 ANGEL FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-28",name:"『 🎁 』4 RAÇAS V4 FULL + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/FkWJG09s/8ddd8ef3-f45e-4e96-a854-dab624c17b0b.png",price:54.99,description:`『 🎁 』4 RAÇAS V4 FULL + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-29",name:"『 🎁 』4 RAÇAS V4 FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/jZDYdQzp/6617df38-b251-4488-909f-d6604e2c230f.png",price:59.99,description:`『 🎁 』4 RAÇAS V4 FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-30",name:"『 🎁🩸 』4 RAÇAS V4 ALEATÓRIAS FULL + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/jPBG6djr/e0aa33d4-2f2c-4de0-af02-8c365f95c304.png",price:64.99,description:`『 🎁🩸 』4 RAÇAS V4 ALEATÓRIAS FULL + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-31",name:"『 🎁🩸 』4 RAÇAS V4 ALEATÓRIAS FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/MkcQdH4p/a651fa32-6ab1-4eab-9e66-7725923e1624.png",price:69.99,description:`『 🎁🩸 』4 RAÇAS V4 ALEATÓRIAS FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-32",name:"『 🤖🦈🐰🙎‍♂️😇👨‍🎤 』 6 RAÇAS V4 FULL + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/Lhz3yS9L/8b832c83-a048-4fc3-8de7-f024efe3a9ae.png",price:79.99,description:`『 🤖🦈🐰🙎‍♂️😇👨‍🎤 』 6 RAÇAS V4 FULL + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-33",name:"『 🤖🦈🐰🙎‍♂️😇👨‍🎤 』 6 RAÇAS V4 FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/k62KGTyS/535a6c4e-fadf-4d2f-ae17-b2563f308b52.png",price:84.99,description:`『 🤖🦈🐰🙎‍♂️😇👨‍🎤 』 6 RAÇAS V4 FULL + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-34",name:"『 🤖🦈🐰🙎‍♂️😇👨‍🎤🩸 』 6 RAÇAS V4 FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/Ldcd00Zn/5b468108-5708-47b3-bb7b-38a6e234da7b.png",price:84.99,description:`『 🤖🦈🐰🙎‍♂️😇👨‍🎤🩸 』 6 RAÇAS V4 FULL + SANGUINE ART + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-35",name:"『 🤖🦈🐰🙎‍♂️😇👨‍🎤🩸 』 6 RAÇAS V4 FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/M4nhMgV/1678cd9c-95cd-42bd-971b-9e31c2b829ba.png",price:89.99,description:`『 🤖🦈🐰🙎‍♂️😇👨‍🎤🩸 』 6 RAÇAS V4 FULL + SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-36",name:"『 🤖🦈🐰🙎‍♂️😇👨‍🎤🩸 』 6 RAÇAS V4 FULL + SANGUINE ART + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/jZLYXM3C/622cfd5d-0a39-4762-bc07-69a6e1a79ecd.png",price:89.99,description:`『 🤖🦈🐰🙎‍♂️😇👨‍🎤🩸 』 6 RAÇAS V4 FULL + SANGUINE ART + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-37",name:"『 🤖🦈🐰🙎‍♂️😇👨‍🎤🥯 』6 RAÇAS V4 FULL + DOUGH DESPERTADA + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/hFJmpzVQ/df7ebe49-1a6a-4cd0-b9b5-705f8b2c1f73.png",price:89.99,description:`『 🤖🦈🐰🙎‍♂️😇👨‍🎤🥯 』6 RAÇAS V4 FULL + DOUGH DESPERTADA + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-38",name:"『 🐲🤖🦈🐰🙎‍♂️😇👨‍🎤 』 7 RAÇAS V4 FULL + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/PGf2Ct64/69ac5dce-11b3-4901-978e-653a026ae5d3.png",price:119.99,description:`『 🐲🤖🦈🐰🙎‍♂️😇👨‍🎤 』 7 RAÇAS V4 FULL + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-39",name:"『 🌟 』30 MILHÕES DE BOUNTY + RAÇA V4 ALEATÓRIA FULL + SANGUINE ART + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/qL7tk1mG/ae846f2f-2cca-4283-b5c0-7bc28fd5aa61.png",price:149.99,description:`『 🌟 』30 MILHÕES DE BOUNTY + RAÇA V4 ALEATÓRIA FULL + SANGUINE ART + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-40",name:"『 🌟 』7 RAÇAS V4 FULL + 10~30 MILHÕES DE BOUNTY + CDK + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/gcVQQSw/c24242ce-ec5d-462c-8eee-7f66d191b530.png",price:199.99,description:`『 🌟 』7 RAÇAS V4 FULL + 10~30 MILHÕES DE BOUNTY + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]},{title:"🎫 GAMEPASS",products:[{id:"gamepass-fruit-notifier",name:"『 📟 』NOTIFICADOR DE FRUTAS",image:"https://i.ibb.co/Ndznkmp8/f7a41493-8eb1-484a-9833-84778714307b.png",price:134.99,description:`『 📟 』NOTIFICADOR DE FRUTAS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-dark-blade",name:"『 🗡️ 』DARK BLADE (YORU)",image:"https://i.ibb.co/9m2kJsQQ/cfdf61c0-6a80-4d7e-b591-bda74c5d11a2.png",price:59.99,description:`『 🗡️ 』DARK BLADE (YORU)

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-2x-money",name:"『 💰 』2X DINHEIRO",image:"https://i.ibb.co/NgdZgZyC/b3aa683a-71da-49d2-8509-2574360ceb47.png",price:22.49,description:`『 💰 』2X DINHEIRO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-2x-mastery",name:"『 🤺 』2X MAESTRIA",image:"https://i.ibb.co/ccYbBSMx/6c75e47f-1c0a-454c-9a44-0d892b07b39c.png",price:22.49,description:`『 🤺 』2X MAESTRIA

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-chest-storage",name:"『 📦 』+1 ESPAÇO NO BAÚ",image:"https://i.ibb.co/HpPSc7Kd/e23f050a-be97-4d89-a354-b28c53779e4b.png",price:19.99,description:`『 📦 』+1 ESPAÇO NO BAÚ

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-2x-drop-chance",name:"『 🎲 』2X CHANCE DE DROPS",image:"https://i.ibb.co/pjpHSc91/8e249d46-4aef-4ca3-9c99-26d526c58ee4.png",price:17.49,description:`『 🎲 』2X CHANCE DE DROPS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-fast-boat",name:"『 ⛵ 』BARCOS RÁPIDOS",image:"https://i.ibb.co/qYnQxfgR/348832e2-e6bb-4c50-847c-30d125fb47f7.png",price:17.49,description:`『 ⛵ 』BARCOS RÁPIDOS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-refund-stats",name:"『 🔄 』REEMBOLSAR STATUS",image:"https://i.ibb.co/vxqR4T4n/9a578395-7d9e-4161-bb9d-89032d6e03ff.png",price:3.74,description:`『 🔄 』REEMBOLSAR STATUS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]},{title:"🍉 FRUTAS PERMANENTES",products:[{id:"perm-dragon",name:"『 🐲 』DRAGON PERMANENTE",image:"https://i.ibb.co/TM6CbrNT/cc48e776-8d39-4d9f-b8fd-c060de027918.png",price:19.9,description:`『 🐲 』DRAGON PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-kitsune",name:"『 🦊 』KITSUNE PERMANENTE",image:"https://i.ibb.co/Xkvyzw2w/8fd3762c-252f-44dc-9574-b4995a98c8f0.png",price:19.9,description:`『 🦊 』KITSUNE PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-yeti",name:"『 ❄️ 』YETI PERMANENTE",image:"https://i.ibb.co/mrwBLxzx/35f1115d-c11d-4cb9-a05b-b3c32bfe7c98.png",price:19.9,description:`『 ❄️ 』YETI PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-tiger",name:"『 🐯 』TIGER PERMANENTE",image:"https://i.ibb.co/Kpv7JRfb/176de39c-953c-42f6-adcb-dbca19ac59da.png",price:19.9,description:`『 🐯 』TIGER PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-spirit",name:"『 👻 』SPIRIT PERMANENTE",image:"https://i.ibb.co/hFDQ45tQ/275feebd-8def-4780-8aca-d3b9bda44c68.png",price:19.9,description:`『 👻 』SPIRIT PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-gas",name:"『 💨 』GAS PERMANENTE",image:"https://i.ibb.co/DfzmVd1s/a0a1f864-5a85-4181-b1a0-bd8f0d24eb2b.png",price:19.9,description:`『 💨 』GAS PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-control",name:"『 🕹️ 』CONTROL PERMANENTE",image:"https://i.ibb.co/vx8DL2rV/072955c1-b259-4a6a-9e3f-a96de73b6e3c.png",price:19.9,description:`『 🕹️ 』CONTROL PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-venom",name:"『 🧪 』VENOM PERMANENTE",image:"https://i.ibb.co/pvsQVB7s/eee3262a-ee85-4f55-929e-bb725d3856b5.png",price:19.9,description:`『 🧪 』VENOM PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-shadow",name:"『 👾 』SHADOW PERMANENTE",image:"https://i.ibb.co/pvsQVB7s/eee3262a-ee85-4f55-929e-bb725d3856b5.png",price:19.9,description:`『 👾 』SHADOW PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-dough",name:"『 🍩 』DOUGH PERMANENTE",image:"https://i.ibb.co/5hp5MxbP/0b262b28-798f-4934-a688-7f0b3ede4422.png",price:19.9,description:`『 🍩 』DOUGH PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-mammoth",name:"『 🦣 』MAMMOTH PERMANENTE",image:"https://i.ibb.co/FdCsYFN/84e629cf-2ff8-4a46-9b11-43b832568e01.png",price:19.9,description:`『 🦣 』MAMMOTH PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-trex",name:"『 🦖 』T-REX PERMANENTE",image:"https://i.ibb.co/LhnnsQC6/5a226b06-2800-4c67-8b05-a0c54b6cbf56.png",price:19.9,description:`『 🦖 』T-REX PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-gravity",name:"『 🪨 』GRAVITY PERMANENTE",image:"https://i.ibb.co/5dyCw0j/08a3bec2-7316-401e-8bf2-60d3edd43d0c.png",price:19.9,description:`『 🪨 』GRAVITY PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-blizzard",name:"『 ☃️ 』BLIZZARD PERMANENTE",image:"https://i.ibb.co/KxMgkg29/20a185ee-5512-4662-a815-78b872a66dae.png",price:19.9,description:`『 ☃️ 』BLIZZARD PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-pain",name:"『 ☠️ 』PAIN PERMANENTE",image:"https://i.ibb.co/tpT8PD4w/21fb1457-a460-4d37-b15f-a3131bfbefbb.png",price:19.9,description:`『 ☠️ 』PAIN PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-rumble",name:"『 ⛈️ 』RUMBLE PERMANENTE",image:"https://i.ibb.co/KcpMcV2B/f0601cc4-6de8-4024-963a-e7dfe18821f9.png",price:19.9,description:`『 ⛈️ 』RUMBLE PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-portal",name:"『 🌀 』PORTAL PERMANENTE",image:"https://i.ibb.co/DgPsWbqc/ad47ce05-f368-426a-85a1-cc0483d6fcea.png",price:19.9,description:`『 🌀 』PORTAL PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-phoenix",name:"『 🔥 』PHOENIX PERMANENTE",image:"https://i.ibb.co/Cs1mMYMF/498e346d-0ef4-4c4d-8898-5a0c397c6573.png",price:19.9,description:`『 🔥 』PHOENIX PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-sound",name:"『 🎶 』SOUND PERMANENTE",image:"https://i.ibb.co/d0GN062s/71ab17dc-b5a6-48a8-8b03-82fc78ca4592.png",price:19.9,description:`『 🎶 』SOUND PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-spider",name:"『 🕷️ 』SPIDER PERMANENTE",image:"https://i.ibb.co/KxYvyB38/755937cd-b479-4555-889e-03fce15b2faf.png",price:19.9,description:`『 🕷️ 』SPIDER PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-magma",name:"『 🌋 』MAGMA PERMANENTE",image:"https://i.ibb.co/x8S904RS/ba9afcf3-f330-4952-a29d-1bb542da298e.png",price:19.9,description:`『 🌋 』MAGMA PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-ghost",name:"『 👨‍🎤 』GHOST PERMANENTE",image:"https://i.ibb.co/1GVczYLd/5afc063a-86c5-4f09-b4f9-c744cb1bed40.png",price:19.9,description:`『 👨‍🎤 』GHOST PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-rubber",name:"『 🥊 』RUBBER PERMANENTE",image:"https://i.ibb.co/vxNyk9rm/ebfef83e-9f53-4899-9147-99ea021d8a1a.png",price:19.9,description:`『 🥊 』RUBBER PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-light",name:"『 ✨ 』LIGHT PERMANENTE",image:"https://i.ibb.co/mCmSN4X0/46e2b8a8-3bb6-4c5d-9861-dc5e9f74cfdc.png",price:19.9,description:`『 ✨ 』LIGHT PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-diamond",name:"『 💎 』DIAMOND PERMANENTE",image:"https://i.ibb.co/C5Jp7zL5/5558f429-664e-47e4-899d-ea6c775fb03a.png",price:19.9,description:`『 💎 』DIAMOND PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-eagle",name:"『 🦅 』EAGLE PERMANENTE",image:"https://i.ibb.co/MDxQxdbb/f79a669e-8ee0-44d3-aac0-879adab4536c.png",price:19.9,description:`『 🦅 』EAGLE PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-dark",name:"『 🌑 』DARK PERMANENTE",image:"https://i.ibb.co/nssZDS0x/7f727251-1b49-4b33-bb55-2bd44e91f4e2.png",price:19.9,description:`『 🌑 』DARK PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-sand",name:"『 ⏳ 』SAND PERMANENTE",image:"https://i.ibb.co/8gXnY32z/0bce80da-df2a-4c8a-9854-57f21882119d.png",price:19.9,description:`『 ⏳ 』SAND PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-ice",name:"『 🧊 』ICE PERMANENTE",image:"https://i.ibb.co/q3dkx3Qm/c0a850b4-254a-4df9-ba5a-5bc6f79ab40e.png",price:19.9,description:`『 🧊 』ICE PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-flame",name:"『 🔥 』FLAME PERMANENTE",image:"https://i.ibb.co/Y4vpVqdw/05c4b16c-d8a8-46e5-9e36-a5018fa43ba9.png",price:19.9,description:`『 🔥 』FLAME PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-spike",name:"『 🌵 』SPIKE PERMANENTE",image:"https://i.ibb.co/9H1CrRmr/7e1313fb-9458-4ede-8b3b-72fb51b27a63.png",price:19.9,description:`『 🌵 』SPIKE PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-smoke",name:"『 ☁️ 』SMOKE PERMANENTE",image:"https://i.ibb.co/tk61Yjd/8cc1d927-179e-4feb-89f9-6e0021932c07.png",price:19.9,description:`『 ☁️ 』SMOKE PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-bomb",name:"『 💣 』BOMB PERMANENTE",image:"https://i.ibb.co/spk7W8Bc/d88ad464-1824-4f3d-8f8c-6fe602004380.png",price:19.9,description:`『 💣 』BOMB PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-spring",name:"『 🌱 』SPRING PERMANENTE",image:"https://i.ibb.co/FdXWK55/dea94660-62b2-4533-87f4-583b12e81895.png",price:19.9,description:`『 🌱 』SPRING PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-blade",name:"『 ⚔️ 』BLADE PERMANENTE",image:"https://i.ibb.co/mVNb2dVV/3edf297d-9fd0-4f9b-8c07-6e960320cbf3.png",price:19.9,description:`『 ⚔️ 』BLADE PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-spin",name:"『 🍃 』SPIN PERMANENTE",image:"https://i.ibb.co/4wh1XTMs/b8f8323e-7d92-40e6-88e1-4bc3cc29ed50.png",price:19.9,description:`『 🍃 』SPIN PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-rocket",name:"『 🚀 』ROCKET PERMANENTE",image:"https://i.ibb.co/vbr0LyS/90367195-cda6-4b47-b0af-348065c60e24.png",price:19.9,description:`『 🚀 』ROCKET PERMANENTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]}];function $(){return o.jsx(T,{categoryName:"BLOX FRUITS",categoryId:"blox-fruits",sections:I})}const Ea=Object.freeze(Object.defineProperty({__proto__:null,BloxFruitsCategory:$,bloxFruitsSections:I},Symbol.toStringTag,{value:"Module"})),C=[{title:"🍀 BRAINROTS ALEATÓRIOS",products:[{id:"steal-random-1",name:"『 🍀 』 1 SECRETO ALEATÓRIO",image:"https://i.ibb.co/39mSsWG5/1.png",price:7.99,description:`『 🍀 』 1 SECRETO ALEATÓRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"steal-random-2",name:"『 🎰 』 SECRETO DE 40M~2B+M/S ALEATÓRIO",image:"https://i.ibb.co/39mSsWG5/1.png",price:29.99,description:`『 🎰 』 SECRETO DE 40M~2B+M/S ALEATÓRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"steal-random-3",name:"『 🎰 』 SECRETO DE 60M~2B+M/S ALEATÓRIO",image:"https://i.ibb.co/39mSsWG5/1.png",price:44.99,description:`『 🎰 』 SECRETO DE 60M~2B+M/S ALEATÓRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"steal-random-4",name:"『 🎰 』 SECRETO DE 70M~2B+M/S ALEATÓRIO",image:"https://i.ibb.co/39mSsWG5/1.png",price:49.99,description:`『 🎰 』 SECRETO DE 70M~2B+M/S ALEATÓRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"steal-random-5",name:"『 🎰 』 SECRETO DE 80M~2B+M/S ALEATÓRIO",image:"https://i.ibb.co/39mSsWG5/1.png",price:54.99,description:`『 🎰 』 SECRETO DE 80M~2B+M/S ALEATÓRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]},{title:"🧠 BRAINROTS",products:[{id:"brainrot-1",name:"『 🕷️ 』 SAMMYNI SPYDERINI - ATÉ 2B +/S",image:"https://i.ibb.co/3mHHYLHk/8f10ca5d-2cab-44f0-a6da-ff79834a5dec.png",price:7.99,description:`『 🕷️ 』 SAMMYNI SPYDERINI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-2",name:"『 🐒 』 DUL DUL DUL - ATÉ 2B +/S",image:"https://i.ibb.co/mgbxyB3/618abec1-dfa3-464e-bd09-b6adfed4e412.png",price:9.99,description:`『 🐒 』 DUL DUL DUL - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-3",name:"『 🌺 』 LAS TRALALERITAS - ATÉ 2B +/S",image:"https://i.ibb.co/fzwxbZ3t/e03f6c4a-73c7-41e9-a6fb-d9e69e0f724b.png",price:9.99,description:`『 🌺 』 LAS TRALALERITAS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-4",name:"『 🐮 』 LA VACCA - ATÉ 2B +/S",image:"https://i.ibb.co/2716hsvf/46a353be-f617-486c-a7cc-7b36861dc07d.png",price:9.99,description:`『 🐮 』 LA VACCA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-5",name:"『 🌀 』 LOS TRALALERITOS - ATÉ 2B +/S",image:"https://i.ibb.co/5XCfhh2w/83d660a4-1137-43d3-9917-d9cb1373e3b5.png",price:9.99,description:`『 🌀 』 LOS TRALALERITOS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-6",name:"『 🪑 』 KARKERKAR KURKUR - ATÉ 2B +/S",image:"https://i.ibb.co/PspndHfP/6c5a5f7b-7333-475b-8f55-9f8196adcd7b.png",price:11.99,description:`『 🪑 』 KARKERKAR KURKUR - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-7",name:"『 🚽 』 JOB JOB JOB SAHUR - ATÉ 2B +/S",image:"https://i.ibb.co/gbnTV5n0/3a8fea55-f059-4fa1-b53a-c40030924436.png",price:14.99,description:`『 🚽 』 JOB JOB JOB SAHUR - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-8",name:"『 🐙 』 GRAIPUSS MEDUSI - ATÉ 2B +/S",image:"https://i.ibb.co/s999cBxh/6007eb7f-8488-47b3-84db-a23078cb9455.png",price:19.99,description:`『 🐙 』 GRAIPUSS MEDUSI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-9",name:"『 💀 』 POT HOTSPOT - ATÉ 2B +/S",image:"https://i.ibb.co/pBKBGdTF/2e7a60f4-25af-4a57-8c05-1b24a50b7f25.png",price:24.99,description:`『 💀 』 POT HOTSPOT - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-10",name:"『 ☠️ 』 MARIACHI CORAZONI - ATÉ 2B +/S",image:"https://i.ibb.co/DDzfV7y9/255e4200-42f9-4489-a731-b6c4f8458ade.png",price:29.99,description:`『 ☠️ 』 MARIACHI CORAZONI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-11",name:"『 🚲 』 MIETETEIRA BICICLETEIRA - ATÉ 2B +/S",image:"https://i.ibb.co/kVKk5jdv/6f6cf4dc-ce42-4f18-91da-9cd7c5d97522.png",price:29.99,description:`『 🚲 』 MIETETEIRA BICICLETEIRA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-12",name:"『 🧑‍🧑‍🧒‍🧒 』 LOS COMBINASIONAS - ATÉ 2B +/S",image:"https://i.ibb.co/gMDfHkd2/d62ce05b-efb4-4757-acdf-1e9290a3265a.png",price:29.99,description:`『 🧑‍🧑‍🧒‍🧒 』 LOS COMBINASIONAS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-13",name:"『 🚲 』 LOS CHICLETEIRAS - ATÉ 2B +/S",image:"https://i.ibb.co/27YxZhvt/a27cece0-e013-4354-82fe-1a9c5cf9701d.png",price:29.99,description:`『 🚲 』 LOS CHICLETEIRAS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-14",name:"『 ☕️ 』 LAS SIS - ATÉ 2B +/S",image:"https://i.ibb.co/5gKDzBR3/4c298c9b-14ac-4906-aa4b-54d469c144f4.png",price:29.99,description:`『 ☕️ 』 LAS SIS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-15",name:"『 🌮 』 LOS MOBILIS - ATÉ 2B +/S",image:"https://i.ibb.co/1W2bKmD/ba590570-93e7-43cf-94e6-d5efe4ce98bd.png",price:29.99,description:`『 🌮 』 LOS MOBILIS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-16",name:"『 🛜 』 LOS NOOO MY HOTSPOTSITOS - ATÉ 2B +/S",image:"https://i.ibb.co/N2hPP2zY/af703154-fc26-40fc-8ca1-2cffa60a790b.png",price:29.99,description:`『 🛜 』 LOS NOOO MY HOTSPOTSITOS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-17",name:"『 🚴‍♂️ 』 CHICLETEIRA BICICLETEIRA - ATÉ 2B +/S",image:"https://i.ibb.co/pv9D13zz/868249e6-ec84-4723-9fc2-8382fb96c37e.png",price:34.99,description:`『 🚴‍♂️ 』 CHICLETEIRA BICICLETEIRA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-18",name:"『 🏠 』 ESOK SEKOLA - ATÉ 2B +/S",image:"https://i.ibb.co/BK7pbSXt/dd91796d-ba64-4c14-845c-4c0ad3724d4f.png",price:34.99,description:`『 🏠 』 ESOK SEKOLA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-19",name:"『 🔢 』 67! - ATÉ 2B +/S",image:"https://i.ibb.co/4RQ3TRVq/9d9fd10e-d779-4e3a-a655-d4a537964ce6.png",price:34.99,description:`『 🔢 』 67! - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-20",name:"『 🌮 』 NOOO MY HOTSPOT - ATÉ 2B +/S",image:"https://i.ibb.co/GmTKVjz/7d337293-6d26-4b6d-9f77-6363bbdac010.png",price:39.99,description:`『 🌮 』 NOOO MY HOTSPOT - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-21",name:"『 🥤 』 SWAG SODA - ATÉ 2B +/S",image:"https://i.ibb.co/RkW9HM1n/f3171c40-655e-4a60-81ac-93ff62853a14.png",price:39.99,description:`『 🥤 』 SWAG SODA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-22",name:"『 🐊 』 QUESADILLA CROCODILA - ATÉ 2B +/S",image:"https://i.ibb.co/C3s61NGp/5ef29b48-a73e-477f-b062-ad0d6946da21.png",price:49.99,description:`『 🐊 』 QUESADILLA CROCODILA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-23",name:"『 🎃 』 LOS SPOOKY COMBINASIOANS - ATÉ 2B +/S",image:"https://i.ibb.co/WNt1nGV3/38e9ea7d-8ecb-4af9-bcb5-94b226b82db2.png",price:49.99,description:`『 🎃 』 LOS SPOOKY COMBINASIOANS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-24",name:"『 🚴‍♀️ 』 CHICLETEIRINA BICICLETEIRINA - ATÉ 2B +/S",image:"https://i.ibb.co/JFBL5D8v/96d9ae33-2660-459d-94ea-58af32d4d802.png",price:49,description:`『 🚴‍♀️ 』 CHICLETEIRINA BICICLETEIRINA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-25",name:"『 🪸 』 LA GRANDE COMBINASSION - ATÉ 2B +/S",image:"https://i.ibb.co/5xRcZGmG/3c89a978-7d9d-40bc-aa92-1016ae3a6644.png",price:49.99,description:`『 🪸 』 LA GRANDE COMBINASSION - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-26",name:"『 🌎 』 LA EXTINCT GRANDE - ATÉ 2B +/S",image:"https://i.ibb.co/RGHFLmby/9a388571-2958-4e91-9bb0-bdac3be12e84.png",price:49.99,description:`『 🌎 』 LA EXTINCT GRANDE - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-27",name:"『 🎃 』 LA GRANDE SPOOKY - ATÉ 2B +/S",image:"https://i.ibb.co/Rp6hNL3Y/5fb9aa02-0e92-4b0b-ba8a-3cecd8e05450.png",price:49,description:`『 🎃 』 LA GRANDE SPOOKY - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-28",name:"『 👯‍♀️ 』 LOS BROS - ATÉ 2B +/S",image:"https://i.ibb.co/0pDk7zb1/bc076848-f546-4641-bcbf-35ea935f3844.png",price:59.99,description:`『 👯‍♀️ 』 LOS BROS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-29",name:"『 🌮 』 QUESADILLO VAMPIRO - ATÉ 2B +/S",image:"https://i.ibb.co/bg5SL32t/9a2a5441-ab6a-47a4-b91d-24eb60441cf9.png",price:59.99,description:`『 🌮 』 QUESADILLO VAMPIRO - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-30",name:"『 🐶 』 LOS PUGGIES - ATÉ 2B +/S",image:"https://i.ibb.co/Q3nJhdmh/956be6f0-6b0e-4108-9cdb-2eea2a34c954.png",price:59.99,description:`『 🐶 』 LOS PUGGIES - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-31",name:"『 🎃 』 LOS SPOOKY COMBINASIONAS - ATÉ 2B +/S",image:"https://i.ibb.co/V0dyG4f7/6e02007c-a19f-4d2b-8873-049c69835f27.png",price:59.99,description:`『 🎃 』 LOS SPOOKY COMBINASIONAS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-32",name:"『 🚲 』 TACORITA BICICLETA - ATÉ 2B +/S",image:"https://i.ibb.co/7xZBkfbk/73417cf9-c3f1-407f-aa93-4d58f1646ee5.png",price:64.99,description:`『 🚲 』 TACORITA BICICLETA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-33",name:"『 💀 』 LOS HOTSPOTSITOS - ATÉ 2B +/S",image:"https://i.ibb.co/fzMF15xM/d73b79bc-0885-494d-83b8-29e2228cc13d.png",price:79.99,description:`『 💀 』 LOS HOTSPOTSITOS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-34",name:"『 🧠 』 SPAGHETTI TUALETTI - ATÉ 2B +/S",image:"https://i.ibb.co/V0MZM04S/b8d0450a-d65b-439b-a200-c477cc6d50b7.png",price:79.99,description:`『 🧠 』 SPAGHETTI TUALETTI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-35",name:"『 🦈 』 EVILEDON - ATÉ 2B +/S",image:"https://i.ibb.co/GvkwDhmL/4c0bcaed-e1f3-468e-8f5c-37f4bc853baa.png",price:79.99,description:`『 🦈 』 EVILEDON - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-36",name:"『 🐋 』 ORCALEDON - ATÉ 2B +/S",image:"https://i.ibb.co/YF1BRGS0/a53b8450-08bd-475a-b045-40519038c566.png",price:79.99,description:`『 🐋 』 ORCALEDON - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-37",name:"『 🌶️ 』 CHILLIN CHILI - ATÉ 2B +/S",image:"https://i.ibb.co/j9XZw21D/fd15d363-6b3a-427c-8fd4-cea1a2e0fd9d.png",price:89.99,description:`『 🌶️ 』 CHILLIN CHILI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-38",name:"『 🚽 』 LOS SPAGHETTIS - ATÉ 2B +/S",image:"https://i.ibb.co/rGw7qLth/d853bda4-1d10-403f-ab3b-12c608bcbc9a.png",price:99.99,description:`『 🚽 』 LOS SPAGHETTIS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-39",name:"『 🍟 』 CHIPSO AND QUESO - ATÉ 2B +/S",image:"https://i.ibb.co/fVCHn6Vk/1bcb2393-e6ea-405e-8537-52000b17fb80.png",price:99.99,description:`『 🍟 』 CHIPSO AND QUESO - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-40",name:"『 🐶 』 MONEY MONEY PUGGY - ATÉ 2B +/S",image:"https://i.ibb.co/67dY4LFx/e7859a7c-b34b-4746-96b1-bbbd59b1ad61.png",price:99.99,description:`『 🐶 』 MONEY MONEY PUGGY - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-41",name:"『 🦖 』 NUCLEARO DINOSSAURO - ATÉ 2B +/S",image:"https://i.ibb.co/LDyNVqQJ/7ddcafe3-e612-420c-855c-c58cb275b1b1.png",price:99.99,description:`『 🦖 』 NUCLEARO DINOSSAURO - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-42",name:"『 🧩 』 KETUPAT KEPAT - ATÉ 2B +/S",image:"https://i.ibb.co/NnLKByRx/b31dabd6-e09e-4eec-afa4-4ef5aa8d0ea9.png",price:124.99,description:`『 🧩 』 KETUPAT KEPAT - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-43",name:"『 🚽 』 LA SECRET COMBINASION - ATÉ 2B +/S",image:"https://i.ibb.co/1JGPcPhq/4cf60d96-f800-4f44-af4a-164f47132d1c.png",price:129.99,description:`『 🚽 』 LA SECRET COMBINASION - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-44",name:"『 💠 』 SPOOKY AND PUMPKY - ATÉ 2B +/S",image:"https://i.ibb.co/cSp9z3c6/cdc68b49-0664-4b9e-bf28-9e06ceaf34a2.png",price:139.99,description:`『 💠 』 SPOOKY AND PUMPKY - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-45",name:"『 🌭 』 KETCHURU AND MUSTURU - ATÉ 2B +/S",image:"https://i.ibb.co/jPyr9Ttg/f994127b-21a5-48ba-bf3b-46e7c7845c2c.png",price:149.99,description:`『 🌭 』 KETCHURU AND MUSTURU - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-46",name:"『 🌮 』 LOS TACORITAS - ATÉ 2B +/S",image:"https://i.ibb.co/Z6nLwg9B/451ebe0a-783c-4722-af6e-79e720cc2e10.png",price:149.99,description:`『 🌮 』 LOS TACORITAS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-47",name:"『 🏚️ 』 LA CASA BOO - ATÉ 2B +/S",image:"https://i.ibb.co/bRjMQsrR/fe975d53-cddc-4a9d-9351-713db28af867.png",price:179.99,description:`『 🏚️ 』 LA CASA BOO - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-48",name:"『 🇲🇽 』 LA TACO COMBINASION - ATÉ 2B +/S",image:"https://i.ibb.co/N6kR8Dpp/1ce3390a-790d-49c7-8426-deb2a0cb7723.png",price:179.99,description:`『 🇲🇽 』 LA TACO COMBINASION - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-49",name:"『 👻 』 SPOOKY AND PUMPKY - ATÉ 2B +/S",image:"https://i.ibb.co/WpkS5KLD/f7917151-9433-4028-9d20-233994e86c3a.png",price:179.99,description:`『 👻 』 SPOOKY AND PUMPKY - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-50",name:"『 🦈 』 TRALALEDON - ATÉ 2B +/S",image:"https://i.ibb.co/673zK7Md/15c37753-de1c-45de-bae8-a13dda288935.png",price:189.99,description:`『 🦈 』 TRALALEDON - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-51",name:"『 🧂 』 GARAMA AND MADUNDUNG - ATÉ 2B +/S",image:"https://i.ibb.co/p6GpDnG7/cf9250a2-20ea-4192-8624-aba8ef9621b5.png",price:189.99,description:`『 🧂 』 GARAMA AND MADUNDUNG - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-52",name:"『 ⏰ 』 TICTAC SAHUR - ATÉ 2B +/S",image:"https://i.ibb.co/pBmPWGMn/421749ec-1540-4c47-9681-7cc6a7bc94dc.png",price:199.99,description:`『 ⏰ 』 TICTAC SAHUR - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-53",name:"『 👥 』 LOS PRIMOS - ATÉ 2B +/S",image:"https://i.ibb.co/M5yvVfC9/82d1f4ad-bbb6-45dc-9d54-8e568771252c.png",price:199.99,description:`『 👥 』 LOS PRIMOS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-54",name:"『 🥛 』 FRAGRAMA AND CHOCRAMA - ATÉ 2B +/S",image:"https://i.ibb.co/hRfr86kk/fa82d421-898f-4b2a-bba4-162b2b95a9bc.png",price:299.99,description:`『 🥛 』 FRAGRAMA AND CHOCRAMA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-55",name:"『 🍟 』 BURGURO AND FRYURO - ATÉ 2B +/S",image:"https://i.ibb.co/v4VkBtm8/04117f3b-1f66-4eda-ac19-7f7590e67564.png",price:499.99,description:`『 🍟 』 BURGURO AND FRYURO - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-56",name:"『 ⚓️ 』 CAPITANO MOBY - ATÉ 2B +/S",image:"https://i.ibb.co/vxmQ3jJs/9b5a578e-d9f7-45f2-9e3c-fc136ca02890.png",price:499.99,description:`『 ⚓️ 』 CAPITANO MOBY - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrot-57",name:"『 🐉 』 DRAGON CANNELONI - ATÉ 2B +/S",image:"https://i.ibb.co/XZZDCBPv/34f28e90-d72a-4ac0-b228-da30442f8a2c.png",price:899.99,description:`『 🐉 』 DRAGON CANNELONI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]},{title:"🎫 GAMEPASS",products:[{id:"gamepass-1",name:"『 ⬛️ 』 BLOCOS DA SORTE: SECRET",image:"https://i.ibb.co/DDhw1gSB/893d90d9-0b86-4177-86f1-8c6cabd57b3a.png",price:119.99,description:`『 ⬛️ 』 BLOCOS DA SORTE: SECRET

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-2",name:"『 🟦 』 BLOCOS DA SORTE: GOD",image:"https://i.ibb.co/23RvPC5h/606141a3-372a-406e-bd18-09abb42cbc1d.png",price:29.99,description:`『 🟦 』 BLOCOS DA SORTE: GOD

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-3",name:"『 🟥 』 BLOCOS DA SORTE: MYTHIC",image:"https://i.ibb.co/cj9LXvV/2c523531-7304-4ad8-b1ca-13a34c60fae0.png",price:8.99,description:`『 🟥 』 BLOCOS DA SORTE: MYTHIC

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-4",name:"『 🎃 』 BLOCOS DA SORTE: ASSUSTADOR",image:"https://i.ibb.co/zT23fjKk/f5aa8c74-efbc-42a8-aa0c-58d008d43ccf.png",price:14.99,description:`『 🎃 』 BLOCOS DA SORTE: ASSUSTADOR

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-5",name:"『 🌮 』 BLOCOS DA SORTE: TACO",image:"https://i.ibb.co/hRvPPPPf/6ea2179d-3cfe-4df7-8830-5bc233df35ab.png",price:7.99,description:`『 🌮 』 BLOCOS DA SORTE: TACO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-6",name:"『 🟥 』 OS BLOCOS DA SORTE",image:"https://i.ibb.co/dsr7Lm6D/68b47ea9-7c07-4979-a961-38954cd90147.png",price:17.99,description:`『 🟥 』 OS BLOCOS DA SORTE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-7",name:"『 🔨 』 BAN HAMMER",image:"https://i.ibb.co/8n5LCjs1/5678de45-34a9-4e71-aa3f-2cd216737e3c.png",price:74.99,description:`『 🔨 』 BAN HAMMER

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-8",name:"『 🔫 』 LASER GUN",image:"https://i.ibb.co/MxJSRLZN/7434868a-8bea-4afb-a0e4-510a85d30a83.png",price:37.99,description:`『 🔫 』 LASER GUN

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-9",name:"『 🏆 』 VIP",image:"https://i.ibb.co/7x6QP07N/91def3d9-1851-4db0-9c54-2655277f3b79.png",price:18.99,description:`『 🏆 』 VIP

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-10",name:"『 🌈 』 FLYING CARPET",image:"https://i.ibb.co/6RZMbScW/30cc4f20-6ac0-42dd-9257-179a9c213a25.png",price:18.99,description:`『 🌈 』 FLYING CARPET

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-11",name:"『 💸 』 2X MONEY",image:"https://i.ibb.co/B2DNLXtB/ca66e4c6-9657-4634-87e3-e8a20a856baa.png",price:14.99,description:`『 💸 』 2X MONEY

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-12",name:"『 ✋ 』 BLACKHOLE SLAP",image:"https://i.ibb.co/0yVR63pC/ea6e8d4c-c808-4c8b-bb0f-bb3f7e7de63d.png",price:9.99,description:`『 ✋ 』 BLACKHOLE SLAP

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabam sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]}];function aa(){return o.jsx(T,{categoryName:"STEAL A BRAINROT",categoryId:"steal-brainrot",sections:C})}const Ra=Object.freeze(Object.defineProperty({__proto__:null,StealBrainrotCategory:aa,stealBrainrotSections:C},Symbol.toStringTag,{value:"Module"})),a=r=>`${r}

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`,D=[{title:"🐾 PETS",products:[{id:"grow-pet-1",name:"『 🐾 』 PET ALEATÓRIO COM ANOS 45+",image:"https://i.ibb.co/PZSGyfSy/be9fa5d1-1031-413e-97de-7aaf15246182.png",price:3.99,description:a("『 🐾 』 PET ALEATÓRIO COM ANOS 45+")},{id:"grow-pet-2",name:"『 🐾 』 PET ALEATÓRIO COM ANOS 60+",image:"https://i.ibb.co/PZSGyfSy/be9fa5d1-1031-413e-97de-7aaf15246182.png",price:4.99,description:a("『 🐾 』 PET ALEATÓRIO COM ANOS 60+")},{id:"grow-pet-3",name:"『 🐾 』 PET ALEATÓRIO COM ANOS 75~80",image:"https://i.ibb.co/PZSGyfSy/be9fa5d1-1031-413e-97de-7aaf15246182.png",price:5.49,description:a("『 🐾 』 PET ALEATÓRIO COM ANOS 75~80")},{id:"grow-pet-4",name:"『 🐾 』 PET ALEATÓRIO COM ANOS 75+",image:"https://i.ibb.co/PZSGyfSy/be9fa5d1-1031-413e-97de-7aaf15246182.png",price:5.99,description:a("『 🐾 』 PET ALEATÓRIO COM ANOS 75+")},{id:"grow-pet-5",name:"『 🐾 』 PET ALEATÓRIO PREMIUM",image:"https://i.ibb.co/PZSGyfSy/be9fa5d1-1031-413e-97de-7aaf15246182.png",price:5.99,description:a("『 🐾 』 PET ALEATÓRIO PREMIUM")},{id:"grow-pet-6",name:"『 🦊 』 RED FOX",image:"https://i.ibb.co/Z6Vdk7f6/3d579c43-89b5-4a97-a0a2-89e75a75280f.png",price:7.99,description:a("『 🦊 』 RED FOX")},{id:"grow-pet-7",name:"『 🐼 』 RED PANDA",image:"https://i.ibb.co/dwkxY1Cq/daf55387-0a2d-4f92-a728-953dfc6d84e0.png",price:8.99,description:a("『 🐼 』 RED PANDA")},{id:"grow-pet-8",name:"『 🦊 』 KITSUNE CORRUPTED",image:"https://i.ibb.co/Q7L4GFrS/21511d43-2a74-438b-84c2-f9b87862a72e.png",price:9.99,description:a("『 🦊 』 KITSUNE CORRUPTED")},{id:"grow-pet-9",name:"『 🐼 』 FRENCH FRY FERRET",image:"https://i.ibb.co/m50s9cGf/e257bccb-4114-46fe-a516-a9443ef2f26b.png",price:9.99,description:a("『 🐼 』 FRENCH FRY FERRET")},{id:"grow-pet-10",name:"『 🦉 』 OWL",image:"https://i.ibb.co/rfXRb3Tp/2e1f8029-20df-42b6-8c90-1d32be70e049.png",price:9.99,description:a("『 🦉 』 OWL")},{id:"grow-pet-11",name:"『 🦉 』 NIGHT OWL",image:"https://i.ibb.co/SXLg1s7K/62cdbac2-45d5-4fed-9548-5d8be42abe97.png",price:9.99,description:a("『 🦉 』 NIGHT OWL")},{id:"grow-pet-12",name:"『 🦉 』 COOKED OWL",image:"https://i.ibb.co/zHHGMtkP/cce9b207-22ab-49c4-8309-552edd4dc2c4.png",price:9.99,description:a("『 🦉 』 COOKED OWL")},{id:"grow-pet-13",name:"『 🐔 』 CHICKEN ZOMBIE",image:"https://i.ibb.co/WNYpcxp7/bfad3264-f9bc-4ea2-b4bc-a5411d4fa9ab.png",price:9.99,description:a("『 🐔 』 CHICKEN ZOMBIE")},{id:"grow-pet-14",name:"『 🦅 』 PHOENIX",image:"https://i.ibb.co/TMGcNjjB/06afcbf1-d633-4ef4-a0a8-3fb038c63563.png",price:9.99,description:a("『 🦅 』 PHOENIX")},{id:"grow-pet-15",name:"『 🦖 』 T-REX",image:"https://i.ibb.co/gLwv3Rxk/6512266c-907d-4ca6-8dab-27b106387ca8.png",price:10.99,description:a("『 🦖 』 T-REX")},{id:"grow-pet-16",name:"『 ⚡️ 』 RAIJU",image:"https://i.ibb.co/CpgyL2bG/f76475a0-b326-49ff-8f5c-d4cca2486af4.png",price:11.99,description:a("『 ⚡️ 』 RAIJU")},{id:"grow-pet-17",name:"『 🐅 』 TIGER",image:"https://i.ibb.co/JwgPsCqn/d85d082d-2d90-40bb-8eeb-422913ccb34d.png",price:12.99,description:a("『 🐅 』 TIGER")},{id:"grow-pet-18",name:"『 🦜 』 SCARLET MACAW",image:"https://i.ibb.co/1Y0N0D38/4d2adf8e-8e70-48af-8a90-8c9429e1c6cc.png",price:13.99,description:a("『 🦜 』 SCARLET MACAW")},{id:"grow-pet-19",name:"『 🐝 』 DRAGON FLY",image:"https://i.ibb.co/fd1kH59D/c7832662-a4a7-437e-9144-6b7dac220696.png",price:14.99,description:a("『 🐝 』 DRAGON FLY")},{id:"grow-pet-20",name:"『 🐝 』 QUEEN BEE",image:"https://i.ibb.co/SwpXqTKT/a462c8bb-3879-48f6-8ada-a44b4c60aee7.png",price:14.99,description:a("『 🐝 』 QUEEN BEE")},{id:"grow-pet-21",name:"『 🐈‍⬛ 』 MOON CAT",image:"https://i.ibb.co/C5Qwjqxy/aba9ce52-107d-42f3-95de-c8cbadd5dc43.png",price:14.99,description:a("『 🐈‍⬛ 』 MOON CAT")},{id:"grow-pet-22",name:"『 🦞 』 LAGOSTA",image:"https://i.ibb.co/nN63hsZR/ad637b74-5d63-4986-8ddf-b681f6220258.png",price:14.99,description:a("『 🦞 』 LAGOSTA")},{id:"grow-pet-23",name:"『 🦆 』 GOLDEN GOOSE",image:"https://i.ibb.co/SDzx6kSp/7e80c2cc-e6c3-44ea-b203-0a37ec7888c8.png",price:14.99,description:a("『 🦆 』 GOLDEN GOOSE")},{id:"grow-pet-24",name:"『 🦅 』 GRIFFIN",image:"https://i.ibb.co/QjnqMwsy/60d99f71-b19e-4a9d-8698-bcd1450e6306.png",price:14.99,description:a("『 🦅 』 GRIFFIN")},{id:"grow-pet-25",name:"『 🦏 』 ANKYLOSAURUS",image:"https://i.ibb.co/BH5Kry4z/cb32bd0f-2401-4e61-afd0-d977ccb3b3fc.png",price:15.99,description:a("『 🦏 』 ANKYLOSAURUS")},{id:"grow-pet-26",name:"『 🦅 』 COCKATRICE",image:"https://i.ibb.co/gMtPg8Qy/2737cfd5-0c66-40ed-b265-16ac8a0a85f5.png",price:16.99,description:a("『 🦅 』 COCKATRICE")},{id:"grow-pet-27",name:"『 🐙 』 MIMIC OCTOPUS",image:"https://i.ibb.co/ZRXyNxNW/0a1280d1-84ca-4402-b688-1ee2c3b7c37b.png",price:19.99,description:a("『 🐙 』 MIMIC OCTOPUS")},{id:"grow-pet-28",name:"『 🦕 』 BRONTOSAURUS",image:"https://i.ibb.co/GvdrG43t/56a8b841-3da5-4446-bd50-72243499936c.png",price:19.99,description:a("『 🦕 』 BRONTOSAURUS")},{id:"grow-pet-29",name:"『 🦏 』 SPINOSAURUS",image:"https://i.ibb.co/LDtswZnB/ec1eaa7e-7d04-4515-9a7a-eb6ac747be38.png",price:19.99,description:a("『 🦏 』 SPINOSAURUS")},{id:"grow-pet-30",name:"『 🪲 』 LOUVA A DEUS",image:"https://i.ibb.co/sJp0kF4g/ae7256ed-2860-4283-8dee-8b5475d32a46.png",price:19.99,description:a("『 🪲 』 LOUVA A DEUS")},{id:"grow-pet-31",name:"『 🦢 』 SWAN",image:"https://i.ibb.co/rRFtvzfF/40dad1fd-f163-4cb2-a78f-c9e4ea2a9128.png",price:19.99,description:a("『 🦢 』 SWAN")},{id:"grow-pet-32",name:"『 🦕 』 DILOPHOSAURUS",image:"https://i.ibb.co/bgCWVT5b/5007d624-124d-47a1-ac94-26fe1cdc804d.png",price:19.99,description:a("『 🦕 』 DILOPHOSAURUS")},{id:"grow-pet-33",name:"『 🦋 』 BUTTERFLY",image:"https://i.ibb.co/C57ydwyX/96469bdf-3b64-40fc-b41f-4ef9e212bbcc.png",price:29.99,description:a("『 🦋 』 BUTTERFLY")},{id:"grow-pet-34",name:"『 🐘 』 ELEPHANT",image:"https://i.ibb.co/rGnLttyt/33b6c99c-e2d2-4a23-918a-49d9064c373b.png",price:29.99,description:a("『 🐘 』 ELEPHANT")},{id:"grow-pet-35",name:"『 🐞 』 DISCOO BEE",image:"https://i.ibb.co/ZpTmQTRv/447fc816-5c6f-48c1-a574-c1e0adc079da.png",price:39.99,description:a("『 🐞 』 DISCOO BEE")},{id:"grow-pet-36",name:"『 🎃 』 HEADLESS HORSEMAN",image:"https://i.ibb.co/PzMYFfw5/430513b4-7ed4-48fe-89eb-b6ffc1a21892.png",price:39.99,description:a("『 🎃 』 HEADLESS HORSEMAN")},{id:"grow-pet-37",name:"『 🦊 』 FENNEC FOX",image:"https://i.ibb.co/cXKGWT45/61c37ad1-0cf9-4c4b-80c9-3ff41fdb5fdd.png",price:49.99,description:a("『 🦊 』 FENNEC FOX")},{id:"grow-pet-38",name:"『 🦊 』 KITSUNE",image:"https://i.ibb.co/Zzp99T6K/393dddb2-1548-4c62-b4cd-6e434fe6e757.png",price:109.99,description:a("『 🦊 』 KITSUNE")},{id:"grow-pet-39",name:"『 🦊 』 RACCOON",image:"https://i.ibb.co/GfXZK5yB/c7073633-6fab-4b32-b2cc-3865c388ad03.png",price:129.99,description:a("『 🦊 』 RACCOON")},{id:"grow-pet-40",name:"『 🎠 』 GHOSTLY HEADLESS HORSEMAN",image:"https://i.ibb.co/KzqWNd8T/b21894da-3d00-4f18-942b-eb50bd8b4c1a.png",price:199.99,description:a("『 🎠 』 GHOSTLY HEADLESS HORSEMAN")},{id:"grow-pet-41",name:"『 🐙 』 MIMIC OCTOPUS MEGA",image:"https://i.ibb.co/0V8cFMW2/01105b8a-b2c9-4a35-878b-d6023092c0fc.png",price:59.99,description:a("『 🐙 』 MIMIC OCTOPUS MEGA")},{id:"grow-pet-42",name:"『 🦖 』 T-REX RAINBOW",image:"https://i.ibb.co/tw873tXd/e502ee92-3000-4381-a1e0-14bf9d94c21b.png",price:39.99,description:a("『 🦖 』 T-REX RAINBOW")},{id:"grow-pet-43",name:"『 🐝 』 DRAGON FLY RAINBOW",image:"https://i.ibb.co/fd1kH59D/c7832662-a4a7-437e-9144-6b7dac220696.png",price:49.99,description:a("『 🐝 』 DRAGON FLY RAINBOW")},{id:"grow-pet-44",name:"『 🐙 』 MIMIC OCTOPUS RAINBOW",image:"https://i.ibb.co/8gRyvb8D/33d19666-1b60-48e0-b043-df53052fe305.png",price:99.99,description:a("『 🐙 』 MIMIC OCTOPUS RAINBOW")},{id:"grow-pet-45",name:"『 🐾 』 PET ALETÓRIO MEGA",image:"https://i.ibb.co/rDYnx5f/c422244d-1d37-448b-a4ca-77b6ca2de24f.png",price:49.99,description:a("『 🐾 』 PET ALETÓRIO MEGA")},{id:"grow-pet-46",name:"『 🐾 』 PET ALEATÓRIO RAINBOW",image:"https://i.ibb.co/rDYnx5f/c422244d-1d37-448b-a4ca-77b6ca2de24f.png",price:14.99,description:a("『 🐾 』 PET ALEATÓRIO RAINBOW")},{id:"grow-pet-47",name:"『 🐾 』 PET MITICAL 10K",image:"https://i.ibb.co/rDYnx5f/c422244d-1d37-448b-a4ca-77b6ca2de24f.png",price:14.99,description:a("『 🐾 』 PET MITICAL 10K")},{id:"grow-pet-48",name:"『 🐾 』 PET ALETÓRIO HUGE",image:"https://i.ibb.co/rDYnx5f/c422244d-1d37-448b-a4ca-77b6ca2de24f.png",price:19.99,description:a("『 🐾 』 PET ALETÓRIO HUGE")}]},{title:"💰 MOEDAS",products:[{id:"grow-coins-1",name:"『 💸 』 DINHEIRO GROW A GARDEN (3SX)",image:"https://i.ibb.co/D20LPGg/bc3f4ae8-4508-4211-8f3e-a06bab96002d.png",price:3.99,description:a("『 💸 』 DINHEIRO GROW A GARDEN (3SX)")},{id:"grow-coins-2",name:"『 💸 』 HONEYSUCKLE 744T",image:"https://i.ibb.co/B5XnyVnm/f4e01789-e061-4e05-b792-8afcea85e81e.png",price:3.99,description:a("『 💸 』 HONEYSUCKLE 744T")},{id:"grow-coins-3",name:"『 💸 』 CANDY 837T",image:"https://i.ibb.co/vCqK82kv/b7bc6cea-9c4e-4ffb-b6dc-82b97685b27f.png",price:3.99,description:a("『 💸 』 CANDY 837T")},{id:"grow-coins-4",name:"『 💸 』 5000B - 6000B",image:"https://i.ibb.co/D20LPGg/bc3f4ae8-4508-4211-8f3e-a06bab96002d.png",price:4.99,description:a("『 💸 』 5000B - 6000B")},{id:"grow-coins-5",name:"『 💸 』 13000B - 14000B",image:"https://i.ibb.co/D20LPGg/bc3f4ae8-4508-4211-8f3e-a06bab96002d.png",price:7.99,description:a("『 💸 』 13000B - 14000B")},{id:"grow-coins-6",name:"『 💸 』 39000B - 40000B",image:"https://i.ibb.co/D20LPGg/bc3f4ae8-4508-4211-8f3e-a06bab96002d.png",price:9.99,description:a("『 💸 』 39000B - 40000B")}]},{title:"🎫 GAMEPASS",products:[{id:"grow-gamepass-1",name:"『 🎫 』 PASSE DE TEMPORADA",image:"https://i.ibb.co/fV8t70jX/8707c5c2-7ebe-4fcd-9137-a413d92a7d12.png",price:36.99,description:a("『 🎫 』 PASSE DE TEMPORADA")},{id:"grow-gamepass-2",name:"『 🥚 』 OVO SAFARI PREMIUM! 1x",image:"https://i.ibb.co/v6rFLFhN/59ae4435-d983-4768-baa0-f85c3f8afd06.png",price:7.99,description:a("『 🥚 』 OVO SAFARI PREMIUM! 1x")},{id:"grow-gamepass-3",name:"『 🥚 』 OVO SAFARI PREMIUM! 3x",image:"https://i.ibb.co/v6rFLFhN/59ae4435-d983-4768-baa0-f85c3f8afd06.png",price:21.99,description:a("『 🥚 』 OVO SAFARI PREMIUM! 3x")},{id:"grow-gamepass-4",name:"『 🥚 』 OVO SAFARI PREMIUM! 10x",image:"https://i.ibb.co/v6rFLFhN/59ae4435-d983-4768-baa0-f85c3f8afd06.png",price:62.99,description:a("『 🥚 』 OVO SAFARI PREMIUM! 10x")}]}];function oa(){return o.jsx(T,{categoryName:"GROW A GARDEN",categoryId:"grow-a-garden",sections:D})}const fa=Object.freeze(Object.defineProperty({__proto__:null,GrowAGardenCategory:oa,growAGardenSections:D},Symbol.toStringTag,{value:"Module"})),ea=[{id:"mystery-box-1",name:"『 🎁 』CAIXA DE ROBUX - ATÉ 50.000",image:"https://i.ibb.co/1txGBdyx/image.png",price:9.9,description:`『 🎁 』CAIXA DE ROBUX - ATÉ 50.000

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"mystery-box-2",name:"『 🎁 』CAIXA DE ROBUX - ATÉ 100.000",image:"https://i.ibb.co/Q7RpFtLs/image.png",price:15.9,description:`『 🎁 』CAIXA DE ROBUX - ATÉ 100.000

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-1",name:"『 💵 』 100 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:4.99,description:`『 💵 』 100 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-2",name:"『 💵 』 200 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:9.99,description:`『 💵 』 200 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-3",name:"『 💵 』 300 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:14.99,description:`『 💵 』 300 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-4",name:"『 💵 』 400 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:19.99,description:`『 💵 』 400 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-5",name:"『 💵 』 500 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:24.99,description:`『 💵 』 500 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-6",name:"『 💵 』 600 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:29.99,description:`『 💵 』 600 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-7",name:"『 💵 』 700 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:14.99,description:`『 💵 』 700 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-8",name:"『 💵 』 800 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:39.99,description:`『 💵 』 800 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-9",name:"『 💵 』 900 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:44.99,description:`『 💵 』 900 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-10",name:"『 💵 』 1000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:49.99,description:`『 💵 』 1000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-11",name:"『 💵 』 2000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:99.99,description:`『 💵 』 2000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-12",name:"『 💵 』 3000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:149.99,description:`『 💵 』 3000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-13",name:"『 💵 』 4000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:199.99,description:`『 💵 』 4000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-14",name:"『 💵 』 5000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:249.99,description:`『 💵 』 5000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-15",name:"『 💵 』 6000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:299.99,description:`『 💵 』 6000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-16",name:"『 💵 』 7000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:349.99,description:`『 💵 』 7000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-17",name:"『 💵 』 8000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:399.99,description:`『 💵 』 8000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-18",name:"『 💵 』 9000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:449.99,description:`『 💵 』 9000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-19",name:"『 💵 』 10000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:499.99,description:`『 💵 』 10000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-20",name:"『 💵 』 20000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:999.99,description:`『 💵 』 20000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-21",name:"『 💵 』 30000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:1499.99,description:`『 💵 』 30000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-22",name:"『 💵 』 40000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:1999.99,description:`『 💵 』 40000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-23",name:"『 💵 』 50000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:2499.99,description:`『 💵 』 50000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}],sa=[{id:"lvmax-godhuman-frutas-lendarias",name:"👊 LVMAX + GODHUMAN + FRUTAS LENDÁRIAS E ITENS ALEATÓRIOS ⭐🍎",image:"927d169f-93b1-483a-ba38-d6fe6c4d4ddd.png",originalPrice:13.98,price:9.98,discount:29,description:"Conta completa com level máximo e Godhuman desbloqueado! Inclui frutas lendárias aleatórias no inventário e diversos itens especiais. Perfeito para quem quer começar dominando o jogo!"},{id:"lvmax-ghm-sanguine-art",name:"👊 LVMAX + GHM + SANGUINE ART🩸 + FRUTAS E ITENS 🍎",image:"3395396b-5f3f-4652-ac87-3c18cfa28e3a.png",price:42.97,description:"Level Máximo garantido com Godhuman 100% e o poderoso Sanguine Art! Inclui CDK 70%, frutas aleatórias e itens especiais. Uma conta premium para jogadores que buscam o máximo poder!"},{id:"lvmax-ghm-sanguine-v4",name:"👊 LVMAX + GHM + SANGUINE ART🩸 + V4 RANDOM FULL + FRUTAS E ITENS 🍎",image:"6ba91564-0a49-49bd-ac90-13c2eb051441.png",price:57.98,description:"Pacote completo com Level Máximo, Godhuman, Sanguine Art e V4 Full aleatório! Conta preparada para dominar qualquer desafio com frutas e itens premium inclusos."},{id:"level-max-godhuman-soul-guitar",name:"LEVEL MÁX + GODHUMAN + SOUL GUITAR",image:"5af3b28a-4c19-448d-ac1d-3fc3d7d60aaa.png",price:13.98,description:"Conta com level máximo, Godhuman completo e a Soul Guitar! Arma lendária perfeita para combos devastadores. Inclui frutas e itens aleatórios no inventário."},{id:"lvl-max-godhuman-cdk",name:"⭐LVL MAX + GODHUMAN👊 + CDK⚔️+ FRUTAS E ITENS 🍎",image:"639e313b-2c63-4259-8e76-013a682d52a8.webp",price:15.99,outOfStock:!0,description:"Level máximo com Godhuman e a poderosa espada CDK! Uma das melhores combinações para PvP. Inclui diversas frutas e itens especiais para você dominar o jogo."},{id:"lvl-max-godhuman-cdk-soulguitar",name:"⭐LVL MAX + GODHUMAN👊 + CDK⚔️+ SOULGUITAR🎸+ FRUTAS E ITENS 🍎",image:"c3df2bb7-4108-44d4-9d9a-1ce9bbc811c3.png",price:25.97,outOfStock:!0,description:"Combo supremo! Level máximo com Godhuman, CDK e Soul Guitar juntos! Conta premium com arsenal completo de armas lendárias, frutas e itens especiais."},{id:"lvmax-ghm-shark-anchor",name:"👊 LVMAX + GHM + ⚓SHARK ANCHOR + FRUTAS E ITENS 🍎",image:"f9da1290-cc35-404d-b2ef-2c06303819a8.png",price:21.99,description:"Level máximo com Godhuman e a Shark Anchor! Arma exclusiva com habilidades únicas de tubarão. Perfeita para jogadores que buscam builds diferenciadas."},{id:"lvmax-ghm-cdk-shark-anchor",name:"👊 LVMAX + GHM + CDK⚔️ + ⚓SHARK ANCHOR + FRUTAS E ITENS 🍎",image:"5242c8d0-0fd8-4f45-ae8f-fbf8b4f20959.png",price:26.98,outOfStock:!0,description:"Pacote completo com Level máximo, Godhuman, CDK e Shark Anchor! Combinação perfeita de espadas lendárias para dominar qualquer batalha."},{id:"lvmax-ghm-ttk",name:"👊 LVMAX + GHM + ⚔️TTK + FRUTAS E ITENS 🍎",image:"73a04615-6b8a-4b94-8232-20c93060cce4.png",price:31.97,outOfStock:!0,description:"Level máximo com Godhuman e a rara espada True Triple Katana! Uma das armas mais poderosas do jogo. Conta premium com frutas e itens especiais inclusos."},{id:"lvmax-ghm-ttk-cdk",name:"👊 LVMAX + GHM + ⚔️TTK + ⚔️CDK  + FRUTAS E ITENS 🍎",image:"36bcac0d-f585-4a40-b8fb-3d665522539c.png",price:35.98,description:"Pacote supremo com Level máximo, Godhuman, TTK e CDK! As duas espadas mais poderosas juntas. Conta preparada para os maiores desafios do Blox Fruits."},{id:"lvmax-ghm-fox-lamp",name:"👊 LVMAX + GHM + 🟦 FOX LAMP + FRUTAS E ITENS 🍎",image:"1beb4f9f-c39e-472f-a798-d74fa2e26ca8.png",price:25.94,description:"Level máximo com Godhuman e a Fox Lamp! Acessório exclusivo com poderes especiais. Inclui frutas lendárias e itens raros no inventário."},{id:"level-max-godhuman-light-v2",name:"⚡ LEVEL MÁX +👊 GODHUMAN + LIGHT V2 (DESPERTADA/V2) 🍎",image:"46cf15b6-c4db-4a15-9228-0517688a3eb4.png",price:14.98,description:"Level máximo com Godhuman e Light V2 totalmente despertada! Uma das frutas mais rápidas do jogo com habilidades aprimoradas. Ótima para PvP e farming."},{id:"level-max-godhuman-ice-v2",name:"🧊 LEVEL MÁX +👊 GODHUMAN + ICE V2 (DESPERTADA/V2) 🍎",image:"ff972608-0034-423e-86d1-ba5267d951c7.png",price:14.98,description:"Level máximo com Godhuman e Ice V2 despertada! Controle total do gelo com habilidades congelantes poderosas. Excelente para controle de área e combos."},{id:"level-max-godhuman-magma-v2",name:"🌋 LEVEL MÁX +👊 GODHUMAN + MAGMA V2 🌋(DESPERTADA/V2) 🍎",image:"e06972a0-120c-4e49-abd4-ec011848c294.png",price:16.98,description:"Level máximo com Godhuman e Magma V2 completamente despertada! Dano massivo de lava e área de efeito devastadora. Perfeita para farming eficiente."},{id:"level-max-godhuman-buddah-v2",name:"🧘 LEVEL MÁX +👊 GODHUMAN + BUDDAH V2 🧘(DESPERTADA/V2) 🍎",image:"03c462e6-efc0-4453-baa9-392776a47f4f.png",price:16.98,description:"Level máximo com Godhuman e Buddha V2 despertada! A melhor fruta para farming com defesa absurda e dano aumentado. Indispensável para progressão rápida."},{id:"level-max-godhuman-dough-v2",name:"🍩 LEVEL MÁX +👊 GODHUMAN + DOUGH V2 (DESPERTADA/V2) 🍎",image:"54e5141b-6eb5-412d-8c7c-9d0e436538cb.png",price:26.98,description:"Level máximo com Godhuman e Dough V2 totalmente despertada! Uma das frutas mais poderosas do jogo com combos devastadores. Meta atual para PvP competitivo."},{id:"level-max-godhuman-cdk-dough-v2",name:"🍩 LEVEL MÁX +👊 GODHUMAN + CDK⚔️ + DOUGH V2 (DESPERTADA/V2) 🍎",image:"782f82db-161a-4340-9b0d-d3947d764cb4.png",price:35.97,outOfStock:!0,description:"Pacote supremo! Level máximo com Godhuman, CDK e Dough V2 despertada! A combinação mais poderosa do jogo para dominar PvP e PvE com facilidade."},{id:"lvmax-ghm-1-fruta-mitica",name:"⭐ LEVEL MÁX + GHM 👊  + 🍎 1 FRUTA MÍTICA ALEATÓRIA NO INVENTÁRIO",image:"358ba02c-15e8-42f6-9c7d-444d8d5d70ba.png",price:12.97,description:"Level máximo com Godhuman e 1 fruta mítica aleatória garantida no inventário! Pode ser Leopard, Dragon, Dough, Kitsune ou outra fruta rara. Surpreenda-se com sua sorte!"},{id:"lvmax-ghm-2-fruta-mitica",name:"⭐ LEVEL MÁX + GHM👊  + 🍎 2 FRUTA MÍTICA ALEATÓRIA NO INVENTÁRIO",image:"bb611145-1529-49ab-8030-29be82d06a16.png",price:15.97,description:"Level máximo com Godhuman e 2 frutas míticas aleatórias no inventário! Dobro de chances de conseguir as frutas mais raras e poderosas do jogo. Excelente custo-benefício!"},{id:"lvl-max-ghm-3-fruta-mitica",name:"⭐ LEVEL MÁX + GHM 👊  + 🍎 3 FRUTA MÍTICA ALEATÓRIA NO INVENTÁRIO",image:"c5b11920-24a6-472e-88d8-7a67562e0226.png",price:21.98,description:"Level máximo com Godhuman e 3 frutas míticas aleatórias! Pacote generoso para colecionadores e jogadores que querem variedade de frutas lendárias para testar diferentes builds."},{id:"lvmax-ghm-4-fruta-mitica",name:"⭐ LEVEL MÁX + GHM 👊  + 🍎 4 FRUTA MÍTICA ALEATÓRIA NO INVENTÁRIO",image:"f75d6a4f-8656-4892-b4dd-ffea8bef0112.png",price:26.89,outOfStock:!0,description:"Level máximo com Godhuman e 4 frutas míticas aleatórias! Pacote premium para colecionadores que querem ter as melhores opções de frutas raras no inventário. Máxima variedade garantida!"},{id:"lvmax-ghm-buddha-inventario",name:"👊 LVMAX + GHM + 🙏BUDDHA NO INVENTARIO + FRUTAS E ITENS 🍎",image:"689c2557-c9c3-4a8c-bb27-e1221e3c1040.png",price:12.99,description:"Level máximo com Godhuman e Buddha garantida no inventário! A fruta mais popular para farming eficiente. Perfeita para progressão rápida e farming de chefes com facilidade."},{id:"lvmax-ghm-portal-inventario",name:"👊 LVMAX + GHM + 🌌PORTAL NO INVENTARIO + FRUTAS E ITENS 🍎",image:"d00a0527-0045-4a15-b972-42151d98a800.png",price:12.99,description:"Level máximo com Godhuman e Portal no inventário! Fruta mítica com habilidades de teletransporte e controle dimensional. Ótima para mobilidade e combos criativos em PvP."},{id:"lvmax-ghm-mamute-inventario",name:"⭐  LVMAX + GHM 👊 + 🍎 MAMUTE NO INVENTARIO + FRUTAS E ITENS",image:"754b4d56-549b-40e7-97e6-fd084549f634.png",price:15.98,description:"Level máximo com Godhuman e Mammoth no inventário! Fruta mítica Zoan com transformação poderosa e habilidades de impacto massivo. Dominação total em combate corpo a corpo."},{id:"lvl-max-ghm-trex-inventario",name:"⭐ LVL MAX + GHM 👊 +  🍎 T-REX NO INVENTARIO + FRUTAS E ITENS",image:"5dba5c73-3e72-4366-a38a-f776a01cc090.png",price:18.97,description:"Level máximo com Godhuman e T-Rex no inventário! Fruta mítica Zoan com transformação em dinossauro feroz. Dano brutal e habilidades devastadoras para combate agressivo."},{id:"lvmax-ghm-dough-inventario",name:"⭐ LVMAX + GHM 👊 +  🍎 DOUGH NO INVENTARIO + FRUTAS E ITENS",image:"00e493df-b19a-471d-9b26-c0ceec97b02c.png",price:19.98,description:"Level máximo com Godhuman e Dough garantida no inventário! A fruta mais cobiçada do jogo, perfeita para PvP competitivo. Combos infinitos e mobilidade insuperável."},{id:"lvmax-ghm-gravity-inventario",name:"👊 LVMAX + GHM + 🟣GRAVITY NO INVENTARIO + FRUTAS E ITENS ⭐🍎 (REWORK!)",image:"b2d737d4-1a5c-49c6-8b6e-6f95dd295066.png",price:19.9,description:"Level máximo com Godhuman e Gravity no inventário com REWORK atualizado! Controle gravitacional aprimorado com novas habilidades poderosas. Meta atual após a atualização!"},{id:"lvmax-ghm-leopard-inventario",name:"⭐  LVMAX + GHM 👊 + 🍎 TIGER/LEOPARD NO INVENTARIO + FRUTAS E ITENS",image:"6886a438-600b-4e28-a131-c999459b9fe4.png",price:31.97,description:"Level máximo com Godhuman e Leopard no inventário! A fruta mais rara e poderosa do jogo! Transformação felina com velocidade extrema e dano devastador. Top tier absoluto!"},{id:"lvmax-ghm-gas-inventario",name:"👊 LVMAX + GHM + ☢️ GÁS NO INVENTARIO + FRUTAS E ITENS ⭐🍎",image:"02b997b9-4198-4e47-976c-c6703634d8c4.png",price:25.98,description:"Level máximo com Godhuman e Gas no inventário! Fruta Logia venenosa com habilidades de gás tóxico. Controle de área excepcional e dano contínuo devastador para PvP e PvE."},{id:"lvmax-ghm-yeti-inventario",name:"⭐LVMAX + GHM 👊 +YETI NO INVENTARIO⛄ + FRUTAS E ITENS 🍎",image:"0c6ac569-2136-4305-b99d-f30f12d3f879.png",price:32.97,description:"Level máximo com Godhuman e Yeti no inventário! Fruta mítica rara com poderes de gelo intenso e transformação em yeti. Habilidades únicas de congelamento e controle de campo."},{id:"lvmax-ghm-kitsune-inventario",name:"⭐ LVMAX + GHM 👊 +  🍎 KITSUNE NO INVENTARIO + FRUTAS E ITENS",image:"644d138b-6187-4e50-8b10-c6a85ec2c14b.png",price:39.97,description:"Level máximo com Godhuman e Kitsune no inventário! A fruta mais exclusiva e rara atualmente! Transformação em raposa mística com habilidades místicas poderosas. Extremamente cobiçada!"},{id:"lvmax-v4-full-human",name:"👊 LVMAX + 🧑 V4 FULL HUMAN + GHM + FRUTAS E ITENS 🍎",image:"567c3854-0456-477d-9e76-9c5054b88999.png",price:37.9,outOfStock:!0,description:"Level máximo com Godhuman e V4 Human completamente desbloqueado! Raça balanceada com habilidade especial Last Resort devastadora. Excelente para PvP e combos versáteis."},{id:"lvmax-v4-full-mink",name:"👊 LVMAX + 🐰 V4 FULL MINK + GHM + FRUTAS E ITENS 🍎",image:"923153ac-26c7-469d-9eaa-91f8c3b0ac5d.png",price:38.9,outOfStock:!0,description:"Level máximo com Godhuman e V4 Mink full! A raça mais rápida do jogo com velocidade absurda. Perfeita para rushdown e combos ágeis em PvP competitivo."},{id:"lvmax-v4-full-angel",name:"👊 LVMAX + 👼 V4 FULL ANGEL + GHM + FRUTAS E ITENS 🍎",image:"8a576ef5-92cb-42c7-b056-5eab5b34f805.png",price:38.9,description:"Level máximo com Godhuman e V4 Angel completo! Raça celestial com habilidades de voo aprimoradas e buffs poderosos. Ótima para suporte e combate aéreo dominante."},{id:"lvmax-v4-full-shark",name:"👊 LVMAX + 🦈 V4 FULL SHARK + GHM + FRUTAS E ITENS 🍎",image:"f0382222-0869-47cd-8079-ff1e46902e19.png",price:38.9,description:"Level máximo com Godhuman e V4 Shark full! Raça brutal com defesa superior e dano aumentado em água. Dominação total em combate corpo a corpo e resistência massiva."},{id:"lvmax-v4-full-cyborg",name:"👊 LVMAX + 🤖 V4 FULL CYBORG + GHM + FRUTAS E ITENS 🍎",image:"12e6aeaa-e0fd-4df5-99e6-7d9087b7f88e.png",price:38.9,description:"Level máximo com Godhuman e V4 Cyborg completo! Raça tecnológica com energia especial e habilidades únicas. Perfeita para builds híbridas e combos devastadores."},{id:"lvmax-ghm-v4-full-ghoul",name:"👊 LVMAX + GHM +  🦇 V4 FULL GHOUL + FRUTAS E ITENS 🍎",image:"d2bef92f-108e-477e-b1df-e2a17c94d0d0.png",price:38.9,outOfStock:!0,description:"Level máximo com Godhuman e V4 Ghoul full! Raça vampírica extremamente rara com regeneração e poderes das trevas. Habilidades únicas de vampiro para domínio noturno total!"}],ra=[{id:"ninety-nine-nights-mystery-box-1",name:"『 💎 』CAIXA DE GEMAS - ATÉ 25.000",image:"https://i.ibb.co/dwYFLKrB/27ce9e9a-1da7-4e95-9daa-2d6ec41b4bac.png",price:9.99,description:`💎 CAIXA DE GEMAS - ATÉ 25.000

Caixa de gemas de 99 Noites na Floresta com até 25.000 gemas! Receba recursos exclusivos.

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"ninety-nine-nights-mystery-box-2",name:"『 💎 』CAIXA DE GEMAS - ATÉ 50.000",image:"https://i.ibb.co/dwYFLKrB/27ce9e9a-1da7-4e95-9daa-2d6ec41b4bac.png",price:19.99,description:`💎 CAIXA DE GEMAS - ATÉ 50.000

Caixa de gemas de 99 Noites na Floresta com até 50.000 gemas! Receba recursos valiosos.

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"ninety-nine-nights-account-1",name:"『 💎 』 1.000~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:9.99,description:`💎 PACOTE DE GEMAS 1.000~50.000

Pacote de gemas para 99 Noites na Floresta. Receba entre 1.000 e 50.000 gemas.

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"ninety-nine-nights-account-2",name:"『 💎 』 5.500~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:29.99,description:`💎 PACOTE DE GEMAS 5.500~50.000

Pacote de gemas para 99 Noites na Floresta. Receba entre 5.500 e 50.000 gemas.

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"ninety-nine-nights-account-3",name:"『 💎 』 6.000~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:34.99,description:`💎 PACOTE DE GEMAS 6.000~50.000

Pacote de gemas para 99 Noites na Floresta. Receba entre 6.000 e 50.000 gemas.

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"ninety-nine-nights-account-4",name:"『 💎 』 6.500~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:39.99,description:`💎 PACOTE DE GEMAS 6.500~50.000

Pacote de gemas para 99 Noites na Floresta. Receba entre 6.500 e 50.000 gemas.

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"ninety-nine-nights-account-5",name:"『 💎 』 7.000~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:44.99,description:`💎 PACOTE DE GEMAS 7.000~50.000

Pacote de gemas para 99 Noites na Floresta. Receba entre 7.000 e 50.000 gemas.

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"ninety-nine-nights-account-6",name:"『 💎 』 7.500~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:49.99,description:`💎 PACOTE DE GEMAS 7.500~50.000

Pacote de gemas para 99 Noites na Floresta. Receba entre 7.500 e 50.000 gemas.

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"ninety-nine-nights-account-7",name:"『 💎 』 8.000~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:54.99,description:`💎 PACOTE DE GEMAS 8.000~50.000

Pacote de gemas para 99 Noites na Floresta. Receba entre 8.000 e 50.000 gemas.

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}],U=[{id:"plants-brainrots-1",name:"『 🥥 』COCOTANK",image:"https://i.ibb.co/TxMrx6j2/1.png",price:2.99,description:`『 🥥 』COCOTANK

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-2",name:"『 🌱 』 5X PLANTA CARNÍVORA",image:"https://i.ibb.co/4ZWtBqQr/2.png",price:5.99,description:`『 🌱 』 5X PLANTA CARNÍVORA

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-3",name:"『 🌟 』 X2 STARFRUIT",image:"https://i.ibb.co/SXJq7zFn/3.png",price:9.99,description:`『 🌟 』 X2 STARFRUIT

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-4",name:"『 🍄 』 X5 SHROOMBINO (SECRET)",image:"https://i.ibb.co/0pf71wr7/4.png",price:9.99,description:`『 🍄 』 X5 SHROOMBINO (SECRET)

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-5",name:"『 🍅 』 X5 TOMATRIO (SECRET)",image:"https://i.ibb.co/xqN1tF5g/5.png",price:9.99,description:`『 🍅 』 X5 TOMATRIO (SECRET)

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-6",name:"『 🥔 』 X5 MR CARROT",image:"https://i.ibb.co/XxGHFTTL/6.png",price:9.99,description:`『 🥔 』 X5 MR CARROT

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-7",name:"『 🥔 』 X5 PINE-A-PAINTER",image:"https://i.ibb.co/KzLL013Q/7.png",price:9.99,description:`『 🥔 』 X5 PINE-A-PAINTER

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-8",name:"『 🥭 』 X5 MANGO (SECRET)",image:"https://i.ibb.co/Q7jGRg76/8.png",price:14.99,description:`『 🥭 』 X5 MANGO (SECRET)

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-9",name:"『 🍋 』 X5 KING LIMONE",image:"https://i.ibb.co/sp2sdCjZ/9.png",price:18.99,description:`『 🍋 』 X5 KING LIMONE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-10",name:"『 🫘 』 X10 COPUCCINO",image:"https://i.ibb.co/yFPKwmfC/10.png",price:14.99,description:`『 🫘 』 X10 COPUCCINO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-11",name:"『 🥭 』 TROLL MANGO",image:"https://i.ibb.co/M5PVWk30/11.png",price:49.99,description:`『 🥭 』 TROLL MANGO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-brainrots-12",name:"『 🍎 』 COMMANDO APPLE",image:"https://i.ibb.co/wryYmwnC/12.png",price:99,description:`『 🍎 』 COMMANDO APPLE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-1",name:"『 🕷️ 』 SAMMYNI SPYDERINI - ATÉ 2B +/S",image:"https://i.ibb.co/3mHHYLHk/8f10ca5d-2cab-44f0-a6da-ff79834a5dec.png",price:9.99,description:`『 🕷️ 』 SAMMYNI SPYDERINI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-2",name:"『 🐒 』 DUL DUL DUL - ATÉ 2B +/S",image:"https://i.ibb.co/mgbxyB3/618abec1-dfa3-464e-bd09-b6adfed4e412.png",price:9.99,description:`『 🐒 』 DUL DUL DUL - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-3",name:"『 🌺 』 LAS TRALALERITAS - ATÉ 2B +/S",image:"https://i.ibb.co/fzwxbZ3t/e03f6c4a-73c7-41e9-a6fb-d9e69e0f724b.png",price:9.99,description:`『 🌺 』 LAS TRALALERITAS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-4",name:"『 🐮 』 LA VACCA - ATÉ 2B +/S",image:"https://i.ibb.co/2716hsvf/46a353be-f617-486c-a7cc-7b36861dc07d.png",price:9.99,description:`『 🐮 』 LA VACCA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-5",name:"『 🌀 』 LOS TRALALERITOS - ATÉ 2B +/S",image:"https://i.ibb.co/5XCfhh2w/83d660a4-1137-43d3-9917-d9cb1373e3b5.png",price:9.99,description:`『 🌀 』 LOS TRALALERITOS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-6",name:"『 🪑 』 KARKERKAR KURKUR - ATÉ 2B +/S",image:"https://i.ibb.co/PspndHfP/6c5a5f7b-7333-475b-8f55-9f8196adcd7b.png",price:9.99,description:`『 🪑 』 KARKERKAR KURKUR - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-7",name:"『 🚽 』 JOB JOB JOB SAHUR - ATÉ 2B +/S",image:"https://i.ibb.co/gbnTV5n0/3a8fea55-f059-4fa1-b53a-c40030924436.png",price:9.99,description:`『 🚽 』 JOB JOB JOB SAHUR - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-8",name:"『 🐙 』 GRAIPUSS MEDUSI - ATÉ 2B +/S",image:"https://i.ibb.co/s999cBxh/6007eb7f-8488-47b3-84db-a23078cb9455.png",price:9.99,description:`『 🐙 』 GRAIPUSS MEDUSI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-9",name:"『 💀 』 POT HOTSPOT - ATÉ 2B +/S",image:"https://i.ibb.co/pBKBGdTF/2e7a60f4-25af-4a57-8c05-1b24a50b7f25.png",price:9.99,description:`『 💀 』 POT HOTSPOT - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-10",name:"『 ☠️ 』 MARIACHI CORAZONI - ATÉ 2B +/S",image:"https://i.ibb.co/DDzfV7y9/255e4200-42f9-4489-a731-b6c4f8458ade.png",price:9.99,description:`『 ☠️ 』 MARIACHI CORAZONI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-11",name:"『 🚲 』 MIETETEIRA BICICLETEIRA - ATÉ 2B +/S",image:"https://i.ibb.co/kVKk5jdv/6f6cf4dc-ce42-4f18-91da-9cd7c5d97522.png",price:9.99,description:`『 🚲 』 MIETETEIRA BICICLETEIRA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-12",name:"『 🧑‍🧑‍🧒‍🧒 』 LOS COMBINASIONAS - ATÉ 2B +/S",image:"https://i.ibb.co/gMDfHkd2/d62ce05b-efb4-4757-acdf-1e9290a3265a.png",price:9.99,description:`『 🧑‍🧑‍🧒‍🧒 』 LOS COMBINASIONAS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-13",name:"『 🚲 』 LOS CHICLETEIRAS - ATÉ 2B +/S",image:"https://i.ibb.co/27YxZhvt/a27cece0-e013-4354-82fe-1a9c5cf9701d.png",price:9.99,description:`『 🚲 』 LOS CHICLETEIRAS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-14",name:"『 ☕️ 』 LAS SIS - ATÉ 2B +/S",image:"https://i.ibb.co/5gKDzBR3/4c298c9b-14ac-4906-aa4b-54d469c144f4.png",price:9.99,description:`『 ☕️ 』 LAS SIS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-15",name:"『 🌮 』 LOS MOBILIS - ATÉ 2B +/S",image:"https://i.ibb.co/1W2bKmD/ba590570-93e7-43cf-94e6-d5efe4ce98bd.png",price:9.99,description:`『 🌮 』 LOS MOBILIS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-16",name:"『 🛜 』 LOS NOOO MY HOTSPOTSITOS - ATÉ 2B +/S",image:"https://i.ibb.co/N2hPP2zY/af703154-fc26-40fc-8ca1-2cffa60a790b.png",price:9.99,description:`『 🛜 』 LOS NOOO MY HOTSPOTSITOS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-17",name:"『 🚴‍♂️ 』 CHICLETEIRA BICICLETEIRA - ATÉ 2B +/S",image:"https://i.ibb.co/pv9D13zz/868249e6-ec84-4723-9fc2-8382fb96c37e.png",price:9.99,description:`『 🚴‍♂️ 』 CHICLETEIRA BICICLETEIRA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-18",name:"『 🏠 』 ESOK SEKOLA - ATÉ 2B +/S",image:"https://i.ibb.co/BK7pbSXt/dd91796d-ba64-4c14-845c-4c0ad3724d4f.png",price:9.99,description:`『 🏠 』 ESOK SEKOLA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-19",name:"『 🔢 』 67! - ATÉ 2B +/S",image:"https://i.ibb.co/4RQ3TRVq/9d9fd10e-d779-4e3a-a655-d4a537964ce6.png",price:9.99,description:`『 🔢 』 67! - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-20",name:"『 🌮 』 NOOO MY HOTSPOT - ATÉ 2B +/S",image:"https://i.ibb.co/GmTKVjz/7d337293-6d26-4b6d-9f77-6363bbdac010.png",price:9.99,description:`『 🌮 』 NOOO MY HOTSPOT - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-21",name:"『 🥤 』 SWAG SODA - ATÉ 2B +/S",image:"https://i.ibb.co/RkW9HM1n/f3171c40-655e-4a60-81ac-93ff62853a14.png",price:9.99,description:`『 🥤 』 SWAG SODA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-22",name:"『 🐊 』 QUESADILLA CROCODILA - ATÉ 2B +/S",image:"https://i.ibb.co/C3s61NGp/5ef29b48-a73e-477f-b062-ad0d6946da21.png",price:9.99,description:`『 🐊 』 QUESADILLA CROCODILA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-23",name:"『 🎃 』 LOS SPOOKY COMBINASIOANS - ATÉ 2B +/S",image:"https://i.ibb.co/WNt1nGV3/38e9ea7d-8ecb-4af9-bcb5-94b226b82db2.png",price:9.99,description:`『 🎃 』 LOS SPOOKY COMBINASIOANS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-24",name:"『 🚴‍♀️ 』 CHICLETEIRINA BICICLETEIRINA - ATÉ 2B +/S",image:"https://i.ibb.co/JFBL5D8v/96d9ae33-2660-459d-94ea-58af32d4d802.png",price:9.99,description:`『 🚴‍♀️ 』 CHICLETEIRINA BICICLETEIRINA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-25",name:"『 🪸 』 LA GRANDE COMBINASSION - ATÉ 2B +/S",image:"https://i.ibb.co/5xRcZGmG/3c89a978-7d9d-40bc-aa92-1016ae3a6644.png",price:9.99,description:`『 🪸 』 LA GRANDE COMBINASSION - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-26",name:"『 🌎 』 LA EXTINCT GRANDE - ATÉ 2B +/S",image:"https://i.ibb.co/RGHFLmby/9a388571-2958-4e91-9bb0-bdac3be12e84.png",price:9.99,description:`『 🌎 』 LA EXTINCT GRANDE - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-27",name:"『 🎃 』 LA GRANDE SPOOKY - ATÉ 2B +/S",image:"https://i.ibb.co/Rp6hNL3Y/5fb9aa02-0e92-4b0b-ba8a-3cecd8e05450.png",price:9.99,description:`『 🎃 』 LA GRANDE SPOOKY - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-28",name:"『 👯‍♀️ 』 LOS BROS - ATÉ 2B +/S",image:"https://i.ibb.co/0pDk7zb1/bc076848-f546-4641-bcbf-35ea935f3844.png",price:9.99,description:`『 👯‍♀️ 』 LOS BROS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-29",name:"『 🌮 』 QUESADILLO VAMPIRO - ATÉ 2B +/S",image:"https://i.ibb.co/bg5SL32t/9a2a5441-ab6a-47a4-b91d-24eb60441cf9.png",price:9.99,description:`『 🌮 』 QUESADILLO VAMPIRO - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-30",name:"『 🐶 』 LOS PUGGIES - ATÉ 2B +/S",image:"https://i.ibb.co/Q3nJhdmh/956be6f0-6b0e-4108-9cdb-2eea2a34c954.png",price:9.99,description:`『 🐶 』 LOS PUGGIES - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-31",name:"『 🎃 』 LOS SPOOKY COMBINASIONAS - ATÉ 2B +/S",image:"https://i.ibb.co/V0dyG4f7/6e02007c-a19f-4d2b-8873-049c69835f27.png",price:9.99,description:`『 🎃 』 LOS SPOOKY COMBINASIONAS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-32",name:"『 🚲 』 TACORITA BICICLETA - ATÉ 2B +/S",image:"https://i.ibb.co/7xZBkfbk/73417cf9-c3f1-407f-aa93-4d58f1646ee5.png",price:9.99,description:`『 🚲 』 TACORITA BICICLETA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-33",name:"『 💀 』 LOS HOTSPOTSITOS - ATÉ 2B +/S",image:"https://i.ibb.co/fzMF15xM/d73b79bc-0885-494d-83b8-29e2228cc13d.png",price:9.99,description:`『 💀 』 LOS HOTSPOTSITOS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-34",name:"『 🧠 』 SPAGHETTI TUALETTI - ATÉ 2B +/S",image:"https://i.ibb.co/V0MZM04S/b8d0450a-d65b-439b-a200-c477cc6d50b7.png",price:9.99,description:`『 🧠 』 SPAGHETTI TUALETTI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-35",name:"『 🦈 』 EVILEDON - ATÉ 2B +/S",image:"https://i.ibb.co/GvkwDhmL/4c0bcaed-e1f3-468e-8f5c-37f4bc853baa.png",price:9.99,description:`『 🦈 』 EVILEDON - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-36",name:"『 🐋 』 ORCALEDON - ATÉ 2B +/S",image:"https://i.ibb.co/YF1BRGS0/a53b8450-08bd-475a-b045-40519038c566.png",price:9.99,description:`『 🐋 』 ORCALEDON - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-37",name:"『 🌶️ 』 CHILLIN CHILI - ATÉ 2B +/S",image:"https://i.ibb.co/j9XZw21D/fd15d363-6b3a-427c-8fd4-cea1a2e0fd9d.png",price:9.99,description:`『 🌶️ 』 CHILLIN CHILI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-38",name:"『 🚽 』 LOS SPAGHETTIS - ATÉ 2B +/S",image:"https://i.ibb.co/rGw7qLth/d853bda4-1d10-403f-ab3b-12c608bcbc9a.png",price:9.99,description:`『 🚽 』 LOS SPAGHETTIS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-39",name:"『 🍟 』 CHIPSO AND QUESO - ATÉ 2B +/S",image:"https://i.ibb.co/fVCHn6Vk/1bcb2393-e6ea-405e-8537-52000b17fb80.png",price:9.99,description:`『 🍟 』 CHIPSO AND QUESO - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-40",name:"『 🐶 』 MONEY MONEY PUGGY - ATÉ 2B +/S",image:"https://i.ibb.co/67dY4LFx/e7859a7c-b34b-4746-96b1-bbbd59b1ad61.png",price:9.99,description:`『 🐶 』 MONEY MONEY PUGGY - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-41",name:"『 🦖 』 NUCLEARO DINOSSAURO - ATÉ 2B +/S",image:"https://i.ibb.co/LDyNVqQJ/7ddcafe3-e612-420c-855c-c58cb275b1b1.png",price:9.99,description:`『 🦖 』 NUCLEARO DINOSSAURO - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-42",name:"『 🧩 』 KETUPAT KEPAT - ATÉ 2B +/S",image:"https://i.ibb.co/NnLKByRx/b31dabd6-e09e-4eec-afa4-4ef5aa8d0ea9.png",price:9.99,description:`『 🧩 』 KETUPAT KEPAT - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-43",name:"『 🚽 』 LA SECRET COMBINASION - ATÉ 2B +/S",image:"https://i.ibb.co/1JGPcPhq/4cf60d96-f800-4f44-af4a-164f47132d1c.png",price:9.99,description:`『 🚽 』 LA SECRET COMBINASION - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-44",name:"『 💠 』 SPOOKY AND PUMPKY - ATÉ 2B +/S",image:"https://i.ibb.co/cSp9z3c6/cdc68b49-0664-4b9e-bf28-9e06ceaf34a2.png",price:9.99,description:`『 💠 』 SPOOKY AND PUMPKY - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-45",name:"『 🌭 』 KETCHURU AND MUSTURU - ATÉ 2B +/S",image:"https://i.ibb.co/jPyr9Ttg/f994127b-21a5-48ba-bf3b-46e7c7845c2c.png",price:9.99,description:`『 🌭 』 KETCHURU AND MUSTURU - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-46",name:"『 🌮 』 LOS TACORITAS - ATÉ 2B +/S",image:"https://i.ibb.co/Z6nLwg9B/451ebe0a-783c-4722-af6e-79e720cc2e10.png",price:9.99,description:`『 🌮 』 LOS TACORITAS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-47",name:"『 🏚️ 』 LA CASA BOO - ATÉ 2B +/S",image:"https://i.ibb.co/bRjMQsrR/fe975d53-cddc-4a9d-9351-713db28af867.png",price:9.99,description:`『 🏚️ 』 LA CASA BOO - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-48",name:"『 🇲🇽 』 LA TACO COMBINASION - ATÉ 2B +/S",image:"https://i.ibb.co/N6kR8Dpp/1ce3390a-790d-49c7-8426-deb2a0cb7723.png",price:9.99,description:`『 🇲🇽 』 LA TACO COMBINASION - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-49",name:"『 👻 』 SPOOKY AND PUMPKY - ATÉ 2B +/S",image:"https://i.ibb.co/WpkS5KLD/f7917151-9433-4028-9d20-233994e86c3a.png",price:9.99,description:`『 👻 』 SPOOKY AND PUMPKY - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-50",name:"『 🦈 』 TRALALEDON - ATÉ 2B +/S",image:"https://i.ibb.co/673zK7Md/15c37753-de1c-45de-bae8-a13dda288935.png",price:9.99,description:`『 🦈 』 TRALALEDON - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-51",name:"『 🧂 』 GARAMA AND MADUNDUNG - ATÉ 2B +/S",image:"https://i.ibb.co/p6GpDnG7/cf9250a2-20ea-4192-8624-aba8ef9621b5.png",price:9.99,description:`『 🧂 』 GARAMA AND MADUNDUNG - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-52",name:"『 ⏰ 』 TICTAC SAHUR - ATÉ 2B +/S",image:"https://i.ibb.co/pBmPWGMn/421749ec-1540-4c47-9681-7cc6a7bc94dc.png",price:9.99,description:`『 ⏰ 』 TICTAC SAHUR - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-53",name:"『 👥 』 LOS PRIMOS - ATÉ 2B +/S",image:"https://i.ibb.co/M5yvVfC9/82d1f4ad-bbb6-45dc-9d54-8e568771252c.png",price:9.99,description:`『 👥 』 LOS PRIMOS - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-54",name:"『 🥛 』 FRAGRAMA AND CHOCRAMA - ATÉ 2B +/S",image:"https://i.ibb.co/hRfr86kk/fa82d421-898f-4b2a-bba4-162b2b95a9bc.png",price:9.99,description:`『 🥛 』 FRAGRAMA AND CHOCRAMA - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-55",name:"『 🍟 』 BURGURO AND FRYURO - ATÉ 2B +/S",image:"https://i.ibb.co/v4VkBtm8/04117f3b-1f66-4eda-ac19-7f7590e67564.png",price:9.99,description:`『 🍟 』 BURGURO AND FRYURO - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-56",name:"『 ⚓️ 』 CAPITANO MOBY - ATÉ 2B +/S",image:"https://i.ibb.co/vxmQ3jJs/9b5a578e-d9f7-45f2-9e3c-fc136ca02890.png",price:9.99,description:`『 ⚓️ 』 CAPITANO MOBY - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"brainrots-57",name:"『 🐉 』 DRAGON CANNELONI - ATÉ 2B +/S",image:"https://i.ibb.co/XZZDCBPv/34f28e90-d72a-4ac0-b228-da30442f8a2c.png",price:9.99,description:`『 🐉 』 DRAGON CANNELONI - ATÉ 2B +/S

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"plants-gamepass-1",name:"『 🍅 』 TOMATRIO SEED",image:"https://i.ibb.co/m3n78cj/1.png",price:38.99,description:`『 🍅 』 TOMATRIO SEED

Semente exclusiva para cultivar a planta TOMATRIO em Plants vs Brainrots!

📋 INFORMAÇÕES DO PRODUTO:
• Nome: TOMATRIO SEED
• Tipo: Semente Especial
• Raridade: Rara
• Uso: Cultivo e Progressão no Jogo

🎮 CARACTERÍSTICAS:
• Planta poderosa e estratégica
• Ideal para defesa e ataque
• Semente exclusiva do mercado
• Desbloqueamento automático na conta

⚡ ENTREGA:
✅ Entrega imediata após confirmação de pagamento
✅ 100% Seguro e Verificado
✅ Acesso automático na sua conta
✅ Suporte técnico disponível

💳 PAGAMENTO:
• À vista no Pix com desconto
• Processamento em minutos`},{id:"plants-gamepass-2",name:"『 🥔 』 MR CARROT SEED",image:"https://i.ibb.co/xtJq6H70/2.png",price:36.99,description:`『 🥔 』 MR CARROT SEED

Semente especial para cultivar MR CARROT em Plants vs Brainrots!

📋 INFORMAÇÕES DO PRODUTO:
• Nome: MR CARROT SEED
• Tipo: Semente Especial
• Raridade: Rara
• Uso: Cultivo e Progressão no Jogo

🎮 CARACTERÍSTICAS:
• Planta especial com habilidades únicas
• Excelente para estratégias avançadas
• Semente exclusiva do mercado
• Desbloqueamento automático na conta

⚡ ENTREGA:
✅ Entrega imediata após confirmação de pagamento
✅ 100% Seguro e Verificado
✅ Acesso automático na sua conta
✅ Suporte técnico disponível

💳 PAGAMENTO:
• À vista no Pix com desconto
• Processamento em minutos`},{id:"plants-gamepass-3",name:"『 🌱 』 CARNIVOROUS PLANT SEED",image:"https://i.ibb.co/cKBqhv2r/3.png",price:28.99,description:`『 🌱 』 CARNIVOROUS PLANT SEED

Semente exclusiva para cultivar a planta CARNIVOROUS em Plants vs Brainrots!

📋 INFORMAÇÕES DO PRODUTO:
• Nome: CARNIVOROUS PLANT SEED
• Tipo: Semente Especial
• Raridade: Rara
• Uso: Cultivo e Progressão no Jogo

🎮 CARACTERÍSTICAS:
• Planta carnívora com ataque poderoso
• Estratégia ofensiva muito eficaz
• Semente exclusiva do mercado
• Desbloqueamento automático na conta

⚡ ENTREGA:
✅ Entrega imediata após confirmação de pagamento
✅ 100% Seguro e Verificado
✅ Acesso automático na sua conta
✅ Suporte técnico disponível

💳 PAGAMENTO:
• À vista no Pix com desconto
• Processamento em minutos`},{id:"plants-gamepass-4",name:"『 🥥 』 COCOTANK SEED",image:"https://i.ibb.co/276CzJnf/4.png",price:18.99,description:`『 🥥 』 COCOTANK SEED

Semente exclusiva para cultivar COCOTANK em Plants vs Brainrots!

📋 INFORMAÇÕES DO PRODUTO:
• Nome: COCOTANK SEED
• Tipo: Semente Especial
• Raridade: Rara
• Uso: Cultivo e Progressão no Jogo

🎮 CARACTERÍSTICAS:
• Planta defensiva e resistente
• Excelente tanque para equipe
• Ideal para estratégias defensivas
• Desbloqueamento automático na conta

⚡ ENTREGA:
✅ Entrega imediata após confirmação de pagamento
✅ 100% Seguro e Verificado
✅ Acesso automático na sua conta
✅ Suporte técnico disponível

💳 PAGAMENTO:
• À vista no Pix com desconto
• Processamento em minutos`},{id:"plants-gamepass-5",name:"『 🍬 』 SHINY CARD PACK X1",image:"https://i.ibb.co/x8htgWG6/5.png",price:12.99,description:`『 🍬 』 SHINY CARD PACK X1

Pacote com 1 carta brilhante rara para Plants vs Brainrots!

📋 INFORMAÇÕES DO PRODUTO:
• Nome: SHINY CARD PACK X1
• Tipo: Pacote de Cartas
• Quantidade: 1 Carta Brilhante
• Raridade: Rara
• Uso: Coleção e Poder de Ataque

🎮 CARACTERÍSTICAS:
• 1 Carta Brilhante Rara
• Versão holográfica exclusiva
• Aumenta poder do seu deck
• Ideal para colecionadores

⚡ ENTREGA:
✅ Entrega imediata após confirmação de pagamento
✅ 100% Seguro e Verificado
✅ Acesso automático na sua conta
✅ Suporte técnico disponível

💳 PAGAMENTO:
• À vista no Pix com desconto
• Processamento em minutos`},{id:"plants-gamepass-6",name:"『 🍬 』 SHINY CARD PACK X3",image:"https://i.ibb.co/x8htgWG6/5.png",price:29.99,description:`『 🍬 』 SHINY CARD PACK X3

Pacote com 3 cartas brilhantes raras para Plants vs Brainrots!

📋 INFORMAÇÕES DO PRODUTO:
• Nome: SHINY CARD PACK X3
• Tipo: Pacote de Cartas
• Quantidade: 3 Cartas Brilhantes
• Raridade: Rara
• Uso: Coleção e Poder de Ataque

🎮 CARACTERÍSTICAS:
• 3 Cartas Brilhantes Raras
• Versão holográfica exclusiva
• Aumenta muito o poder do seu deck
• Ideal para colecionadores e jogadores

⚡ ENTREGA:
✅ Entrega imediata após confirmação de pagamento
✅ 100% Seguro e Verificado
✅ Acesso automático na sua conta
✅ Suporte técnico disponível

💳 PAGAMENTO:
• À vista no Pix com desconto
• Processamento em minutos`},{id:"plants-gamepass-7",name:"『 🍬 』 SHINY CARD PACK X10",image:"https://i.ibb.co/x8htgWG6/5.png",price:83.99,description:`『 🍬 』 SHINY CARD PACK X10

Pacote com 10 cartas brilhantes raras para Plants vs Brainrots!

📋 INFORMAÇÕES DO PRODUTO:
• Nome: SHINY CARD PACK X10
• Tipo: Pacote de Cartas
• Quantidade: 10 Cartas Brilhantes
• Raridade: Rara
• Uso: Coleção e Poder de Ataque

🎮 CARACTERÍSTICAS:
• 10 Cartas Brilhantes Raras
• Versão holográfica exclusiva
• Boost massivo para seu deck
• Ideal para colecionadores e jogadores competitivos

⚡ ENTREGA:
✅ Entrega imediata após confirmação de pagamento
✅ 100% Seguro e Verificado
✅ Acesso automático na sua conta
✅ Suporte técnico disponível

💳 PAGAMENTO:
• À vista no Pix com desconto
• Processamento em minutos`}],ta=[{id:"grow-a-garden-exclusive",name:"🌱 CONTA EXCLUSIVE GROW A GARDEN",image:"https://i.ibb.co/ccNdmXNd/image.png",price:14.99,description:`🌱 CONTA EXCLUSIVE GROW A GARDEN

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}],ia=[{id:"steam-premium-account",name:"『 🔑⭐ 』STEAM KEYS TRIPLE A",image:"https://i.ibb.co/GvZ3rYVd/1.png",price:29.99,description:`『 🔑⭐ 』STEAM KEYS TRIPLE A

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"steam-key-aaa-game",name:"『 🔑🌟 』STEAM KEYS TRIPLE A | JOGOS COM NOMES",image:"https://i.ibb.co/svnbx8sy/2.png",price:39.99,description:`『 🔑🌟 』STEAM KEYS TRIPLE A | JOGOS COM NOMES

⚡ | A chave é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera a chave na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas chaves?

Sabemos que muitos jogadores têm receio de comprar chaves e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Chaves de alta qualidade, melhores chaves do mercado!

✅ 100% Seguras – Todas as chaves são verificadas antes de serem enviadas para o cliente!`}],ca=[{id:"buddha-fruta-bf",name:"『 🍍 』 BUDDHA NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:8.99,description:`『 🍍 』 BUDDHA NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"portal-fruta-bf",name:"『 🍍 』 PORTAL NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:9.99,description:`『 🍍 』 PORTAL NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"light-v2-fruta-bf",name:"『 🍍 』 LIGHT V2 DESPERTADA",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:12.99,description:`『 🍍 』 LIGHT V2 DESPERTADA

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"ice-v2-fruta-bf",name:"『 🍍 』 ICE V2 DESPERTADA",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:12.99,description:`『 🍍 』 ICE V2 DESPERTADA

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"magma-v2-fruta-bf",name:"『 🍍 』 MAGMA V2 DESPERTADA",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:14.99,description:`『 🍍 』 MAGMA V2 DESPERTADA

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"buddha-v2-fruta-bf",name:"『 🍍 』 BUDDHA V2 DESPERTADA",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:16.99,description:`『 🍍 』 BUDDHA V2 DESPERTADA

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"mammoth-fruta-bf",name:"『 🍍 』 MAMMOTH NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:18.99,description:`『 🍍 』 MAMMOTH NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"trex-fruta-bf",name:"『 🍍 』 T-REX NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:19.99,description:`『 🍍 』 T-REX NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gravity-fruta-bf",name:"『 🍍 』 GRAVITY NO INVENTÁRIO (REWORK)",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:22.99,description:`『 🍍 』 GRAVITY NO INVENTÁRIO (REWORK)

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"dough-fruta-bf",name:"『 🍍 』 DOUGH NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:24.99,description:`『 🍍 』 DOUGH NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"dough-v2-fruta-bf",name:"『 🍍 』 DOUGH V2 DESPERTADA",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:29.99,description:`『 🍍 』 DOUGH V2 DESPERTADA

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gas-fruta-bf",name:"『 🍍 』 GAS NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:27.99,description:`『 🍍 』 GAS NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"leopard-fruta-bf",name:"『 🍍 』 LEOPARD NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:34.99,description:`『 🍍 』 LEOPARD NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"yeti-fruta-bf",name:"『 🍍 』 YETI NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:36.99,description:`『 🍍 』 YETI NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"shadow-fruta-bf",name:"『 🍍 』 SHADOW NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:21.99,description:`『 🍍 』 SHADOW NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"dragon-fruta-bf",name:"『 🍍 』 DRAGON NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:32.99,description:`『 🍍 』 DRAGON NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"kitsune-fruta-bf",name:"『 🍍 』 KITSUNE NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:44.99,description:`『 🍍 』 KITSUNE NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}],na=[{id:"frutas-miticas-0-13",name:"『 🍍 』 0~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO",image:"71a10a82-9948-4008-9122-5522e7f1ad9b.png",price:8.99,description:`『 🍍 』 0~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"frutas-miticas-1-13",name:"『 🍍 』 1~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"38a4f3a4-ec4e-43f3-98c7-858fcebc8002.png",price:9.99,description:`『 🍍 』 1~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"frutas-miticas-2-13",name:"『 🍍 』 2~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"e3f73036-5d8d-42d8-b171-eecd96604a6f.png",price:14.99,description:`『 🍍 』 2~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"frutas-miticas-3-13",name:"『 🍍 』 3~13 MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"0699e4ab-171c-47b3-9f24-98d69a05541d.png",price:19.99,description:`『 🍍 』 3~13 MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"frutas-miticas-4-13-godhuman",name:"『 🍍 』 4~13 MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"beff6d0b-4899-4ff4-bd05-ae7d7858cc26.png",price:24.99,description:`『 🍍 』 4~13 MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"frutas-miticas-5-13-godhuman",name:"『 🍍 』 5~13 MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:29.99,description:`『 🍍 』 5~13 MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"buddha-godhuman-level-maximo",name:"『 🛕 』 BUDDHA NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"5f831726-093e-4c0f-87d9-a341a2df4b71.png",price:8.99,description:`『 🛕 』 BUDDHA NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"portal-godhuman-level-maximo",name:"『 🌀 』 PORTAL NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"d39cff80-9ac6-45d4-80dd-3f6538a4728e.png",price:8.99,description:`『 🌀 』 PORTAL NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"trex-godhuman-level-maximo",name:"『 🦖 』 T-REX NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"8b2e359c-6fdf-43ac-ab37-36c18f37a576.png",price:29.99,description:`『 🦖 』 T-REX NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gas-godhuman-level-maximo",name:"『 💨 』 GAS NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"13a674c6-be5f-4d63-b537-58e814a1a692.png",price:37.99,description:`『 💨 』 GAS NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"yeti-godhuman-level-maximo",name:"『 ❄️ 』 YETI NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"b6d41850-8b16-4728-b577-c7d9761cf6b1.png",price:46.99,description:`『 ❄️ 』 YETI NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"tiger-godhuman-level-maximo",name:"『 🐯 』 TIGER NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"c2194629-ebb0-4afa-a5f5-de74db027b6f.png",price:54.99,description:`『 🐯 』 TIGER NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"tiger-1-13-frutas-godhuman",name:"『 🐯🍍 』 TIGER NO INVENTÁRIO + 1~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"9355ce95-8a8f-4df3-96e4-710e3b8095ed.png",price:64.99,description:`『 🐯🍍 』 TIGER NO INVENTÁRIO + 1~13 FRUTAS MÍTICAS ALEATÓRIAS PREMIUM NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"kitsune-godhuman-level-maximo",name:"『 🦊 』 KITSUNE + GODHUMAN + LEVEL MÁXIMO",image:"67fb76fc-96af-4718-bde9-4a02daca428d.png",price:54.99,description:`『 🦊 』 KITSUNE + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"kitsune-inventario-godhuman-level-maximo",name:"『 🦊 』 KITSUNE NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"9a8f73f8-1e2f-4db2-ae6f-b96233d53ee4.png",price:54.99,description:`『 🦊 』 KITSUNE NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"yeti-cdk-skull-guitar-godhuman",name:"『 ❄️⚔️🎸 』 YETI + CDK + SKULL GUITAR + GOD HUMAN + LEVEL MÁXIMO",image:"5c14daf6-04ef-4313-b148-b715e057adbb.png",price:79.99,description:`『 ❄️⚔️🎸 』 YETI + CDK + SKULL GUITAR + GOD HUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"tiger-cdk-skull-guitar-godhuman",name:"『 🐯⚔️🎸 』 TIGER + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"b9d5f519-53e1-4a3b-9582-14bc9a7bbad6.png",price:84.99,description:`『 🐯⚔️🎸 』 TIGER + CDK + SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"kitsune-inventario-cdk-skull-guitar-godhuman",name:"『 🦊⚔️🎸 』 KITSUNE NO INVENTÁRIO + CDK + SKULL GUITAR + GOD HUMAN + LEVEL MÁXIMO",image:"c607083d-53a4-43d8-9664-9cca22f9d345.png",price:89.99,description:`『 🦊⚔️🎸 』 KITSUNE NO INVENTÁRIO + CDK + SKULL GUITAR + GOD HUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"kitsune-yeti-inventario-godhuman",name:"『 🦊❄️ 』 KITSUNE NO INVENTÁRIO + YETI NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO",image:"6fd51bc3-0800-49a2-9aa0-20efac2a4582.png",price:99.99,description:`『 🦊❄️ 』 KITSUNE NO INVENTÁRIO + YETI NO INVENTÁRIO + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}],da=[{id:"perm-kilo",name:"『 🍉 』 KILO PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:4.99,description:"Fruta Kilo Permanente! Desfrute dos poderes sem limites."},{id:"perm-spin",name:"『 🍃 』SPIN PERMANENTE",image:"b8f8323e-7d92-40e6-88e1-4bc3cc29ed50.png",price:19.9,description:"Fruta Spin Permanente! Desfrute dos poderes sem limites."},{id:"perm-chop",name:"『 🍉 』 CHOP PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:6.99,description:"Fruta Chop Permanente! Desfrute dos poderes sem limites."},{id:"perm-spring",name:"『 🌱 』SPRING PERMANENTE",image:"dea94660-62b2-4533-87f4-583b12e81895.png",price:19.9,description:"Fruta Spring Permanente! Desfrute dos poderes sem limites."},{id:"perm-bomb",name:"『 💣 』BOMB PERMANENTE",image:"d88ad464-1824-4f3d-8f8c-6fe602004380.png",price:19.9,description:"Fruta Bomb Permanente! Desfrute dos poderes sem limites."},{id:"perm-smoke",name:"『 ☁️ 』SMOKE PERMANENTE",image:"8cc1d927-179e-4feb-89f9-6e0021932c07.png",price:19.9,description:"Fruta Smoke Permanente! Desfrute dos poderes sem limites."},{id:"perm-spike",name:"『 🌵 』SPIKE PERMANENTE",image:"7e1313fb-9458-4ede-8b3b-72fb51b27a63.png",price:19.9,description:"Fruta Spike Permanente! Desfrute dos poderes sem limites."},{id:"perm-flame",name:"『 🔥 』FLAME PERMANENTE",image:"05c4b16c-d8a8-46e5-9e36-a5018fa43ba9.png",price:19.9,description:"Fruta Flame Permanente! Desfrute dos poderes sem limites."},{id:"perm-falcon",name:"『 🦅 』EAGLE PERMANENTE",image:"f79a669e-8ee0-44d3-aac0-879adab4536c.png",price:19.9,description:"Fruta Eagle Permanente! Desfrute dos poderes sem limites."},{id:"perm-ice",name:"『 🧊 』ICE PERMANENTE",image:"c0a850b4-254a-4df9-ba5a-5bc6f79ab40e.png",price:19.9,description:"Fruta Ice Permanente! Desfrute dos poderes sem limites."},{id:"perm-sand",name:"『 ⌛ 』SAND PERMANENTE",image:"0bce80da-df2a-4c8a-9854-57f21882119d.png",price:19.9,description:"Fruta Sand Permanente! Desfrute dos poderes sem limites."},{id:"perm-dark",name:"『 🌑 』DARK PERMANENTE",image:"7f727251-1b49-4b33-bb55-2bd44e91f4e2.png",price:19.9,description:"Fruta Dark Permanente! Desfrute dos poderes sem limites."},{id:"perm-diamond",name:"『 💎 』DIAMOND PERMANENTE",image:"5558f429-664e-47e4-899d-ea6c775fb03a.png",price:19.9,description:"Fruta Diamond Permanente! Desfrute dos poderes sem limites."},{id:"perm-light",name:"『 ✨ 』LIGHT PERMANENTE",image:"46e2b8a8-3bb6-4c5d-9861-dc5e9f74cfdc.png",price:19.9,description:"Fruta Light Permanente! Desfrute dos poderes sem limites."},{id:"perm-rubber",name:"『 🥊 』RUBBER PERMANENTE",image:"ebfef83e-9f53-4899-9147-99ea021d8a1a.png",price:19.9,description:"Fruta Rubber Permanente! Desfrute dos poderes sem limites."},{id:"perm-barrier",name:"『 🍉 』 BARRIER PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:32.99,description:"Fruta Barrier Permanente! Desfrute dos poderes sem limites."},{id:"perm-magma",name:"『 🌋 』MAGMA PERMANENTE",image:"ba9afcf3-f330-4952-a29d-1bb542da298e.png",price:19.9,description:"Fruta Magma Permanente! Desfrute dos poderes sem limites."},{id:"perm-quake",name:"『 🍉 』 QUAKE PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:39.99,description:"Fruta Quake Permanente! Desfrute dos poderes sem limites."},{id:"perm-buddha",name:"『 🍉 』 BUDDHA PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:44.99,description:"Fruta Buddha Permanente! Desfrute dos poderes sem limites."},{id:"perm-love",name:"『 🍉 』 LOVE PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:47.99,description:"Fruta Love Permanente! Desfrute dos poderes sem limites."},{id:"perm-spider",name:"『 🕷️ 』SPIDER PERMANENTE",image:"755937cd-b479-4555-889e-03fce15b2faf.png",price:19.9,description:"Fruta Spider Permanente! Desfrute dos poderes sem limites."},{id:"perm-sound",name:"『 🎶 』SOUND PERMANENTE",image:"71ab17dc-b5a6-48a8-8b03-82fc78ca4592.png",price:19.9,description:"Fruta Sound Permanente! Desfrute dos poderes sem limites."},{id:"perm-phoenix",name:"『 🔥 』PHOENIX PERMANENTE",image:"498e346d-0ef4-4c4d-8898-5a0c397c6573.png",price:19.9,description:"Fruta Phoenix Permanente! Desfrute dos poderes sem limites."},{id:"perm-portal",name:"『 🌀 』PORTAL PERMANENTE",image:"ad47ce05-f368-426a-85a1-cc0483d6fcea.png",price:19.9,description:"Fruta Portal Permanente! Desfrute dos poderes sem limites."},{id:"perm-rumble",name:"『 ⛈️ 』RUMBLE PERMANENTE",image:"f0601cc4-6de8-4024-963a-e7dfe18821f9.png",price:19.9,description:"Fruta Rumble Permanente! Desfrute dos poderes sem limites."},{id:"perm-pain",name:"『 ☠️ 』PAIN PERMANENTE",image:"21fb1457-a460-4d37-b15f-a3131bfbefbb.png",price:19.9,description:"Fruta Pain Permanente! Desfrute dos poderes sem limites."},{id:"perm-blizzard",name:"『 ☃️ 』BLIZZARD PERMANENTE",image:"20a185ee-5512-4662-a815-78b872a66dae.png",price:19.9,description:"Fruta Blizzard Permanente! Desfrute dos poderes sem limites."},{id:"perm-gravity",name:"『 🪨 』GRAVITY PERMANENTE",image:"08a3bec2-7316-401e-8bf2-60d3edd43d0c.png",price:19.9,description:"Fruta Gravity Permanente! Desfrute dos poderes sem limites."},{id:"perm-mammoth",name:"『 🥣 』MAMMOTH PERMANENTE",image:"84e629cf-2ff8-4a46-9b11-43b832568e01.png",price:19.9,description:"Fruta Mammoth Permanente! Desfrute dos poderes sem limites."},{id:"perm-dough",name:"『 🍩 』DOUGH PERMANENTE",image:"0b262b28-798f-4934-a688-7f0b3ede4422.png",price:19.9,description:"Fruta Dough Permanente! Desfrute dos poderes sem limites."},{id:"perm-shadow",name:"『 👾 』SHADOW PERMANENTE",image:"f68b323b-de23-48e9-af83-f29773941872.png",price:19.9,description:"Fruta Shadow Permanente! Desfrute dos poderes sem limites."},{id:"perm-venom",name:"『 🧪 』VENOM PERMANENTE",image:"eee3262a-ee85-4f55-929e-bb725d3856b5.png",price:19.9,description:"Fruta Venom Permanente! Desfrute dos poderes sem limites."},{id:"perm-control",name:"『 🕹️ 』CONTROL PERMANENTE",image:"072955c1-b259-4a6a-9e3f-a96de73b6e3c.png",price:19.9,description:"Fruta Control Permanente! Desfrute dos poderes sem limites."},{id:"perm-spirit",name:"『 👻 』SPIRIT PERMANENTE",image:"275feebd-8def-4780-8aca-d3b9bda44c68.png",price:19.9,description:"Fruta Spirit Permanente! Desfrute dos poderes sem limites."},{id:"perm-dragon",name:"『 🐲 』DRAGON PERMANENTE",image:"cc48e776-8d39-4d9f-b8fd-c060de027918.png",price:19.9,description:"Fruta Dragon Permanente! Desfrute dos poderes sem limites."},{id:"perm-leopard",name:"『 🍉 』 LEOPARD PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:129.99,description:"Fruta Leopard Permanente! Desfrute dos poderes sem limites."},{id:"perm-kitsune",name:"『 🦊 』KITSUNE PERMANENTE",image:"8fd3762c-252f-44dc-9574-b4995a98c8f0.png",price:19.9,description:"Fruta Kitsune Permanente! Desfrute dos poderes sem limites."},{id:"perm-trex",name:"『 🦖 』T-REX PERMANENTE",image:"5a226b06-2800-4c67-8b05-a0c54b6cbf56.png",price:19.9,description:"Fruta T-Rex Permanente! Desfrute dos poderes sem limites."},{id:"perm-gas",name:"『 💨 』GAS PERMANENTE",image:"a0a1f864-5a85-4181-b1a0-bd8f0d24eb2b.png",price:19.9,description:"Fruta Gas Permanente! Desfrute dos poderes sem limites."},{id:"perm-mochi",name:"『 🍉 』 MOCHI PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:169.99,description:"Fruta Mochi Permanente! Desfrute dos poderes sem limites."},{id:"perm-gear5",name:"『 🍉 』 GEAR 5 PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:199.99,description:"Fruta Gear 5 Permanente! Desfrute dos poderes sem limites."}],ma=[{id:"caixa-estilos-lutas",name:"『 🎁 』CAIXA DE ESTILOS DE LUTAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:8.99,description:`『 🎁 』CAIXA DE ESTILOS DE LUTAS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"caixa-espadas-armas",name:"『 🎁 』CAIXA DE ESPADAS E ARMAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:9.99,description:`『 🎁 』CAIXA DE ESPADAS E ARMAS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"caixa-frutas-miticas",name:"『 🎁 』CAIXA DE FRUTAS MÍTICAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:14.99,description:`『 🎁 』CAIXA DE FRUTAS MÍTICAS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"caixa-racas-v4-full",name:"『 🎁 』CAIXA DE RAÇAS V4 FULL",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:14.99,description:`『 🎁 』CAIXA DE RAÇAS V4 FULL

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"caixa-gamepass",name:"『 🎁 』CAIXA DE GAMEPASS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:19.99,description:`『 🎁 』CAIXA DE GAMEPASS

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"caixa-frutas-permanentes",name:"『 🎁 』CAIXA DE FRUTAS PERMANENTES",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:29.99,description:`『 🎁 』CAIXA DE FRUTAS PERMANENTES

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"conta-aleatoria-level-1000",name:"『 🎲 』 CONTA LEVEL 1000~2800",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:4.99,description:`『 🎲 』 CONTA LEVEL 1000~2800

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"conta-aleatoria-level-1500",name:"『 🎲 』 CONTA LEVEL 1500~2800",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:5.99,description:`『 🎲 』 CONTA LEVEL 1500~2800

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"conta-aleatoria-level-2000",name:"『 🎲 』 CONTA LEVEL 2000~2800",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:6.99,description:`『 🎲 』 CONTA LEVEL 2000~2800

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"godhuman-level-maximo",name:"『 👊 』 GODHUMAN + LEVEL MÁXIMO",image:"364c2a56-107e-47d9-806d-5ef7eb2a9578.png",price:8.99,description:`『 👊 』 GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"sanguine-godhuman-level-maximo",name:"『 🩸 』 SANGUINE ART + GODHUMAN + LEVEL MÁXIMO",image:"664160e6-70a5-4a11-867c-9a54b307bc92.png",price:19.99,description:`『 🩸 』 SANGUINE ART + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"sanguine-cdk-godhuman-level-maximo",name:"『 🩸 』 SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO",image:"35ce98e3-6d64-435a-bcab-aaaebd7dffde.png",price:29.99,description:`『 🩸 』 SANGUINE ART + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"skull-guitar-godhuman-level-maximo",name:"『 🎸 』 SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO",image:"dc329519-9185-463d-9f47-04eedff5009c.png",price:9.99,description:`『 🎸 』 SKULL GUITAR + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"shark-anchor-cdk-godhuman-level-maximo",name:"『 ⚓️⚔️ 』 SHARK ANCHOR + CDK + GODHUMAN + LEVEL MÁXIMO",image:"b89bcbbf-51e2-460f-ac77-671a142b338d.png",price:24.99,description:`『 ⚓️⚔️ 』 SHARK ANCHOR + CDK + GODHUMAN + LEVEL MÁXIMO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"buddha-fruta-bf",name:"『 🍍 』 BUDDHA NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:8.99,description:`『 🍍 』 BUDDHA NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"portal-fruta-bf",name:"『 🍍 』 PORTAL NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:9.99,description:`『 🍍 』 PORTAL NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"magma-v2-fruta-bf",name:"『 🍍 』 MAGMA V2 DESPERTADA",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:14.99,description:`『 🍍 』 MAGMA V2 DESPERTADA

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"buddha-v2-fruta-bf",name:"『 🍍 』 BUDDHA V2 DESPERTADA",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:16.99,description:`『 🍍 』 BUDDHA V2 DESPERTADA

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"mammoth-fruta-bf",name:"『 🍍 』 MAMMOTH NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:18.99,description:`『 🍍 』 MAMMOTH NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"trex-fruta-bf",name:"『 🍍 』 T-REX NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:19.99,description:`『 🍍 』 T-REX NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"shadow-fruta-bf",name:"『 🍍 』 SHADOW NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:21.99,description:`『 🍍 』 SHADOW NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gravity-fruta-bf",name:"『 🍍 』 GRAVITY NO INVENTÁRIO (REWORK)",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:22.99,description:`『 🍍 』 GRAVITY NO INVENTÁRIO (REWORK)

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"dough-fruta-bf",name:"『 🍍 』 DOUGH NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:24.99,description:`『 🍍 』 DOUGH NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gas-fruta-bf",name:"『 🍍 』 GAS NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:27.99,description:`『 🍍 』 GAS NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"dough-v2-fruta-bf",name:"『 🍍 』 DOUGH V2 DESPERTADA",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:29.99,description:`『 🍍 』 DOUGH V2 DESPERTADA

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"dragon-fruta-bf",name:"『 🍍 』 DRAGON NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:32.99,description:`『 🍍 』 DRAGON NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"leopard-fruta-bf",name:"『 🍍 』 LEOPARD NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:34.99,description:`『 🍍 』 LEOPARD NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"kitsune-fruta-bf",name:"『 🍍 』 KITSUNE NO INVENTÁRIO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:44.99,description:`『 🍍 』 KITSUNE NO INVENTÁRIO

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-human-bf",name:"『 👤 』 HUMAN V4 FULL",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:12.99,description:`『 👤 』 HUMAN V4 FULL

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-human-v3-bf",name:"『 👤 』 HUMAN V3",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:9.99,description:`『 👤 』 HUMAN V3

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-human-buddha-bf",name:"『 👤 』 HUMAN V4 FULL + BUDDHA V2",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:29.99,description:`『 👤 』 HUMAN V4 FULL + BUDDHA V2

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-human-dough-bf",name:"『 👤 』 HUMAN V4 FULL + DOUGH V2",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:39.99,description:`『 👤 』 HUMAN V4 FULL + DOUGH V2

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-human-leopard-bf",name:"『 👤 』 HUMAN V4 FULL + LEOPARD",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:44.99,description:`『 👤 』 HUMAN V4 FULL + LEOPARD

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-cyborg-bf",name:"『 👤 』 CYBORG V4 FULL",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:18.99,description:`『 👤 』 CYBORG V4 FULL

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-cyborg-v3-bf",name:"『 👤 』 CYBORG V3",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:14.99,description:`『 👤 』 CYBORG V3

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-cyborg-buddha-bf",name:"『 👤 』 CYBORG V4 FULL + BUDDHA V2",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:34.99,description:`『 👤 』 CYBORG V4 FULL + BUDDHA V2

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-cyborg-dough-bf",name:"『 👤 』 CYBORG V4 FULL + DOUGH V2",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:44.99,description:`『 👤 』 CYBORG V4 FULL + DOUGH V2

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-cyborg-dragon-bf",name:"『 👤 』 CYBORG V4 FULL + DRAGON",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:49.99,description:`『 👤 』 CYBORG V4 FULL + DRAGON

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-fish-bf",name:"『 👤 』 FISH V4 FULL",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:21.99,description:`『 👤 』 FISH V4 FULL

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-fish-v3-bf",name:"『 👤 』 FISH V3",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:16.99,description:`『 👤 』 FISH V3

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-fish-buddha-bf",name:"『 👤 』 FISH V4 FULL + BUDDHA V2",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:36.99,description:`『 👤 』 FISH V4 FULL + BUDDHA V2

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-fish-dough-bf",name:"『 👤 』 FISH V4 FULL + DOUGH V2",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:46.99,description:`『 👤 』 FISH V4 FULL + DOUGH V2

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-fish-leopard-bf",name:"『 👤 』 FISH V4 FULL + LEOPARD",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:52.99,description:`『 👤 』 FISH V4 FULL + LEOPARD

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-mink-bf",name:"『 👤 』 MINK V4 FULL",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:24.99,description:`『 👤 』 MINK V4 FULL

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-mink-v3-bf",name:"『 👤 』 MINK V3",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:19.99,description:`『 👤 』 MINK V3

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-mink-buddha-bf",name:"『 👤 』 MINK V4 FULL + BUDDHA V2",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:39.99,description:`『 👤 』 MINK V4 FULL + BUDDHA V2

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-mink-dough-bf",name:"『 👤 』 MINK V4 FULL + DOUGH V2",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:49.99,description:`『 👤 』 MINK V4 FULL + DOUGH V2

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-mink-dragon-bf",name:"『 👤 』 MINK V4 FULL + DRAGON",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:54.99,description:`『 👤 』 MINK V4 FULL + DRAGON

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-mink-leopard-bf",name:"『 👤 』 MINK V4 FULL + LEOPARD",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:56.99,description:`『 👤 』 MINK V4 FULL + LEOPARD

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-mink-kitsune-bf",name:"『 👤 』 MINK V4 FULL + KITSUNE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:64.99,description:`『 👤 』 MINK V4 FULL + KITSUNE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-shark-v4-bf",name:"『 👤 』 SHARK V4 FULL",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:22.99,description:`『 👤 』 SHARK V4 FULL

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-shark-v3-bf",name:"『 👤 』 SHARK V3",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:17.99,description:`『 👤 』 SHARK V3

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-shark-buddha-bf",name:"『 👤 』 SHARK V4 FULL + BUDDHA V2",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:37.99,description:`『 👤 』 SHARK V4 FULL + BUDDHA V2

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-shark-dough-bf",name:"『 👤 』 SHARK V4 FULL + DOUGH V2",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:47.99,description:`『 👤 』 SHARK V4 FULL + DOUGH V2

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-shark-leopard-bf",name:"『 👤 』 SHARK V4 FULL + LEOPARD",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:53.99,description:`『 👤 』 SHARK V4 FULL + LEOPARD

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-angel-v4-bf",name:"『 👤 』 ANGEL V4 FULL",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:20.99,description:`『 👤 』 ANGEL V4 FULL

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-angel-v3-bf",name:"『 👤 』 ANGEL V3",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:15.99,description:`『 👤 』 ANGEL V3

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-ghoul-v4-bf",name:"『 👤 』 GHOUL V4 FULL",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:23.99,description:`『 👤 』 GHOUL V4 FULL

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"raca-ghoul-v3-bf",name:"『 👤 』 GHOUL V3",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:18.99,description:`『 👤 』 GHOUL V3

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"especial-combo-ultimate",name:"『 🌟 』 COMBO ULTIMATE - TODAS FRUTAS MÍTICAS + TODAS RAÇAS V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:299.99,description:"Conta completa com todas as frutas míticas e todas as raças V4 full! O pacote mais completo disponível."},{id:"especial-conta-vip-premium",name:"『 🌟 』 CONTA VIP PREMIUM - LEVEL MAX + 10 MÍTICAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:199.99,description:"Conta VIP com level máximo e 10 frutas míticas aleatórias no inventário!"},{id:"especial-pacote-deus",name:"『 🌟 』 PACOTE DEUS - KITSUNE + LEOPARD + DRAGON",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:149.99,description:"As 3 frutas mais poderosas juntas! Kitsune, Leopard e Dragon no inventário."},{id:"especial-master-swordsman",name:"『 🌟 』 MASTER SWORDSMAN - TODAS ESPADAS LENDÁRIAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:129.99,description:"Conta com todas as espadas lendárias incluindo CDK, Shark Anchor e muito mais!"},{id:"especial-pvp-destroyer",name:"『 🌟 』 PVP DESTROYER - MINK V4 + DOUGH V2 + CDK",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:89.99,description:"Setup perfeito para PVP! Mink V4 Full, Dough V2 despertada e CDK."},{id:"especial-farming-king",name:"『 🌟 』 FARMING KING - BUDDHA V2 + LEOPARD + GODHUMAN",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:79.99,description:"Melhor setup para farm! Buddha V2, Leopard no inv e Godhuman."},{id:"especial-colecao-completa-v4",name:"『 🌟 』 COLEÇÃO COMPLETA - TODAS AS RAÇAS V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:249.99,description:"Todas as raças V4 full desbloqueadas em uma única conta!"},{id:"especial-mega-pack-frutas",name:"『 🌟 』 MEGA PACK - 15 FRUTAS MÍTICAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:179.99,description:"15 frutas míticas diferentes no inventário! Máxima variedade."},{id:"especial-speedrunner",name:"『 🌟 』 SPEEDRUNNER - HUMAN V4 + KITSUNE + SANGUINE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:119.99,description:"Setup ideal para speedrun! Human V4, Kitsune e Sanguine Art."},{id:"especial-boss-hunter",name:"『 🌟 』 BOSS HUNTER - DOUGH V2 + CDK + CYBORG V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:94.99,description:"Perfeito para caçar bosses! Dough V2, CDK e Cyborg V4 Full."},{id:"especial-kit-iniciante-pro",name:"『 🌟 』 KIT INICIANTE PRO - BUDDHA + MAGMA V2 + GODHUMAN",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:39.99,description:"Melhor custo-benefício para iniciar! Buddha, Magma V2 e Godhuman."},{id:"especial-all-awakened",name:"『 🌟 』 ALL AWAKENED - 5 FRUTAS DESPERTADAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:139.99,description:"5 frutas míticas completamente despertadas! Buddha, Dough, Magma e mais."},{id:"especial-whale-account",name:"『 🌟 』 WHALE ACCOUNT - TUDO DESBLOQUEADO",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:499.99,description:"A conta definitiva! Todas frutas, raças V4, espadas e estilos de luta!"},{id:"especial-triple-mythic",name:"『 🌟 』 TRIPLE MYTHIC - 3 FRUTAS MÍTICAS ALEATÓRIAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:59.99,description:"3 frutas míticas premium aleatórias no inventário! Surpresa garantida."},{id:"especial-arena-champion",name:"『 🌟 』 ARENA CHAMPION - SHARK V4 + GAS + SHARK ANCHOR",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:99.99,description:"Domine a arena! Shark V4, Gas e Shark Anchor."},{id:"especial-raid-master",name:"『 🌟 』 RAID MASTER - BUDDHA V2 + HUMAN V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:49.99,description:"Melhor setup para raids! Buddha V2 despertada e Human V4 Full."},{id:"especial-sea-beast-slayer",name:"『 🌟 』 SEA BEAST SLAYER - FISH V4 + LEOPARD + SKULL GUITAR",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:109.99,description:"Elimine Sea Beasts facilmente! Fish V4, Leopard e Skull Guitar."},{id:"especial-versatile-warrior",name:"『 🌟 』 VERSATILE WARRIOR - 6 FRUTAS + 3 RAÇAS V3",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:84.99,description:"Máxima versatilidade! 6 frutas míticas e 3 raças V3 desbloqueadas."},{id:"especial-bounty-hunter",name:"『 🌟 』 BOUNTY HUNTER - PORTAL + SHADOW + MINK V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:74.99,description:"Caçe recompensas! Portal, Shadow e Mink V4 Full."},{id:"especial-divine-power",name:"『 🌟 』 DIVINE POWER - ANGEL V4 + KITSUNE + SANGUINE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:129.99,description:"Poder divino! Angel V4, Kitsune e Sanguine Art."},{id:"especial-grind-machine",name:"『 🌟 』 GRIND MACHINE - BUDDHA V2 + GODHUMAN + HUMAN V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:64.99,description:"Máquina de farm! Buddha V2, Godhuman e Human V4."},{id:"especial-demon-slayer",name:"『 🌟 』 DEMON SLAYER - GHOUL V4 + SHADOW + CDK",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:89.99,description:"Caçador de demônios! Ghoul V4, Shadow e CDK."},{id:"especial-legendary-combo",name:"『 🌟 』 LEGENDARY COMBO - DRAGON + T-REX + MAMMOTH",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:99.99,description:"Combo lendário! Dragon, T-Rex e Mammoth no inventário."},{id:"especial-pvp-beast",name:"『 🌟 』 PVP BEAST - LEOPARD + CDK + MINK V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:119.99,description:"Besta do PVP! Leopard, CDK e Mink V4 Full."},{id:"especial-ultimate-defense",name:"『 🌟 』 ULTIMATE DEFENSE - BUDDHA V2 + CYBORG V4 + GODHUMAN",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:69.99,description:"Defesa imbatível! Buddha V2, Cyborg V4 e Godhuman."},{id:"especial-element-master",name:"『 🌟 』 ELEMENT MASTER - GAS + MAGMA V2 + GRAVITY",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:79.99,description:"Mestre dos elementos! Gas, Magma V2 e Gravity rework."},{id:"especial-speed-demon",name:"『 🌟 』 SPEED DEMON - KITSUNE + PORTAL + HUMAN V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:109.99,description:"Velocidade máxima! Kitsune, Portal e Human V4."},{id:"especial-rare-collection",name:"『 🌟 』 RARE COLLECTION - 8 FRUTAS MÍTICAS PREMIUM",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:159.99,description:"Coleção rara! 8 frutas míticas premium no inventário."},{id:"especial-tank-build",name:"『 🌟 』 TANK BUILD - BUDDHA V2 + SHARK V4 + SHARK ANCHOR",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:84.99,description:"Build tanque! Buddha V2, Shark V4 e Shark Anchor."},{id:"especial-assassin-pro",name:"『 🌟 』 ASSASSIN PRO - SHADOW + CDK + GHOUL V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:79.99,description:"Assassino profissional! Shadow, CDK e Ghoul V4."},{id:"especial-sky-dominator",name:"『 🌟 』 SKY DOMINATOR - DRAGON + ANGEL V4 + SANGUINE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:94.99,description:"Domine os céus! Dragon, Angel V4 e Sanguine Art."},{id:"especial-berserker-fury",name:"『 🌟 』 BERSERKER FURY - DOUGH V2 + LEOPARD + GODHUMAN",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:99.99,description:"Fúria berserker! Dough V2, Leopard e Godhuman."},{id:"especial-ocean-king",name:"『 🌟 』 OCEAN KING - FISH V4 + GAS + SHARK ANCHOR",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:89.99,description:"Rei dos oceanos! Fish V4, Gas e Shark Anchor."},{id:"especial-hybrid-warrior",name:"『 🌟 』 HYBRID WARRIOR - DOUGH V2 + BUDDHA V2 + CYBORG V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:109.99,description:"Guerreiro híbrido! Dough V2, Buddha V2 e Cyborg V4."},{id:"especial-elemental-chaos",name:"『 🌟 』 ELEMENTAL CHAOS - 4 FRUTAS ELEMENTAIS DESPERTADAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:119.99,description:"Caos elemental! 4 frutas elementais totalmente despertadas."},{id:"especial-mythic-arsenal",name:"『 🌟 』 MYTHIC ARSENAL - 12 FRUTAS MÍTICAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:189.99,description:"Arsenal mítico! 12 frutas míticas diferentes no inventário."},{id:"especial-supreme-combo",name:"『 🌟 』 SUPREME COMBO - KITSUNE + DOUGH V2 + MINK V4 + CDK",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:169.99,description:"Combo supremo! Kitsune, Dough V2, Mink V4 e CDK."},{id:"especial-immortal-build",name:"『 🌟 』 IMMORTAL BUILD - BUDDHA V2 + ANGEL V4 + SANGUINE + GODHUMAN",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:139.99,description:"Build imortal! Buddha V2, Angel V4, Sanguine e Godhuman."},{id:"especial-god-tier-account",name:"『 🌟 』 GOD TIER ACCOUNT - 20 FRUTAS MÍTICAS + 5 RAÇAS V4",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:349.99,description:"Conta God Tier! 20 frutas míticas e 5 raças V4 full desbloqueadas."},{id:"especial-ultimate-warrior",name:"『 🌟 』 ULTIMATE WARRIOR - TODAS ESPADAS + TODOS ESTILOS + 5 FRUTAS",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:229.99,description:"Guerreiro supremo! Todas espadas, estilos de luta e 5 frutas míticas."},{id:"gamepass-2x-mastery",name:"『 🎫 』 GAMEPASS 2X MASTERY",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:19.99,description:`『 🎫 』 GAMEPASS 2X MASTERY

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-2x-money",name:"『 🎫 』 GAMEPASS 2X MONEY",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:24.99,description:`『 🎫 』 GAMEPASS 2X MONEY

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-2x-exp",name:"『 🎫 』 GAMEPASS 2X EXP",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:29.99,description:`『 🎫 』 GAMEPASS 2X EXP

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-fast-boat",name:"『 🎫 』 GAMEPASS FAST BOAT",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:14.99,description:`『 🎫 』 GAMEPASS FAST BOAT

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-fruit-storage",name:"『 🎫 』 GAMEPASS FRUIT STORAGE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:34.99,description:`『 🎫 』 GAMEPASS FRUIT STORAGE

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-race-reroll",name:"『 🎫 』 GAMEPASS RACE REROLL",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:12.99,description:`『 🎫 』 GAMEPASS RACE REROLL

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-combo-premium",name:"『 🎫 』 GAMEPASS COMBO PREMIUM (2X EXP + 2X MONEY + 2X MASTERY)",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:59.99,description:`『 🎫 』 GAMEPASS COMBO PREMIUM (2X EXP + 2X MONEY + 2X MASTERY)

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"gamepass-all-in-one",name:"『 🎫 』 GAMEPASS ALL IN ONE (TODOS OS GAMEPASSES)",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:89.99,description:`『 🎫 』 GAMEPASS ALL IN ONE (TODOS OS GAMEPASSES)

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"perm-kilo",name:"『 🍉 』 KILO PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:4.99,description:"Fruta Kilo Permanente! Desfrute dos poderes sem limites."},{id:"perm-spin",name:"『 🍉 』 SPIN PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:5.99,description:"Fruta Spin Permanente! Desfrute dos poderes sem limites."},{id:"perm-chop",name:"『 🍉 』 CHOP PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:6.99,description:"Fruta Chop Permanente! Desfrute dos poderes sem limites."},{id:"perm-spring",name:"『 🍉 』 SPRING PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:7.99,description:"Fruta Spring Permanente! Desfrute dos poderes sem limites."},{id:"perm-bomb",name:"『 🍉 』 BOMB PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:8.99,description:"Fruta Bomb Permanente! Desfrute dos poderes sem limites."},{id:"perm-smoke",name:"『 🍉 』 SMOKE PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:9.99,description:"Fruta Smoke Permanente! Desfrute dos poderes sem limites."},{id:"perm-spike",name:"『 🍉 』 SPIKE PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:10.99,description:"Fruta Spike Permanente! Desfrute dos poderes sem limites."},{id:"perm-flame",name:"『 🍉 』 FLAME PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:12.99,description:"Fruta Flame Permanente! Desfrute dos poderes sem limites."},{id:"perm-falcon",name:"『 🍉 』 FALCON PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:14.99,description:"Fruta Falcon Permanente! Desfrute dos poderes sem limites."},{id:"perm-ice",name:"『 🍉 』 ICE PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:16.99,description:"Fruta Ice Permanente! Desfrute dos poderes sem limites."},{id:"perm-sand",name:"『 🍉 』 SAND PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:18.99,description:"Fruta Sand Permanente! Desfrute dos poderes sem limites."},{id:"perm-dark",name:"『 🍉 』 DARK PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:21.99,description:"Fruta Dark Permanente! Desfrute dos poderes sem limites."},{id:"perm-diamond",name:"『 🍉 』 DIAMOND PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:24.99,description:"Fruta Diamond Permanente! Desfrute dos poderes sem limites."},{id:"perm-light",name:"『 🍉 』 LIGHT PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:27.99,description:"Fruta Light Permanente! Desfrute dos poderes sem limites."},{id:"perm-rubber",name:"『 🍉 』 RUBBER PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:29.99,description:"Fruta Rubber Permanente! Desfrute dos poderes sem limites."},{id:"perm-barrier",name:"『 🍉 』 BARRIER PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:32.99,description:"Fruta Barrier Permanente! Desfrute dos poderes sem limites."},{id:"perm-magma",name:"『 🍉 』 MAGMA PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:35.99,description:"Fruta Magma Permanente! Desfrute dos poderes sem limites."},{id:"perm-quake",name:"『 🍉 』 QUAKE PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:39.99,description:"Fruta Quake Permanente! Desfrute dos poderes sem limites."},{id:"perm-buddha",name:"『 🍉 』 BUDDHA PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:44.99,description:"Fruta Buddha Permanente! Desfrute dos poderes sem limites."},{id:"perm-love",name:"『 🍉 』 LOVE PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:47.99,description:"Fruta Love Permanente! Desfrute dos poderes sem limites."},{id:"perm-spider",name:"『 🍉 』 SPIDER PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:49.99,description:"Fruta Spider Permanente! Desfrute dos poderes sem limites."},{id:"perm-sound",name:"『 🍉 』 SOUND PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:52.99,description:"Fruta Sound Permanente! Desfrute dos poderes sem limites."},{id:"perm-phoenix",name:"『 🍉 』 PHOENIX PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:56.99,description:"Fruta Phoenix Permanente! Desfrute dos poderes sem limites."},{id:"perm-portal",name:"『 🍉 』 PORTAL PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:59.99,description:"Fruta Portal Permanente! Desfrute dos poderes sem limites."},{id:"perm-rumble",name:"『 🍉 』 RUMBLE PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:64.99,description:"Fruta Rumble Permanente! Desfrute dos poderes sem limites."},{id:"perm-pain",name:"『 🍉 』 PAIN PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:69.99,description:"Fruta Pain Permanente! Desfrute dos poderes sem limites."},{id:"perm-blizzard",name:"『 🍉 』 BLIZZARD PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:74.99,description:"Fruta Blizzard Permanente! Desfrute dos poderes sem limites."},{id:"perm-gravity",name:"『 🍉 』 GRAVITY PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:79.99,description:"Fruta Gravity Permanente! Desfrute dos poderes sem limites."},{id:"perm-mammoth",name:"『 🍉 』 MAMMOTH PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:84.99,description:"Fruta Mammoth Permanente! Desfrute dos poderes sem limites."},{id:"perm-dough",name:"『 🍉 』 DOUGH PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:89.99,description:"Fruta Dough Permanente! Desfrute dos poderes sem limites."},{id:"perm-shadow",name:"『 🍉 』 SHADOW PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:94.99,description:"Fruta Shadow Permanente! Desfrute dos poderes sem limites."},{id:"perm-venom",name:"『 🍉 』 VENOM PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:99.99,description:"Fruta Venom Permanente! Desfrute dos poderes sem limites."},{id:"perm-control",name:"『 🍉 』 CONTROL PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:104.99,description:"Fruta Control Permanente! Desfrute dos poderes sem limites."},{id:"perm-spirit",name:"『 🍉 』 SPIRIT PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:109.99,description:"Fruta Spirit Permanente! Desfrute dos poderes sem limites."},{id:"perm-dragon",name:"『 🍉 』 DRAGON PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:119.99,description:"Fruta Dragon Permanente! Desfrute dos poderes sem limites."},{id:"perm-leopard",name:"『 🍉 』 LEOPARD PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:129.99,description:"Fruta Leopard Permanente! Desfrute dos poderes sem limites."},{id:"perm-kitsune",name:"『 🍉 』 KITSUNE PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:139.99,description:"Fruta Kitsune Permanente! Desfrute dos poderes sem limites."},{id:"perm-trex",name:"『 🍉 』 T-REX PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:149.99,description:"Fruta T-Rex Permanente! Desfrute dos poderes sem limites."},{id:"perm-gas",name:"『 🍉 』 GAS PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:159.99,description:"Fruta Gas Permanente! Desfrute dos poderes sem limites."},{id:"perm-mochi",name:"『 🍉 』 MOCHI PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:169.99,description:"Fruta Mochi Permanente! Desfrute dos poderes sem limites."},{id:"perm-gear5",name:"『 🍉 』 GEAR 5 PERMANENTE",image:"https://i.ibb.co/YFXQNYRc/19a4e05a-704d-4a93-89bd-69d5f590f89c.png",price:199.99,description:"Fruta Gear 5 Permanente! Desfrute dos poderes sem limites."}];function pa(){return U}function ua(){return[...ea,...sa,...ma,...ca,...da,...na,...ra,...U,...ta,...ia]}const la=[{title:"🎁 CAIXA MISTERIOSA",products:[{id:"mystery-box-1",name:"『 🎁 』CAIXA DE ROBUX - ATÉ 50.000",image:"https://i.ibb.co/1txGBdyx/image.png",price:9.9,description:"Caixa misteriosa de Robux com até 50.000! Surpresa garantida com entrega imediata."},{id:"mystery-box-2",name:"『 🎁 』CAIXA DE ROBUX - ATÉ 100.000",image:"https://i.ibb.co/Q7RpFtLs/image.png",price:15.9,description:"Caixa misteriosa premium de Robux com até 100.000! A melhor surpresa para jogadores."}]},{title:"💰 ROBUX",products:[{id:"robux-1",name:"『 💵 』 100 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:4.99,description:`『 💵 』 100 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-2",name:"『 💵 』 200 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:9.99,description:`『 💵 』 200 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-3",name:"『 💵 』 300 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:14.99,description:`『 💵 』 300 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-4",name:"『 💵 』 400 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:19.99,description:`『 💵 』 400 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-5",name:"『 💵 』 500 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:24.99,description:`『 💵 』 500 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-6",name:"『 💵 』 600 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:29.99,description:`『 💵 』 600 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-7",name:"『 💵 』 700 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:34.99,description:`『 💵 』 700 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-8",name:"『 💵 』 800 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:39.99,description:`『 💵 』 800 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-9",name:"『 💵 』 900 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:44.99,description:`『 💵 』 900 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-10",name:"『 💵 』 1000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:49.99,description:`『 💵 』 1000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-11",name:"『 💵 』 2000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:99.99,description:`『 💵 』 2000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-12",name:"『 💵 』 3000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:149.99,description:`『 💵 』 3000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-13",name:"『 💵 』 4000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:199.99,description:`『 💵 』 4000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-14",name:"『 💵 』 5000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:249.99,description:`『 💵 』 5000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-15",name:"『 💵 』 6000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:299.99,description:`『 💵 』 6000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-16",name:"『 💵 』 7000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:349.99,description:`『 💵 』 7000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-17",name:"『 💵 』 8000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:399.99,description:`『 💵 』 8000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-18",name:"『 💵 』 9000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:449.99,description:`『 💵 』 9000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-19",name:"『 💵 』 10000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:499.99,description:`『 💵 』 10000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-20",name:"『 💵 』 20000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:999.99,description:`『 💵 』 20000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-21",name:"『 💵 』 30000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:1499.99,description:`『 💵 』 30000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-22",name:"『 💵 』 40000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:1999.99,description:`『 💵 』 40000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`},{id:"robux-23",name:"『 💵 』 50000 ROBUX",image:"https://i.ibb.co/ccNdmXNd/image.png",price:2499.99,description:`『 💵 』 50000 ROBUX

⚡ | A conta é entregue automaticamente?

R: Sim! Após a aprovação do pagamento, o próprio site libera os dados da conta na hora. Tudo 100% automático, sem precisar chamar suporte.

🚀 Por que escolher nossas contas?

Sabemos que muitos jogadores têm receio de comprar contas e acabar sendo enganados. Por isso, aqui trabalhamos com total transparência e compromisso com você.

✅ Contas de alta qualidade, melhores contas do mercado!

✅ 100% Seguras – Todas as contas são verificadas antes de serem enviadas para o cliente!`}]}];function ba(){return o.jsx(T,{categoryName:"ROBUX",categoryId:"robux",sections:la})}const va=Object.freeze(Object.defineProperty({__proto__:null,RobuxCategory:ba},Symbol.toStringTag,{value:"Module"})),ga=[{title:"🎁 CAIXAS MISTERIOSAS",products:[{id:"ninety-nine-nights-mystery-box-1",name:"『 💎 』CAIXA DE GEMAS - ATÉ 25.000",image:"https://i.ibb.co/dwYFLKrB/27ce9e9a-1da7-4e95-9daa-2d6ec41b4bac.png",price:9.99,description:"Caixa de gemas de 99 Noites na Floresta com até 25.000 gemas! Receba recursos exclusivos. Entrega imediata após confirmação de pagamento."},{id:"ninety-nine-nights-mystery-box-2",name:"『 💎 』CAIXA DE GEMAS - ATÉ 50.000",image:"https://i.ibb.co/dwYFLKrB/27ce9e9a-1da7-4e95-9daa-2d6ec41b4bac.png",price:19.99,description:"Caixa de gemas de 99 Noites na Floresta com até 50.000 gemas! Receba recursos valiosos. Entrega imediata após confirmação de pagamento."}]},{title:"💎 CONTAS",products:[{id:"ninety-nine-nights-account-1",name:"『 💎 』 1.000~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:9.99,description:"Pacote de gemas para 99 Noites na Floresta. Receba entre 1.000 e 50.000 gemas. Entrega imediata após confirmação de pagamento."},{id:"ninety-nine-nights-account-2",name:"『 💎 』 5.500~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:29.99,description:"Pacote de gemas para 99 Noites na Floresta. Receba entre 5.500 e 50.000 gemas. Entrega imediata após confirmação de pagamento."},{id:"ninety-nine-nights-account-3",name:"『 💎 』 6.000~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:34.99,description:"Pacote de gemas para 99 Noites na Floresta. Receba entre 6.000 e 50.000 gemas. Entrega imediata após confirmação de pagamento."},{id:"ninety-nine-nights-account-4",name:"『 💎 』 6.500~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:39.99,description:"Pacote de gemas para 99 Noites na Floresta. Receba entre 6.500 e 50.000 gemas. Entrega imediata após confirmação de pagamento."},{id:"ninety-nine-nights-account-5",name:"『 💎 』 7.000~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:44.99,description:"Pacote de gemas para 99 Noites na Floresta. Receba entre 7.000 e 50.000 gemas. Entrega imediata após confirmação de pagamento."},{id:"ninety-nine-nights-account-6",name:"『 💎 』 7.500~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:49.99,description:"Pacote de gemas para 99 Noites na Floresta. Receba entre 7.500 e 50.000 gemas. Entrega imediata após confirmação de pagamento."},{id:"ninety-nine-nights-account-7",name:"『 💎 』 8.000~50.000 GEMAS",image:"https://i.ibb.co/0jxz2hvY/5e9d45fc-17d2-4b32-9fe0-0ad013d23c35.png",price:54.99,description:"Pacote de gemas para 99 Noites na Floresta. Receba entre 8.000 e 50.000 gemas. Entrega imediata após confirmação de pagamento."}]}];function Aa(){return o.jsx(T,{categoryName:"99 NOITES NA FLORESTA",categoryId:"ninety-nine-nights",sections:ga})}const Na=Object.freeze(Object.defineProperty({__proto__:null,NinetyNineNightsCategory:Aa},Symbol.toStringTag,{value:"Module"}));function ha(){const r=pa(),i=[{title:"🌻 PLANTAS",products:r.filter(e=>e.id.startsWith("plants-brainrots-"))},{title:"🧠 BRAINROTS",products:r.filter(e=>e.id.startsWith("brainrots-"))},{title:"🎫 GAMEPASS",products:r.filter(e=>e.id.startsWith("plants-gamepass-"))}];return o.jsx(T,{categoryName:"PLANTS VS BRAINROTS",categoryId:"plants-brainrots",sections:i})}const Oa=Object.freeze(Object.defineProperty({__proto__:null,PlantsBrainrotsCategory:ha},Symbol.toStringTag,{value:"Module"}));function Sa(){const e=[{title:"🔑 STEAM KEYS",products:ua().filter(s=>s.id.startsWith("steam-"))}];return o.jsx(T,{categoryName:"STEAM",categoryId:"steam",sections:e})}const qa=Object.freeze(Object.defineProperty({__proto__:null,SteamCategory:Sa},Symbol.toStringTag,{value:"Module"}));export{Ea as B,fa as G,Na as N,Oa as P,va as R,Ra as S,pa as a,I as b,M as c,ua as d,qa as e,D as g,o as j,C as s,_ as u};
