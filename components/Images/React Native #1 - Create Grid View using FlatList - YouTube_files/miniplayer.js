(function(g){var window=this;'use strict';var d4=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.ye=!1;this.player=a;this.T(a,"minimized",this.qg);this.T(a,"onStateChange",this.eI)},e4=function(a){g.vL.call(this,a);
this.j=new d4(this.player);this.j.hide();g.iL(this.player,this.j.element,4);a.Te()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(d4,g.W);g.h=d4.prototype;
g.h.QF=function(){this.tooltip=new g.sP(this.player,this);g.H(this,this.tooltip);g.iL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.yc=new g.qM(this.player);g.H(this,this.yc);this.Pg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.H(this,this.Pg);this.Pg.Ba(this.element);this.T(this.Pg.element,"click",this.pB);var a=new g.W({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.zI()]});g.H(this,a);a.Ba(this.Pg.element);this.T(a.element,"click",this.Ri);
a=new g.v_(this.player,this);g.H(this,a);a.Ba(this.Pg.element);this.fq=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.H(this,this.fq);this.fq.Ba(this.Pg.element);this.T(this.fq.element,"click",this.pB);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,b);b.Ba(this.fq.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ba(this.fq.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,c);c.Ba(this.fq.element);this.dP=new g.RN(this.player,
this,!1);g.H(this,this.dP);this.dP.Ba(b.element);b=new g.PN(this.player,this);g.H(this,b);b.Ba(a.element);this.nextButton=new g.RN(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ba(c.element);this.Sg=new g.eP(this.player,this);g.H(this,this.Sg);this.Sg.Ba(this.Pg.element);this.Ic=new g.aO(this.player,this);g.H(this,this.Ic);g.iL(this.player,this.Ic.element,4);this.eB=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.H(this,this.eB);g.iL(this.player,this.eB.element,4);a=new g.W({G:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.zI()]});g.H(this,a);a.Ba(this.eB.element);this.T(a.element,"click",this.Ri);a=new g.W({G:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.FI()]});g.H(this,a);a.Ba(this.eB.element);this.T(a.element,"click",this.gY);this.T(this.player,"presentingplayerstatechange",this.Sc);this.T(this.player,"appresize",this.yb);this.T(this.player,"fullscreentoggled",this.yb);this.yb()};
g.h.show=function(){this.Xd=new g.vp(this.Oq,null,this);this.Xd.start();this.ye||(this.QF(),this.ye=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Ic.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.Xd&&(this.Xd.dispose(),this.Xd=void 0);g.W.prototype.hide.call(this);this.player.Te()||(this.ye&&this.Ic.hide(),this.player.loadModule("annotations_module"))};
g.h.ra=function(){this.Xd&&(this.Xd.dispose(),this.Xd=void 0);g.W.prototype.ra.call(this)};
g.h.Ri=function(){this.player.stopVideo();this.player.Pa("onCloseMiniplayer")};
g.h.gY=function(){this.player.playVideo()};
g.h.pB=function(a){if(a.target===this.Pg.element||a.target===this.fq.element)this.player.V().S("kevlar_miniplayer_play_pause_on_scrim")?g.CH(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Pa("onExpandMiniplayer")};
g.h.qg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Te())};
g.h.Gd=function(){this.Ic.Qb();this.Sg.Qb()};
g.h.Oq=function(){this.Gd();this.Xd&&this.Xd.start()};
g.h.Sc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.h.yb=function(){g.qO(this.Ic,0,this.player.eb().getPlayerSize().width,!1);g.dO(this.Ic)};
g.h.eI=function(a){this.player.Te()&&(0===a?this.hide():this.show())};
g.h.pc=function(){return this.tooltip};
g.h.Ze=function(){return!1};
g.h.Df=function(){return!1};
g.h.Li=function(){return!1};
g.h.gy=function(){};
g.h.Rn=function(){};
g.h.Ws=function(){};
g.h.Ao=function(){return null};
g.h.Kw=function(){return null};
g.h.Jj=function(){return new g.Im(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Vq=function(a,b,c,d,e){var f=0,k=d=0,l=g.Ym(a);if(b){c=g.Dp(b,"ytp-prev-button")||g.Dp(b,"ytp-next-button");var m=g.Dp(b,"ytp-play-button"),n=g.Dp(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Wm(b,this.element),k=b.x,f=b.y-12):n&&(k=g.Dp(b,"ytp-miniplayer-button-top-left"),f=g.Wm(b,this.element),b=g.Ym(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.Bh(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Hl=function(){};
g.h.Xk=function(){return!1};g.w(e4,g.vL);e4.prototype.create=function(){};
e4.prototype.ai=function(){return!1};
e4.prototype.load=function(){this.player.hideControls();this.j.show()};
e4.prototype.unload=function(){this.player.showControls();this.j.hide()};g.uL("miniplayer",e4);})(_yt_player);
