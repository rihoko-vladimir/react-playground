(this["webpackJsonpreact-playground"]=this["webpackJsonpreact-playground"]||[]).push([[0],{50:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(47),c=n.n(r),s=(n(69),n(70),n(8)),u=(n(71),n(2)),a=function(){return Object(u.jsxs)("div",{className:"infoContainer",children:[Object(u.jsx)("p",{className:"title",children:"About us"}),Object(u.jsx)("p",{className:"info",children:"Ok, this is some useful information about our company. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis cumque neque nihil numquam odit, perferendis quae quasi sapiente. Alias aliquid, ea eius eligendi iusto maxime molestias pariatur quae sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem consectetur deleniti dignissimos dolores dolorum ducimus excepturi facere harum in, labore laboriosam minus nemo nesciunt odit sit vel vero voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt distinctio, hic nam optio quasi reiciendis tempore? Accusamus enim, est et, inventore laboriosam libero natus provident quia, rem veniam voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto commodi consequatur dignissimos facilis id nam similique sit, tempora? At consectetur deleniti eum eveniet, hic id nisi optio vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores error laborum quae quod reprehenderit, vel voluptas? A alias atque dignissimos, error maiores minima natus nisi non quod rem, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque culpa inventore ipsa minima placeat sint tempore ullam. Atque beatae distinctio facere iste maxime nulla officiis pariatur praesentium quaerat rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut consectetur deserunt, dolores, doloribus et exercitationem ipsam, libero repellendus reprehenderit sed totam. Aliquid, laboriosam nemo optio sed sint voluptas voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores commodi consequatur dolore ea enim, eum eveniet ex excepturi facere illo in labore mollitia neque officia, possimus qui repellat reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi facere fuga incidunt ipsam libero officia soluta tempore tenetur veniam voluptas. Ad repellat similique soluta vitae. Atque explicabo incidunt suscipit tempore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid architecto asperiores dignissimos eos ipsam neque odio possimus qui quisquam reprehenderit similique, temporibus tenetur velit voluptatibus? Excepturi odio repellendus soluta."})]})},l=n(34),d=n(37),m=n(38),j=n(23),p=n(42),b=n(41),h=n(104),v=function(e){return Object(u.jsxs)("div",{style:e.style,className:"mainContainer",children:[Object(u.jsx)("p",{className:"counter",children:e.currentCount}),Object(u.jsxs)("div",{className:"buttonContainer",children:[Object(u.jsx)(h.a,{variant:"outlined",size:"medium",onClick:function(){return e.onDecrementClicked()},children:"-"}),Object(u.jsx)(h.a,{variant:"outlined",size:"medium",onClick:function(){return e.onResetClicked()},children:"Reset"}),Object(u.jsx)(h.a,{variant:"outlined",size:"medium",onClick:function(){return e.onIncrementClicked()},children:"+"})]})]})},C=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={currentCount:0},i.onDecrementClicked=i.onDecrementClicked.bind(Object(j.a)(i)),i.onIncrementClicked=i.onIncrementClicked.bind(Object(j.a)(i)),i.onResetClicked=i.onResetClicked.bind(Object(j.a)(i)),i}return Object(m.a)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e,t){console.log("".concat(this.constructor.name," : ").concat(this.UNSAFE_componentWillReceiveProps.name)),"created"===e.event&&0!==this.state.currentCount&&this.state.currentCount%2===0&&this.setState((function(e){return{currentCount:e.currentCount+1}})),"removed"===e.event&&this.state.currentCount%2!==0&&this.setState((function(e){return{currentCount:e.currentCount-1}}))}},{key:"shouldComponentUpdate",value:function(e,t,n){return this.state.currentCount!==t.currentCount}},{key:"onIncrementClicked",value:function(){this.setState((function(e){return{currentCount:e.currentCount+1}}))}},{key:"onDecrementClicked",value:function(){this.setState((function(e){return{currentCount:e.currentCount-1}}))}},{key:"onResetClicked",value:function(){this.setState({currentCount:0})}},{key:"render",value:function(){return Object(u.jsx)(v,Object(l.a)({currentCount:this.state.currentCount,onDecrementClicked:this.onDecrementClicked,onIncrementClicked:this.onIncrementClicked,onResetClicked:this.onResetClicked},this.props))}}]),n}(o.a.Component),O=n(50),f=n.n(O),x=(n(76),n(105)),k=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={counters:[]},i.onCounterRemoved=i.onCounterRemoved.bind(Object(j.a)(i)),i.onNewCounterAdded=i.onNewCounterAdded.bind(Object(j.a)(i)),i.onCounterReset=i.onCounterReset.bind(Object(j.a)(i)),i}return Object(m.a)(n,[{key:"onNewCounterAdded",value:function(){var e=this;this.setState((function(t){for(var n=[],i=0;i<t.counters.length+1;i++)n.push(Object(u.jsx)(C,Object(l.a)({event:"created"},e.props)));return{counters:n}}))}},{key:"onCounterReset",value:function(){this.setState({counters:[]})}},{key:"onCounterRemoved",value:function(){var e=this;this.setState((function(t){for(var n=[],i=0;i<t.counters.length-1;i++)n.push(Object(u.jsx)(C,Object(l.a)({event:"removed"},e.props)));return{counters:n}}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)(x.a,{variant:"outlined",children:[Object(u.jsx)(h.a,{onClick:this.onNewCounterAdded,children:"+"}),Object(u.jsx)(h.a,{onClick:this.onCounterReset,children:"Reset"}),Object(u.jsx)(h.a,{onClick:this.onCounterRemoved,children:"-"})]}),Object(u.jsx)("div",{className:"counters",children:this.state.counters})]})}}]),n}(o.a.Component),q=(n(78),function(){return Object(u.jsxs)("div",{className:"counterPage",children:[Object(u.jsx)(C,{style:f.a}),Object(u.jsx)(k,{style:f.a})]})}),g=(n(79),function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("p",{className:"errorTitle",children:"Error 404: Not Found"})})}),A=n(36),y=n(102),N=n(100),R=n(106),L=function(){var e=Object(s.g)().pathname;return console.log(e),Object(u.jsx)(y.a,{position:"static",color:"transparent",children:Object(u.jsxs)(N.a,{value:e,textColor:"secondary",indicatorColor:"secondary",children:[Object(u.jsx)(R.a,{label:"About us",value:S[0],to:S[0],component:A.b}),Object(u.jsx)(R.a,{label:"Counters",value:S[1],to:S[1],component:A.b})]})})},S=["/about","/counters","/","/404"],D=function(){return Object(u.jsxs)(A.a,{children:[Object(u.jsx)(s.b,{path:S[3],children:Object(u.jsx)(g,{})}),Object(u.jsx)(s.d,{children:Object(u.jsx)(s.b,{path:"/",children:Object(u.jsx)("div",{children:Object(u.jsxs)(s.d,{children:[Object(u.jsxs)(s.b,{path:S[0],children:[Object(u.jsx)(L,{}),Object(u.jsx)(a,{})]}),Object(u.jsxs)(s.b,{path:S[1],children:[Object(u.jsx)(L,{}),Object(u.jsx)(q,{})]}),Object(u.jsx)(s.b,{exact:!0,path:S[2],children:Object(u.jsx)(L,{})}),Object(u.jsx)(s.b,{path:"/",children:Object(u.jsx)(s.a,{to:S[3]})})]})})})})]})};var I=function(){return Object(u.jsx)(D,{})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),o(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),F()}},[[82,1,2]]]);
//# sourceMappingURL=main.4830b755.chunk.js.map