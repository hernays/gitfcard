(()=>{"use strict";var e=document.querySelectorAll(".ocultar"),t=document.querySelector("#fuegos"),s=document.querySelector("#card"),c=document.querySelector("#body"),a=document.querySelector("#cajah"),r=document.querySelector("#audio");e[0].addEventListener("click",(function(o){!function(o){var i=o.target;i.classList.contains("regalo")&&(i.classList.replace("regalo","rapida"),setTimeout((function(o){e[0].style.display="none",setTimeout((function(){t.classList.add("fuegos"),t.src="assets/img/fuegos-artificiales.gif",s.classList.add("cardAbrir"),c.classList.add("flexBody"),a.classList.add("cardAbrir"),r.classList.add("cardAbrir"),r.play()}),10)}),5e3))}(o)}))})();