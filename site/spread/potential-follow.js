/* Compression 2019-09-23 18:28:31 */ 
Cores(function(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K,Q,G,Y,Z,et,tt,nt,rt,it){var st=this.d;this[st(e)](st(t),function(e,t,rt,it,ot){"use strict";var ut=this;return function(ot,ut,at){console[st(n)](ut),ot[st(r)][st(i)]({templateUrl:st(s),scope:!1,controller:[st(o),st(u),st(a),st(f),function(r,i,s,o){r[st(l)]=function(){i[st(l)]()};var u;r[st(c)]=t[st(h)](it[st(p)],function(e,t){return{id:t,name:e}}),r[st(d)]=function(){e[st(v)](st(m),function(e){e(s,{id:u[st(g)],label:u[st(y)],single:!0},function(e,t){u[st(g)]=e[st(b)](0,1),u[st(y)]=t[st(b)](0,1),console[st(n)](u)})})},r[st(w)]=function(n){e[st(v)](st(E),function(e){e(s,{type:n},function(e){var i=t[st(h)](e,function(e){return{id:e[st(S)],name:e[st(S)]}});switch(n){case st(x):r[st(T)]=i;break;case st(N):r[st(C)]=i}})})},r[st(k)]={rules:{memo:st(L),type:st(L),date:st(L),trade_number:{required:function(){return u[st(A)]==9}},remark:{required:function(){return u[st(A)]==9||u[st(A)]===0}}},messages:{trade_number:st(O)}},r[st(M)]=t[st(h)](it[st(_)],function(e,t){return{id:t,name:e}}),r[st(D)]=!1,r[st(P)]=function(){if(!!r[st(D)])return!1;var e=s[st(H)]()[st(B)]();r[st(D)]=!0,o[st(j)]({url:st(F),data:rt[st(I)](u),success:function(t){r[st(D)]=!1,e[st(q)](),t[st(A)]<1?s[st(R)](t[st(U)]):(s[st(z)](t[st(U)]),i[st(l)](),at&&at())}})},o[st(j)]({url:st(W),data:{type:[st(x),st(N)]},success:function(n){var a=[],f=[],c=function(e,t){e[st(X)]({id:t,name:t})};n[st(A)]>0&&(e[st(V)](n[st($)],function(e){switch(e[st(J)]){case st(x):c(a,e[st(S)]);break;case st(N):c(f,e[st(S)])}}),r[st(T)]=a,r[st(C)]=f),o[st(j)]({url:st(K),data:{cmd:st(Q),id:ut[st(G)]},success:function(e){e[st(A)]<1?(s[st(R)](e[st(U)]),i[st(l)]()):r[st(Y)]=u=t[st(Z)]({trade_number:st(et),date:moment()[st(tt)](st(nt)),memo:st(et),type:st(et),timber_brand_id:[],remark:st(et),house_progress:st(et),timber_brand_name:[],status:1},e[st(Y)])}})}})}]})}},[st(rt),st(it)])},"6G9QmgzPSO9t69BPuS8BYV9L99eX0KDPRON97kaT938z8G9an+m4QUjo7yKw4ym48N7c0e9PmHE97yKc0efVmSm/ASKc8GfazVKE5IeK3+fy0NlpQHNW8PzO3GGe0e8QzVE97OGa9W8z0dDP3IQUQkLO91zw4KBBzHzO3Hme4KB4SVDaRk8z3e9suSD4QNQLSyzw4KBB5S4cYdegmS7E5S4P9czw4OEAQUjPSyzw4ON451eTz3Be3KDeuSD0ASKc0e9I7FzPRI8t699sROp9QKEQR+ep6cGgmRzPSyez693sRNe1YdYO9edw4yjEzH3c0KweRONR8NfT99G16SGQu1QAYdmL91fd8+ksmSm45UzoRI8H4yD4mUGL9ceHz3wgQVE97HYESO9d4yD4mUGL9ceHz3wgQVE97HYESPfk0e3yARzPSK3F6kvyARzPSyetzKDIQVE9SV3oR+eH4y8Am3aa3W8p6SGQROp97G7PQW8y6+GgQ+m953aazSQD0e9PmHp961Mc0emIlUNmASKczKpV3ekyQOLESeGazOLyARzP3HmH699Im+eBm10azK3F0NfmAR0RnP7pzKLpnS0IYdGQSdBIzKpqARzPR3BX69fgmS8YzI2TzSft4yDUQKET99Gk5kjyARzP9ceG5G9eQVN9USKc0NfQQ+DB51dc7GDbU1fLtOes73wo7HEA51fstOas6WGb7GDb3IMOuk8E6dDF71QE3PfL9U9EYPGb7HEA51fLuGMc0NfQQ+DB51eSRH9p5kKwARzP3HmH699ImGeAQkYO9cfezKegnHEA51dP7yKw4y8Y5U4O9U9t6e9s9FzPSK8A69dwARzoSK7F5kKwARzPSKQX5IzwARzPSSKw4OsEmcBK3+fy0NlpQHNI8PzO3GGe0e8QzVE9QUea9W8z0dDP3g0LSP8y89dwAR0TRH9d69dwAR0az3BH0eMKARzoRH9y0PzwARzP3+ec6kvpuS8yASKc8kwI7OpR8P0Lz3Bk0e3pROKEYVdORH9p5kKwARzPRSep6dKwAR0a9W8H399IlOp0ASKc0dDeuSD0ASKc5kee7ONmASKc6+GVzWQYzIzP9cek638P7ymY3U3O9NkF6G9GnUp97GlO7yKw4ONU8KsORI8Y4Op9USKc0e9PmHN97yKc6SGkRON97HYc4ONU8KlO938t4N3pmUN93dos3NB5nNGWmcQRCyBD0ezFuS8yASKc8HBhn+jE3S4OR12X0e9I7y8yASKc8HBhn+jE3S4OR1Xw")