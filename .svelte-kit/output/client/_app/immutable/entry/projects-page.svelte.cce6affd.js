var Y=Object.defineProperty;var ee=(o,t,n)=>t in o?Y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var P=(o,t,n)=>(ee(o,typeof t!="symbol"?t+"":t,n),n);import{S as te,i as ne,s as ie,y as se,z as re,A as le,G as oe,g as ae,d as ce,B as he,H as ue,o as pe}from"../chunks/index.4e18c1e1.js";import{p as fe}from"../chunks/stores.183b6423.js";import{S as ge}from"../chunks/Seo.88d6549a.js";import"../chunks/utils.99180396.js";function F(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let I=F();function de(o){I=o}const X=/[&<>"']/,ke=new RegExp(X.source,"g"),G=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,me=new RegExp(G.source,"g"),xe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},j=o=>xe[o];function b(o,t){if(t){if(X.test(o))return o.replace(ke,j)}else if(G.test(o))return o.replace(me,j);return o}const we=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function V(o){return o.replace(we,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const be=/(^|[^\[])\^/g;function m(o,t){o=typeof o=="string"?o:o.source,t=t||"";const n={replace:(e,i)=>(i=i.source||i,i=i.replace(be,"$1"),o=o.replace(e,i),n),getRegex:()=>new RegExp(o,t)};return n}const _e=/[^\w:]/g,ye=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function M(o,t,n){if(o){let e;try{e=decodeURIComponent(V(n)).replace(_e,"").toLowerCase()}catch{return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}t&&!ye.test(n)&&(n=Re(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const L={},$e=/^[^:]+:\/*[^/]*$/,ze=/^([^:]+:)[\s\S]*$/,Se=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Re(o,t){L[" "+o]||($e.test(o)?L[" "+o]=o+"/":L[" "+o]=B(o,"/",!0)),o=L[" "+o];const n=o.indexOf(":")===-1;return t.substring(0,2)==="//"?n?t:o.replace(ze,"$1")+t:t.charAt(0)==="/"?n?t:o.replace(Se,"$1")+t:o+t}const v={exec:function(){}};function U(o,t){const n=o.replace(/\|/g,(s,r,l)=>{let a=!1,d=r;for(;--d>=0&&l[d]==="\\";)a=!a;return a?"|":" |"}),e=n.split(/ \|/);let i=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>t)e.splice(t);else for(;e.length<t;)e.push("");for(;i<e.length;i++)e[i]=e[i].trim().replace(/\\\|/g,"|");return e}function B(o,t,n){const e=o.length;if(e===0)return"";let i=0;for(;i<e;){const s=o.charAt(e-i-1);if(s===t&&!n)i++;else if(s!==t&&n)i++;else break}return o.slice(0,e-i)}function Te(o,t){if(o.indexOf(t[1])===-1)return-1;const n=o.length;let e=0,i=0;for(;i<n;i++)if(o[i]==="\\")i++;else if(o[i]===t[0])e++;else if(o[i]===t[1]&&(e--,e<0))return i;return-1}function Ae(o){o&&o.sanitize&&!o.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Q(o,t){if(t<1)return"";let n="";for(;t>1;)t&1&&(n+=o),t>>=1,o+=o;return n+o}function N(o,t,n,e){const i=t.href,s=t.title?b(t.title):null,r=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){e.state.inLink=!0;const l={type:"link",raw:n,href:i,title:s,text:r,tokens:e.inlineTokens(r)};return e.state.inLink=!1,l}return{type:"image",raw:n,href:i,title:s,text:b(r)}}function Ie(o,t){const n=o.match(/^(\s+)(?:```)/);if(n===null)return t;const e=n[1];return t.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[r]=s;return r.length>=e.length?i.slice(e.length):i}).join(`
`)}class q{constructor(t){this.options=t||I}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const e=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?e:B(e,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const e=n[0],i=Ie(e,n[3]||"");return{type:"code",raw:e,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:i}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let e=n[2].trim();if(/#$/.test(e)){const i=B(e,"#");(this.options.pedantic||!i||/ $/.test(i))&&(e=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){const e=n[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(e);return this.lexer.state.top=i,{type:"blockquote",raw:n[0],tokens:s,text:e}}}list(t){let n=this.rules.block.list.exec(t);if(n){let e,i,s,r,l,a,d,f,g,k,h,z,_=n[1].trim();const R=_.length>1,x={type:"list",raw:"",ordered:R,start:R?+_.slice(0,-1):"",loose:!1,items:[]};_=R?`\\d{1,9}\\${_.slice(-1)}`:`\\${_}`,this.options.pedantic&&(_=R?_:"[*+-]");const w=new RegExp(`^( {0,3}${_})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(z=!1,!(!(n=w.exec(t))||this.rules.block.hr.test(t)));){if(e=n[0],t=t.substring(e.length),f=n[2].split(`
`,1)[0].replace(/^\t+/,S=>" ".repeat(3*S.length)),g=t.split(`
`,1)[0],this.options.pedantic?(r=2,h=f.trimLeft()):(r=n[2].search(/[^ ]/),r=r>4?1:r,h=f.slice(r),r+=n[1].length),a=!1,!f&&/^ *$/.test(g)&&(e+=g+`
`,t=t.substring(g.length+1),z=!0),!z){const S=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),y=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),$=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),C=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;t&&(k=t.split(`
`,1)[0],g=k,this.options.pedantic&&(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!($.test(g)||C.test(g)||S.test(g)||y.test(t)));){if(g.search(/[^ ]/)>=r||!g.trim())h+=`
`+g.slice(r);else{if(a||f.search(/[^ ]/)>=4||$.test(f)||C.test(f)||y.test(f))break;h+=`
`+g}!a&&!g.trim()&&(a=!0),e+=k+`
`,t=t.substring(k.length+1),f=g.slice(r)}}x.loose||(d?x.loose=!0:/\n *\n *$/.test(e)&&(d=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(h),i&&(s=i[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),x.items.push({type:"list_item",raw:e,task:!!i,checked:s,loose:!1,text:h}),x.raw+=e}x.items[x.items.length-1].raw=e.trimRight(),x.items[x.items.length-1].text=h.trimRight(),x.raw=x.raw.trimRight();const E=x.items.length;for(l=0;l<E;l++)if(this.lexer.state.top=!1,x.items[l].tokens=this.lexer.blockTokens(x.items[l].text,[]),!x.loose){const S=x.items[l].tokens.filter($=>$.type==="space"),y=S.length>0&&S.some($=>/\n.*\n/.test($.raw));x.loose=y}if(x.loose)for(l=0;l<E;l++)x.items[l].loose=!0;return x}}html(t){const n=this.rules.block.html.exec(t);if(n){const e={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(n[0]):b(n[0]);e.type="paragraph",e.text=i,e.tokens=this.lexer.inline(i)}return e}}def(t){const n=this.rules.block.def.exec(t);if(n){const e=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:e,raw:n[0],href:i,title:s}}}table(t){const n=this.rules.block.table.exec(t);if(n){const e={type:"table",header:U(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=n[0];let i=e.align.length,s,r,l,a;for(s=0;s<i;s++)/^ *-+: *$/.test(e.align[s])?e.align[s]="right":/^ *:-+: *$/.test(e.align[s])?e.align[s]="center":/^ *:-+ *$/.test(e.align[s])?e.align[s]="left":e.align[s]=null;for(i=e.rows.length,s=0;s<i;s++)e.rows[s]=U(e.rows[s],e.header.length).map(d=>({text:d}));for(i=e.header.length,r=0;r<i;r++)e.header[r].tokens=this.lexer.inline(e.header[r].text);for(i=e.rows.length,r=0;r<i;r++)for(a=e.rows[r],l=0;l<a.length;l++)a[l].tokens=this.lexer.inline(a[l].text);return e}}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const e=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:e,tokens:this.lexer.inline(e)}}}text(t){const n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:b(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):b(n[0]):n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const e=n[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const r=B(e.slice(0,-1),"\\");if((e.length-r.length)%2===0)return}else{const r=Te(n[2],"()");if(r>-1){const a=(n[0].indexOf("!")===0?5:4)+n[1].length+r;n[2]=n[2].substring(0,r),n[0]=n[0].substring(0,a).trim(),n[3]=""}}let i=n[2],s="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(e)?i=i.slice(1):i=i.slice(1,-1)),N(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(t,n){let e;if((e=this.rules.inline.reflink.exec(t))||(e=this.rules.inline.nolink.exec(t))){let i=(e[2]||e[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i){const s=e[0].charAt(0);return{type:"text",raw:s,text:s}}return N(e,i,e[0],this.lexer)}}emStrong(t,n,e=""){let i=this.rules.inline.emStrong.lDelim.exec(t);if(!i||i[3]&&e.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(e===""||this.rules.inline.punctuation.exec(e))){const r=i[0].length-1;let l,a,d=r,f=0;const g=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,n=n.slice(-1*t.length+r);(i=g.exec(n))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(a=l.length,i[3]||i[4]){d+=a;continue}else if((i[5]||i[6])&&r%3&&!((r+a)%3)){f+=a;continue}if(d-=a,d>0)continue;a=Math.min(a,a+d+f);const k=t.slice(0,r+i.index+(i[0].length-l.length)+a);if(Math.min(r,a)%2){const z=k.slice(1,-1);return{type:"em",raw:k,text:z,tokens:this.lexer.inlineTokens(z)}}const h=k.slice(2,-2);return{type:"strong",raw:k,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let e=n[2].replace(/\n/g," ");const i=/[^ ]/.test(e),s=/^ /.test(e)&&/ $/.test(e);return i&&s&&(e=e.substring(1,e.length-1)),e=b(e,!0),{type:"codespan",raw:n[0],text:e}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t,n){const e=this.rules.inline.autolink.exec(t);if(e){let i,s;return e[2]==="@"?(i=b(this.options.mangle?n(e[1]):e[1]),s="mailto:"+i):(i=b(e[1]),s=i),{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(t,n){let e;if(e=this.rules.inline.url.exec(t)){let i,s;if(e[2]==="@")i=b(this.options.mangle?n(e[0]):e[0]),s="mailto:"+i;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(r!==e[0]);i=b(e[0]),e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t,n){const e=this.rules.inline.text.exec(t);if(e){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):b(e[0]):e[0]:i=b(this.options.smartypants?n(e[0]):e[0]),{type:"text",raw:e[0],text:i}}}}const u={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:v,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};u._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;u._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;u.def=m(u.def).replace("label",u._label).replace("title",u._title).getRegex();u.bullet=/(?:[*+-]|\d{1,9}[.)])/;u.listItemStart=m(/^( *)(bull) */).replace("bull",u.bullet).getRegex();u.list=m(u.list).replace(/bull/g,u.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+u.def.source+")").getRegex();u._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";u._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;u.html=m(u.html,"i").replace("comment",u._comment).replace("tag",u._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();u.paragraph=m(u._paragraph).replace("hr",u.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",u._tag).getRegex();u.blockquote=m(u.blockquote).replace("paragraph",u.paragraph).getRegex();u.normal={...u};u.gfm={...u.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};u.gfm.table=m(u.gfm.table).replace("hr",u.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",u._tag).getRegex();u.gfm.paragraph=m(u._paragraph).replace("hr",u.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",u.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",u._tag).getRegex();u.pedantic={...u.normal,html:m(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",u._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:v,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:m(u.normal._paragraph).replace("hr",u.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",u.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const c={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:v,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:v,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};c._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";c.punctuation=m(c.punctuation).replace(/punctuation/g,c._punctuation).getRegex();c.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;c.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;c._comment=m(u._comment).replace("(?:-->|$)","-->").getRegex();c.emStrong.lDelim=m(c.emStrong.lDelim).replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimAst=m(c.emStrong.rDelimAst,"g").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimUnd=m(c.emStrong.rDelimUnd,"g").replace(/punct/g,c._punctuation).getRegex();c._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;c._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;c._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;c.autolink=m(c.autolink).replace("scheme",c._scheme).replace("email",c._email).getRegex();c._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;c.tag=m(c.tag).replace("comment",c._comment).replace("attribute",c._attribute).getRegex();c._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;c._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;c._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;c.link=m(c.link).replace("label",c._label).replace("href",c._href).replace("title",c._title).getRegex();c.reflink=m(c.reflink).replace("label",c._label).replace("ref",u._label).getRegex();c.nolink=m(c.nolink).replace("ref",u._label).getRegex();c.reflinkSearch=m(c.reflinkSearch,"g").replace("reflink",c.reflink).replace("nolink",c.nolink).getRegex();c.normal={...c};c.pedantic={...c.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:m(/^!?\[(label)\]\((.*?)\)/).replace("label",c._label).getRegex(),reflink:m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",c._label).getRegex()};c.gfm={...c.normal,escape:m(c.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};c.gfm.url=m(c.gfm.url,"i").replace("email",c.gfm._extended_email).getRegex();c.breaks={...c.gfm,br:m(c.br).replace("{2,}","*").getRegex(),text:m(c.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Ee(o){return o.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function H(o){let t="",n,e;const i=o.length;for(n=0;n<i;n++)e=o.charCodeAt(n),Math.random()>.5&&(e="x"+e.toString(16)),t+="&#"+e+";";return t}class T{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||I,this.options.tokenizer=this.options.tokenizer||new q,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:u.normal,inline:c.normal};this.options.pedantic?(n.block=u.pedantic,n.inline=c.pedantic):this.options.gfm&&(n.block=u.gfm,this.options.breaks?n.inline=c.breaks:n.inline=c.gfm),this.tokenizer.rules=n}static get rules(){return{block:u,inline:c}}static lex(t,n){return new T(n).lex(t)}static lexInline(t,n){return new T(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(t,n=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(l,a,d)=>a+"    ".repeat(d.length));let e,i,s,r;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(e=l.call({lexer:this},t,n))?(t=t.substring(e.raw.length),n.push(e),!0):!1))){if(e=this.tokenizer.space(t)){t=t.substring(e.raw.length),e.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(e);continue}if(e=this.tokenizer.code(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e);continue}if(e=this.tokenizer.fences(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.heading(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.hr(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.blockquote(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.list(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.html(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.def(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+e.raw,i.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title});continue}if(e=this.tokenizer.table(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.lheading(t)){t=t.substring(e.raw.length),n.push(e);continue}if(s=t,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const a=t.slice(1);let d;this.options.extensions.startBlock.forEach(function(f){d=f.call({lexer:this},a),typeof d=="number"&&d>=0&&(l=Math.min(l,d))}),l<1/0&&l>=0&&(s=t.substring(0,l+1))}if(this.state.top&&(e=this.tokenizer.paragraph(s))){i=n[n.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e),r=s.length!==t.length,t=t.substring(e.raw.length);continue}if(e=this.tokenizer.text(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let e,i,s,r=t,l,a,d;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)f.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,l.index)+"["+Q("a",l[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,l.index)+"["+Q("a",l[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(r))!=null;)r=r.slice(0,l.index+l[0].length-2)+"++"+r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;t;)if(a||(d=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>(e=f.call({lexer:this},t,n))?(t=t.substring(e.raw.length),n.push(e),!0):!1))){if(e=this.tokenizer.escape(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.tag(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(e=this.tokenizer.link(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(e.raw.length),i=n[n.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(e=this.tokenizer.emStrong(t,r,d)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.codespan(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.br(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.del(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.autolink(t,H)){t=t.substring(e.raw.length),n.push(e);continue}if(!this.state.inLink&&(e=this.tokenizer.url(t,H))){t=t.substring(e.raw.length),n.push(e);continue}if(s=t,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const g=t.slice(1);let k;this.options.extensions.startInline.forEach(function(h){k=h.call({lexer:this},g),typeof k=="number"&&k>=0&&(f=Math.min(f,k))}),f<1/0&&f>=0&&(s=t.substring(0,f+1))}if(e=this.tokenizer.inlineText(s,Ee)){t=t.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(d=e.raw.slice(-1)),a=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(t){const f="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return n}}class D{constructor(t){this.options=t||I}code(t,n,e){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(t,i);s!=null&&s!==t&&(e=!0,t=s)}return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+b(i)+'">'+(e?t:b(t,!0))+`</code></pre>
`:"<pre><code>"+(e?t:b(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,n,e,i){if(this.options.headerIds){const s=this.options.headerPrefix+i.slug(e);return`<h${n} id="${s}">${t}</h${n}>
`}return`<h${n}>${t}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,n,e){const i=n?"ol":"ul",s=n&&e!==1?' start="'+e+'"':"";return"<"+i+s+`>
`+t+"</"+i+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,n){const e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+t+`</${e}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,n,e){if(t=M(this.options.sanitize,this.options.baseUrl,t),t===null)return e;let i='<a href="'+t+'"';return n&&(i+=' title="'+n+'"'),i+=">"+e+"</a>",i}image(t,n,e){if(t=M(this.options.sanitize,this.options.baseUrl,t),t===null)return e;let i=`<img src="${t}" alt="${e}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(t){return t}}class W{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,e){return""+e}image(t,n,e){return""+e}br(){return""}}class J{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,n){let e=t,i=0;if(this.seen.hasOwnProperty(e)){i=this.seen[t];do i++,e=t+"-"+i;while(this.seen.hasOwnProperty(e))}return n||(this.seen[t]=i,this.seen[e]=0),e}slug(t,n={}){const e=this.serialize(t);return this.getNextSafeSlug(e,n.dryrun)}}class A{constructor(t){this.options=t||I,this.options.renderer=this.options.renderer||new D,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new W,this.slugger=new J}static parse(t,n){return new A(n).parse(t)}static parseInline(t,n){return new A(n).parseInline(t)}parse(t,n=!0){let e="",i,s,r,l,a,d,f,g,k,h,z,_,R,x,w,E,S,y,$;const C=t.length;for(i=0;i<C;i++){if(h=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&($=this.options.extensions.renderers[h.type].call({parser:this},h),$!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type))){e+=$||"";continue}switch(h.type){case"space":continue;case"hr":{e+=this.renderer.hr();continue}case"heading":{e+=this.renderer.heading(this.parseInline(h.tokens),h.depth,V(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue}case"code":{e+=this.renderer.code(h.text,h.lang,h.escaped);continue}case"table":{for(g="",f="",l=h.header.length,s=0;s<l;s++)f+=this.renderer.tablecell(this.parseInline(h.header[s].tokens),{header:!0,align:h.align[s]});for(g+=this.renderer.tablerow(f),k="",l=h.rows.length,s=0;s<l;s++){for(d=h.rows[s],f="",a=d.length,r=0;r<a;r++)f+=this.renderer.tablecell(this.parseInline(d[r].tokens),{header:!1,align:h.align[r]});k+=this.renderer.tablerow(f)}e+=this.renderer.table(g,k);continue}case"blockquote":{k=this.parse(h.tokens),e+=this.renderer.blockquote(k);continue}case"list":{for(z=h.ordered,_=h.start,R=h.loose,l=h.items.length,k="",s=0;s<l;s++)w=h.items[s],E=w.checked,S=w.task,x="",w.task&&(y=this.renderer.checkbox(E),R?w.tokens.length>0&&w.tokens[0].type==="paragraph"?(w.tokens[0].text=y+" "+w.tokens[0].text,w.tokens[0].tokens&&w.tokens[0].tokens.length>0&&w.tokens[0].tokens[0].type==="text"&&(w.tokens[0].tokens[0].text=y+" "+w.tokens[0].tokens[0].text)):w.tokens.unshift({type:"text",text:y}):x+=y),x+=this.parse(w.tokens,R),k+=this.renderer.listitem(x,S,E);e+=this.renderer.list(k,z,_);continue}case"html":{e+=this.renderer.html(h.text);continue}case"paragraph":{e+=this.renderer.paragraph(this.parseInline(h.tokens));continue}case"text":{for(k=h.tokens?this.parseInline(h.tokens):h.text;i+1<C&&t[i+1].type==="text";)h=t[++i],k+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);e+=n?this.renderer.paragraph(k):k;continue}default:{const O='Token with "'+h.type+'" type was not found.';if(this.options.silent){console.error(O);return}else throw new Error(O)}}}return e}parseInline(t,n){n=n||this.renderer;let e="",i,s,r;const l=t.length;for(i=0;i<l;i++){if(s=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(r=this.options.extensions.renderers[s.type].call({parser:this},s),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){e+=r||"";continue}switch(s.type){case"escape":{e+=n.text(s.text);break}case"html":{e+=n.html(s.text);break}case"link":{e+=n.link(s.href,s.title,this.parseInline(s.tokens,n));break}case"image":{e+=n.image(s.href,s.title,s.text);break}case"strong":{e+=n.strong(this.parseInline(s.tokens,n));break}case"em":{e+=n.em(this.parseInline(s.tokens,n));break}case"codespan":{e+=n.codespan(s.text);break}case"br":{e+=n.br();break}case"del":{e+=n.del(this.parseInline(s.tokens,n));break}case"text":{e+=n.text(s.text);break}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return e}}class Z{constructor(t){this.options=t||I}preprocess(t){return t}postprocess(t){return t}}P(Z,"passThroughHooks",new Set(["preprocess","postprocess"]));function Ce(o,t,n){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,o){const i="<p>An error occurred:</p><pre>"+b(e.message+"",!0)+"</pre>";if(t)return Promise.resolve(i);if(n){n(null,i);return}return i}if(t)return Promise.reject(e);if(n){n(e);return}throw e}}function K(o,t){return(n,e,i)=>{typeof e=="function"&&(i=e,e=null);const s={...e};e={...p.defaults,...s};const r=Ce(e.silent,e.async,i);if(typeof n>"u"||n===null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(Ae(e),e.hooks&&(e.hooks.options=e),i){const l=e.highlight;let a;try{e.hooks&&(n=e.hooks.preprocess(n)),a=o(n,e)}catch(g){return r(g)}const d=function(g){let k;if(!g)try{e.walkTokens&&p.walkTokens(a,e.walkTokens),k=t(a,e),e.hooks&&(k=e.hooks.postprocess(k))}catch(h){g=h}return e.highlight=l,g?r(g):i(null,k)};if(!l||l.length<3||(delete e.highlight,!a.length))return d();let f=0;p.walkTokens(a,function(g){g.type==="code"&&(f++,setTimeout(()=>{l(g.text,g.lang,function(k,h){if(k)return d(k);h!=null&&h!==g.text&&(g.text=h,g.escaped=!0),f--,f===0&&d()})},0))}),f===0&&d();return}if(e.async)return Promise.resolve(e.hooks?e.hooks.preprocess(n):n).then(l=>o(l,e)).then(l=>e.walkTokens?Promise.all(p.walkTokens(l,e.walkTokens)).then(()=>l):l).then(l=>t(l,e)).then(l=>e.hooks?e.hooks.postprocess(l):l).catch(r);try{e.hooks&&(n=e.hooks.preprocess(n));const l=o(n,e);e.walkTokens&&p.walkTokens(l,e.walkTokens);let a=t(l,e);return e.hooks&&(a=e.hooks.postprocess(a)),a}catch(l){return r(l)}}}function p(o,t,n){return K(T.lex,A.parse)(o,t,n)}p.options=p.setOptions=function(o){return p.defaults={...p.defaults,...o},de(p.defaults),p};p.getDefaults=F;p.defaults=I;p.use=function(...o){const t=p.defaults.extensions||{renderers:{},childTokens:{}};o.forEach(n=>{const e={...n};if(e.async=p.defaults.async||e.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const s=t.renderers[i.name];s?t.renderers[i.name]=function(...r){let l=i.renderer.apply(this,r);return l===!1&&(l=s.apply(this,r)),l}:t.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[i.level]?t[i.level].unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),e.extensions=t),n.renderer){const i=p.defaults.renderer||new D;for(const s in n.renderer){const r=i[s];i[s]=(...l)=>{let a=n.renderer[s].apply(i,l);return a===!1&&(a=r.apply(i,l)),a}}e.renderer=i}if(n.tokenizer){const i=p.defaults.tokenizer||new q;for(const s in n.tokenizer){const r=i[s];i[s]=(...l)=>{let a=n.tokenizer[s].apply(i,l);return a===!1&&(a=r.apply(i,l)),a}}e.tokenizer=i}if(n.hooks){const i=p.defaults.hooks||new Z;for(const s in n.hooks){const r=i[s];Z.passThroughHooks.has(s)?i[s]=l=>{if(p.defaults.async)return Promise.resolve(n.hooks[s].call(i,l)).then(d=>r.call(i,d));const a=n.hooks[s].call(i,l);return r.call(i,a)}:i[s]=(...l)=>{let a=n.hooks[s].apply(i,l);return a===!1&&(a=r.apply(i,l)),a}}e.hooks=i}if(n.walkTokens){const i=p.defaults.walkTokens;e.walkTokens=function(s){let r=[];return r.push(n.walkTokens.call(this,s)),i&&(r=r.concat(i.call(this,s))),r}}p.setOptions(e)})};p.walkTokens=function(o,t){let n=[];for(const e of o)switch(n=n.concat(t.call(p,e)),e.type){case"table":{for(const i of e.header)n=n.concat(p.walkTokens(i.tokens,t));for(const i of e.rows)for(const s of i)n=n.concat(p.walkTokens(s.tokens,t));break}case"list":{n=n.concat(p.walkTokens(e.items,t));break}default:p.defaults.extensions&&p.defaults.extensions.childTokens&&p.defaults.extensions.childTokens[e.type]?p.defaults.extensions.childTokens[e.type].forEach(function(i){n=n.concat(p.walkTokens(e[i],t))}):e.tokens&&(n=n.concat(p.walkTokens(e.tokens,t)))}return n};p.parseInline=K(T.lexInline,A.parseInline);p.Parser=A;p.parser=A.parse;p.Renderer=D;p.TextRenderer=W;p.Lexer=T;p.lexer=T.lex;p.Tokenizer=q;p.Slugger=J;p.Hooks=Z;p.parse=p;p.options;p.setOptions;p.use;p.walkTokens;p.parseInline;A.parse;T.lex;function Le(o){let t,n;return t=new ge({props:{title:"Po Hao (Howie) Chen – Projects",description:""}}),{c(){se(t.$$.fragment)},l(e){re(t.$$.fragment,e)},m(e,i){le(t,e,i),n=!0},p:oe,i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Be(o,t,n){let e;ue(o,fe,s=>n(2,e=s));const i=Object.assign({});return pe(()=>{const s=e.url.hash.slice(1);s&&setTimeout(()=>{var r;e.url.hash.slice(1)===s&&((r=document.getElementById(s))==null||r.scrollIntoView())},500)}),Object.keys(i).sort((s,r)=>i[r].date-i[s].date),Object.keys(i).sort((s,r)=>{const l=i[s].title.toLowerCase(),a=i[r].title.toLowerCase();return l<a?-1:l>a?1:0}),[]}class Pe extends te{constructor(t){super(),ne(this,t,Be,Le,ie,{})}}export{Pe as default};
