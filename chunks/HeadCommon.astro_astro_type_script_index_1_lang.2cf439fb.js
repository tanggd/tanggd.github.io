document.addEventListener("dblclick",e=>{if(e.target.nodeName!=="CODE"||e.target.parentElement.nodeName==="PRE")return;let t=new Range;t.setStart(e.target,0),t.setEnd(e.target,1),document.getSelection().removeAllRanges(),document.getSelection().addRange(t)});const a=document.documentElement,n=localStorage.getItem("theme");n==="dark"||!n&&window.matchMedia("(prefers-color-scheme: dark)").matches?a.classList.add("theme-dark"):a.classList.remove("theme-dark");