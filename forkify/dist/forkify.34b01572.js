let t={recipe:{}},i=async function(i){try{let n=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${i}`),e=await n.json();if(!n.ok)throw Error(`${e.message} (${n.status})`);let{recipe:s}=e.data;console.log(s),t.recipe={id:s.id,title:s.title,publisher:s.publisher,sourceUrl:s.source_url,image:s.image_url,servings:s.servings,cookTime:s.cooking_time,ingredients:s.ingredients},console.log(t.recipe)}catch(t){alert(t)}},n=new URL(import.meta.resolve("hfd23")).href;var e={};!function(){function t(){return Error("Parameters must be integer")}function i(){return Error("Invalid argument")}function n(){return Error("Division by Zero")}function s(e,s){var o=l,c=f;let h=f;if(null!=e)if(void 0!==s){if("bigint"==typeof e)o=e;else{if(isNaN(e))throw i();if(0!=e%1)throw t();o=BigInt(e)}if("bigint"==typeof s)c=s;else{if(isNaN(s))throw i();if(0!=s%1)throw t();c=BigInt(s)}h=o*c}else if("object"==typeof e){if("d"in e&&"n"in e)o=BigInt(e.n),c=BigInt(e.d),"s"in e&&(o*=BigInt(e.s));else if(0 in e)o=BigInt(e[0]),1 in e&&(c=BigInt(e[1]));else if("bigint"==typeof e)o=e;else throw i();h=o*c}else if("number"==typeof e){if(isNaN(e))throw i();if(0>e&&(h=-f,e=-e),0==e%1)o=BigInt(e);else{s=1;var u=0,a=1,d=1;let t=1;for(1<=e&&(s=10**Math.floor(1+Math.log10(e)),e/=s);1e7>=a&&1e7>=t;)if(e===(c=(u+d)/(a+t))){1e7>=a+t?(o=u+d,c=a+t):t>a?(o=d,c=t):(o=u,c=a);break}else e>c?(u+=d,a+=t):(d+=u,t+=a),1e7<a?(o=d,c=t):(o=u,c=a);o=BigInt(o)*BigInt(s),c=BigInt(c)}}else if("string"==typeof e){if(c=0,u=s=o=l,a=d=f,null===(e=e.replace(/_/g,"").match(/\d+|./g)))throw i();if("-"===e[c]?(h=-f,c++):"+"===e[c]&&c++,e.length===c+1?s=r(e[c++],h):"."===e[c+1]||"."===e[c]?("."!==e[c]&&(o=r(e[c++],h)),(++c+1===e.length||"("===e[c+1]&&")"===e[c+3]||"'"===e[c+1]&&"'"===e[c+3])&&(s=r(e[c],h),d=v**BigInt(e[c].length),c++),("("===e[c]&&")"===e[c+2]||"'"===e[c]&&"'"===e[c+2])&&(u=r(e[c+1],h),a=v**BigInt(e[c+1].length)-f,c+=3)):"/"===e[c+1]||":"===e[c+1]?(s=r(e[c],h),d=r(e[c+2],f),c+=3):"/"===e[c+3]&&" "===e[c+1]&&(o=r(e[c],h),s=r(e[c+2],h),d=r(e[c+4],f),c+=5),e.length<=c)h=o=u+(c=d*a)*o+a*s;else throw i()}else if("bigint"==typeof e)h=o=e,c=f;else throw i();if(c===l)throw n();_.s=h<l?-f:f,_.n=o<l?-o:o,_.d=c<l?-c:c}function r(t,n){try{t=BigInt(t)}catch(t){throw i()}return t*n}function o(t){return"bigint"==typeof t?t:Math.floor(t)}function c(t,i){if(i===l)throw n();let e=Object.create(a.prototype);e.s=t<l?-f:f;let s=u(t=t<l?-t:t,i);return e.n=t/s,e.d=i/s,e}function h(t){let i=Object.create(null);if(t<=f)return i[t]=f,i;for(;t%d===l;)i[d]=(i[d]||l)+f,t/=d;for(;t%g===l;)i[g]=(i[g]||l)+f,t/=g;for(;t%p===l;)i[p]=(i[p]||l)+f,t/=p;for(let n=0,e=d+p;e*e<=t;){for(;t%e===l;)i[e]=(i[e]||l)+f,t/=e;e+=b[n],n=n+1&7}return t>f&&(i[t]=(i[t]||l)+f),i}function u(t,i){if(!t)return i;if(!i)return t;for(;;){if(!(t%=i))return i;if(!(i%=t))return t}}function a(t,i){if(s(t,i),!(this instanceof a))return c(_.s*_.n,_.d);t=u(_.d,_.n),this.s=_.s,this.n=_.n/t,this.d=_.d/t}"u"<typeof BigInt&&(BigInt=function(t){if(isNaN(t))throw Error("");return t});let l=BigInt(0),f=BigInt(1),d=BigInt(2),g=BigInt(3),p=BigInt(5),v=BigInt(10),_={s:f,n:l,d:f},b=[d*d,d,d*d,d,d*d,d*g,d,d*g];a.prototype={s:f,n:l,d:f,abs:function(){return c(this.n,this.d)},neg:function(){return c(-this.s*this.n,this.d)},add:function(t,i){return s(t,i),c(this.s*this.n*_.d+_.s*this.d*_.n,this.d*_.d)},sub:function(t,i){return s(t,i),c(this.s*this.n*_.d-_.s*this.d*_.n,this.d*_.d)},mul:function(t,i){return s(t,i),c(this.s*_.s*this.n*_.n,this.d*_.d)},div:function(t,i){return s(t,i),c(this.s*_.s*this.n*_.d,this.d*_.n)},clone:function(){return c(this.s*this.n,this.d)},mod:function(t,i){if(void 0===t)return c(this.s*this.n%this.d,f);if(s(t,i),l===_.n*this.d)throw n();return c(this.s*_.d*this.n%(_.n*this.d),_.d*this.d)},gcd:function(t,i){return s(t,i),c(u(_.n,this.n)*u(_.d,this.d),_.d*this.d)},lcm:function(t,i){return s(t,i),_.n===l&&this.n===l?c(l,f):c(_.n*this.n,u(_.n,this.n)*u(_.d,this.d))},inverse:function(){return c(this.s*this.d,this.n)},pow:function(t,i){if(s(t,i),_.d===f)return _.s<l?c((this.s*this.d)**_.n,this.n**_.n):c((this.s*this.n)**_.n,this.d**_.n);if(this.s<l)return null;t=h(this.n),i=h(this.d);let n=f,e=f;for(let i in t)if("1"!==i){if("0"===i){n=l;break}if(t[i]*=_.n,t[i]%_.d!==l)return null;t[i]/=_.d,n*=BigInt(i)**t[i]}for(let t in i)if("1"!==t){if(i[t]*=_.n,i[t]%_.d!==l)return null;i[t]/=_.d,e*=BigInt(t)**i[t]}return _.s<l?c(e,n):c(n,e)},log:function(t,i){if(s(t,i),this.s<=l||_.s<=l)return null;var n=Object.create(null);t=h(_.n);let e=h(_.d);i=h(this.n);let r=h(this.d);for(var o in e)t[o]=(t[o]||l)-e[o];for(var a in r)i[a]=(i[a]||l)-r[a];for(var f in t)"1"!==f&&(n[f]=!0);for(var d in i)"1"!==d&&(n[d]=!0);for(let e in a=o=null,n)if(f=t[e]||l,n=i[e]||l,f===l){if(n!==l)return null}else if(d=u(n,f),n/=d,f/=d,null===o&&null===a)o=n,a=f;else if(n*a!=o*f)return null;return null!==o&&null!==a?c(o,a):null},equals:function(t,i){return s(t,i),this.s*this.n*_.d==_.s*_.n*this.d},lt:function(t,i){return s(t,i),this.s*this.n*_.d<_.s*_.n*this.d},lte:function(t,i){return s(t,i),this.s*this.n*_.d<=_.s*_.n*this.d},gt:function(t,i){return s(t,i),this.s*this.n*_.d>_.s*_.n*this.d},gte:function(t,i){return s(t,i),this.s*this.n*_.d>=_.s*_.n*this.d},compare:function(t,i){return s(t,i),(l<(t=this.s*this.n*_.d-_.s*_.n*this.d))-(t<l)},ceil:function(t){return t=v**BigInt(t||0),c(o(this.s*t*this.n/this.d)+(t*this.n%this.d>l&&this.s>=l?f:l),t)},floor:function(t){return t=v**BigInt(t||0),c(o(this.s*t*this.n/this.d)-(t*this.n%this.d>l&&this.s<l?f:l),t)},round:function(t){return t=v**BigInt(t||0),c(o(this.s*t*this.n/this.d)+this.s*((this.s>=l?f:l)+t*this.n%this.d*d>this.d?f:l),t)},roundTo:function(t,i){s(t,i);var n=this.n*_.d;return i=n%(t=this.d*_.n),n=o(n/t),i+i>=t&&n++,c(this.s*n*_.n,_.d)},divisible:function(t,i){return s(t,i),_.n!==l&&this.n*_.d%(_.n*this.d)===l},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(t=15){let i=this.n,n=this.d;t:{for(e=n;e%d===l;e/=d);for(;e%p===l;e/=p);if(e===f)e=l;else{for(var e,s=v%e,r=1;s!==f;r++)if(s=s*v%e,2e3<r){e=l;break t}e=BigInt(r)}}t:{s=f,r=v;var c=e;let t=f;for(;c>l;r=r*r%n,c>>=f)c&f&&(t=t*r%n);for(r=t,c=0;300>c;c++){if(s===r){s=BigInt(c);break t}s=s*v%n,r=r*v%n}s=0}if(r=s,s=(this.s<l?"-":"")+o(i/n),(i=i%n*v)&&(s+="."),e){for(t=r;t--;)s+=o(i/n),i%=n,i*=v;for(s+="(",t=e;t--;)s+=o(i/n),i%=n,i*=v;s+=")"}else for(;i&&t--;)s+=o(i/n),i%=n,i*=v;return s},toFraction:function(t=!1){let i=this.n,n=this.d,e=this.s<l?"-":"";if(n===f)e+=i;else{let s=o(i/n);t&&s>l&&(e+=s,e+=" ",i%=n),e=e+i+"/"+n}return e},toLatex:function(t=!1){let i=this.n,n=this.d,e=this.s<l?"-":"";if(n===f)e+=i;else{let s=o(i/n);t&&s>l&&(e+=s,i%=n),e=e+"\\frac{"+i+"}{"+n+"}"}return e},toContinued:function(){let t=this.n,i=this.d,n=[];for(;i;){n.push(o(t/i));let e=t%i;t=i,i=e}return n},simplify:function(t=.001){t=BigInt(Math.ceil(1/t));let i=this.abs(),n=i.toContinued();for(let s=1;s<n.length;s++){let r=c(n[s-1],f);for(var e=s-2;0<=e;e--)r=r.inverse().add(n[e]);if((e=r.sub(i)).n*t<e.d)return r.mul(this.s)}return this}},"function"==typeof define&&define.amd?define([],function(){return a}):(Object.defineProperty(a,"__esModule",{value:!0}),a.default=a,a.Fraction=a,e=a)}();class s{#t=document.querySelector(".recipe");#i;render(t){this.#i=t;let i=this.#n();this.#e(),this.#t.insertAdjacentHTML("afterbegin",i)}#n(){return`
            
        <figure class="recipe__fig">
            <img src="${this.#i.image}" alt="Tomato" class="recipe__img" />
            <h1 class="recipe__title">
                <span>${this.#i.title}</span>
            </h1>
            </figure>

            <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                <use href="${n}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this.#i.cookTime}</span>
                <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                <use href="${n}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this.#i.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                <button class="btn--tiny btn--increase-servings">
                    <svg>
                    <use href="${n}#icon-minus-circle"></use>
                    </svg>
                </button>
                <button class="btn--tiny btn--increase-servings">
                    <svg>
                    <use href="${n}#icon-plus-circle"></use>
                    </svg>
                </button>
                </div>
            </div>

            <div class="recipe__user-generated">
                <svg>
                <use href="${n}#icon-user"></use>
                </svg>
            </div>
            <button class="btn--round">
                <svg class="">
                <use href="${n}#icon-bookmark-fill"></use>
                </svg>
            </button>
            </div>

            <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
            ${this.#i.ingredients.map(t=>`
                <li class="recipe__ingredient">
                <svg class="recipe__icon">
                    <use href="${n}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${t.quantity?new e(t.quantity).toString():""}</div>
                <div class="recipe__description">
                    <span class="recipe__unit">${t.unit}</span>
                    ${t.description}
                </div>
                </li>`).join("")}
            </ul>
            </div>

            <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this.#i.publisher}</span>. Please check out
                directions at their website.
            </p>
            <a
                class="btn--small recipe__btn"
                href="${this.#i.sourceUrl}"
                target="_blank"
            >
                <span>Directions</span>
                <svg class="search__icon">
                <use href="${n}#icon-arrow-right"></use>
                </svg>
            </a>
            </div>`}#e(){this.#t.innerHTML=""}renderSpinner(){let t=`
      <div class="spinner">
        <svg>
          <use href="${n}#icon-loader"></use>
        </svg>
      </div>
    `;this.#t.innerHTML="",this.#t.insertAdjacentHTML("afterbegin",t)}}var r=new s;async function o(){try{let n=window.location.hash.slice(1);if(console.log(n),!n)return;r.renderSpinner(),await i(n),r.render(t.recipe)}catch(t){console.error(t)}}["hashchange","load"].forEach(t=>{window.addEventListener(t,o)});
//# sourceMappingURL=forkify.34b01572.js.map
