!function(){function t(t){c.setAttribute("data-overflowing",n(s,c))}function e(t){if(t){var e=t.getBoundingClientRect(),n=s.getBoundingClientRect().left,r=e.left-n;i.style.transform="translateX("+(r+s.scrollLeft)+"px) scaleX("+.01*e.width+")"}}function n(t,e){var n=e.getBoundingClientRect(),r=Math.floor(n.right),a=Math.floor(n.left),l=t.getBoundingClientRect(),o=Math.floor(l.right),i=Math.floor(l.left);return a>i&&r<o?"both":i<a?"left":o>r?"right":"none"}function r(t,e){for(var n=t.className.split(" "),r=0;r<n.length;r++)n[r]==e&&(n.splice(r,1),r--);t.className=n.join(" ")}var a={navBarTravelling:!1,navBarTravelDirection:"",navBarTravelDistance:150};document.documentElement.classList.remove("no-js"),document.documentElement.classList.add("js");var l=document.getElementById("pnAdvancerLeft"),o=document.getElementById("pnAdvancerRight"),i=document.getElementById("pnIndicator"),c=document.getElementById("pnProductNav"),s=document.getElementById("pnProductNavContents");c.setAttribute("data-overflowing",n(s,c)),e(c.querySelector('[aria-selected="true"]'));var d=0,u=!1;c.addEventListener("scroll",function(){d=window.scrollY,u||window.requestAnimationFrame(function(){t(d),u=!1}),u=!0}),l.addEventListener("click",function(){if(!0!==a.navBarTravelling){if("left"===n(s,c)||"both"===n(s,c)){var t=c.scrollLeft;t<2*a.navBarTravelDistance?s.style.transform="translateX("+t+"px)":s.style.transform="translateX("+a.navBarTravelDistance+"px)",s.classList.remove("pn-ProductNav_Contents-no-transition"),a.navBarTravelDirection="left",a.navBarTravelling=!0}c.setAttribute("data-overflowing",n(s,c))}}),o.addEventListener("click",function(){if(!0!==a.navBarTravelling){if("right"===n(s,c)||"both"===n(s,c)){var t=s.getBoundingClientRect().right,e=c.getBoundingClientRect().right,r=Math.floor(t-e);r<2*a.navBarTravelDistance?s.style.transform="translateX(-"+r+"px)":s.style.transform="translateX(-"+a.navBarTravelDistance+"px)",s.classList.remove("pn-ProductNav_Contents-no-transition"),a.navBarTravelDirection="right",a.navBarTravelling=!0}c.setAttribute("data-overflowing",n(s,c))}}),s.addEventListener("transitionend",function(){var t=window.getComputedStyle(s,null),e=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("transform"),n=Math.abs(parseInt(e.split(",")[4])||0);s.style.transform="none",s.classList.add("pn-ProductNav_Contents-no-transition"),"left"===a.navBarTravelDirection?c.scrollLeft=c.scrollLeft-n:c.scrollLeft=c.scrollLeft+n,a.navBarTravelling=!1},!1),s.addEventListener("click",function(t){[].slice.call(document.querySelectorAll(".pn-ProductNav_Link")).forEach(function(t){t.setAttribute("aria-selected","false")}),t.target.setAttribute("aria-selected","true"),e(t.target)});var v=function(){var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",t.appendChild(n);var r=n.offsetWidth;return t.parentNode.removeChild(t),e-r}(),f=document.getElementById("close");document.getElementById("product-info"),document.getElementById("sidebar");f.addEventListener("click",function(){r(document.body,"js-product-preview"),document.body.style.marginRight="0"});var m=[].slice.call(document.querySelectorAll(".js-set-title")),g=document.querySelectorAll(".js-header-title")[0],y=document.querySelectorAll(".js-header-count")[0];m.forEach(function(t,e){t.addEventListener("click",function(){g.textContent=t.textContent,y.textContent=t.dataset.count})}),[].slice.call(document.querySelectorAll(".js-show-info")).forEach(function(t,e){t.addEventListener("click",function(){document.body.className+=" js-product-preview",document.body.style.marginRight=v+"px"})})}();