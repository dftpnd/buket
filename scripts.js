!function(){function e(e){c.setAttribute("data-overflowing",n(s,c))}function t(e){if(e){var t=e.getBoundingClientRect(),n=s.getBoundingClientRect().left,r=t.left-n;i.style.transform="translateX("+(r+s.scrollLeft)+"px) scaleX("+.01*t.width+")"}}function n(e,t){var n=t.getBoundingClientRect(),r=Math.floor(n.right),a=Math.floor(n.left),o=e.getBoundingClientRect(),l=Math.floor(o.right),i=Math.floor(o.left);return a>i&&r<l?"both":i<a?"left":l>r?"right":"none"}function r(e,t){for(var n=e.className.split(" "),r=0;r<n.length;r++)n[r]==t&&(n.splice(r,1),r--);e.className=n.join(" ")}var a={navBarTravelling:!1,navBarTravelDirection:"",navBarTravelDistance:150};document.documentElement.classList.remove("no-js"),document.documentElement.classList.add("js");var o=document.getElementById("pnAdvancerLeft"),l=document.getElementById("pnAdvancerRight"),i=document.getElementById("pnIndicator"),c=document.getElementById("pnProductNav"),s=document.getElementById("pnProductNavContents");c.setAttribute("data-overflowing",n(s,c)),t(c.querySelector('[aria-selected="true"]'));var d=0,u=!1;c.addEventListener("scroll",function(){d=window.scrollY,u||window.requestAnimationFrame(function(){e(d),u=!1}),u=!0}),o.addEventListener("click",function(){if(!0!==a.navBarTravelling){if("left"===n(s,c)||"both"===n(s,c)){var e=c.scrollLeft;e<2*a.navBarTravelDistance?s.style.transform="translateX("+e+"px)":s.style.transform="translateX("+a.navBarTravelDistance+"px)",s.classList.remove("pn-ProductNav_Contents-no-transition"),a.navBarTravelDirection="left",a.navBarTravelling=!0}c.setAttribute("data-overflowing",n(s,c))}}),l.addEventListener("click",function(){if(!0!==a.navBarTravelling){if("right"===n(s,c)||"both"===n(s,c)){var e=s.getBoundingClientRect().right,t=c.getBoundingClientRect().right,r=Math.floor(e-t);r<2*a.navBarTravelDistance?s.style.transform="translateX(-"+r+"px)":s.style.transform="translateX(-"+a.navBarTravelDistance+"px)",s.classList.remove("pn-ProductNav_Contents-no-transition"),a.navBarTravelDirection="right",a.navBarTravelling=!0}c.setAttribute("data-overflowing",n(s,c))}}),s.addEventListener("transitionend",function(){var e=window.getComputedStyle(s,null),t=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform"),n=Math.abs(parseInt(t.split(",")[4])||0);s.style.transform="none",s.classList.add("pn-ProductNav_Contents-no-transition"),"left"===a.navBarTravelDirection?c.scrollLeft=c.scrollLeft-n:c.scrollLeft=c.scrollLeft+n,a.navBarTravelling=!1},!1),s.addEventListener("click",function(e){[].slice.call(document.querySelectorAll(".pn-ProductNav_Link")).forEach(function(e){e.setAttribute("aria-selected","false")}),e.target.setAttribute("aria-selected","true"),t(e.target)});var v=(function(){var e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",e.appendChild(n);var r=n.offsetWidth;e.parentNode.removeChild(e)}(),document.getElementById("close"));document.getElementById("product-info"),document.getElementById("sidebar");v.addEventListener("click",function(){r(document.body,"js-product-preview")});var f=[].slice.call(document.querySelectorAll(".js-set-title")),m=document.querySelectorAll(".js-header-title")[0],g=document.querySelectorAll(".js-header-count")[0];f.forEach(function(e,t){e.addEventListener("click",function(){m.textContent=e.textContent,g.textContent=e.dataset.count})}),[].slice.call(document.querySelectorAll(".js-show-info")).forEach(function(e,t){e.addEventListener("click",function(){document.body.className+=" js-product-preview"})});var y=(new Flickity(".main-carousel",{}),document.getElementById("hamburger"));y.addEventListener("click",function(){y.classList.contains("open")?(r(document.body,"js-hamburger-open"),r(y,"open")):(y.className+=" open",document.body.className+=" js-hamburger-open")});document.getElementById("container");[].slice.call(document.querySelectorAll(".custom-scroll")).forEach(function(e){Ps.initialize(e)})}();