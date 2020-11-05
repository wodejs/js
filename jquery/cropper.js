/* Fengs.JS v3.0 2017-03-17 16:15:38 */ 
Fengs(function(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K,Q,G,Y,Z,et,tt,nt,rt,it,st,ot,ut,at,ft,lt,ct,ht,pt,dt,vt,mt,gt,yt,bt,wt,Et,St,xt,Tt,Nt,Ct,kt,Lt,At,Ot,Mt,_t,Dt,Pt,Ht,Bt,jt,Ft,It,qt,Rt,Ut,zt,Wt,Xt,Vt,$t,Jt,Kt,Qt,Gt,Yt,Zt,en,tn,nn,rn,sn,on,un,an,fn,ln,cn,hn,pn,dn,vn,mn,gn,yn,bn,wn,En,Sn,xn,Tn,Nn,Cn,kn,Ln,An,On,Mn,_n,Dn,Pn,Hn,Bn,jn,Fn,In,qn,Rn,Un,zn,Wn,Xn,Vn,$n,Jn,Kn,Qn,Gn,Yn,Zn,er,tr,nr,rr,ir,sr,or,ur,ar,fr,lr,cr,hr,pr,dr,vr,mr,gr,yr,br,wr,Er,Sr,xr,Tr,Nr,Cr,kr,Lr,Ar,Or,Mr,_r,Dr,Pr,Hr,Br,jr,Fr,Ir,qr,Rr,Ur,zr,Wr,Xr,Vr,$r,Jr,Kr,Qr,Gr,Yr,Zr,ei,ti,ni,ri,ii,si,oi,ui,ai,fi,li,ci,hi,pi,di,vi,mi,gi,yi,bi,wi,Ei,Si,xi,Ti,Ni,Ci,ki,Li,Ai,Oi,Mi,_i,Di,Pi,Hi,Bi){var ji=this.d;this[ji(e)](ji(t),function(e,t){"use strict";function ws(e){return typeof e===ji(H)}function Es(e){return typeof e===ji(B)}function Ss(e,t){var n=[];return ws(t)&&n[ji(j)](t),n[ji(F)][ji(I)](e,n)}function xs(e,t){var n=Ss(arguments,2);return function(){return e[ji(I)](t,n[ji(q)](Ss(arguments)))}}function Ts(e){var t=e[ji(R)](/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);return t&&(t[1]!==qi[ji(U)]||t[2]!==qi[ji(z)]||t[3]!==qi[ji(W)])}function Ns(e){var t=ji(X)+(new Date)[ji(V)]();return e+(e[ji($)](ji(J))===-1?ji(J):ji(K))+t}function Cs(e,t){return t[ji(Q)]<0&&e[ji(G)]<t[ji(Q)]+t[ji(G)]&&t[ji(Y)]<0&&e[ji(Z)]<t[ji(Y)]+t[ji(Z)]}function ks(e){return e?ji(et)+e+ji(tt):ji(nt)}function Ls(e,t){var n=vs(e[ji(rt)])%180,r=(n>90?180-n:n)*Math[ji(it)]/180,i=ms(r),s=gs(r),o=e[ji(G)],u=e[ji(Z)],a=e[ji(st)],f,l;return t?(f=o/(s+i/a),l=f/a):(f=o*s+u*i,l=o*i+u*s),{width:f,height:l}}function As(e,n){var r=t(ji(k))[0],i=r[ji(L)](ji(ot)),s=n[ji(ut)],o=n[ji(at)],u=n[ji(ft)],a=Ls({width:s,height:o,degree:u});return u?(r[ji(G)]=a[ji(G)],r[ji(Z)]=a[ji(Z)],i[ji(lt)](),i[ji(ct)](a[ji(G)]/2,a[ji(Z)]/2),i[ji(ft)](u*Math[ji(it)]/180),i[ji(ht)](e,-s/2,-o/2,s,o),i[ji(pt)]()):(r[ji(G)]=s,r[ji(Z)]=o,i[ji(ht)](e,0,0,s,o)),r}function Os(e,n){this[ji(dt)]=t(e),this[ji(vt)]=t[ji(mt)]({},Os[ji(gt)],t[ji(yt)](n)&&n),this[ji(bt)]=!1,this[ji(w)]=!1,this[ji(wt)]=!1,this[ji(Et)]=!1,this[ji(St)]=!1,this[ji(xt)]=null,this[ji(Tt)]=null,this[ji(Nt)]()}var Fi=t(window),Ii=t(document),qi=window[ji(n)],Ri=ji(r),Ui=ji(i)+Ri,zi=/^(e|n|w|s|ne|nw|sw|se|all|crop|move|zoom)$/,Wi=ji(s),Xi=ji(o),Vi=ji(u),$i=ji(a),Ji=ji(f),Ki=ji(l),Qi=ji(c),Gi=ji(h),Yi=ji(p),Zi=ji(d),es=ji(v),ts=ji(m),ns=ji(g),rs=ji(y)+Ri,is=ji(b)+Ri,ss=ji(w)+Ri,os=ji(E)+Ri,us=ji(S)+Ri,as=ji(x)+Ri,fs=ji(T)+Ri,ls=ji(N)+Ri,cs=t[ji(C)](t(ji(k))[0][ji(L)]),hs=Math[ji(A)],ps=Math[ji(O)],ds=Math[ji(M)],vs=Math[ji(_)],ms=Math[ji(D)],gs=Math[ji(P)],ys=parseFloat,bs={};bs[ji(Nt)]=function(e){var n=this[ji(vt)],r=this[ji(dt)],i,s,o,u;if(!e)if(r[ji(Ct)](ji(kt))){if(!r[ji(Lt)](ji(At)))return;e=r[ji(Ot)](ji(At))}else r[ji(Ct)](ji(xt))&&cs&&(e=r[0][ji(Mt)]());if(!e)return;o=t[ji(_t)](is),r[ji(Dt)](is,n[ji(b)])[ji(Pt)](o);if(o[ji(Ht)]())return;n[ji(Bt)]&&Ts(e)&&(i=ji(jt),r[ji(Ot)](ji(Ft))||(s=Ns(e))),this[ji(It)]=u=t(ji(qt)),u[ji(Dt)](ji(Nt),t[ji(Rt)](function(){var t=u[ji(Ot)](ji(ut))||u[ji(G)](),n=u[ji(Ot)](ji(at))||u[ji(Z)]();this[ji(Ut)]={naturalWidth:t,naturalHeight:n,aspectRatio:t/n,rotate:0},this[ji(zt)]=e,this[ji(bt)]=!0,this[ji(b)]()},this))[ji(Dt)](ji(Wt),function(){u[ji(Xt)]()})[ji(Lt)]({src:s||e,crossOrigin:i}),u[ji(Vt)](Xi)[ji($t)](r)},bs[ji(b)]=function(){var e=this[ji(dt)],n=this[ji(It)],r=this[ji(vt)],i,s;if(!this[ji(bt)])return;this[ji(w)]&&this[ji(Jt)](),this[ji(Kt)]=i=t(Os[ji(Qt)]),e[ji(Vt)](Vi),n[ji(Gt)](Xi),this[ji(Yt)]=e[ji(Zt)]()[ji(en)](i),this[ji(tn)]=i[ji(nn)](ji(rn))[ji(en)](n),this[ji(sn)]=i[ji(nn)](ji(on)),this[ji(un)]=s=i[ji(nn)](ji(an)),this[ji(fn)]=i[ji(nn)](ji(ln)),this[ji(cn)](),this[ji(hn)](),r[ji(st)]=ys(r[ji(st)])||NaN,r[ji(pn)]?(this[ji(Et)]=!0,r[ji(dn)]&&this[ji(sn)][ji(Vt)](Wi)):s[ji(Vt)](Vi),r[ji(vn)]&&i[ji(Vt)](Gi),r[ji(mn)]||s[ji(nn)](ji(gn))[ji(Vt)]($i),r[ji(yn)]||s[ji(nn)](ji(bn))[ji(Vt)](Vi),r[ji(wn)]||s[ji(nn)](ji(gn))[ji(En)](ji(Sn),ji(xn)),r[ji(Tn)]||s[ji(nn)](ji(Nn))[ji(Vt)](Vi),this[ji(Cn)](r[ji(kn)]?ji(Ln):ji(xn)),this[ji(w)]=!0,this[ji(An)](),e[ji(Dt)](ss,r[ji(w)])[ji(Pt)](ss)},bs[ji(Jt)]=function(){if(!this[ji(w)])return;this[ji(w)]=!1,this[ji(On)]=null,this[ji(xt)]=null,this[ji(Tt)]=null,this[ji(Mn)](),this[ji(_n)](),this[ji(Dn)]=null,this[ji(fn)]=null,this[ji(un)]=null,this[ji(sn)]=null,this[ji(tn)]=null,this[ji(Yt)]=null,this[ji(Kt)][ji(Xt)](),this[ji(Kt)]=null},t[ji(mt)](bs,{render:function(){this[ji(Pn)](),this[ji(Hn)](),this[ji(Bn)](),this[ji(jn)](),this[ji(Et)]&&this[ji(Fn)]()},initContainer:function(){var e=this[ji(dt)],t=this[ji(Yt)],n=this[ji(Kt)],r=this[ji(vt)];n[ji(Vt)](Vi),e[ji(Gt)](Vi),n[ji(In)](this[ji(On)]={width:ds(t[ji(G)](),ys(r[ji(qn)])||200),height:ds(t[ji(Z)](),ys(r[ji(Rn)])||100)}),e[ji(Vt)](Vi),n[ji(Gt)](Vi)},initCanvas:function(){var e=this[ji(On)],n=e[ji(G)],r=e[ji(Z)],i=this[ji(Ut)],s=i[ji(st)],o={aspectRatio:s,width:n,height:r};r*s>n?o[ji(Z)]=n/s:o[ji(G)]=r*s,o[ji(Un)]=o[ji(Q)]=(n-o[ji(G)])/2,o[ji(zn)]=o[ji(Y)]=(r-o[ji(Z)])/2,this[ji(xt)]=o,this[ji(Wn)](!0,!0),this[ji(Xn)]=t[ji(mt)]({},i),this[ji(Vn)]=t[ji(mt)]({},o)},limitCanvas:function(e,n){var r=this[ji(vt)],i=r[ji($n)],s=this[ji(On)],o=s[ji(G)],u=s[ji(Z)],a=this[ji(xt)],f=a[ji(st)],l=this[ji(Tt)],c=this[ji(Et)]&&l,h,p;e&&(h=ys(r[ji(Jn)])||0,p=ys(r[ji(Kn)])||0,h?(i&&(h=ds(c?l[ji(G)]:o,h)),p=h/f):p?(i&&(p=ds(c?l[ji(Z)]:u,p)),h=p*f):i&&(c?(h=l[ji(G)],p=l[ji(Z)],p*f>h?h=p*f:p=h/f):(h=o,p=u,p*f>h?p=h/f:h=p*f)),t[ji(mt)](a,{minWidth:h,minHeight:p,maxWidth:Infinity,maxHeight:Infinity})),n&&(i?c?(a[ji(Qn)]=ps(l[ji(Q)],l[ji(Q)]+l[ji(G)]-a[ji(G)]),a[ji(Gn)]=ps(l[ji(Y)],l[ji(Y)]+l[ji(Z)]-a[ji(Z)]),a[ji(Yn)]=l[ji(Q)],a[ji(Zn)]=l[ji(Y)]):(a[ji(Qn)]=ps(0,o-a[ji(G)]),a[ji(Gn)]=ps(0,u-a[ji(Z)]),a[ji(Yn)]=ds(0,o-a[ji(G)]),a[ji(Zn)]=ds(0,u-a[ji(Z)])):(a[ji(Qn)]=-a[ji(G)],a[ji(Gn)]=-a[ji(Z)],a[ji(Yn)]=o,a[ji(Zn)]=u))},renderCanvas:function(e){var t=this[ji(vt)],n=this[ji(xt)],r=this[ji(Ut)],i,s;this[ji(wt)]&&(this[ji(wt)]=!1,s=Ls({width:r[ji(G)],height:r[ji(Z)],degree:r[ji(ft)]}),i=s[ji(G)]/s[ji(Z)],i!==n[ji(st)]&&(n[ji(Q)]-=(s[ji(G)]-n[ji(G)])/2,n[ji(Y)]-=(s[ji(Z)]-n[ji(Z)])/2,n[ji(G)]=s[ji(G)],n[ji(Z)]=s[ji(Z)],n[ji(st)]=i,this[ji(Wn)](!0,!1)));if(n[ji(G)]>n[ji(er)]||n[ji(G)]<n[ji(tr)])n[ji(Q)]=n[ji(Un)];if(n[ji(Z)]>n[ji(nr)]||n[ji(Z)]<n[ji(rr)])n[ji(Y)]=n[ji(zn)];n[ji(G)]=ps(ds(n[ji(G)],n[ji(tr)]),n[ji(er)]),n[ji(Z)]=ps(ds(n[ji(Z)],n[ji(rr)]),n[ji(nr)]),this[ji(Wn)](!1,!0),n[ji(Un)]=n[ji(Q)]=ps(ds(n[ji(Q)],n[ji(Qn)]),n[ji(Yn)]),n[ji(zn)]=n[ji(Y)]=ps(ds(n[ji(Y)],n[ji(Gn)]),n[ji(Zn)]),this[ji(tn)][ji(In)]({width:n[ji(G)],height:n[ji(Z)],left:n[ji(Q)],top:n[ji(Y)]}),this[ji(ir)](),this[ji(Et)]&&t[ji($n)]&&!Cs(this[ji(On)],n)&&this[ji(sr)](!0,!0),e&&this[ji(or)]()},renderImage:function(){var e=this[ji(xt)],n=this[ji(Ut)],r;n[ji(ft)]&&(r=Ls({width:e[ji(G)],height:e[ji(Z)],degree:n[ji(ft)],aspectRatio:n[ji(st)]},!0)),t[ji(mt)](n,r?{width:r[ji(G)],height:r[ji(Z)],left:(e[ji(G)]-r[ji(G)])/2,top:(e[ji(Z)]-r[ji(Z)])/2}:{width:e[ji(G)],height:e[ji(Z)],left:0,top:0}),this[ji(It)][ji(In)]({width:n[ji(G)],height:n[ji(Z)],marginLeft:n[ji(Q)],marginTop:n[ji(Y)],transform:ks(n[ji(ft)])})},initCropBox:function(){var e=this[ji(vt)],n=this[ji(xt)],r=e[ji(st)],i=ys(e[ji(ur)])||.8,s={width:n[ji(G)],height:n[ji(Z)]};r&&(n[ji(Z)]*r>n[ji(G)]?s[ji(Z)]=s[ji(G)]/r:s[ji(G)]=s[ji(Z)]*r),this[ji(Tt)]=s,this[ji(sr)](!0,!0),s[ji(G)]=ps(ds(s[ji(G)],s[ji(tr)]),s[ji(er)]),s[ji(Z)]=ps(ds(s[ji(Z)],s[ji(rr)]),s[ji(nr)]),s[ji(G)]=ds(s[ji(tr)],s[ji(G)]*i),s[ji(Z)]=ds(s[ji(rr)],s[ji(Z)]*i),s[ji(Un)]=s[ji(Q)]=n[ji(Q)]+(n[ji(G)]-s[ji(G)])/2,s[ji(zn)]=s[ji(Y)]=n[ji(Y)]+(n[ji(Z)]-s[ji(Z)])/2,this[ji(ar)]=t[ji(mt)]({},s)},limitCropBox:function(e,t){var n=this[ji(vt)],r=n[ji($n)],i=this[ji(On)],s=i[ji(G)],o=i[ji(Z)],u=this[ji(xt)],a=this[ji(Tt)],f=n[ji(st)],l,c;e&&(l=ys(n[ji(fr)])||0,c=ys(n[ji(lr)])||0,a[ji(tr)]=ps(s,l),a[ji(rr)]=ps(o,c),a[ji(er)]=ps(s,r?u[ji(G)]:s),a[ji(nr)]=ps(o,r?u[ji(Z)]:o),f&&(a[ji(nr)]*f>a[ji(er)]?(a[ji(rr)]=a[ji(tr)]/f,a[ji(nr)]=a[ji(er)]/f):(a[ji(tr)]=a[ji(rr)]*f,a[ji(er)]=a[ji(nr)]*f)),a[ji(tr)]=ps(a[ji(er)],a[ji(tr)]),a[ji(rr)]=ps(a[ji(nr)],a[ji(rr)])),t&&(r?(a[ji(Qn)]=ds(0,u[ji(Q)]),a[ji(Gn)]=ds(0,u[ji(Y)]),a[ji(Yn)]=ps(s,u[ji(Q)]+u[ji(G)])-a[ji(G)],a[ji(Zn)]=ps(o,u[ji(Y)]+u[ji(Z)])-a[ji(Z)]):(a[ji(Qn)]=0,a[ji(Gn)]=0,a[ji(Yn)]=s-a[ji(G)],a[ji(Zn)]=o-a[ji(Z)]))},renderCropBox:function(){var e=this[ji(vt)],t=this[ji(On)],n=t[ji(G)],r=t[ji(Z)],i=this[ji(un)],s=this[ji(Tt)];if(s[ji(G)]>s[ji(er)]||s[ji(G)]<s[ji(tr)])s[ji(Q)]=s[ji(Un)];if(s[ji(Z)]>s[ji(nr)]||s[ji(Z)]<s[ji(rr)])s[ji(Y)]=s[ji(zn)];s[ji(G)]=ps(ds(s[ji(G)],s[ji(tr)]),s[ji(er)]),s[ji(Z)]=ps(ds(s[ji(Z)],s[ji(rr)]),s[ji(nr)]),this[ji(sr)](!1,!0),s[ji(Un)]=s[ji(Q)]=ps(ds(s[ji(Q)],s[ji(Qn)]),s[ji(Yn)]),s[ji(zn)]=s[ji(Y)]=ps(ds(s[ji(Y)],s[ji(Gn)]),s[ji(Zn)]),e[ji(wn)]&&i[ji(nn)](ji(gn))[ji(En)](ji(Sn),s[ji(G)]===n&&s[ji(Z)]===r?ji(xn):ji(cr)),i[ji(In)]({width:s[ji(G)],height:s[ji(Z)],left:s[ji(Q)],top:s[ji(Y)]}),this[ji(Et)]&&e[ji($n)]&&!Cs(t,this[ji(xt)])&&this[ji(Wn)](!0,!0),this[ji(St)]||this[ji(or)]()},output:function(){var e=this[ji(vt)];this[ji(i)](),e[ji(Ln)]&&e[ji(Ln)][ji(hr)](this[ji(dt)],this[ji(pr)]())}}),bs[ji(hn)]=function(){var e=this[ji(zt)];this[ji(Dn)]=t(this[ji(vt)][ji(i)]),this[ji(fn)][ji(dr)](ji(vr)+e+ji(mr)),this[ji(Dn)][ji(gr)](function(){var n=t(this);n[ji(En)](Ui,{width:n[ji(G)](),height:n[ji(Z)](),original:n[ji(dr)]()})[ji(dr)](ji(vr)+e+ji(yr))})},bs[ji(_n)]=function(){this[ji(Dn)][ji(gr)](function(){var e=t(this);e[ji(dr)](e[ji(En)](Ui)[ji(br)])[ji(wr)](Ui)})},bs[ji(i)]=function(){var e=this[ji(Ut)],n=this[ji(xt)],r=this[ji(Tt)],i=e[ji(G)],s=e[ji(Z)],o=r[ji(Q)]-n[ji(Q)]-e[ji(Q)],u=r[ji(Y)]-n[ji(Y)]-e[ji(Y)],a=e[ji(ft)];if(!this[ji(Et)]||this[ji(St)])return;this[ji(fn)][ji(nn)](ji(kt))[ji(In)]({width:i,height:s,marginLeft:-o,marginTop:-u,transform:ks(a)}),this[ji(Dn)][ji(gr)](function(){var e=t(this),n=e[ji(En)](Ui),f=n[ji(G)]/r[ji(G)],l=n[ji(G)],c=r[ji(Z)]*f;c>n[ji(Z)]&&(f=n[ji(Z)]/r[ji(Z)],l=r[ji(G)]*f,c=n[ji(Z)]),e[ji(G)](l)[ji(Z)](c)[ji(nn)](ji(kt))[ji(In)]({width:i*f,height:s*f,marginLeft:-o*f,marginTop:-u*f,transform:ks(a)})})},bs[ji(cn)]=function(){var e=this[ji(vt)];this[ji(dt)][ji(Er)](os,e[ji(E)])[ji(Er)](us,e[ji(S)])[ji(Er)](as,e[ji(x)])[ji(Er)](fs,e[ji(T)])[ji(Er)](ls,e[ji(N)]),this[ji(Kt)][ji(Er)](Yi,t[ji(Rt)](this[ji(E)],this))[ji(Er)](ns,t[ji(Rt)](this[ji(g)],this)),e[ji(Sr)]&&e[ji(xr)]&&this[ji(Kt)][ji(Er)](ts,t[ji(Rt)](this[ji(Tr)],this)),Ii[ji(Er)](Zi,this[ji(Nr)]=xs(this[ji(S)],this))[ji(Er)](es,this[ji(Cr)]=xs(this[ji(x)],this)),e[ji(kr)]&&Fi[ji(Er)](rs,this[ji(Lr)]=xs(this[ji(y)],this))},bs[ji(Mn)]=function(){var e=this[ji(vt)];this[ji(dt)][ji(Ar)](os,e[ji(E)])[ji(Ar)](us,e[ji(S)])[ji(Ar)](as,e[ji(x)])[ji(Ar)](fs,e[ji(T)])[ji(Ar)](ls,e[ji(N)]),this[ji(Kt)][ji(Ar)](Yi,this[ji(E)])[ji(Ar)](ns,this[ji(g)]),e[ji(Sr)]&&e[ji(xr)]&&this[ji(Kt)][ji(Ar)](ts,this[ji(Tr)]),Ii[ji(Ar)](Zi,this[ji(Nr)])[ji(Ar)](es,this[ji(Cr)]),e[ji(kr)]&&Fi[ji(Ar)](rs,this[ji(Lr)])},t[ji(mt)](bs,{resize:function(){var e=this[ji(Yt)],n=this[ji(On)],r,i,s;if(this[ji(St)])return;s=e[ji(G)]()/n[ji(G)];if(s!==1||e[ji(Z)]()!==n[ji(Z)])r=this[ji(Or)](),i=this[ji(Mr)](),this[ji(An)](),this[ji(_r)](t[ji(gr)](r,function(e,t){r[e]=t*s})),this[ji(Dr)](t[ji(gr)](i,function(e,t){i[e]=t*s}))},dblclick:function(){if(this[ji(St)])return;this[ji(sn)][ji(Pr)](Ki)?this[ji(Cn)](ji(xn)):this[ji(Cn)](ji(Ln))},wheel:function(e){var t=e[ji(Hr)],n=1;if(this[ji(St)])return;e[ji(Br)](),t[ji(jr)]?n=t[ji(jr)]>0?1:-1:t[ji(Fr)]?n=-t[ji(Fr)]/120:t[ji(Ir)]&&(n=t[ji(Ir)]>0?1:-1),this[ji(qr)](-n*.1)},dragstart:function(e){var n=this[ji(vt)],r=e[ji(Hr)],i=r&&r[ji(Rr)],s=e,o,u,a;if(this[ji(St)])return;if(i){a=i[ji(Ur)];if(a>1){if(!n[ji(Sr)]||!n[ji(zr)]||a!==2)return;s=i[1],this[ji(Wr)]=s[ji(Xr)],this[ji(Vr)]=s[ji($r)],o=ji(qr)}s=i[0]}o=o||t(s[ji(Jr)])[ji(En)](ji(Sn));if(zi[ji(Kr)](o)){e[ji(Br)](),u=t[ji(_t)](os,{originalEvent:r,dragType:o}),this[ji(dt)][ji(Pt)](u);if(u[ji(Ht)]())return;this[ji(Qr)]=o,this[ji(Gr)]=!1,this[ji(Yr)]=s[ji(Xr)],this[ji(Zr)]=s[ji($r)],o===ji(Ln)&&(this[ji(Gr)]=!0,this[ji(sn)][ji(Vt)](Wi))}},dragmove:function(e){var n=this[ji(vt)],r=e[ji(Hr)],i=r&&r[ji(Rr)],s=e,o=this[ji(Qr)],u,a;if(this[ji(St)])return;if(i){a=i[ji(Ur)];if(a>1){if(!n[ji(Sr)]||!n[ji(zr)]||a!==2)return;s=i[1],this[ji(ei)]=s[ji(Xr)],this[ji(ti)]=s[ji($r)]}s=i[0]}if(o){e[ji(Br)](),u=t[ji(_t)](us,{originalEvent:r,dragType:o}),this[ji(dt)][ji(Pt)](u);if(u[ji(Ht)]())return;this[ji(ni)]=s[ji(Xr)],this[ji(ri)]=s[ji($r)],this[ji(ii)]()}},dragend:function(e){var n=this[ji(Qr)],r;if(this[ji(St)])return;if(n){e[ji(Br)](),r=t[ji(_t)](as,{originalEvent:e[ji(Hr)],dragType:n}),this[ji(dt)][ji(Pt)](r);if(r[ji(Ht)]())return;this[ji(Gr)]&&(this[ji(Gr)]=!1,this[ji(sn)][ji(si)](Wi,this[ji(Et)]&&this[ji(vt)][ji(dn)])),this[ji(Qr)]=ji(oi)}}}),t[ji(mt)](bs,{reset:function(){if(!this[ji(w)]||this[ji(St)])return;this[ji(Ut)]=t[ji(mt)]({},this[ji(Xn)]),this[ji(xt)]=t[ji(mt)]({},this[ji(Vn)]),this[ji(jn)](),this[ji(Et)]&&(this[ji(Tt)]=t[ji(mt)]({},this[ji(ar)]),this[ji(Fn)]())},clear:function(){if(!this[ji(Et)]||this[ji(St)])return;t[ji(mt)](this[ji(Tt)],{left:0,top:0,width:0,height:0}),this[ji(Et)]=!1,this[ji(Fn)](),this[ji(Wn)](),this[ji(jn)](),this[ji(sn)][ji(Gt)](Wi),this[ji(un)][ji(Vt)](Vi)},destroy:function(){var e=this[ji(dt)];this[ji(bt)]?(this[ji(Jt)](),e[ji(Gt)](Vi)):this[ji(It)][ji(Ar)](ji(Nt))[ji(Xt)](),e[ji(wr)](ji(ui))},replace:function(e){!this[ji(St)]&&e&&this[ji(Nt)](e)},enable:function(){this[ji(w)]&&(this[ji(St)]=!1,this[ji(Kt)][ji(Gt)](Qi))},disable:function(){this[ji(w)]&&(this[ji(St)]=!0,this[ji(Kt)][ji(Vt)](Qi))},move:function(e,t){var n=this[ji(xt)];this[ji(w)]&&!this[ji(St)]&&ws(e)&&ws(t)&&(n[ji(Q)]+=e,n[ji(Y)]+=t,this[ji(jn)](!0))},zoom:function(e){var n=this[ji(xt)],r,i,s;e=ys(e);if(e&&this[ji(w)]&&!this[ji(St)]&&this[ji(vt)][ji(Sr)]){r=e>0?t[ji(_t)](fs):t[ji(_t)](ls),this[ji(dt)][ji(Pt)](r);if(r[ji(Ht)]())return;e=e<=-1?1/(1-e):e<=1?1+e:e,i=n[ji(G)]*e,s=n[ji(Z)]*e,n[ji(Q)]-=(i-n[ji(G)])/2,n[ji(Y)]-=(s-n[ji(Z)])/2,n[ji(G)]=i,n[ji(Z)]=s,this[ji(jn)](!0),this[ji(Cn)](ji(xn))}},rotate:function(e){var t=this[ji(Ut)];e=ys(e),e&&this[ji(w)]&&!this[ji(St)]&&this[ji(vt)][ji(ai)]&&(t[ji(ft)]=(t[ji(ft)]+e)%360,this[ji(wt)]=!0,this[ji(jn)](!0))},getData:function(){var e=this[ji(Tt)],n=this[ji(xt)],r=this[ji(Ut)],i,s;return this[ji(w)]&&this[ji(Et)]?(s={x:e[ji(Q)]-n[ji(Q)],y:e[ji(Y)]-n[ji(Y)],width:e[ji(G)],height:e[ji(Z)]},i=r[ji(G)]/r[ji(ut)],t[ji(gr)](s,function(e,t){t/=i,s[e]=t})):s={x:0,y:0,width:0,height:0},s[ji(ft)]=r[ji(ft)],s},getContainerData:function(){return this[ji(w)]?this[ji(On)]:{}},getImageData:function(){return this[ji(bt)]?this[ji(Ut)]:{}},getCanvasData:function(){var e=this[ji(xt)],t;return this[ji(w)]&&(t={left:e[ji(Q)],top:e[ji(Y)],width:e[ji(G)],height:e[ji(Z)]}),t||{}},setCanvasData:function(e){var n=this[ji(xt)],r=n[ji(st)];this[ji(w)]&&!this[ji(St)]&&t[ji(yt)](e)&&(ws(e[ji(Q)])&&(n[ji(Q)]=e[ji(Q)]),ws(e[ji(Y)])&&(n[ji(Y)]=e[ji(Y)]),ws(e[ji(G)])?(n[ji(G)]=e[ji(G)],n[ji(Z)]=e[ji(G)]/r):ws(e[ji(Z)])&&(n[ji(Z)]=e[ji(Z)],n[ji(G)]=e[ji(Z)]*r),this[ji(jn)](!0))},getCropBoxData:function(){var e=this[ji(Tt)],t;return this[ji(w)]&&this[ji(Et)]&&(t={left:e[ji(Q)],top:e[ji(Y)],width:e[ji(G)],height:e[ji(Z)]}),t||{}},setCropBoxData:function(e){var n=this[ji(Tt)],r=this[ji(vt)][ji(st)];this[ji(w)]&&this[ji(Et)]&&!this[ji(St)]&&t[ji(yt)](e)&&(ws(e[ji(Q)])&&(n[ji(Q)]=e[ji(Q)]),ws(e[ji(Y)])&&(n[ji(Y)]=e[ji(Y)]),r?ws(e[ji(G)])?(n[ji(G)]=e[ji(G)],n[ji(Z)]=n[ji(G)]/r):ws(e[ji(Z)])&&(n[ji(Z)]=e[ji(Z)],n[ji(G)]=n[ji(Z)]*r):(ws(e[ji(G)])&&(n[ji(G)]=e[ji(G)]),ws(e[ji(Z)])&&(n[ji(Z)]=e[ji(Z)])),this[ji(Fn)]())},getCroppedCanvas:function(e){var n,r,i,s,o,u,a,f,l,c,h;if(!this[ji(w)]||!this[ji(Et)]||!cs)return;return t[ji(yt)](e)||(e={}),h=this[ji(pr)](),n=h[ji(G)],r=h[ji(Z)],f=n/r,t[ji(yt)](e)&&(o=e[ji(G)],u=e[ji(Z)],o?(u=o/f,a=o/n):u&&(o=u*f,a=u/r)),i=o||n,s=u||r,l=t(ji(k))[0],l[ji(G)]=i,l[ji(Z)]=s,c=l[ji(L)](ji(ot)),e[ji(fi)]&&(c[ji(li)]=e[ji(fi)],c[ji(ci)](0,0,i,s)),c[ji(ht)][ji(I)](c,function(){var e=As(this[ji(It)][0],this[ji(Ut)]),t=e[ji(G)],i=e[ji(Z)],s=[e],o=h[ji(hi)],u=h[ji(pi)],f,l,c,p,d,v;return o<=-n||o>t?o=f=c=d=0:o<=0?(c=-o,o=0,f=d=ps(t,n+o)):o<=t&&(c=0,f=d=ps(n,t-o)),f<=0||u<=-r||u>i?u=l=p=v=0:u<=0?(p=-u,u=0,l=v=ps(i,r+u)):u<=i&&(p=0,l=v=ps(r,i-u)),s[ji(j)](o,u,f,l),a&&(c*=a,p*=a,d*=a,v*=a),d>0&&v>0&&s[ji(j)](c,p,d,v),s}[ji(hr)](this)),l},setAspectRatio:function(e){var t=this[ji(vt)];!this[ji(St)]&&!Es(e)&&(t[ji(st)]=ys(e)||NaN,this[ji(w)]&&(this[ji(Bn)](),this[ji(Et)]&&this[ji(Fn)]()))},setDragMode:function(e){var t=this[ji(sn)],n=!1,r=!1;if(!this[ji(bt)]||this[ji(St)])return;switch(e){case ji(Ln):this[ji(vt)][ji(kn)]?(n=!0,t[ji(En)](ji(Sn),e)):r=!0;break;case ji(xn):r=!0,t[ji(En)](ji(Sn),e);break;default:t[ji(wr)](ji(Sn))}t[ji(si)](Ki,n)[ji(si)](Ji,r)}}),bs[ji(ii)]=function(){var e=this[ji(Qr)],t=this[ji(vt)],n=this[ji(xt)],r=this[ji(On)],i=this[ji(Tt)],s=i[ji(G)],o=i[ji(Z)],u=i[ji(Q)],a=i[ji(Y)],f=u+s,l=a+o,c=0,h=0,p=r[ji(G)],d=r[ji(Z)],v=!0,m=t[ji(st)],g={x:this[ji(ni)]-this[ji(Yr)],y:this[ji(ri)]-this[ji(Zr)]},y;t[ji($n)]&&(c=i[ji(Qn)],h=i[ji(Gn)],p=c+ps(r[ji(G)],n[ji(G)]),d=h+ps(r[ji(Z)],n[ji(Z)])),m&&(g[ji(di)]=g[ji(pi)]*m,g[ji(vi)]=g[ji(hi)]/m);switch(e){case ji(cr):u+=g[ji(hi)],a+=g[ji(pi)];break;case ji(mi):if(g[ji(hi)]>=0&&(f>=p||m&&(a<=h||l>=d))){v=!1;break}s+=g[ji(hi)],m&&(o=s/m,a-=g[ji(vi)]/2),s<0&&(e=ji(gi),s=0);break;case ji(yi):if(g[ji(pi)]<=0&&(a<=h||m&&(u<=c||f>=p))){v=!1;break}o-=g[ji(pi)],a+=g[ji(pi)],m&&(s=o*m,u+=g[ji(di)]/2),o<0&&(e=ji(bi),o=0);break;case ji(gi):if(g[ji(hi)]<=0&&(u<=c||m&&(a<=h||l>=d))){v=!1;break}s-=g[ji(hi)],u+=g[ji(hi)],m&&(o=s/m,a+=g[ji(vi)]/2),s<0&&(e=ji(mi),s=0);break;case ji(bi):if(g[ji(pi)]>=0&&(l>=d||m&&(u<=c||f>=p))){v=!1;break}o+=g[ji(pi)],m&&(s=o*m,u-=g[ji(di)]/2),o<0&&(e=ji(yi),o=0);break;case ji(wi):if(m){if(g[ji(pi)]<=0&&(a<=h||f>=p)){v=!1;break}o-=g[ji(pi)],a+=g[ji(pi)],s=o*m}else g[ji(hi)]>=0?f<p?s+=g[ji(hi)]:g[ji(pi)]<=0&&a<=h&&(v=!1):s+=g[ji(hi)],g[ji(pi)]<=0?a>0&&(o-=g[ji(pi)],a+=g[ji(pi)]):(o-=g[ji(pi)],a+=g[ji(pi)]);s<0&&o<0?(e=ji(Ei),o=0,s=0):s<0?(e=ji(Si),s=0):o<0&&(e=ji(xi),o=0);break;case ji(Si):if(m){if(g[ji(pi)]<=0&&(a<=h||u<=c)){v=!1;break}o-=g[ji(pi)],a+=g[ji(pi)],s=o*m,u+=g[ji(di)]}else g[ji(hi)]<=0?u>0?(s-=g[ji(hi)],u+=g[ji(hi)]):g[ji(pi)]<=0&&a<=h&&(v=!1):(s-=g[ji(hi)],u+=g[ji(hi)]),g[ji(pi)]<=0?a>0&&(o-=g[ji(pi)],a+=g[ji(pi)]):(o-=g[ji(pi)],a+=g[ji(pi)]);s<0&&o<0?(e=ji(xi),o=0,s=0):s<0?(e=ji(wi),s=0):o<0&&(e=ji(Ei),o=0);break;case ji(Ei):if(m){if(g[ji(hi)]<=0&&(u<=c||l>=d)){v=!1;break}s-=g[ji(hi)],u+=g[ji(hi)],o=s/m}else g[ji(hi)]<=0?u>0?(s-=g[ji(hi)],u+=g[ji(hi)]):g[ji(pi)]>=0&&l>=d&&(v=!1):(s-=g[ji(hi)],u+=g[ji(hi)]),g[ji(pi)]>=0?l<d&&(o+=g[ji(pi)]):o+=g[ji(pi)];s<0&&o<0?(e=ji(wi),o=0,s=0):s<0?(e=ji(xi),s=0):o<0&&(e=ji(Si),o=0);break;case ji(xi):if(m){if(g[ji(hi)]>=0&&(f>=p||l>=d)){v=!1;break}s+=g[ji(hi)],o=s/m}else g[ji(hi)]>=0?f<p?s+=g[ji(hi)]:g[ji(pi)]>=0&&l>=d&&(v=!1):s+=g[ji(hi)],g[ji(pi)]>=0?l<d&&(o+=g[ji(pi)]):o+=g[ji(pi)];s<0&&o<0?(e=ji(Si),o=0,s=0):s<0?(e=ji(Ei),s=0):o<0&&(e=ji(wi),o=0);break;case ji(xn):n[ji(Q)]+=g[ji(hi)],n[ji(Y)]+=g[ji(pi)],this[ji(jn)](!0),v=!1;break;case ji(qr):this[ji(qr)](function(e,t,n,r){var i=hs(e*e+t*t),s=hs(n*n+r*r);return(s-i)/i}(vs(this[ji(Yr)]-this[ji(Wr)]),vs(this[ji(Zr)]-this[ji(Vr)]),vs(this[ji(ni)]-this[ji(ei)]),vs(this[ji(ri)]-this[ji(ti)]))),this[ji(Wr)]=this[ji(ei)],this[ji(Vr)]=this[ji(ti)],v=!1;break;case ji(Ln):g[ji(hi)]&&g[ji(pi)]&&(y=this[ji(Kt)][ji(Ti)](),u=this[ji(Yr)]-y[ji(Q)],a=this[ji(Zr)]-y[ji(Y)],s=i[ji(tr)],o=i[ji(rr)],g[ji(hi)]>0?g[ji(pi)]>0?e=ji(xi):(e=ji(wi),a-=o):g[ji(pi)]>0?(e=ji(Ei),u-=s):(e=ji(Si),u-=s,a-=o),this[ji(Et)]||(this[ji(Et)]=!0,this[ji(un)][ji(Gt)](Vi)))}v&&(i[ji(G)]=s,i[ji(Z)]=o,i[ji(Q)]=u,i[ji(Y)]=a,this[ji(Qr)]=e,this[ji(Fn)]()),this[ji(Yr)]=this[ji(ni)],this[ji(Zr)]=this[ji(ri)]},t[ji(mt)](Os[ji(Ni)],bs),Os[ji(gt)]={aspectRatio:NaN,autoCropArea:.8,crop:null,preview:ji(oi),strict:!0,responsive:!0,checkImageOrigin:!0,modal:!0,guides:!0,highlight:!0,background:!0,autoCrop:!0,dragCrop:!0,movable:!0,resizable:!0,rotatable:!0,zoomable:!0,touchDragZoom:!0,mouseWheelZoom:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,build:null,built:null,dragstart:null,dragmove:null,dragend:null,zoomin:null,zoomout:null},Os[ji(Ci)]=function(e){t[ji(mt)](Os[ji(gt)],e)},Os[ji(Qt)]=function(e,t){return t=t[ji(ki)](ji(Li)),e[ji(Ai)](/\d+/g,function(e){return t[e]})}(ji(Oi),ji(Mi)),Os[ji(_i)]=t[ji(Di)][ji(ui)],t[ji(Di)][ji(ui)]=function(e){var n=Ss(arguments,1),r;return this[ji(gr)](function(){var i=t(this),s=i[ji(En)](ji(ui)),o;s||i[ji(En)](ji(ui),s=new Os(this,e)),typeof e===ji(Pi)&&t[ji(C)](o=s[e])&&(r=o[ji(I)](s,n))}),Es(r)?this:r},t[ji(Di)][ji(ui)][ji(Hi)]=Os,t[ji(Di)][ji(ui)][ji(Ci)]=Os[ji(Ci)],t[ji(Di)][ji(ui)][ji(Bi)]=function(){return t[ji(Di)][ji(ui)]=Os[ji(_i)],this}})},"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")