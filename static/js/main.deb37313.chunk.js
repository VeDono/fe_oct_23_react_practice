(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,s,t){},13:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(4),r=t.n(a),i=(t(9),t(10),t(11),t(0));const n=e=>{let{sortedProducts:s}=e;return Object(i.jsx)("tbody",{children:s.map((e=>Object(i.jsxs)("tr",{"data-cy":"Product",children:[Object(i.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(i.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(i.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(i.jsx)("td",{"data-cy":"ProductUser",className:"m"===e.user.sex?"has-text-link":"has-text-danger",children:e.user.name})]},e.id)))})},d=()=>Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(i.jsx)("a",{href:"#/",children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(i.jsx)("a",{href:"#/",children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(i.jsx)("a",{href:"#/",children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(i.jsx)("a",{href:"#/",children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),l=e=>{let{sortedProducts:s}=e;return Object(i.jsx)("div",{className:"box table-container",children:s.length>0?Object(i.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(i.jsx)(d,{}),Object(i.jsx)(n,{sortedProducts:s})]}):Object(i.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})};var o=t(3),j=t.n(o);const h=e=>{let{searchQuery:s,resetFilters:t,selectedUserId:c,usersFromServer:a,setQueryForSeach:r,setSelectedUserId:n,categoriesFromServer:d}=e;return Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(i.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:j()({"is-active":""===c}),onClick:()=>n(""),children:"All"}),a.map((e=>Object(i.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:j()({"is-active":e.id===c}),onClick:()=>n(e.id),children:e.name},e.id)))]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:s,onChange:e=>r(e.target.value)}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),s&&Object(i.jsx)("span",{className:"icon is-right",children:Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:()=>r("")})})]})}),Object(i.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(i.jsx)("a",{"data-cy":"Category",className:"button mr-6 is-success",href:"#/",children:"All"}),d.map((e=>Object(i.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:e.title},e.id)))]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:()=>t(),children:"Reset all filters"})})]})})};var b=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],x=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}];const m=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((e=>{const s=x.find((s=>s.id===e.categoryId)),t=b.find((e=>e.id===s.ownerId));return{category:s,user:t,...e}}));const u=()=>{const[e,s]=Object(c.useState)(""),[t,a]=Object(c.useState)(""),r=function(e,s,t){return s||t?e.filter((e=>{const c=e.user.id,a=t.toLowerCase(),r=e.name.toLowerCase();return(!a||r.includes(a))&&(!s||c===s)})):e}(m,e,t);return Object(i.jsx)("div",{className:"section",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"Product Categories"}),Object(i.jsx)(h,{resetFilters:()=>{a(""),s("")},searchQuery:t,selectedUserId:e,usersFromServer:b,categoriesFromServer:x,setQueryForSeach:e=>a(e),setSelectedUserId:e=>s(e)}),Object(i.jsx)(l,{sortedProducts:r})]})})};r.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.deb37313.chunk.js.map