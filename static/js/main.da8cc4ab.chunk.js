(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),l=n.n(r),s=n(1),i=n(4),c=n(5),u=n(7),h=n(6),d=n(8),g=(n(14),function(e){var t=e.goods,n=e.minLength,a=e.handleReverseList,r=e.handleSortAlphabet,l=e.handleResetList,s=e.handleSortByLength,i=e.handleSelectList;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:a},"Reverse"),o.a.createElement("button",{type:"button",onClick:r},"Sort"),o.a.createElement("button",{type:"button",onClick:l},"Reset"),o.a.createElement("button",{type:"button",onClick:s},"Length"),o.a.createElement("select",{name:"goods",id:"goods-select",onChange:i,value:n},Array.from(10).fill(1).map((function(e,t){return o.a.createElement("option",{value:t+1},t+1)}))),o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{key:e},e)}))))});g.defaultProps={goods:[],minLength:"1"};var m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={isLoaded:!1,goods:[].concat(m),originalGoods:[].concat(m),minLength:1},n.handleStart=function(){n.setState({isLoaded:!0})},n.handleReverseList=function(){n.setState((function(e){return{goods:Object(s.a)(e.goods).reverse()}}))},n.handleSortAlphabet=function(){n.setState((function(e){return{goods:Object(s.a)(e.goods).sort((function(e,t){return e.localeCompare(t)}))}}))},n.handleResetList=function(){n.setState((function(e){return{minLength:1,goods:Object(s.a)(e.originalGoods)}}))},n.handleSortByLength=function(){n.setState((function(e){return{goods:Object(s.a)(e.goods).sort((function(e,t){return e.length-t.length}))}}))},n.handleSelectList=function(e){var t=e.target;n.setState((function(e){return{minLength:t.value,goods:e.originalGoods.filter((function(e){return e.length>=t.value}))}}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.minLength,a=e.isLoaded;return o.a.createElement("div",{className:"app"},o.a.createElement("h1",null,"Goods"),a?o.a.createElement(g,{goods:t,minLength:n,handleReverseList:this.handleReverseList,handleSortAlphabet:this.handleSortAlphabet,handleResetList:this.handleResetList,handleSortByLength:this.handleSortByLength,handleSelectList:this.handleSelectList}):o.a.createElement("button",{type:"button",onClick:this.handleStart},"List"))}}]),t}(o.a.Component);l.a.render(o.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.da8cc4ab.chunk.js.map