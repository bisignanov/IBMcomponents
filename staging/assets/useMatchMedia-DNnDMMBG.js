import{r as n}from"./index-BwDkhjyp.js";import{o as c}from"./floating-ui.react-DMp4y4mM.js";function m(s){const[r,a]=n.useState(()=>c?window.matchMedia(s).matches:!1);return n.useEffect(()=>{function t(i){a(i.matches)}const e=window.matchMedia(s);return e.addEventListener?e.addEventListener("change",t):e.addListener(t),a(e.matches),()=>{e.addEventListener?e.removeEventListener("change",t):e.removeListener(t)}},[s]),r}export{m as u};
