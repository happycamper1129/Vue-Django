(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{83:function(n,e,t){"use strict";t.r(e);var c,r,a,o,i,s,l,d,j,b,p,u,h,x,f,O,m=t(2),g=t.n(m),v=t(26),y=t.n(v),w=t(10),k=t(9),S=t(46),A=t(31),T=t(47),C=t(48),z=t.p+"static/media/logo.6d927f22.png",E=t(4),I=t(3),F=t(16),D=I.c.div(c||(c=Object(E.a)(["\n    width: 255px;\n    min-height: 100vh;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    background-color: var(--object-bg-color);\n    overflow-y: scroll;\n    height: 100vh;\n    transition: var(--main-transition);\n    transform: translateX(",");\n    position: fixed;\n    z-index: 500;\n\n    \n"])),(function(n){return n.show?"0":"-100%"})),L=Object(I.c)(F.c)(r||(r=Object(E.a)(["\n    /* border: 2px solid red; */\n    width: 95%;\n    height: 50px;\n    min-height: 50px;\n    margin: 5px 0px;\n    padding: 0px 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--secendory-color);\n    border-radius: 5px;\n    transition: var(--main-transition);\n    position: relative;\n    z-index: 1;\n\n\n\n    &:hover::after{\n        background: var(--secendory-hover-color);\n        transform: scaleX(1);\n        opacity: 1;\n    }\n    &:active{\n        transform: var(--for-active-click);\n    }\n    &::after{\n        opacity: .6;\n        content: '';\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n        transition: var(--main-transition);\n        transform: scaleX(0);\n        z-index: -2;\n\n    }\n\n    &.active{\n        background: var(--primary-color);\n        color: var(--primary-text-color) ;\n    }\n    &.active:hover::after{\n        background: var(--primary-hover-color);\n        transform: scaleX(1);\n    }\n\n"]))),R=Object(I.c)(L)(a||(a=Object(E.a)(["\n    height: 70px;\n    background: var(--object-bg-color) !important;\n    color: var(--secendory-text-color);\n    justify-content: space-between;\n    padding: 0px 10px;\n    &::after{\n        content: none;\n    }\n    &.active{\n        color: var(--secendory-text-color) ;\n    }\n\n\n"]))),M=I.c.img(o||(o=Object(E.a)(["\n    width: 25%;\n    border-radius: 60%;\n\n"]))),_=I.c.p(i||(i=Object(E.a)(["\n    /* right: 30px; */\n    font-size: 22px;\n"]))),J=I.c.div(s||(s=Object(E.a)(["\n    width: 18%;\n    font-size: 24px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    z-index: 100;\n\n"]))),P=I.c.div(l||(l=Object(E.a)(["\n    width: 82%;\n    font-size: 17px;\n    font-weight: 500;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    z-index: 100;\n\n"]))),W=I.c.header(d||(d=Object(E.a)(["\n    padding: 0px 30px 0px 20px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n    box-shadow: 0px 1px 7px 0px #ffffff6b;\n"]))),N=I.c.form(j||(j=Object(E.a)(["\n    margin-right: auto;\n\n"]))),H=(I.c.input(b||(b=Object(E.a)(["\n    padding: 10px 10px;\n    border-radius: 4px;\n    background: var(--secendory-color);\n    border: none;\n    outline: none;\n    color: var(--secendory-text-color);\n"]))),I.c.button(p||(p=Object(E.a)(["\n    padding: 9px 7px;\n    color: var(--primary-text-color);\n    background: var(--primary-color);\n    border: none;\n    border-radius: 4px;\n    margin-left: 5px;\n    cursor: pointer;\n    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    &:hover{\n        background: var(--primary-hover-color);\n    }\n"]))),I.c.div(u||(u=Object(E.a)(["\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n\n"])))),U=I.c.div(h||(h=Object(E.a)(["\n    background: var(--secendory-color);\n    margin: 0px 5px;\n    border-radius: 60%;\n    font-size: 20px;\n    cursor: pointer;\n    width: 45px;\n    height: 45px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    color: var(--secendory-text-color);\n    &:hover{\n        background: var(--secendory-hover-color);\n    }\n    &:active{\n        transform: var(--for-active-click);\n    }\n"]))),Y=I.c.div(x||(x=Object(E.a)(["\n    margin-right: 25px;\n    cursor: pointer;\n    & > div{\n        background: var(--secendory-text-color);\n    }\n    &:hover > div{\n        background: var(--secendory-text-color);\n    }\n    &:active{\n        transform: var(--for-active-click);\n    }\n"]))),X=I.c.div(f||(f=Object(E.a)(["\n    width: 26px;\n    height: 3px;\n    background: white;\n    margin: 6px 0px;\n    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n\n"]))),B=I.c.div(O||(O=Object(E.a)(["\n    margin-right: 20px;\n    position: relative;\n    top: 3.69px;\n    margin-right: 12px;\n\n"]))),G=t(1);function K(n){var e=n.show,t=n.toggleDashOnSmallDevice,c=[{to:"/",name:"Inbox",icon:S.a},{to:"/receive/",name:"Receive",icon:A.a},{to:"/sent/",name:"Sent",icon:A.b},{to:"/compose/",name:"Compose",icon:T.a},{to:"/trash/",name:"Trash",icon:C.a}];return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(D,{show:e,children:[Object(G.jsxs)(R,{exact:!0,to:"/",children:[Object(G.jsx)(M,{src:z}),Object(G.jsx)(_,{children:"Test Project"})]}),c.map((function(n,e){return Object(G.jsxs)(L,{onClick:function(){return t()},activeClassName:"active",to:n.to,exact:!0,children:[Object(G.jsx)(J,{children:Object(G.jsx)(n.icon,{})}),Object(G.jsx)(P,{children:n.name})]},e)}))]})})}var V,$,q,Q,Z=t(5),nn=(t.p,t(49)),en=t(24),tn=t.n(en),cn="REFRESH_TOKEN_SUCCESS",rn="LOGIN_SUCCESS",an="LOGIN_FAILED",on="USER_LOADED_SUCCESS",sn="USER_LOADED_FAIL",ln="AUTHENTICATED_SUCCESS",dn="AUTHENTICATED_FAIL",jn="LOGOUT",bn=t(8),pn=t.n(bn),un="http://jimamproj.pythonanywhere.com",hn=t(17),xn=t.n(hn),fn=t(22),On="SET_ALERT",mn="REMOVE_ALERT",gn=t(85),vn=function(n,e,t){return{type:On,payload:{message:n,alertType:e,id:t}}},yn=function(n){return{type:mn,payload:{id:n}}},wn=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4;return function(){var c=Object(fn.a)(xn.a.mark((function c(r){var a;return xn.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a=Object(gn.a)(),r(vn(n,e,a)),c.next=4,setTimeout((function(){r(yn(a))}),t);case 4:case"end":return c.stop()}}),c)})));return function(n){return c.apply(this,arguments)}}()},kn="SHOW_LOADER",Sn="HIDE_LOADER",An=function(){return{type:kn}},Tn=function(){return{type:Sn}},Cn=function(){return{type:dn}},zn=function(n){return{type:sn,payload:{error:n}}},En=function(){return function(n){n(An()),n({type:jn}),n(wn("Logout Successfull","success")),n(Tn())}},In=function(){return function(n){var e=localStorage.getItem("refresh");if(null!=e){var t=JSON.stringify({refresh:e});pn.a.post("".concat(un,"/auth/jwt/refresh/"),t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){var t;200===e.status?(n((t=e.data.access,{type:cn,payload:{access:t}})),n(Fn())):n(Cn())})).catch((function(){n(Cn())}))}}},Fn=function(){return function(n){var e=localStorage.getItem("access");if(e){var t=JSON.stringify({token:e});pn.a.post("".concat(un,"/auth/jwt/verify/"),t,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){var t=e.data.code;n("token_not_valid"!=t?{type:ln}:In())})).catch((function(){n(In())}))}else n(In())}},Dn=function(){return function(n){if(localStorage.getItem("access")){var e={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}};pn.a.get("".concat(un,"/auth/users/me/"),e).then((function(e){var t;n((t=e.data,{type:on,payload:{user:t}}))})).catch((function(e){n(zn("Failed to load user"))}))}else n(zn("Login Failed"))}},Ln=function(n,e,t){return function(c){c(An());var r=JSON.stringify({email:n,password:e});pn.a.post("".concat(un,"/auth/jwt/create/"),r,{headers:{"Content-Type":"application/json"}}).then((function(n){var e=n.data.access,r=t?n.data.refresh:null;c(function(n,e){return{type:rn,payload:{access:n,refresh:e}}}(e,r)),c(Dn()),c(wn("Successfully Logged In","success")),c(Tn())})).catch((function(n){c(function(n){return{type:an,payload:{error:n}}}("Login Failed")),c(wn("Log In Failed","danger")),c(Tn())}))}};function Rn(n){var e=n.toggleDash,t=n.setDarkMode,c=n.darkMode,r=Object(Z.b)();Object(m.useRef)(null),Object(m.useRef)(null);return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(W,{children:[Object(G.jsxs)(Y,{onClick:e,children:[Object(G.jsx)(X,{}),Object(G.jsx)(X,{}),Object(G.jsx)(X,{})]}),Object(G.jsx)(N,{}),Object(G.jsxs)(H,{children:[Object(G.jsx)(B,{children:Object(G.jsx)(tn.a,{onChange:function(){return t(!c)},checked:c,onColor:"#2f343a",onHandleColor:"#ffffff",handleDiameter:25,uncheckedIcon:!1,checkedIcon:!1,height:25,width:45})}),Object(G.jsx)(U,{onClick:function(){return r(En())},children:Object(G.jsx)(nn.a,{})})]})]})})}var Mn,_n,Jn,Pn,Wn,Nn=Object(I.a)(V||(V=Object(E.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Source Sans Pro', sans-serif;\n    transition: var(--main-transition) !important ;\n  }\n  \n  :root {\n\n    \n    --for-active-click: scale(.92);\n    --main-transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    --primary-color: #dc3545;\n    --primary-text-color: white;\n    --primary-hover-color: #b52a37;\n    ","\n \n  }\n  html {\n      scroll-behavior: smooth;\n  }\n  body{\n      background-color: var(--main-bg-color);\n      color: var(--secendory-text-color);\n  }\n\n  \n  a{\n      text-decoration: none;\n      color: var(--secendory-text-color);\n  }\n  \n  @media only screen and (min-width: 768px){\n      body{\n          font-size: 16px;\n      }\n  }\n  \n  @media only screen and (min-width: 480px) and (max-width: 768px){\n      body{\n          font-size: 15px;\n      }\n  }\n  \n  @media only screen and (max-width: 479px) {\n      body{\n          font-size: 14px;\n      }\n  }\n\n  /* width */\n::-webkit-scrollbar {\n  width: 7px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  \n"])),(function(n){return n.darkMode?"\n\n          --secendory-color: #2f343a;\n          --secendory-text-color: white;\n          --secendory-hover-color: #272c31;\n\n          --main-bg-color: #212427;\n\n          --object-bg-color: #343a40;\n\n          ":"\n\n\n          --secendory-color: #dfe5ec;\n          --secendory-text-color: black;\n          --secendory-hover-color: #c5ccd4;\n          --main-bg-color: #f2f6fb;\n          --object-bg-color: #ffffff;\n\n          "})),Hn=I.c.div($||($=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  \n\n  margin-left: ",";\n\n  transition: var(--main-transition);\n\n"])),(function(n){var e=n.show,t=n.smallDevice;return e&&!t?"255px":"0px"})),Un=I.c.div(q||(q=Object(E.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),Yn=Object(I.b)(Q||(Q=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));function Xn(n){var e=n.children;return Object(Z.c)((function(n){return n.auth})).isAuthenticated?Object(G.jsx)(G.Fragment,{children:e}):Object(G.jsx)(G.Fragment,{})}function Bn(n){var e=n.children;return Object(Z.c)((function(n){return n.auth})).isAuthenticated?Object(G.jsx)(G.Fragment,{}):Object(G.jsx)(G.Fragment,{children:e})}var Gn,Kn,Vn,$n,qn,Qn=Object(I.d)(Mn||(Mn=Object(E.a)(["\n    from {\n        transform: translateY(-100%);\n    }\n    to {\n        transform: translateY(0);\n    }\n\n"]))),Zn=I.c.div(_n||(_n=Object(E.a)(["\n    position: fixed;\n    ","\n    \n    top: 30px;\n    left: 0;\n    right: 0;\n    min-width: 55vw;\n    margin: auto;\n    max-width: fit-content;\n\n    flex-direction: column;\n\n    z-index: 1000000;\n\n"])),Yn),ne=I.c.div(Jn||(Jn=Object(E.a)(["\n    ","\n    padding: 0px 32px;\n\n    background: ",";\n    color: var(--secendory-text-color);\n    justify-content: space-between;\n    \n    width: 100%;\n    min-height: 75px;\n    margin: 11px 0px;\n    animation: "," .4s linear 1;\n"])),Yn,(function(n){var e=n.alertType;return"success"==e?"forestgreen":"danger"==e?"#dc3545":"var(--object-color)"}),Qn),ee=I.c.p(Pn||(Pn=Object(E.a)(["\n    font-size: 18px;\n    font-weight: 600;\n    letter-spacing: 1px;\n"]))),te=I.c.div(Wn||(Wn=Object(E.a)(["\n    background: var(--secendory-color);\n    margin: 0px 5px;\n    border-radius: 60%;\n    font-size: 20px;\n    cursor: pointer;\n    width: 45px;\n    height: 45px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    color: var(--secendory-text-color);\n    &:hover{\n        background: var(--secendory-hover-color);\n    }\n    &:active{\n        transform: var(--for-active-click);\n    }\n\n"]))),ce=t(50);function re(){var n=Object(Z.c)((function(n){return n.alerts})),e=Object(Z.b)();return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(Zn,{children:n.map((function(n){var t=n.message,c=n.alertType,r=n.id;return Object(G.jsxs)(ne,{alertType:c,children:[Object(G.jsx)(ee,{children:t}),Object(G.jsx)(te,{onClick:function(){return e(yn(r))},children:Object(G.jsx)(ce.a,{})})]},r)}))})})}var ae,oe,ie,se,le,de,je,be=Object(I.d)(Gn||(Gn=Object(E.a)(["\n    0%{\n        opacity: 0;\n        transform: translateX(100%); \n    }\n    100%{\n        opacity: 1;\n        transform:translateX(0%); \n    }\n"]))),pe=Object(I.d)(Kn||(Kn=Object(E.a)(["\n    0%{\n        transform: translateY(0px); \n        \n        box-shadow: 0px 75px 20px 0px #0000005e;\n    }\n    50%{\n        transform: translateY(25px); \n        box-shadow: 0px 25px 20px 0px #0000005e;\n\n    }\n    100%{\n        transform: translateY(0px); \n        box-shadow: 0px 75px 20px 0px #0000005e;\n    }\n"]))),ue=I.c.div(Vn||(Vn=Object(E.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: #ef2673;\n    width: 100%;\n    z-index: 2;\n    animation: "," .4s  1 ;\n    animation-timing-function: cubic-bezier(0.6, 0.1, 0.04, 0.93);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    flex-direction: column;\n    height: 100vh;\n    z-index: 4343434;\n    backdrop-filter: blur(3px);\n    background: #0000004f;\n\n"])),be),he=I.c.div($n||($n=Object(E.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 80px;\n    width: 200px;\n"]))),xe=I.c.div(qn||(qn=Object(E.a)(["\n    background-color: var(--secendory-text-color);\n    width: 20px;\n    height: 20px;\n    border-radius: 60px;\n    animation: ","  .8s linear  infinite  ;\n    box-shadow: 0px 15px 5px 0px #0000005e;\n    animation-delay: ",";\n\n"])),pe,(function(n){var e=n.dot;return".".concat(e,"s")}));function fe(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(ue,{children:Object(G.jsxs)(he,{children:[Object(G.jsx)(xe,{dot:"1"}),Object(G.jsx)(xe,{dot:"2"}),Object(G.jsx)(xe,{dot:"3"}),Object(G.jsx)(xe,{dot:"4"}),Object(G.jsx)(xe,{dot:"5"})]})})})}function Oe(n){var e=n.children,t=window.innerWidth,c=Object(m.useState)(!(t<=748)),r=Object(k.a)(c,2),a=r[0],o=r[1],i=Object(m.useState)(t<=748),s=Object(k.a)(i,2),l=s[0],d=s[1],j=localStorage.getItem("darkMode"),b=Object(m.useState)(null==j||JSON.parse(j)),p=Object(k.a)(b,2),u=p[0],h=p[1],x=Object(Z.c)((function(n){return n.loader}));Object(m.useEffect)((function(){localStorage.setItem("darkMode",u)}),[u]);window.addEventListener("resize",(function(){window.innerWidth<=748?(d(!0),o(!1)):(d(!1),o(!0))}));var f=Object(Z.b)();return Object(m.useEffect)((function(){f(Fn()),f(Dn())}),[]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Nn,{darkMode:u}),Object(G.jsx)(re,{}),x.loader?Object(G.jsx)(fe,{}):"",Object(G.jsx)(Xn,{children:Object(G.jsxs)(Un,{children:[Object(G.jsx)(K,{toggleDashOnSmallDevice:function(){l&&o(!a)},show:a}),Object(G.jsxs)(Hn,{onClick:function(){return l&&a?o(!1):null},smallDevice:l,show:a,children:[Object(G.jsx)(Rn,{setDarkMode:h,darkMode:u,toggleDash:function(){o(!a)}}),e]})]})}),Object(G.jsx)(Bn,{children:e})]})}function me(n){var e=n.children;return Object(Z.c)((function(n){return n.auth})).isAuthenticated?Object(G.jsx)(G.Fragment,{children:e}):Object(G.jsx)(G.Fragment,{children:g.a.Children.map(e,(function(n){return Object(G.jsx)("div",{children:Object(G.jsx)(w.b,{exact:!0,path:n.props.path,children:Object(G.jsx)(w.a,{to:"/login"})})})}))})}function ge(n){var e=n.children;return Object(Z.c)((function(n){return n.auth})).isAuthenticated?Object(G.jsx)(G.Fragment,{children:g.a.Children.map(e,(function(n){return Object(G.jsx)("div",{children:Object(G.jsx)(w.b,{exact:!0,path:n.props.path,children:Object(G.jsx)(w.a,{to:"/"})})})}))}):Object(G.jsx)(G.Fragment,{children:e})}var ve=I.c.table(ae||(ae=Object(E.a)(["\n    border-collapse: collapse;\n    margin: 25px 0;\n    font-size: 0.9em;\n    font-family: sans-serif;\n    min-width: 400px;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    width: 100%;\n\n"]))),ye=I.c.thead(oe||(oe=Object(E.a)(["\n\n"]))),we=I.c.tr(ie||(ie=Object(E.a)(["\n    background-color: var(--object-bg-color);\n    color: var(--secendory-text-color);\n    text-align: left;\n    border-bottom: 1px solid #dddddd;\n    cursor: pointer;\n    &:hover{\n        background-color: var(--secendory-hover-color);\n    }\n\n"]))),ke=I.c.th(se||(se=Object(E.a)(["\n    padding: 12px 15px;\n\n"]))),Se=I.c.tbody(le||(le=Object(E.a)(["\n\n"]))),Ae=I.c.td(de||(de=Object(E.a)(["\n    padding: 12px 15px;\n"]))),Te=I.c.button(je||(je=Object(E.a)(["\npadding: 9px 7px;\n    color: var(--primary-text-color);\n    background: var(--primary-color);\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    margin: 5px 5px;\n"])));function Ce(n){var e=n.tableData,t=n.table,c=void 0===t?"":t,r=Object(Z.b)(),a=Object(Z.c)((function(n){return n.auth}));return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(ve,{children:[Object(G.jsx)(ye,{children:Object(G.jsxs)(we,{children:[Object(G.jsx)(ke,{children:"$"}),Object(G.jsx)(ke,{children:"Title"}),Object(G.jsx)(ke,{children:"From"}),Object(G.jsx)(ke,{children:"To"}),Object(G.jsx)(ke,{children:"Action"})]})}),Object(G.jsx)(Se,{children:e.map((function(n,e){var t=n.title,o=n.id,i=n.user,s=n.recipient;return Object(G.jsxs)(we,{children:[Object(G.jsx)(Ae,{children:e+1}),Object(G.jsx)(Ae,{children:t}),Object(G.jsx)(Ae,{children:i}),Object(G.jsx)(Ae,{children:s}),Object(G.jsxs)(Ae,{children:[Object(G.jsx)(Te,{onClick:function(){return"trash"==c?function(n){r(An());var e={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}};pn.a.post("".concat(un,"/api/chats/").concat(n,"/rmtrash/"),"{}",e).then((function(n){200==n.status&&(r({type:"RELOAD"}),r(wn("Successfully Restored from Trash","success"))),r(Tn())})).catch((function(){r(Tn()),r(wn("Failed To Restored from Trash","danger"))}))}(o):function(n){r(An());var e={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}};pn.a.post("".concat(un,"/api/chats/").concat(n,"/trash/"),"{}",e).then((function(n){200==n.status&&(r({type:"RELOAD"}),r(wn("Successfully Moved To Trash","success"))),r(Tn())})).catch((function(){r(Tn()),r(wn("Failed To Move In Trash","danger"))}))}(o)},children:"trash"==c?"Restore":"Move To Trash"}),null!=a.user&&i==a.user.email?Object(G.jsx)(Te,{onClick:function(){return function(n){r(An());var e={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}};pn.a.delete("".concat(un,"/api/chats/").concat(n,"/"),e).then((function(n){r({type:"RELOAD"}),r(wn("Message Unsent Successfull","success")),r(Tn())})).catch((function(){r(Tn()),r(wn("Message Unsent Failed","danger"))}))}(o)},children:"UnSent"}):"",Object(G.jsx)(F.b,{to:"/chats/".concat(o,"/"),children:Object(G.jsx)(Te,{children:"View"})})]})]},o)}))})]})})}function ze(){var n=Object(m.useState)([]),e=Object(k.a)(n,2),t=e[0],c=e[1],r=Object(Z.c)((function(n){return n.reload})),a={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}};return Object(m.useEffect)((function(){pn.a.get("".concat(un,"/api/chats/"),a).then((function(n){c(n.data)}))}),[r]),Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(Ce,{tableData:t})})}var Ee,Ie,Fe,De,Le,Re,Me,_e,Je,Pe,We,Ne,He,Ue,Ye,Xe=t(18),Be=t(6),Ge=t.p+"static/media/login.3e774c7d.svg",Ke=Object(I.d)(Ee||(Ee=Object(E.a)(["\nfrom{\n    transform: translateX(-100%);\n    opacity: 0;\n}\nto{\n    transform: translateX(0);\n    opacity: 1;\n}\n"]))),Ve=Object(I.d)(Ie||(Ie=Object(E.a)(["\nfrom{\n    transform: translateX(100%);\n    opacity: 0;\n}\nto{\n    transform: translateX(0);\n    opacity: 1;\n}\n"]))),$e=I.c.div(Fe||(Fe=Object(E.a)(["\n","\njustify-content: space-between;\noverflow-x: hidden;\n\n@media only screen and (max-width: 748px){\n    flex-direction: column-reverse;\n}\n\n\n"])),Yn),qe=I.c.div(De||(De=Object(E.a)(["\nwidth: 50%;\n","\n@media only screen and (max-width: 748px){\n    width: 100%;\n}\n\n"])),Yn),Qe=I.c.img(Le||(Le=Object(E.a)(["\nwidth: 100%;\nmax-width: 75%;\nobject-fit: cover;\nanimation: "," .8s ease-in-out 1;\n"])),Ke),Ze=I.c.div(Re||(Re=Object(E.a)(["\nwidth: 50%;\nheight: 100vh;\n","\nflex-direction: column;\nalign-items: baseline;\nanimation: "," .8s ease-in-out 1;\n@media only screen and (max-width: 748px){\n    width: 100%;\n    justify-content: center;\n    display: flex;\n    align-items: center;\n    width: 90%;\n\n}\n\n"])),Yn,Ve),nt=I.c.h1(Me||(Me=Object(E.a)(["\nfont-size: 30px;\nmargin-bottom: 40px;\nwidth: 75%;\n@media only screen and (max-width: 748px){\n    width: 90%;\n}\n"]))),et=I.c.form(_e||(_e=Object(E.a)(["\n","\nflex-direction: column;\nwidth: 75%;\n@media only screen and (max-width: 748px){\n    width: 90%;\n}\n\n"])),Yn),tt=I.c.div(Je||(Je=Object(E.a)(["\nwidth: 100%;\nmargin-bottom: 20px;\ndisplay: flex;\njustify-content: flex-start;\nalign-items: center;\n"]))),ct=I.c.input(Pe||(Pe=Object(E.a)(["\npadding: 15px 16px;\nborder-radius: 4px;\nbackground: var(--secendory-color);\nborder: none;\noutline: none;\ncolor: var(--secendory-text-color);\nfont-size: 18px;\nwidth: 100%;\nfont-weight: 500;\nletter-spacing: 1px;\n"]))),rt=I.c.label(We||(We=Object(E.a)(["\ncolor: var(--primary-text-color);\nfont-size: 18px;\nfont-weight: 500;\nmargin-right: 17px;\n"]))),at=I.c.button(Ne||(Ne=Object(E.a)(["\ncolor: var(--primary-text-color);\nbackground: var(--primary-color);\nborder: none;\nborder-radius: 4px;\ncursor: pointer;\ntransition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n&:hover{\n    background: var(--primary-hover-color);\n}\n&:active{\n    transform: var(--for-active-click);\n}\nwidth: 100%;\npadding: 15px 16px;\nletter-spacing: 1px;\nfont-weight: 500;\nfont-size: 18px;\n\n"]))),ot=Object(I.c)(tt)(He||(He=Object(E.a)(["\nmargin-bottom: 20px;\n"]))),it=I.c.p(Ue||(Ue=Object(E.a)(["\ncolor: var(--primary-text-color);\nfont-size: 18px;\nfont-weight: 500;\nmargin-right: 17px;\n"]))),st=Object(I.c)(F.b)(Ye||(Ye=Object(E.a)(["\ncolor: var(--primary-color);\nfont-weight: 600;\n"])));function lt(){var n=Object(m.useState)({email:"",password:""}),e=Object(k.a)(n,2),t=e[0],c=e[1],r=Object(m.useState)(!1),a=Object(k.a)(r,2),o=a[0],i=a[1],s=Object(Z.b)(),l=t.email,d=t.password,j=function(n){return c(Object(Be.a)(Object(Be.a)({},t),{},Object(Xe.a)({},n.target.name,n.target.value)))},b=function(){var n=Object(fn.a)(xn.a.mark((function n(e){return xn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),console.log(o),console.log(l),console.log(d),s(Ln(l,d,o));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)($e,{children:[Object(G.jsx)(qe,{children:Object(G.jsx)(Qe,{src:Ge})}),Object(G.jsxs)(Ze,{children:[Object(G.jsx)(nt,{children:"Please Enter Your Email And Password To Login"}),Object(G.jsxs)(et,{onSubmit:b,children:[Object(G.jsx)(tt,{children:Object(G.jsx)(ct,{name:"email",onChange:j,type:"email",placeholder:"Email"})}),Object(G.jsx)(tt,{children:Object(G.jsx)(ct,{name:"password",onChange:j,type:"password",placeholder:"Password"})}),Object(G.jsxs)(ot,{children:[Object(G.jsx)(rt,{children:"Keep Me Logged In"}),Object(G.jsx)(tn.a,{onColor:"#dc3545",onHandleColor:"#ffffff",handleDiameter:25,uncheckedIcon:!1,checkedIcon:!1,height:25,width:45,checked:o,onChange:function(n){return i(!o)}})]}),Object(G.jsx)(ot,{children:Object(G.jsxs)(it,{children:["Don't Have An Account? ",Object(G.jsx)(st,{to:"/signup/",children:"Create An Account"})," "]})}),Object(G.jsx)(at,{type:"submit",children:"Login"})]})]})]})})}var dt,jt,bt,pt,ut,ht,xt=t.p+"static/media/signup.996abb0a.svg";function ft(){var n=Object(m.useState)({email:"",password:"",re_password:""}),e=Object(k.a)(n,2),t=e[0],c=e[1],r=Object(Z.b)(),a=t.email,o=t.password,i=t.re_password,s=function(n){return c(Object(Be.a)(Object(Be.a)({},t),{},Object(Xe.a)({},n.target.name,n.target.value)))},l=function(){var n=Object(fn.a)(xn.a.mark((function n(e){var t,c;return xn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),r(An()),o!==i){n.next=13;break}if(!(o.length<8)){n.next=7;break}return r(Tn()),r(wn("Password Sould Be Minimum 8 Charecters Long","danger")),n.abrupt("return","");case 7:return t={headers:{"Content-Type":"application/json",Accept:"application/json"}},c=JSON.stringify({email:a,password:o,re_password:i}),n.next=11,pn.a.post("".concat(un,"/auth/users/"),c,t).then((function(n){201==n.status&&(r(Tn()),r(wn("Successfully Created An Account. PLease check your email. We have sent yuo a confirmation email.","success",9e4)))})).catch((function(n){r(Tn());for(var e=0,t=Object.entries(n.response.data);e<t.length;e++){var c=Object(k.a)(t[e],2),a=(c[0],c[1]);r(wn("".concat(a),"danger"))}}));case 11:n.next=15;break;case 13:r(Tn()),r(wn("Passwords does not match. Please make sure that both the passwords are same","danger"));case 15:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)($e,{children:[Object(G.jsx)(qe,{children:Object(G.jsx)(Qe,{src:xt})}),Object(G.jsxs)(Ze,{children:[Object(G.jsx)(nt,{children:"Please Enter Your Email And Password To Create An Account"}),Object(G.jsxs)(et,{onSubmit:l,children:[Object(G.jsx)(tt,{children:Object(G.jsx)(ct,{onChange:s,name:"email",type:"email",placeholder:"Email"})}),Object(G.jsx)(tt,{children:Object(G.jsx)(ct,{onChange:s,name:"password",type:"password",placeholder:"Password"})}),Object(G.jsx)(tt,{children:Object(G.jsx)(ct,{onChange:s,name:"re_password",type:"password",placeholder:"Confirm Password"})}),Object(G.jsx)(ot,{children:Object(G.jsxs)(it,{children:["Already Created An Account? ",Object(G.jsx)(st,{to:"/login/",children:"Login"})," "]})}),Object(G.jsx)(at,{type:"submit",children:"Signup"})]})]})]})})}function Ot(){var n=Object(m.useState)([]),e=Object(k.a)(n,2),t=e[0],c=e[1],r=Object(Z.c)((function(n){return n.reload})),a={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}};return Object(m.useEffect)((function(){pn.a.get("".concat(un,"/api/chats/received/"),a).then((function(n){c(n.data)}))}),[r]),Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(Ce,{tableData:t})})}function mt(){var n=Object(m.useState)([]),e=Object(k.a)(n,2),t=e[0],c=e[1],r=Object(Z.c)((function(n){return n.reload})),a={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}};return Object(m.useEffect)((function(){pn.a.get("".concat(un,"/api/chats/sent/"),a).then((function(n){c(n.data)}))}),[r]),Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(Ce,{tableData:t})})}function gt(){var n=Object(m.useState)({email:"",recipient:"",title:"",body:""}),e=Object(k.a)(n,2),t=e[0],c=e[1],r=Object(Z.b)(),a=t.recipient,o=t.title,i=t.body,s=function(n){return c(Object(Be.a)(Object(Be.a)({},t),{},Object(Xe.a)({},n.target.name,n.target.value)))},l=Object(Z.c)((function(n){return n.auth}));return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(Ct,{children:Object(G.jsxs)(zt,{onSubmit:function(n){n.preventDefault(),r(An());var e={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}},t=l.user.email,s=JSON.stringify({user:t,recipient:a,title:o,body:i});pn.a.post("".concat(un,"/api/chats/"),s,e).then((function(n){r(Tn()),r(wn("Message Sent","success")),c({email:"",recipient:"",title:"",body:""})})).catch((function(){r(Tn()),r(wn("Failed to Send Message","danger"))}))},children:[Object(G.jsx)(Et,{children:Object(G.jsx)(It,{type:"email",name:"recipient",placeholder:"Email",onChange:s,value:a})}),Object(G.jsx)(Et,{children:Object(G.jsx)(It,{type:"text",name:"title",placeholder:"Title",onChange:s,value:o})}),Object(G.jsx)(Et,{children:Object(G.jsx)(Ft,{onChange:s,value:i,name:"body",placeholder:"Your Body"})}),Object(G.jsx)(Et,{children:Object(G.jsx)(Dt,{children:"Send"})})]})})})}var vt,yt,wt,kt,St,At,Tt,Ct=I.c.div(dt||(dt=Object(E.a)(["\n        width: 95%;\n    margin: 30px 0px;\n\n"]))),zt=I.c.form(jt||(jt=Object(E.a)(["\n\n\n"]))),Et=I.c.div(bt||(bt=Object(E.a)(["\n    width: 100%;\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n"]))),It=I.c.input(pt||(pt=Object(E.a)(["\n    padding: 15px 16px;\n    border-radius: 4px;\n    background: var(--secendory-color);\n    border: none;\n    outline: none;\n    color: var(--secendory-text-color);\n    font-size: 18px;\n    width: 100%;\n    font-weight: 500;\n    letter-spacing: 1px;\n"]))),Ft=I.c.textarea(ut||(ut=Object(E.a)(["\n    padding: 15px 16px;\n    border-radius: 4px;\n    background: var(--secendory-color);\n    border: none;\n    outline: none;\n    color: var(--secendory-text-color);\n    font-size: 18px;\n    width: 100%;\n    font-weight: 500;\n    letter-spacing: 1px;\n    margin: 0px;\n    height: 333px;\n    min-width: 100%;\n\n"]))),Dt=I.c.button(ht||(ht=Object(E.a)(["\n    \ncolor: var(--primary-text-color);\nbackground: var(--primary-color);\nborder: none;\nborder-radius: 4px;\ncursor: pointer;\ntransition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n&:hover{\n    background: var(--primary-hover-color);\n}\n&:active{\n    transform: var(--for-active-click);\n}\npadding: 15px 16px;\nletter-spacing: 1px;\nfont-weight: 500;\nfont-size: 18px;\nwidth: 150px;\n\nmargin-left: auto;\n\n"])));function Lt(){var n=Object(m.useState)([]),e=Object(k.a)(n,2),t=e[0],c=e[1],r=Object(Z.c)((function(n){return n.reload})),a={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}};return Object(m.useEffect)((function(){pn.a.get("".concat(un,"/api/chats/getrash/"),a).then((function(n){c(n.data)}))}),[r]),Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(Ce,{table:"trash",tableData:t})})}function Rt(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)($e,{children:Object(G.jsxs)(Ze,{style:{alignItems:"center",width:"100%"},children:[Object(G.jsx)(nt,{children:"Please Enter Your Email To Change Password"}),Object(G.jsxs)(et,{children:[Object(G.jsx)(tt,{children:Object(G.jsx)(ct,{type:"email",placeholder:"Email"})}),Object(G.jsx)(ot,{children:Object(G.jsxs)(it,{children:["Already Created An Account?",Object(G.jsx)(st,{to:"/login/",children:"Login"})]})}),Object(G.jsx)(ot,{children:Object(G.jsxs)(it,{children:["Don't Have An Account? ",Object(G.jsx)(st,{to:"/signup/",children:"Create An Account"})," "]})}),Object(G.jsx)(at,{children:"Reset Password"})]})]})})})}function Mt(n){var e=n.match,t=Object(Z.b)(),c=Object(w.g)(),r=e.params.uid,a=e.params.token,o={headers:{"Content-Type":"application/json",Accept:"application/json"}},i=JSON.stringify({uid:r,token:a});return Object(m.useEffect)((function(){t(An()),pn.a.post("".concat(un,"/auth/users/activation/"),i,o).then((function(n){if(204==n.status)return t(Tn()),t(wn("Your Account Has Been Activated Successfully.","success")),c.push("/login/")})).catch((function(n){t(Tn()),t(wn("Failed To Acctivate Your Account","danger"))}))}),[]),Object(G.jsx)(G.Fragment,{})}function _t(n){var e=n.match,t=Object(m.useState)({id:"",user:"",recipient:"",title:"",body:""}),c=Object(k.a)(t,2),r=c[0],a=c[1];return Object(m.useEffect)((function(){var n={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"JWT ".concat(localStorage.getItem("access"))}};pn.a.get("".concat(un,"/api/chats/").concat(e.params.id,"/"),n).then((function(n){a(n.data)})).catch((function(){}))}),[]),Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(Jt,{children:Object(G.jsxs)(Pt,{children:[Object(G.jsxs)(Wt,{children:[Object(G.jsx)(Ht,{children:"From"}),Object(G.jsx)(Nt,{disabled:!0,type:"email",name:"recipient",placeholder:"Email",value:r.user})]}),Object(G.jsxs)(Wt,{children:[Object(G.jsx)(Ht,{children:"To"}),Object(G.jsx)(Nt,{disabled:!0,type:"email",name:"recipient",placeholder:"Email",value:r.recipient})]}),Object(G.jsxs)(Wt,{children:[Object(G.jsx)(Ht,{children:"Title"}),Object(G.jsx)(Nt,{disabled:!0,type:"text",name:"title",placeholder:"Title",value:r.title})]}),Object(G.jsxs)(Wt,{children:[Object(G.jsx)(Ht,{children:"Body"}),Object(G.jsx)(Ut,{disabled:!0,value:r.body,name:"body",placeholder:"Your Body"})]})]})})})}var Jt=I.c.div(vt||(vt=Object(E.a)(["\n        width: 95%;\n    margin: 30px 0px;\n\n"]))),Pt=I.c.form(yt||(yt=Object(E.a)(["\n\n\n"]))),Wt=I.c.div(wt||(wt=Object(E.a)(["\n    width: 100%;\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    align-items: baseline;\n    align-items: center;\n"]))),Nt=I.c.input(kt||(kt=Object(E.a)(["\n    padding: 15px 16px;\n    border-radius: 4px;\n    background: var(--secendory-color);\n    border: none;\n    outline: none;\n    color: var(--secendory-text-color);\n    font-size: 18px;\n    width: 100%;\n    font-weight: 500;\n    letter-spacing: 1px;\n"]))),Ht=I.c.label(St||(St=Object(E.a)(["\n    padding: 15px 16px;\n    color: var(--secendory-text-color);\n    font-size: 18px;\n    width: 100%;\n    font-weight: 500;\n    letter-spacing: 1px;\n"]))),Ut=I.c.textarea(At||(At=Object(E.a)(["\n    padding: 15px 16px;\n    border-radius: 4px;\n    background: var(--secendory-color);\n    border: none;\n    outline: none;\n    color: var(--secendory-text-color);\n    font-size: 18px;\n    width: 100%;\n    font-weight: 500;\n    letter-spacing: 1px;\n    margin: 0px;\n    height: 333px;\n    min-width: 100%;\n\n"])));I.c.button(Tt||(Tt=Object(E.a)(["\n    \ncolor: var(--primary-text-color);\nbackground: var(--primary-color);\nborder: none;\nborder-radius: 4px;\ncursor: pointer;\ntransition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n&:hover{\n    background: var(--primary-hover-color);\n}\n&:active{\n    transform: var(--for-active-click);\n}\npadding: 15px 16px;\nletter-spacing: 1px;\nfont-weight: 500;\nfont-size: 18px;\nwidth: 150px;\n\nmargin-left: auto;\n\n"])));var Yt=function(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(Oe,{children:[Object(G.jsxs)(me,{children:[Object(G.jsx)(w.b,{exact:!0,path:"/",component:ze}),Object(G.jsx)(w.b,{exact:!0,path:"/receive/",component:Ot}),Object(G.jsx)(w.b,{exact:!0,path:"/sent/",component:mt}),Object(G.jsx)(w.b,{exact:!0,path:"/compose/",component:gt}),Object(G.jsx)(w.b,{exact:!0,path:"/trash/",component:Lt}),Object(G.jsx)(w.b,{exact:!0,path:"/chats/:id/",component:_t})]}),Object(G.jsxs)(ge,{children:[Object(G.jsx)(w.b,{path:"/login/",component:lt}),Object(G.jsx)(w.b,{path:"/signup/",component:ft}),Object(G.jsx)(w.b,{path:"/reset-password/",component:Rt}),Object(G.jsx)(w.b,{path:"/activate/:uid/:token/",component:Mt})]})]})})},Xt=t(23),Bt=t(51),Gt={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:localStorage.getItem("isAuthenticated"),user:null},Kt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,e=arguments.length>1?arguments[1]:void 0,t=e.type,c=e.payload;switch(t){case rn:return localStorage.setItem("access",c.access),localStorage.setItem("refresh",c.refresh),localStorage.setItem("isAuthenticated",!0),Object(Be.a)(Object(Be.a)({},n),{},{access:c.access,refresh:c.refresh,isAuthenticated:!0});case an:case jn:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),localStorage.removeItem("isAuthenticated"),Object(Be.a)(Object(Be.a)({},n),{},{access:null,refresh:null,isAuthenticated:!1});case on:return Object(Be.a)(Object(Be.a)({},n),{},{user:c.user});case sn:return Object(Be.a)(Object(Be.a)({},n),{},{user:null});case ln:return localStorage.setItem("isAuthenticated",!0),Object(Be.a)(Object(Be.a)({},n),{},{isAuthenticated:!0});case cn:return localStorage.setItem("access",c.access),Object(Be.a)(Object(Be.a)({},n),{},{access:c.access});case dn:return localStorage.removeItem("isAuthenticated"),Object(Be.a)(Object(Be.a)({},n),{},{isAuthenticated:!1});default:return n}},Vt=t(53),$t=[],qt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t,e=arguments.length>1?arguments[1]:void 0,t=e.type,c=e.payload;switch(t){case On:return[].concat(Object(Vt.a)(n),[c]);case mn:return n.filter((function(n){return n.id!==c.id}));default:return n}},Qt={loader:!1},Zt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,e=arguments.length>1?arguments[1]:void 0,t=e.type;switch(t){case kn:return Object(Be.a)(Object(Be.a)({},n),{},{loader:!0});case Sn:return Object(Be.a)(Object(Be.a)({},n),{},{loader:!1});default:return n}},nc="RELOAD",ec=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,t=e.type;switch(t){case nc:return n+1;default:return n}},tc=Object(Xt.combineReducers)({auth:Kt,alerts:qt,loader:Zt,reload:ec}),cc=t(52),rc=Object(Xt.createStore)(tc,Object(cc.composeWithDevTools)(Object(Xt.applyMiddleware)(Bt.a)));y.a.render(Object(G.jsx)(g.a.StrictMode,{children:Object(G.jsx)(Z.a,{store:rc,children:Object(G.jsx)(F.a,{children:Object(G.jsx)(w.d,{children:Object(G.jsx)(Yt,{})})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.32884ef9.chunk.js.map