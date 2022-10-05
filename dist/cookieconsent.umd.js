/*!
* CookieConsent 3.0.0-rc.6
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',n='opt-out',o='show--consent',a='show--preferences',r='disable--interaction',i='data-category',c='div',s='button',l='consentModal',d='preferencesModal',f=e=>'function'==typeof e,_=e=>JSON.parse(JSON.stringify(e)),u=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:t}))},p=(e,t,n)=>{const o=v.t,a=v.o,r={cookie:v.l.i};if(t){const r={modalName:t};return e===a._?f(o._)&&o._(r):e===a.u?f(o.u)&&o.u(r):(r.modal=n,f(o.p)&&o.p(r)),u(e,r)}e===a.m?f(o.m)&&o.m(_(r)):e===a.v?f(o.v)&&o.v(_(r)):(r.changedCategories=v.l.g,r.changedServices=v.l.h,f(o.C)&&o.C(_(r))),u(e,_(r))};class m{constructor(){this.k={mode:t,revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,lazyHtmlGeneration:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.l={S:null,T:'',A:{},M:null,i:null,B:[],D:null,H:null,N:null,V:'',F:!0,j:!1,I:!1,O:!1,P:!1,G:!1,R:!1,J:[],L:!1,U:!0,g:[],q:!1,K:'',W:!1,X:[],Y:[],Z:[],$:[],ee:!1,te:!1,ne:!1,oe:[],ae:[],re:[],ie:{},ce:{},se:{},h:{},le:{},de:[],fe:[]},this._e={ue:0,pe:0,me:0,ve:0,ge:0,be:0,ye:0,he:0,we:0,Ce:0,ke:0,xe:0,Se:0,Te:0,Ae:0,Me:0,Be:0,De:0,He:0,Ee:0,Ne:0,Ve:0,Fe:0,je:0,Ie:0,Oe:0,Pe:0,Ge:0,Re:0,Je:{},Le:{}},this.t={m:0,v:0,C:0,_:0,u:0,p:0},this.o={m:'cc:onFirstConsent',v:'cc:onConsent',C:'cc:onChange',_:'cc:onModalShow',u:'cc:onModalHide',p:'cc:onModalReady'}}}const v=new m,g=e=>!!e&&'object'==typeof e&&!Array.isArray(e),b=(e,t)=>-1!==e.indexOf(t),y=e=>{const t=document.createElement(e);return e===s&&h(t,'type',e),t},h=(e,t,n)=>{e.setAttribute(t,n)},w=(e,t)=>{e.appendChild(t)},C=(e,t,n,o)=>{e.addEventListener(t,n),o&&v.l.B.push({Ue:e,ze:t,qe:n})},k=e=>Object.keys(e),x=(e,t)=>{e.classList.add(t)},S=(e,t)=>{x(e,'cm__'+t)},T=(e,t)=>{x(e,'pm__'+t)},A=(e,t)=>{e.classList.remove(t)},M=()=>{const e=v.k.cookie.expiresAfterDays;return f(e)?e(v.l.K):e},B=(e,t)=>e.filter((e=>!b(t,e))).concat(t.filter((t=>!b(e,t)))),D=()=>{v.l.K=(()=>{let e='custom',t=E().accepted;return t.length===v.l.X.length?e='all':t.length===v.l.Z.length&&(e='necessary'),e})()},H=(e,t,n)=>{const o='accept-',a=f('show-preferencesModal'),r=f('show-consentModal'),i=f(o+'all'),c=f(o+'necessary'),s=f(o+'custom'),l=!0===v.k.lazyHtmlGeneration;for(var d=0;d<a.length;d++)h(a[d],'aria-haspopup','dialog'),C(a[d],'click',(e=>{e.preventDefault(),t.showPreferences()}),!0),l&&C(a[d],'mouseover',(e=>{e.preventDefault(),v.l.P||n(t)}),!0);for(d=0;d<r.length;d++)h(r[d],'aria-haspopup','dialog'),C(r[d],'click',(e=>{e.preventDefault(),t.show(!0)}),!0);for(d=0;d<i.length;d++)C(i[d],'click',(e=>{_(e,'all')}),!0);for(d=0;d<s.length;d++)C(s[d],'click',(e=>{_(e)}),!0);for(d=0;d<c.length;d++)C(c[d],'click',(e=>{_(e,[])}),!0);function f(t){return(e||document).querySelectorAll('[data-cc="'+t+'"]')}function _(e,n){e.preventDefault(),t.acceptCategory(n),t.hidePreferences(),t.hide()}},E=()=>{const e=v.l.X.filter((e=>!b(v.l.Y,e)));return{accepted:v.l.Y,rejected:e}},N=()=>{const e=v.l,t=['[href]',s,'input','details','[tabindex="0"]'].join(':not([tabindex="-1"]), '),n=(e,n)=>{const o=e&&e.querySelectorAll(t);n[0]=o[0],n[1]=o[o.length-1]};e.j&&n(v._e.be,e.oe),e.P&&n(v._e.He,e.ae)},V=e=>{const t=v.l,n=t.ce;if(t.X.forEach((e=>{(t.h[e]||t.ce[e]||[]).forEach((n=>{const o=t.ie[e][n];!o.enabled&&b(t.ce[e],n)&&f(o.onAccept)?(o.enabled=!0,o.onAccept()):o.enabled&&!b(t.ce[e],n)&&f(o.onReject)&&(o.enabled=!1,o.onReject())}))})),!v.k.manageScriptTags)return;var o=t.de,a=e||t.i.categories||[];const r=(e,o)=>{if(o<e.length){var c=e[o],s=t.fe[o],l=s.Ke,d=s.Qe,f=b(a,l),_=!!d&&b(n[l],d);if(!s.We){var u=!d&&!s.Xe&&f,p=d&&!s.Xe&&_,m=!d&&s.Xe&&!f&&b(t.g,l),v=d&&s.Xe&&!_&&b(t.h[l]||[],d);if(u||m||p||v){s.We=!0,c.removeAttribute('type'),c.removeAttribute(i);let t=c.getAttribute('data-src');t&&c.removeAttribute('data-src');const n=y('script');if(n.textContent=c.innerHTML,((e,t)=>{for(var n=t.attributes,o=n.length,a=0;a<o;a++){var r=n[a].nodeName;h(e,r,t[r]||t.getAttribute(r))}})(n,c),t?n.src=t:t=c.src,t&&(n.onload=n.onerror=()=>{r(e,++o)}),c.replaceWith(n),t)return}}r(e,++o)}};r(o,0)},F=e=>{const t=v.l.S.guiOptions,n=t&&t.consentModal,o=t&&t.preferencesModal,a=(e,t,n,o,a,r)=>{var i=n&&n.layout,c=n&&n.position,s=n&&!0===n.flipButtons,l=n&&!1===n.equalWeightButtons,d=i&&i.split(' ')||[],f=c&&c.split(' ')||[],_=d[0],u=d[1],p=f[0],m='pm--'===o?f[0]:f[1],g=_,y=t[_];y||(y=t[a],g=a);var h=b(y.Ye,u)&&u,w=b(y.Ze,p)?p:y.$e,C=b(y.et,m)?m:y.tt;e.className=r,x(e,o+g),h&&x(e,o+h),w&&x(e,o+w),C&&x(e,o+C),s&&x(e,o+'flip');const k='btn--secondary',S=r+'__';if('cm'===r){const{Ae:e,De:t}=v._e;e&&A(e,S+k),t&&A(t,S+k),l&&(e&&x(e,S+k),t&&x(t,S+k))}else{const{Ge:e}=v._e;e&&A(e,S+k),l&&e&&x(e,S+k)}};if(0===e){const e=['middle','top','bottom'],t=['left','center','right'],o={box:{Ye:['wide','inline'],Ze:e,et:t,$e:'bottom',tt:'right'},cloud:{Ye:['inline'],Ze:e,et:t,$e:'bottom',tt:'center'},bar:{Ye:['inline'],Ze:e.slice(1),et:[],$e:'bottom',tt:''}};a(v._e.be,o,n,'cm--','box','cm')}if(1===e){const e={box:{Ye:[],Ze:[],et:[],$e:'',tt:''},bar:{Ye:['wide'],Ze:[],et:['left','right'],$e:'',tt:'left'}};a(v._e.He,e,o,'pm--','box','pm')}},j=e=>{const t=v.l,n=v._e,o=t.M&&t.M.preferencesModal;if(o){var a=o.title,r=o.closeIconLabel,i=o.acceptAllBtn,l=o.acceptNecessaryBtn,f=o.savePreferencesBtn,_=o.sections;if(n.ge)n.je=y(c),T(n.je,'body');else{n.ge=y(c),x(n.ge,'pm-wrapper'),n.He=y(c),n.He.style.visibility='hidden',x(n.He,'pm'),h(n.He,'role','dialog'),h(n.He,'aria-hidden',!0),h(n.He,'aria-modal',!0),C(n.pe,'keydown',(t=>{27===t.keyCode&&e.hidePreferences()}),!0),n.Ee=y(c),T(n.Ee,'header'),n.Ne=y(c),T(n.Ne,'title'),h(n.Ne,'role','heading'),n.Ve=y(s),T(n.Ve,'close-btn'),h(n.Ve,'aria-label',o.closeIconLabel||''),C(n.Ve,'click',e.hidePreferences),n.Fe=y(c),T(n.Fe,'body'),n.Oe=y(c),T(n.Oe,'footer');var u=y(c);x(u,'btns');var m=y(c),g=y(c);T(m,'btn-group'),T(g,'btn-group'),w(n.Oe,g),w(n.Oe,m),w(n.Ee,n.Ne),w(n.Ee,n.Ve),w(n.He,n.Ee),w(n.He,n.Fe),w(n.He,n.Oe),w(n.ge,n.He)}a&&(n.Ne.innerHTML=a,r&&h(n.Ve,'aria-label',r)),_&&_.forEach((e=>{var a=e.title,r=e.description,i=e.linkedCategory,l=i&&t.W[i],d=e.cookieTable,f=d&&d.body,_=f&&f.length>0,u=!!l,p=u&&t.ie[i]||!1,m=p&&k(p)||[],v=u&&(!!r||!!_||k(p).length>0),g=y(c);if(T(g,'section'),v||r){var b=y(c);T(b,'section-desc-wrapper')}if(v&&m.length>0){var S=y(c);T(S,'section-services'),m.forEach((e=>{var t=p[e].label||e,n=y(c),o=y(c),a=y(c),r=y('span'),s=y(c);T(n,'service'),T(s,'service-title'),T(r,'code-icon'),T(o,'service-header'),T(a,'service-icon');var d=I(t,e,l,!0,i);s.innerHTML=t,w(a,r),w(o,a),w(o,s),w(n,o),w(n,d),w(S,n)})),w(b,S)}if(a){var M=y(c),B=y(u?s:c);if(T(M,'section-title-wrapper'),T(B,'section-title'),B.innerHTML=a,w(M,B),u){var D=y('span');T(D,'section-arrow'),w(M,D),g.className+='--toggle';var H=I(a,i,l);if(m.length>0){var E=y('span');T(E,'badge'),T(E,'service-counter'),h(E,'aria-hidden',!0),h(E,'data-servicecounter',m.length);var N=o.serviceCounterLabel;N&&'string'==typeof N&&h(E,'data-counterlabel',N),w(B,E)}if(v){T(g,'section--expandable');var V=i+'-desc';h(B,'aria-expanded',!1),h(B,'aria-controls',V)}w(M,H)}else h(B,'role','heading'),h(B,'aria-level','3');w(g,M)}if(r){var F=y(c);T(F,'section-desc'),F.innerHTML=r,w(b,F)}if(v&&(h(b,'aria-hidden','true'),b.id=V,((e,t,n)=>{C(B,'click',(()=>{t.classList.contains('is-expanded')?(A(t,'is-expanded'),h(n,'aria-expanded','false'),h(e,'aria-hidden','true')):(x(t,'is-expanded'),h(n,'aria-expanded','true'),h(e,'aria-hidden','false'))}))})(b,g,B),_)){var j=y('table'),O=y('thead'),P=y('tbody');T(j,'section-table'),T(O,'table-head'),T(P,'table-body');var G=d.headers,R=k(G),J=n.ue.createDocumentFragment(),L=y('tr');h(L,'role','row');for(var U=0;U<R.length;U++){var z=G[R[U]],q=y('th');q.id='cc__row-'+z,h(q,'role','columnheader'),h(q,'scope','col'),T(q,'table-th'),q.innerHTML=z,w(J,q)}w(L,J),w(O,L);var K=n.ue.createDocumentFragment();for(U=0;U<f.length;U++){var Q=f[U],W=y('tr');h(W,'role','row'),T(W,'table-tr');for(var X=0;X<R.length;X++){var Y=R[X],Z=G[Y],$=Q[Y],ee=y('td'),te=y(c);T(ee,'table-td'),h(ee,'data-column',Z),h(ee,'headers','cc__row-'+Z),te.insertAdjacentHTML('beforeend',$),w(ee,te),w(W,ee)}w(K,W)}w(P,K),w(j,O),w(j,P),w(b,j)}(v||r)&&w(g,b),w(n.Fe,g),n.je?w(n.je,g):w(n.Fe,g)})),(i||l)&&(l&&(n.Ge||(n.Ge=y(s),T(n.Ge,'btn'),w(m,n.Ge),C(n.Ge,'click',(()=>{b([])}))),n.Ge.innerHTML=l),i&&(n.Pe||(n.Pe=y(s),T(n.Pe,'btn'),w(m,n.Pe),C(n.Pe,'click',(()=>{b('all')}))),n.Pe.innerHTML=i)),f&&(n.Re||(n.Re=y(s),T(n.Re,'btn'),T(n.Re,'btn--secondary'),w(g,n.Re),C(n.Re,'click',(()=>{b()}))),n.Re.innerHTML=f),n.je&&(n.He.replaceChild(n.je,n.Fe),n.Fe=n.je),F(1),t.P||(t.P=!0,p(v.o.p,d,n.He),N(),w(n.me,n.ge),setTimeout((()=>x(n.ge,'c--anim')),100))}function b(t){e.acceptCategory(t),e.hidePreferences(),e.hide()}};function I(e,t,n,o,a){const r=v.l,c=v._e;var s=y('label'),l=y('input'),d=y('span'),f=y('span'),_=y('span'),u=y('span');if(l.type='checkbox',x(s,'section__toggle-wrapper'),x(l,'section__toggle'),x(_,'toggle__icon-on'),x(u,'toggle__icon-off'),x(d,'toggle__icon'),x(f,'toggle__label'),h(d,'aria-hidden','true'),o?(x(s,'toggle-service'),x(l,'toggle-service'),h(l,i,a),c.Le[a][t]=l):c.Je[t]=l,o?(e=>{C(l,'change',(()=>{var t=c.Le[e],n=c.Je[e];for(var o in r.se[e]=[],t){const n=t[o];n.checked&&r.se[e].push(n.value)}r.se[e].length>0?n.checked=!0:n.checked=!1}))})(a):(e=>{C(l,'click',(()=>{var t=c.Le[e];if(r.se[e]=[],l.checked)for(var n in t)t[n].checked=!0;else for(n in t)t[n].checked=!1}))})(t),l.value=t,f.textContent=e.replace(/<.*>.*<\/.*>/gm,''),w(d,u),w(d,_),r.F)(n.enabled||n.readOnly)&&(l.checked=!0);else if(o){var p=r.ce[a];p&&b(p,t)&&(l.checked=!0)}else b(r.i.categories,t)&&(l.checked=!0);return n.readOnly&&(l.disabled=!0),w(s,l),w(s,d),w(s,f),s}const O=e=>{const t=v.l,n=v._e,o=t.M&&t.M.consentModal;if(o){!0===t.S.disablePageInteraction&&x(n.pe,r);var a=o.acceptAllBtn,i=o.acceptNecessaryBtn,d=o.showPreferencesBtn,f=o.closeIconLabel,_=o.footer;if(!n.ve){n.ve=y(c),n.be=y(c),n.ye=y(c),n.he=y(c),n.ke=y(c),x(n.ve,'cm-wrapper'),x(n.be,'cm'),S(n.ye,'body'),S(n.he,'texts'),S(n.ke,'btns'),h(n.be,'role','dialog'),h(n.be,'aria-modal','true'),h(n.be,'aria-hidden','false'),h(n.be,'aria-labelledby','cm__title'),h(n.be,'aria-describedby','cm__desc'),n.be.style.visibility='hidden';const o='box',r=t.S.guiOptions,l=r&&r.consentModal,_=(l&&l.layout||o).split(' ')[0]===o;f&&_&&(n.De||(n.De=y(s),S(n.De,'btn'),S(n.De,'btn--close'),C(n.De,'click',(()=>{e.hide(),e.acceptCategory([])})),w(n.ye,n.De)),h(n.De,'aria-label',f)),w(n.ye,n.he),(a||i||d)&&w(n.ye,n.ke),w(n.be,n.ye),w(n.ve,n.be)}var u=o.title;u&&(n.we||(n.we=y(c),n.we.className=n.we.id='cm__title',h(n.we,'role','heading'),h(n.we,'aria-level','2'),w(n.he,n.we)),n.we.innerHTML=u);var m=o.description;if(m&&(t.L&&(m=m.replace('{{revisionMessage}}',t.U?'':o.revisionMessage||'')),n.Ce||(n.Ce=y(c),n.Ce.className=n.Ce.id='cm__desc',w(n.he,n.Ce)),n.Ce.innerHTML=m),a&&(n.Te||(n.Te=y(s),S(n.Te,'btn'),C(n.Te,'click',(()=>{e.hide(),e.acceptCategory('all')}))),n.Te.innerHTML=a),i&&(n.Ae||(n.Ae=y(s),S(n.Ae,'btn'),C(n.Ae,'click',(()=>{e.hide(),e.acceptCategory([])}))),n.Ae.innerHTML=i),d&&(n.Me||(n.Me=y(s),S(n.Me,'btn'),S(n.Me,'btn--secondary'),C(n.Me,'mouseover',(()=>{j(e)})),C(n.Me,'click',e.showPreferences)),n.Me.innerHTML=d),!n.Se&&d&&(n.Se=y(c),S(n.Se,'btn-group'),w(n.Se,n.Me),w(n.ke,n.Se)),n.xe||(n.xe=y(c),S(n.xe,'btn-group'),i&&w(n.xe,n.Ae),a&&w(n.xe,n.Te),(a||i)&&w(n.ye,n.xe),w(n.ke,n.xe)),_){if(!n.Be){var g=y(c),b=y(c);n.Be=y(c),S(g,'footer'),S(b,'links'),S(n.Be,'link-group'),w(b,n.Be),w(g,b),w(n.be,g)}n.Be.innerHTML=_}F(0),t.j||(t.j=!0,p(v.o.p,l,n.be),N(),w(n.me,n.ve),setTimeout((()=>x(n.ve,'c--anim')),100)),H(n.ye,e,j)}},P=e=>!!e&&b(k(v.l.A),e),G=()=>{const e=v.l;return e.T||e.S.language.default},R=e=>{e&&(v.l.T=e)},J=async e=>{const t=v.l;let n;n=e&&P(e)?e:G();let o=t.A[n];if(!o)return!1;if('string'==typeof o){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(o);if(!e)return!1;o=e}return t.M=o,R(n),!0},L=e=>{const{hostname:t,protocol:n}=window.location,{name:o,path:a,domain:r,sameSite:i}=v.k.cookie,c=encodeURIComponent(JSON.stringify(v.l.i)),s=e?(()=>{const e=v.l.N,t=e?new Date-e:0;return 864e5*M()-t})():864e5*M(),l=new Date;l.setTime(l.getTime()+s);let d=o+'='+c+(0!==s?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+i;b(t,'.')&&(d+='; Domain='+r),'https:'===n&&(d+='; Secure'),document.cookie=d,v.l.i},U=e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t},z=(e,t,n)=>{const o=n||v.k.cookie.domain,a=t||v.k.cookie.path,r='www.'===o.slice(0,4),i=r&&o.substring(4),c=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};e.forEach((e=>{c(e),c(e,o),r&&c(e,i)}))},q=(e,t)=>{const n=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return n?t?n.pop():e:''},K=e=>{const t=document.cookie.split(/;\s*/),n=[];for(var o=0;o<t.length;o++){let a=t[o].split('=')[0];if(e)try{e.test(a)&&n.push(a)}catch(e){}else n.push(a)}return n},Q=e=>{e.dispatchEvent(new Event('change'))},W=(e,o=[])=>{const a=v.l;let r=!1;var i=[];if(e)if('object'==typeof e&&'number'==typeof e.length)for(var c=0;c<e.length;c++)b(a.X,e[c])&&i.push(e[c]);else'string'==typeof e&&('all'===e?i=a.X.slice():b(a.X,e)&&i.push(e));else i=(()=>{let e=v._e.Je,t=[];if(e)for(var n in e)e[n].checked&&t.push(e[n].value);else a.F||(t=a.i.categories);for(let e in a.se)a.se[e].length>0&&(b(t,e)||t.push(e));return t})(),r=!0;if(o.length>=1)for(c=0;c<o.length;c++)i=i.filter((e=>e!==o[c]));for(c=0;c<a.Z.length;c++)b(i,a.Z[c])||i.push(a.Z[c]);a.Y=i,D(),r||(a.se={}),a.le=_(a.ce),a.X.forEach((e=>{const t=a.ie[e],n=k(t),o=a.ce;0!==n.length&&(o[e]=[],b(a.Z,e)?n.forEach((t=>{o[e].push(t)})):'all'===a.K?r&&a.se[e]&&a.se[e].length>0?a.se[e].forEach((t=>{o[e].push(t)})):n.forEach((t=>{o[e].push(t)})):'necessary'===a.K?o[e]=[]:r&&a.se[e]&&a.se[e].length>0?a.se[e].forEach((t=>{o[e].push(t)})):b(a.Y,e)&&k(t).forEach((t=>o[e].push(t))),o[e]=[...new Set(o[e])])})),(()=>{const e=v.l;v.k.mode===n&&e.F?e.g=B(e.$,e.Y):e.g=B(e.Y,e.i.categories||[]);let o=e.g.length>0,a=!1;e.X.forEach((t=>{e.h[t]=B(e.ce[t],e.le[t]||[]),e.h[t].length>0&&(a=!0)}));var r=v._e.Je;for(var i in r)b(e.Y,i)?r[i].checked=!0:r[i].checked=!1;e.X.forEach((t=>{var n=v._e.Le[t],o=e.ce[t];for(var a in n){const e=n[a];b(o,a)?e.checked=!0:e.checked=!1}})),e.H||(e.H=new Date),e.V||(e.V=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.i={categories:_(e.Y),revision:v.k.revision,data:e.D,consentTimestamp:e.H.toISOString(),consentId:e.V,services:_(e.ce)};var c=!1;(e.F||o||a)&&(e.F&&(e.F=!1,c=!0),D(),e.N?e.N=new Date:e.N=e.H,e.i.lastConsentTimestamp=e.N.toISOString(),L(),v.k.autoClearCookies&&(c||!e.F&&o)&&(e=>{const t=v.l,n=K();t.q=!1;let o=e?t.X:t.g;o=o.filter((e=>{let n=t.W[e];return!!n&&!n.readOnly&&!!n.autoClear})),o.forEach((o=>{const a=t.W[o].autoClear,r=a&&a.cookies||[],i=b(t.g,o),c=!b(t.Y,o),s=i&&c;(e&&c||!e&&s)&&(!0===a.reloadPage&&s&&(t.q=!0),r.forEach((e=>{let t=[];const o=e.name,a=e.domain,r=e.path;if(o instanceof RegExp)n.forEach((e=>{o.test(e)&&t.push(e)}));else{let e=(i=o,n.indexOf(i));e>-1&&t.push(n[e])}var i;t.length>0&&z(t,r,a)})))}))})(c),V()),c&&(p(v.o.m),p(v.o.v),v.k.mode===t)||((o||a)&&p(v.o.C),e.q&&window.location.reload())})()},X=(e,t,n)=>{let o=[];const a=e=>{if('string'==typeof e){let t=q(e);''!==t&&o.push(t)}else o=o.concat(K(e))};if(Array.isArray(e))for(var r=0;r<e.length;r++)a(e[r]);else a(e);z(o,t,n)},Y=e=>{e&&!v.l.j&&O(te),v.l.j&&(x(v._e.pe,o),h(v._e.be,'aria-hidden','false'),v.l.I=!0,setTimeout((()=>{v.l.te=v._e.ue.activeElement,v.l.J=v.l.oe}),200),p(v.o._,l))},Z=()=>{v.l.j&&v.l.I&&(A(v._e.pe,o),h(v._e.be,'aria-hidden','true'),v.l.I=!1,setTimeout((()=>{v.l.te.focus(),v.l.J=[]}),200),p(v.o.u,l))},$=()=>{const e=v.l;e.P&&e.O||(e.P||j(te),x(v._e.pe,a),h(v._e.He,'aria-hidden','false'),e.O=!0,setTimeout((()=>{e.R=!0}),1),setTimeout((()=>{e.I?e.ne=v._e.ue.activeElement:e.te=v._e.ue.activeElement,0!==e.ae.length&&(e.ae[0].focus(),e.J=e.ae)}),200),p(v.o._,d))},ee=()=>{const e=v.l;e.O&&(A(v._e.pe,a),h(v._e.He,'aria-hidden','true'),e.O=!1,setTimeout((()=>{e.R=!1}),1),e.I?(e.ne&&e.ne.focus(),e.J=e.oe):(e.te&&e.te.focus(),e.J=[]),e.G=!1,p(v.o.u,d))};var te={show:Y,hide:Z,showPreferences:$,hidePreferences:ee,acceptCategory:W};const ne=(e,t)=>{const n=U(q(t||v.k.cookie.name,!0));return e?n[e]:n};e.acceptCategory=W,e.acceptService=(e,t)=>{const n=v.l;if(!e||!t||'string'!=typeof t||!b(n.X,t))return!1;const o=v._e.Le[t]||{},a=k(n.ie[t]);if(n.se[t]=[],'string'==typeof e)if('all'===e){for(let e in o)o[e].checked=!0,Q(o[e]);n.se[t]=[...a]}else{for(let t in o)o[t].checked=e===t,Q(o[t]);b(a,e)&&n.se[t].push(e)}else if('object'==typeof e&&Array.isArray(e)){for(let t in o)b(e,t)?o[t].checked=!0:o[t].checked=!1,Q(o[t]);a.forEach((o=>{b(e,o)&&n.se[t].push(o)}))}W()},e.acceptedCategory=e=>{let n;return n=v.l.F&&v.k.mode!==t?v.l.$:E().accepted||[],b(n,e)},e.acceptedService=(e,t)=>b(v.l.ce[t]||[],e),e.eraseCookies=X,e.getConfig=e=>{const t=v.k,n=v.l.S;return e?t[e]||n[e]:{...t,...n,cookie:{...t.cookie}}},e.getCookie=ne,e.getUserPreferences=()=>{const e=!v.l.F;var t,n=e&&E();return{acceptType:v.l.K,acceptedCategories:e?n.accepted:[],rejectedCategories:e?n.rejected:[],acceptedServices:e?v.l.ce:{},rejectedServices:e?(t={},v.l.X.forEach((e=>{t[e]=B(v.l.ce[e]||[],k(v.l.ie[e])||[])})),t):{}}},e.hide=Z,e.hidePreferences=ee,e.loadScript=(e,t)=>{let n=document.querySelector('script[src="'+e+'"]');return new Promise(((o,a)=>{if(n)return o(!0);n=y('script'),Array.isArray(t)&&t.forEach((e=>{h(n,e.name,e.value)})),n.onload=()=>o(!0),n.onerror=()=>{n.remove(),a(!1)},n.src=e,w(document.head,n)}))},e.reset=e=>{const t=v._e,n=v.k.cookie;!0===e&&X(n.name,n.path,n.domain),v.l.B.forEach((e=>{e.Ue.removeEventListener(e.ze,e.qe)})),t.me&&t.me.remove(),t.pe&&(A(t.pe,r),A(t.pe,a),A(t.pe,o));const i=new m;v.l=i.l,v._e=i._e,v.k=i.k,v.t=i.t,v.o=i.o,window.nt=!1},e.run=async e=>{const t=v.l,o=v.k,a=window;if(!a.nt){if(a.nt=!0,(e=>{!function(){const e=document;v._e.ue=e,v._e.pe=e.documentElement,v.k.cookie.domain=window.location.hostname}();const t=v.k,o=v.l,a=t.cookie,r=v.t,c=e.cookie,s=e.categories,l=k(s)||[],d=navigator;o.S=e,o.A=e.language.translations,o.W=s,o.X=l,r.m=e.onFirstConsent,r.v=e.onConsent,r.C=e.onChange,r.u=e.onModalHide,r._=e.onModalShow,r.p=e.onModalReady;const{mode:f,autoShow:_,autoClearCookies:u,revision:p,manageScriptTags:m,hideFromBots:y,lazyHtmlGeneration:h}=e;f===n&&(t.mode=f),'boolean'==typeof _&&(t.autoShow=_),'boolean'==typeof u&&(t.autoClearCookies=u),'boolean'==typeof m&&(t.manageScriptTags=m),'number'==typeof p&&p>=0&&(t.revision=p,o.L=!0),'boolean'==typeof h&&(t.lazyHtmlGeneration=h),!1===y&&(t.hideFromBots=!1),!0===t.hideFromBots&&d&&(o.ee=d.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(d.userAgent)||d.webdriver),g(c)&&(t.cookie={...a,...c}),t.autoClearCookies,o.L,t.manageScriptTags,function(e){const t=v.l;e.forEach((e=>{const n=t.W[e],o=n.services||{},a=o&&g(o)&&k(o)||[];n.readOnly&&t.Z.push(e),t.ie[e]={},t.ce[e]=[],v._e.Le[e]={},a.forEach((n=>{const a=o[n];a.enabled=!1,t.ie[e][n]=a}))}))}(l),(()=>{if(!v.k.manageScriptTags)return;const e=v.l;e.de=v._e.ue.querySelectorAll('script[data-category]'),e.fe=[],e.de.forEach((t=>{let n=t.getAttribute(i),o=t.dataset.service||'',a=!1;if(n&&'!'===n.charAt(0)&&(n=n.slice(1),a=!0),'!'===o.charAt(0)&&(o=o.slice(1),a=!0),b(e.X,n)&&(e.fe.push({We:!1,Xe:a,Ke:n,Qe:o}),o)){const t=e.ie[n];t[o]||(t[o]={enabled:!1})}}))})(),R((()=>{const e=v.l.S.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),P(t))return t}return G()})())})(e),t.ee)return;const r=U(q(o.cookie.name,!0)),s=r.categories,l=Array.isArray(s)&&s.length>0;t.i=r,t.V=r.consentId;const d=!!t.V&&'string'==typeof t.V;t.H=r.consentTimestamp,t.H&&(t.H=new Date(t.H)),t.N=r.lastConsentTimestamp,t.N&&(t.N=new Date(t.N));const f=r.data;if(t.D=void 0!==f?f:null,t.L&&d&&r.revision!==o.revision&&(t.U=!1),t.F=!(d&&t.U&&t.H&&t.N&&l),t.F,t.F?o.mode===n&&(()=>{const e=v.l;e.X.forEach((t=>{if(e.W[t].enabled){e.$.push(t);const o=e.ie[t]||{};for(var n in o)e.ce[t].push(n)}}))})():(t.Y=r.categories,t.ce=r.services||{},D()),!await J())return;(e=>{const t=v._e,n=v.l;t.me=y(c),t.me.id='cc-main',t.me.style.position='fixed',t.me.style.zIndex='2147483647',n.F&&O(e),v.k.lazyHtmlGeneration||j(e),H(null,e,j);let o=n.S.root;o&&'string'==typeof o&&(o=document.querySelector(o)),w(o||t.ue.body,t.me)})(te),o.autoShow&&t.F&&Y(!0),(e=>{const t=v._e;var n=!1,o=!1;C(t.pe,'keydown',(e=>{if('Tab'!==e.key)return;const a=v.l.J;if(a.length>0){const r=t.ue.activeElement;e.shiftKey?r===a[0]&&(a[1].focus(),e.preventDefault()):r===a[1]&&(a[0].focus(),e.preventDefault()),o||v.l.G||(o=!0,!n&&e.preventDefault(),e.shiftKey?a[1].focus():a[0].focus())}!o&&(n=!0)}),!0),C(t.me,'click',(n=>{const o=v.l;o.R?t.He.contains(n.target)?o.G=!0:(e.hidePreferences(0),o.G=!1):o.I&&t.be.contains(n.target)&&(o.G=!0)}))})({hidePreferences:ee}),t.F?o.mode===n&&(o.mode,t.$,V(t.$)):(V(),p(v.o.v))}},e.setCookieData=e=>{let t,n=e.value,o=e.mode,a=!1;const r=v.l;if('update'===o){r.D=ne('data'),t=ne('data');const e=typeof t==typeof n;if(e&&'object'==typeof t)for(var i in!t&&(t={}),n)t[i]!==n[i]&&(t[i]=n[i],a=!0);else!e&&t||t===n||(t=n,a=!0)}else t=n,a=!0;return a&&(r.D=t,r.i.data=t,L(!0)),a},e.setLanguage=async(e,t)=>!(!P(e)||e===G()&&!0!==t||!await J(e)||(R(e),v.l.j&&O(te),v.l.P&&j(te),0)),e.show=Y,e.showPreferences=$,e.validConsent=()=>!v.l.F,e.validCookie=e=>''!==q(e,!0),Object.defineProperty(e,'__esModule',{value:!0})},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
