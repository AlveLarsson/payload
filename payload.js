// Inject code into API Ref

var head = document.head;

// Inject font
var link = document.createElement("link");

link.type = "text/css";
link.rel = "stylesheet";
link.href =
  "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap";

head.appendChild(link);

// Inject style
var style = document.createElement("style");

style.type = "text/css";

// --------- CSS def begins here ---------
style.styleSheet.cssText =
  "body{font-family:Rubik,sans-serif}:root{--links:#8f4bff;--sidebar-active:#8f4bff}.splash{background:linear-gradient(191.12deg,#5c007c .01%,#090074 100.57%);position:absolute;width:100%;left:0;top:51px;height:250px;display:flex;justify-content:center}.splogo{margin-top:60px}.drop{margin-bottom:300px}h2{font-size:2.5em!important}#menu-bar{box-shadow:0 0 15px rgba(0,0,0,.589)}.am-btns{border-radius:100px;padding:2px 9px;border:solid 2px var(--fg);background-color:var(--bg);color:var(--fg)!important;margin-right:10px;transition:ease .3s}.am-btns:hover{border-color:#8f4bff;color:#8f4bff}.next{float:right;right:var(--page-padding);right:0}.sidebar{z-index:300;box-shadow:0 0 15px rgba(0,0,0,.589)}.content main{margin-top:50px}blockquote{border-radius:8px;border:solid var(--fg)}.language-rust,.language-toml{border-radius:8px;border:solid var(--fg)!important}.menu-title{color:var(--fg)!important}#print-button,.icon-button{color:var(--fg)!important}.chapter li.chapter-item,.content ul{line-height:2.2em;margin-top:.6em}.content p{line-height:2em}.chapter li a{width:100%;transition:ease .3s;border-radius:8px}.chapter li a:hover{background-color:#904bff27;padding-left:10px}.header{transition:ease .3s;border-radius:8px;padding-right:20px}.header:hover{background-color:#904bff27;padding-left:10px}.hljs{color:var(--fg)!important;border-radius:8px;border:solid #904bff;background-color:var(--bg)}";

head.appendChild(style);
