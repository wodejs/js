/* Fengs.JS v3.0 2017-03-17 16:15:45 */ 
Fengs(function(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K,Q,G,Y,Z,et,tt,nt,rt,it,st,ot,ut,at,ft,lt,ct,ht,pt,dt,vt,mt,gt,yt,bt,wt,Et){var St=this.d;this[St(e)](St(t),function(e,t){function Tt(){var e=document[St(n)](St(r)),t=St(i);return e[St(s)](t,St(o)),typeof e[t]===St(u)?St(a):St(r)}var xt=this,Nt=Tt()+St(f),Ct=navigator[St(l)],kt=/iphone/i[St(c)](Ct),Lt=/android/i[St(c)](Ct),At;t[St(h)]={definitions:{9:St(p),a:St(d),"*":St(v)},dataName:St(m),placeholder:St(g)},t[St(y)][St(b)]({caret:function(e,t){var n;if(this[St(w)]===0||this[St(E)](St(S)))return;return typeof e==St(x)?(t=typeof t===St(x)?t:e,this[St(T)](function(){this[St(N)]?this[St(N)](e,t):this[St(C)]&&(n=this[St(C)](),n[St(k)](!0),n[St(L)](St(A),t),n[St(O)](St(A),e),n[St(M)]())})):(this[0][St(N)]?(e=this[0][St(_)],t=this[0][St(D)]):document[St(P)]&&document[St(P)][St(H)]&&(n=document[St(P)][St(H)](),e=0-n[St(B)]()[St(O)](St(A),-1e5),t=e+n[St(j)][St(w)]),{begin:e,end:t})},unmask:function(){return this[St(F)](St(I))},mask:function(e,n){var r,i,s,u,a,l;return!e&&this[St(w)]>0?(r=t(this[0]),r[St(q)](t[St(h)][St(R)])()):(n=t[St(b)]({placeholder:t[St(h)][St(U)],completed:null},n),i=t[St(h)][St(z)],s=[],u=l=e[St(w)],a=null,t[St(T)](e[St(W)](St(o)),function(e,t){t==St(X)?(l--,u=e):i[t]?(s[St(V)](new RegExp(i[t])),a===null&&(a=s[St(w)]-1)):s[St(V)](null)}),this[St(F)](St(I))[St(T)](function(){function v(e){while(++e<l&&!s[e]);return e}function m(e){while(--e>=0&&!s[e]);return e}function g(e,t){var i,o;if(e<0)return;for(i=e,o=v(t);i<l;i++)if(s[i]){if(!(o<l&&s[i][St(c)](p[o])))break;p[i]=p[o],p[o]=n[St(U)],o=v(o)}T(),r[St(K)](Math[St(Q)](a,e))}function b(e){var t,r,i,o;for(t=e,r=n[St(U)];t<l;t++)if(s[t]){i=v(t),o=p[t],p[t]=r;if(!(i<l&&s[i][St(c)](o)))break;r=o}}function E(e){var t=e[St(G)],n,i,s;t===8||t===46||kt&&t===127?(n=r[St(K)](),i=n[St(Y)],s=n[St(Z)],s-i===0&&(i=t!==46?m(i):s=v(i-1),s=t===46?v(s):s),x(i,s),g(i,s-1),e[St(et)]()):t==27&&(r[St(J)](d),r[St(K)](0,N()),e[St(et)]())}function S(e){var i=e[St(G)],o=r[St(K)](),u,a,f;if(e[St(tt)]||e[St(nt)]||e[St(rt)]||i<32)return;i&&(o[St(Z)]-o[St(Y)]!==0&&(x(o[St(Y)],o[St(Z)]),g(o[St(Y)],o[St(Z)]-1)),u=v(o[St(Y)]-1),u<l&&(a=String[St(it)](i),s[u][St(c)](a)&&(b(u),p[u]=a,T(),f=v(u),Lt?setTimeout(t[St(st)](t[St(y)][St(K)],r,f),0):r[St(K)](f),n[St(ot)]&&f>=l&&n[St(ot)][St(ut)](r))),e[St(et)]())}function x(e,t){var r;for(r=e;r<t&&r<l;r++)s[r]&&(p[r]=n[St(U)])}function T(){r[St(J)](p[St(at)](St(o)))}function N(e){var t=r[St(J)](),i=-1,f,h;for(f=0,pos=0;f<l;f++)if(s[f]){p[f]=n[St(U)];while(pos++<t[St(w)]){h=t[St(ft)](pos-1);if(s[f][St(c)](h)){p[f]=h,i=f;break}}if(pos>t[St(w)])break}else p[f]===t[St(ft)](pos)&&f!==u&&(pos++,i=f);return e?T():i+1<u?(r[St(J)](St(o)),x(0,l)):(T(),r[St(J)](r[St(J)]()[St(lt)](0,i+1))),u?f:a}var r=t(this),p=t[St($)](e[St(W)](St(o)),function(e,t){if(e!=St(X))return i[e]?n[St(U)]:e}),d=r[St(J)]();r[St(q)](t[St(h)][St(R)],function(){return t[St($)](p,function(e,t){return s[t]&&e!=n[St(U)]?e:null})[St(at)](St(o))}),r[St(ct)](St(ht))||r[St(pt)](St(I),function(){r[St(dt)](St(f))[St(vt)](t[St(h)][St(R)])})[St(mt)](St(gt),function(){clearTimeout(At);var t,n;d=r[St(J)](),t=N(),At=setTimeout(function(){T(),t==e[St(w)]?r[St(K)](0,t):r[St(K)](t)},10)})[St(mt)](St(yt),function(){N(),r[St(J)]()!=d&&r[St(bt)]()})[St(mt)](St(wt),E)[St(mt)](St(Et),S)[St(mt)](Nt,function(){setTimeout(function(){var e=N(!0);r[St(K)](e),n[St(ot)]&&e==r[St(J)]()[St(w)]&&n[St(ot)][St(ut)](r)},0)}),N()}))}})})},"6G9Qmg0T9K856SGg7IQASdYPSKsw4OEYYV9Lz9Ge399GmSm959YoSSKw4Op97Izoz9dw4ymA7I0LzSft69dwARzPSyetUSGQRy8UmU4oz9Ge4F0a9ye36GfQzcmA6yKc0KDIuSD4zyKc8Gm5Q+8AS+Kc5+ksmS8dQN8a91ft4yD451doSSKw4ym9QPeT7yKw4N9pSUkN53Lw4N9tnOG99VaD8U9tAR09ROaD99mJl19cSUkN53Lw4y8UQNfS938p6daa9gzE7yKw4ONU6yKc6SGkRON97HYc0djp9HNY39jc6cGqARzN9dYF63DQmSm/ASKc0e7plUEU53lc699IlOp0ASKc0KvpRy0A53Ea9Sft6e9P9+0UQNQaSyzw4OEYYV9Lz9Ge53jp6yDIYdYO9cDe4OEA8KsORk8y0KvyARzO918A6Szp9HN0ASKc6kwkQ+8UQOzoR+eH4ym98Kwa5Sft6+GgRFzPSyez693sRFzPSyez693sROp98NYy3GGk0N8mARzPSyez693sROp98NQQ91fd4y8A53Ea9Sft6e9P9g0L3kBe6+GQmS0UQNQaSyzw4ONB51zORH9c6+GQmRzoR+eh5kKwARzoR34F63vomS8/ASKc5G9slUsEzkXc63DIROEmASKc63DIROsy7kYO9Szw4y84Q3QLSyel0dwGmHKE0+Kc63jp9Vp97+4oRH9X0e8qARzP3Hmz6cGmAR0f7yKw4y8B51eTSSKw4ym9QPzc5GmISg0LSK8H6SGmARzO938h4yDAQ+BLSOXw4OEU598T9Uvw4ON97HYc0KegmSDU59YonNGe69mIScmBUSKc6GfQQcmJlU9NUSKw4OE9Q3aRSyes4ym953aLzOGe89dwAR0a9KBX0czsUHsEYbLOSNGe4y8BYVDNRUYw4OEA8OkPRk9e5kjpmg0LSK8z0dKwAR0T9W7F0VXwAR0LSKQk0OQIRFzP3+eb0NfQQVp97G7c6+GQRy8/ASKc0NlpQHN48NYORUYw4ymA7H3c5G9slVp97HYc0NlplSmY6U9QRk8t6GdwAR0L9V9363KwAR0a9W8c5+Gq9+m9QPeT7yKw4OEUQ3oPlWfD6+ksRb0LSKQk0elomR0TSyes63DP3+mb7HGLzSfC4OpA51MPR3Be0Nfq9+m9QPeT7yKw")