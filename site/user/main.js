/* Feng.JS v3.0 2020-09-15 21:14:05 */ 
Fengs(function(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K,Q,G,Y,Z,et,tt,nt,rt,it,st,ot,ut,at,ft,lt,ct,ht,pt,dt,vt,mt,gt,yt,bt,wt,Et,St,xt,Tt,Nt,Ct,kt,Lt,At,Ot,Mt,_t,Dt,Pt,Ht,Bt,jt){var Ft=this.d;this[Ft(e)](Ft(t),function(e,t,Mt,_t,Dt,Pt,Ht,Bt,jt,It){var qt=this,Rt=t[Ft(n)]({},e[Ft(r)](Ft(i)));new Mt({el:Ft(s),data:{model:{},announce_list:[],comment_list:[],buy_list:[],quesion_list:[],banner_list:[{url:Ft(o),image:Ft(u),target:Ft(a)}],banner_col:6,task:{taobao:{run:0,finish:0},douyin:{run:0,finish:0},jingdong:{run:0,finish:0},pinduoduo:{run:0,finish:0}},loaded:!1,validate:{rules:{id:{required:!0,lower:!0},name:Ft(f),type:Ft(f)},messages:{name:Ft(l),type:Ft(c)}},banner:{active:-1,times:null,isCarousel:!1,leaveToClass:Ft(h),interval:3e3}},created:function(){var e=this;e[Ft(p)]=!0,Rt[Ft(d)]=Rt[Ft(d)]||Ft(v),Rt[Ft(m)]=Rt[Ft(m)]||Ft(v),Rt[Ft(g)]=Rt[Ft(g)]||Ft(v),Rt[Ft(y)]=Rt[Ft(y)]||Ft(v),Rt[Ft(b)]=Rt[Ft(b)]||Ft(v),e[Ft(w)]=Rt,Dt[Ft(E)]({url:Ft(S),data:{type:Ft(x),line:10},success:function(t){t[Ft(T)]===1&&(e[Ft(N)]=t[Ft(C)])}}),Dt[Ft(E)]({url:Ft(k),data:{line:100,cmd:Ft(L)},success:function(n){n[Ft(T)]===1&&(e[Ft(A)]=n[Ft(C)]),qt[Ft(O)](function(){t(Ft(M))[Ft(_)]({scrollTop:t(Ft(M))[Ft(D)](Ft(P))[Ft(H)](0)[Ft(B)]()},600,function(){var e=t(this);e[Ft(D)](Ft(j))[Ft(F)](e[Ft(D)](Ft(P))[Ft(H)](0)),e[Ft(I)](0)})},2e3)}}),Dt[Ft(E)]({url:Ft(q),data:{line:20},success:function(t){t[Ft(T)]===1&&(e[Ft(R)]=t[Ft(C)])}}),Dt[Ft(E)]({url:Ft(U),data:{},success:function(n){t[Ft(z)](n[Ft(C)]||[],function(t){switch(t[Ft(T)]){case 1:e[Ft(W)][t[Ft(X)]][Ft(V)]+=t[Ft($)];break;case 2:case 9:e[Ft(W)][t[Ft(X)]][Ft(J)]+=t[Ft($)]}})}}),Dt[Ft(E)]({url:Ft(K),data:{type:Ft(Q)},success:function(t){e[Ft(G)]=t[Ft(C)]||[];switch(e[Ft(G)][Ft(Y)]){case 5:case 3:case 6:e[Ft(Z)]=4;break;case 1:e[Ft(Z)]=12;break;default:e[Ft(Z)]=6}e[Ft(G)][Ft(Y)]>1&&e[Ft(et)]()}}),setTimeout(function(){t(Ft(tt))[Ft(nt)](function(){var e=new It(this);e[Ft(rt)](Ft(it),function(e){_t[Ft(it)](Ft(st)+e[Ft(ot)]+Ft(ut))}),e[Ft(rt)](Ft(at),function(e){_t[Ft(at)](Ft(ft))})})},500)},methods:{bindMobile:function(){Ht(Rt)},modifyPass:function(){Bt(Rt,function(){})},upGrade:function(){jt(Rt,function(){})},addComment:function(){var e=_t[Ft(lt)]({title:Ft(ct),content:Ft(ht),width:Ft(pt),height:Ft(dt),onClosed:function(){t&&t[Ft(vt)]()}}),t=new Mt({el:Ft(mt),data:{direction:-1,content:Ft(h),validate:{rules:{content:{required:!0,rangelength:[3,200]}},messages:{content:Ft(gt)}}},methods:{save:function(){var t=this;Dt[Ft(E)]({url:Ft(yt),data:{content:t[Ft(bt)]},success:function(t){t[Ft(T)]===1?(_t[Ft(it)](t[Ft(wt)]),_t[Ft(Et)](e)):_t[Ft(at)](t[Ft(wt)])}})}}})},carouselAnimate:function(){var e=this,t=e[Ft(St)];t[Ft(xt)]||e[Ft(Tt)](1),clearTimeout(t[Ft(Nt)]),t[Ft(Nt)]=setTimeout(function(){e[Ft(et)]()},t[Ft(Ct)])},carouselLeave:function(){var e=this,t=e[Ft(St)];clearTimeout(t[Ft(Nt)]),t[Ft(Nt)]=setTimeout(function(){e[Ft(et)]()},t[Ft(Ct)])},carouselOver:function(){clearTimeout(this[Ft(St)][Ft(Nt)])},carouselMove:function(e,t){var n=this,r=n[Ft(St)],i=r[Ft(kt)];i=t!==undefined?t:i+e,i=i>=n[Ft(G)][Ft(Y)]?0:i<0?this[Ft(G)][Ft(Y)]-1:i,r[Ft(kt)]=i,r[Ft(Lt)]=e>0?Ft(At):Ft(Ot),clearTimeout(r[Ft(Nt)])}},destroyed:function(){clearTimeout(this[Ft(St)][Ft(Nt)])}})},[Ft(Mt),Ft(_t),Ft(Dt),Ft(Pt),Ft(Ht),Ft(Bt),Ft(jt)])},"6G9QmgzPSO9t69BPSc8A53mKSKpk6e9hAR0az3Qt699smg0aSyet4yjEzH3PmH9369mOARzKSK8y0OLsRy8U7yKc0IzwAR0T93pk63vpu1QA0IeK9Om361zwAR0NSSKw4y8U533o9U9H699mAR0s7dDF7HEbRWfamyfs719y7IQbzIkK018s8HBE7IGU7R0EYPDY7UEWYWfl9+Bs7dDF7HNE8gzc0dDPQHN45UYc0NlpQ+m47kYO9Szw4PMFQbws6WGq7HNTnFzPzULw4yDA5U0TRk8t4yDAQNQa3+Dk0elPAR0a93pk6e9yARzO918d699yARzPSSKw4OsEmcBKSK8H5kDelym45UdORH9p5kKwAR0L91f30eMp9HEAzyKc0NfQQ+DB51dc6G9s9+mY59QLSye20dDeuSD0ASKc0dDeuSD0ASKc6+GVzWQAQKloRH9c0djpnUEA8OkO9Se35k8PSHoEzkLc698gn+m1USKc6kwPlSm959YoQP8z6cksRFzPSyet3e9sROKEYdwL91zw4PQU33QT939s8G9amUN931dc6G9szcm9QKaaUSKw4ONUm9QaSSKw4ym4m+Kc6SGJARzO3+et6SGg0HN9m98TR9dw4yD97yKc6+GV7ON97HYc0KvsQcmAQ3spRI8y4OsEmcBKSK8H5kDelym45UdPzSee0Kwen+me8KETzSft4y7E5U3PSO9X0V9PSHoEzkLc6+GVzWQY51eaz3B25kDIuUp58OzO3+e35kKwARzO938y4yD4QPeT7yKw4y8Am3aaUSKw4y8159Yc6kwPScm1USKc69me9HoEzGjc6+GVzWQY51eaz3B26GmI9+mU53lESK3F0NfmARzp5SfIzO9PzGdymS3c6GmI9+mU53lESK3F0NfmARzOR+e369fQUg0L9d830elpQcGAzHjOSSKw4OEAQKlO3+ep699GmcmUmUGLz9Ge4PQUzHjPRUQD6G8Q9g0a938c6dKwARzOSOvw4y8Y5U0LSyep0PzwAR0s0W9H7HpRzIfLldwhUH7P4yD45UvoSSKw4Owlmyjc6SGgQcmY0+Kc7HpRzIfLldws6eBG71QRm1YNlVDDuHpglWD9YFvN9UQc893KlUXwARzO918d6G9yAR0EYPDY71QE3PfL9U9EYPDJ730E71fL6d8s6WGs4KG43S4olVlF6RatlVEY33lOQyep6SGgCymASVGa91ft0H0hYV8mmkBWUUQO5kjplS84Q3YoR+0omNedYV8mmkBW3K9d6cGLnVEAQ3YP3I2P0Gman+8UROGTRI8H6ckFn+m133YOmyQomNedYV8mmkBWUUQO69mPQcmRmdwKzUNk0dDemHsE3U9f3dBFYdwQQ+D4nN7NlVmA6G9GzVN4QKaa3W0/YeMsQ+DUzN7NlVmp6+GamUeR0H2L9Sft6e9P9kGR0HzKlVmD6SGQU+mAU17K9OmX0NfmlcQ48NYP3+eb0e9eRKGRYdmaz9G50NmhnVNUQKsPSy0F0HBVSPQ98NYN9yfk5GlpR+mYYVGf3dBp6+GamSQc6KBWUUQgmNedYV8mmImaRH9A0kjsSHsEzIef3dBU0efgl1Q95klO3+ey0H0hYV8mmkBWUUQgmNedYdG43S4olVmc0dDIuS8pROBLSP8z8+ksl1QSnPzKR+fX0V85uSmRSVDa9VNp6SGml12R0IDWUUQgmNedYV8mmkBWUUQO5kjp6yD4QKma9Ua/6kwGQ+8YuW7K9VNX0NmtlUEA8NYoR3BX0V7Knc8U8NMPu3abzG4Knc8Y31MOR+0P0G8gmS8Am1Ga3yB30dwsmS9H0H2T99eP0Glsn+m13U3O9Neb0kDsQ+m9zP7K9cfX0e8QmSm1UU4KRUED0e9PmHN97P7K9cfX0e8QmSm1UU4KRUmz6G3smUp48KEaR+eHY9BKUk2Fn9DXzdGeQHoEUk2h3NDCRd2eQGjEm32CmGQKlVwbYU0yn+D45UvoRk8H699JuH8mmkBWUUQgmNedYV8S7ODaRH9AYU2dYV8mmkBWUUQgmN0ynHN4m3wfnVQgmNedYV8mmkBW3K9l0O0hYV8mmkBWUUQgmNed8VN4m3vKR+fz6+ksu3GRYelO3kBD8G3oQcmY51zKlOwgmNedYV8mmkBWUUQgY3DQzcDbmVzORk8p0PetlcD45UvomKpc699sROKE0HBfnVQgmNedYV8mmkBWUUQgY3DgScDB3UjOlVmc0dDIuS8pROBL9NG30kDgRymbSWdo9Sfc6SksuSQc6PmT3Vmc0dDIuS8pROBT9SfX0VBVzVEA8NQKzSDH6cGQmSQc6PmKSOQo0+9TYUYN3WkF0UBXQ+9b9GQc7ODL9yet5kDP9kG/mkBWUUQgmNedYV8mmImKSNkF5H0hYV8mmkBWUUQgmNed8WQA3S4olOwgmNedYV8mmkBW3P0X69mPQcmS6KBWUUQgmNedYdGW8OQTzUEomNedYV8mmkBfmP8t69957ym4QKaa3OwgmNedYV8S7ODaRH9AYUXwARzsCO2y4P2cU1zcYdDQmS8Y33lO3HYw4yQAzkLP9d3p0KvpQeeA8OkO9Se35kKwAR0EYPDY71QE3PfL9U9EYPDJ730E71fL6d8s6WGs7WBHuWfTSyGsze9yudmtQWXJCOQ36HjFm1BSlOXK0+Kc6+GVzWQY51eaz3B26kwPlSm959YoQP8p6+GamR0LSP835kjp9+D0ASKc5kDe7y8yASKc6kwGn+8AzyKc6GmI9+mU53lc6cksCOsEYVjozSfe0dKwAR0LSK8H0eMpuUN9QSMO3HNe4yD4mUGaz1Xw4Op97kaaz3BA6G9yAR0L9Sft6cGamRzOR+ek5GlpzymtzkELzSfp4OEAQKlO3+ep699ylUE97+4O938t69B5SHN9QKwa3dpt0dm5SHN963Lc6kwIQcmY51ea910D6G9szcm9QKaa3dpz699ISONRSdLOQdpH6e3oU+D0ASKc8HBPlymA7kLP9W8z4PQb8KmazULw4PQb8NQLzUNb6+kKAR0KlW8b6e9smIQ9SVDL9V9z69dwAR0KlW8D0dwQzVN1mHkPRk8p0PzwAR0KlW850KjoQVE93U3c8HBPScD4m3sPQW8E6SGgnIQ9zkETzUmb0dwIQVN0ASK=")