(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[17],{579:function(e,t,a){},597:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var n=a(4),i=a(5),s=a(9),c=a(7),r=a(6),o=a(211),l=a.n(o),m=a(35),p=a.n(m),u=a(0),d=a.n(u),b=a(17),y=a(11),_=(a(579),function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).input=void 0,i.state={copied:!1},i.copyAddressToClipboard=i.copyAddressToClipboard.bind(Object(s.a)(i)),i}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=p.a.parse(this.props.location.search),a=t.address,n=t.amount,i=t.description;return d.a.createElement("div",{className:"bi-payment-request"},d.a.createElement("div",{className:"bi-payment-request__header"},d.a.createElement("div",{className:"bi-payment-request__title"},d.a.createElement(b.a,{id:"components.payment-request.title"}),d.a.createElement("div",{className:"bi-payment-request__subtitle"},d.a.createElement(b.a,{id:"components.payment-request.subtitle",values:{coinName:y.a.blockchain.coinName.toUpperCase()}})))),d.a.createElement("div",{className:"bi-payment-request__body"},(n>0||i)&&d.a.createElement("div",{className:"bi-payment-request__info"},n>0&&d.a.createElement("div",{className:"bi-payment-request__amount"},n," ",y.a.blockchain.coinName.toUpperCase()),i&&d.a.createElement("div",{className:"bi-payment-request__description"},d.a.createElement(b.a,{id:"components.payment-request.for"})," ",d.a.createElement("cite",null,"\xab",i,"\xbb"))),d.a.createElement(l.a,{value:a,size:146}),d.a.createElement("div",{className:"bi-payment-request__address g-flex"},d.a.createElement("div",{className:"bi-payment-request__input g-flex__item",ref:function(t){return e.input=t}},a),d.a.createElement("button",{className:"bi-payment-request__btn-copy g-flex__item-fixed",onClick:this.copyAddressToClipboard},this.state.copied?d.a.createElement(b.a,{id:"components.payment-request.copied"}):d.a.createElement(b.a,{id:"components.payment-request.copy"})))))}},{key:"selectInput",value:function(){window.getSelection().selectAllChildren(this.input)}},{key:"copyAddressToClipboard",value:function(){var e=this;this.selectInput(),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.setState({copied:!0}),setTimeout((function(){e.setState({copied:!1})}),1e3)}}]),a}(d.a.PureComponent))}}]);
//# sourceMappingURL=17.7feac7aa.chunk.js.map