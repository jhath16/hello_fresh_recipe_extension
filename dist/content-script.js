(()=>{var e={994:e=>{e.exports={"¼":1/4,"½":.5,"¾":3/4,"⅓":1/3,"⅔":2/3,"⅛":1/8}},393:e=>{e.exports={ounce:"oz",cup:"cup",tablespoon:"Tbs",teaspoon:"tsp"}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{let e=n(393),t=n(994);document.onreadystatechange=function(n){if("complete"!=document.readyState)return;const r=document.querySelector("[data-test-id='deliveryButton'");let o=r.cloneNode(!0);o.setAttribute("id","add-button"),o.children[0].textContent="Add to list",o.style.marginRight="14px",r.parentNode.prepend(o),o.addEventListener("click",(n=>{if(n.currentTarget.classList.contains("disabled"))return;document.querySelector("#add-button").classList.add("disabled");let r={name:document.querySelector("[data-test-id='recipeDetailFragment.recipe-name']").textContent,sides:document.querySelector("[data-test-id='recipeDetailFragment.recipe-name']").nextSibling.textContent,time:document.querySelector("[data-translation-id='recipe-detail.preparation-time']").parentNode.nextSibling.textContent,description:document.querySelector("p").textContent,ingredients:[]},o=document.querySelectorAll(".fela-_g6xips .fela-_1qz307e");for(let n=0;n<o.length;n++){let i=o[n],[a,d]=i.children[0].textContent.split(" "),c=i.children[1].textContent;r.ingredients.push({amount:{number:Number(t[a]||a),unit:e[d]||d},name:c})}let i="recipe_"+window.location.pathname.replace("/recipes/","");console.log(r),chrome.storage.local.set({[i]:r})}))}})()})();