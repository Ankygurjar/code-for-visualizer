(this.webpackJsonpsorting=this.webpackJsonpsorting||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){e.exports=a(33)},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a.n(l),s=(a(25),a(6)),o=a(2),c=(a(31),a(8)),m=a(11),u=a(14),h=a(12),g=a(13),d=a(4),v=a(9),b=function(){var e,t=document.getElementsByClassName("sortingButton"),a=document.getElementsByClassName("slider"),n=document.getElementsByTagName("option"),r=document.getElementById("select-selected"),l=Object(v.a)(t);try{for(l.s();!(e=l.n()).done;){var i=e.value;i.style.backgroundColor="red",i.style.color="black",i.disabled=!0}}catch(m){l.e(m)}finally{l.f()}var s=document.getElementsByTagName("select");a[1].disabled=!0,s[0].style.display="none",r.disabled=!0;var o,c=Object(v.a)(n);try{for(c.s();!(o=c.n()).done;){o.value.disabled=!0}}catch(m){c.e(m)}finally{c.f()}a.disabled=!0},p=function(){var e=document.getElementsByClassName("sortingButton"),t=document.getElementsByClassName("slider"),a=document.getElementsByTagName("option"),n=document.getElementById("select-selected");document.getElementsByTagName("select")[0].style.display="inline";var r,l=Object(v.a)(e);try{for(l.s();!(r=l.n()).done;){var i=r.value;i.style.backgroundColor="darkolivegreen",i.style.color="white",i.disabled=!1}}catch(c){l.e(c)}finally{l.f()}n.disabled=!1;var s,o=Object(v.a)(a);try{for(o.s();!(s=o.n()).done;){s.value.disabled=!1}}catch(c){o.e(c)}finally{o.f()}t[1].disabled=!1},f=function(e,t){for(var a=[],n=0;n<e.length;n++)for(var r=0;r<e[n].length;r++){r!==e[n].length-1?(a.push(e[n][r].comparison),a.push(e[n][r].comparison)):a.push(e[n][r])}for(var l=document.getElementsByClassName("array-bar"),i=function(e){if(a[e].swap){var n=Object(d.a)(a[e].swap,2),r=n[0],i=n[1],s=l[r].style,o=l[i].style;setTimeout((function(){s.backgroundColor="turquoise",o.backgroundColor="turquoise";var t=s.height;s.height=o.height,o.height=t;var n=l[r].innerHTML;l[r].innerHTML=l[i].innerHTML,l[i].innerHTML=n,e+1===a.length&&p()}),e*t)}else{var c=Object(d.a)(a[e],2),m=c[0],u=c[1],h=l[m].style,g=l[u].style,v=e%3===0?"red":"turquoise";setTimeout((function(){h.backgroundColor=v,g.backgroundColor=v}),e*t)}},s=0;s<a.length;s++)i(s)},E=a(3),y=a.n(E),N=a(5),k=function(){var e=Object(N.a)(y.a.mark((function e(t,a){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(),n=[],r=t.slice(),S(t,0,t.length-1,r,n),w(n,a,t.length);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function S(e,t,a,n,r){if(t!==a){var l=Math.floor((t+a)/2);S(n,t,l,e,r),S(n,l+1,a,e,r),function(e,t,a,n,r,l){var i=t,s=t,o=a+1;for(;s<=a&&o<=n;)l.push([s,o]),l.push([s,o]),r[s]<=r[o]?(l.push([i,r[s]]),e[i++]=r[s++]):(l.push([i,r[o]]),e[i++]=r[o++]);for(;s<=a;)l.push([s,s]),l.push([s,s]),l.push([i,r[s]]),e[i++]=r[s++];for(;o<=n;)l.push([o,o]),l.push([o,o]),l.push([i,r[o]]),e[i++]=r[o++]}(e,t,l,a,n,r)}}function w(e,t,a){for(var n=function(n){var r=document.getElementsByClassName("array-bar");if(n%3!==2){var l=Object(d.a)(e[n],2),i=l[0],s=l[1],o=r[i].style,c=r[s].style,m=n%3===0?"red":"turquoise";setTimeout((function(){o.backgroundColor=m,c.backgroundColor=m}),n*t)}else setTimeout((function(){var t=Object(d.a)(e[n],2),l=t[0],i=t[1],s=r[l].style;""!==r[l].innerHTML&&(r[l].innerHTML=i),s.height=function(e,t){if(t<=25)return 16*e;if(t<40)return 8*e;if(t>40&&t<50)return 5*e;if(t>50&&t<70)return 4*e;if(t>70&&t<90)return 4*e;if(t>90&&t<110)return 2*e;if(t>110&&t<130)return e;if(t>130&&t<150)return e;if(t>150&&t<300)return e}(i,a)+"px",n+1===e.length&&p()}),n*t)},r=0;r<e.length;r++)n(r)}var j=function(e,t){var a=[];!function e(t,a,n,r){if(a<n){var l=function(e,t,a,n){for(var r=e[a],l=t,i=t;i<a;i++)if(n.push({comparision:[i,a]}),n.push({comparision:[i,a]}),e[i]<=r){n.push({swap:[i,l]});var s=e[l];e[l]=e[i],e[i]=s,l++}n.push({comparision:[l,a]}),n.push({comparision:[l,a]}),n.push({swap:[l,a]});var o=e[l];return e[l]=e[a],e[a]=o,l}(t,a,n,r);e(t,a,l-1,r),e(t,l+1,n,r)}}(e,0,e.length-1,a),function(e,t){b();for(var a=function(a){var n=document.getElementsByClassName("array-bar");if(e[a].comparision){var r=Object(d.a)(e[a].comparision,2),l=r[0],i=r[1],s=n[l].style,o=n[i].style;setTimeout((function(){s.backgroundColor="red",o.backgroundColor="turquoise"}),setTimeout((function(){s.backgroundColor="turquoise",o.backgroundColor="red"}),a*t))}else{var c=Object(d.a)(e[a].swap,2),m=c[0],u=c[1],h=n[m].style,g=n[u].style;setTimeout((function(){var t=h.height;h.height=g.height,g.height=t;var r=n[m].innerHTML;n[m].innerHTML=n[u].innerHTML,n[u].innerHTML=r,g.backgroundColor="turquoise",h.backgroundColor="turquoise",a+1===e.length&&p()}),a*t)}},n=0;n<e.length;n++)a(n)}(a,t)};var C=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={array:[],sliderRange:10,minRange:10,maxRange:300,clicked:!1,algo:"",speedOfAlgo:3},n.getSliderValue=n.getSliderValue.bind(Object(u.a)(n)),n.selectionSort=n.selectionSort.bind(Object(u.a)(n)),n.insertionSorting=n.mergeSorting.bind(Object(u.a)(n)),n.returnHeight=n.returnHeight.bind(Object(u.a)(n)),n.returnWidth=n.returnWidth.bind(Object(u.a)(n)),n.bubbleSorting=n.bubbleSorting.bind(Object(u.a)(n)),n.changeSpeed=n.changeSpeed.bind(Object(u.a)(n)),n.quickSort=n.quickSort.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.generateNewArray()}},{key:"getSliderValue",value:function(e){e.preventDefault(),this.setState({sliderRange:e.target.value}),this.generateNewArray()}},{key:"changeSpeed",value:function(e){console.log("hello"),this.setState({speedOfAlgo:e.target.value})}},{key:"generateNewArray",value:function(){for(var e,t,a=[],n=0,r=2,l=1;l<=this.state.sliderRange;l++)e=this.state.minRange,t=this.state.sliderRange,n=Math.floor(1.65*(Math.random()*(t-e+1)+e)),-1!==a.indexOf(n)?(n=Math.round(Math.random()*r),a.push(n),r+=1):a.push(n);this.setState({array:a})}},{key:"selectionSort",value:function(){!function(e,t){b();for(var a=0,n=0,r=e.length,l=[],i=0,s=0;s<r-1;s++){a=s,i=s+1;var o=[],c={};for(i=s+1;i<r;i++)c={comparison:[s,i]},o.push(c),e[i]<e[a]&&(a=i);var m={swap:[a,s]};o.push(m),l.push(o),n=e[s],e[s]=e[a],e[a]=n}f(l,t)}(this.state.array,this.state.speedOfAlgo)}},{key:"mergeSorting",value:function(){k(this.state.array,this.state.speedOfAlgo)}},{key:"bubbleSorting",value:function(){!function(e,t){b();var a,n=[],r=Object(v.a)(e);try{for(r.s();!(a=r.n()).done;){var l=a.value;n.push(l[0].comparison),n.push(l[0].comparison),n.push(l[1].swap)}}catch(o){r.e(o)}finally{r.f()}for(var i=function(e){var a=document.getElementsByClassName("array-bar");if(e%3!==2){var r=Object(d.a)(n[e],2),l=r[0],i=r[1],s=a[l].style,o=a[i].style,c=e%3===0?"red":"turquoise";setTimeout((function(){s.backgroundColor=c,o.backgroundColor=c,s="turquoise"}),e*t)}else if("no swap"!==n[e]){var m=Object(d.a)(n[e],2),u=m[0],h=m[1],g=a[u].style,v=a[h].style;setTimeout((function(){var t=g.height;g.height=v.height,v.height=t;var r=a[u].innerHTML;a[u].innerHTML=a[h].innerHTML,a[h].innerHTML=r,e+1===n.length&&p()}),e*t)}},s=0;s<n.length;s++)i(s)}(function(e){for(var t=!1,a=[];!t;){t=!0;for(var n=0;n<e.length-1;n++){var r={comparison:[n,n+1]},l={};if(e[n]>e[n+1]){l={swap:[n,n+1]};var i=e[n+1];e[n+1]=e[n],e[n]=i,t=!1}else l={swap:"no swap"};a.push([r,l])}}return a}(this.state.array),this.state.speedOfAlgo)}},{key:"quickSort",value:function(){j(this.state.array,this.state.speedOfAlgo)}},{key:"returnHeight",value:function(e){return this.state.array.length<20?16*e:this.state.array.length<40?8*e:this.state.array.length>40&&this.state.array.length<50?5*e:this.state.array.length>50&&this.state.array.length<70||this.state.array.length>70&&this.state.array.length<90?4*e:this.state.array.length>90&&this.state.array.length<110?2*e:this.state.array.length>110&&this.state.array.length<130||this.state.array.length>130&&this.state.array.length<150||this.state.array.length>150&&this.state.array.length<300?e:void 0}},{key:"returnWidth",value:function(){return this.state.array.length<20?60:this.state.array.length<40?25:this.state.array.length>40&&this.state.array.length<50?20:this.state.array.length>50&&this.state.array.length<70?15:this.state.array.length>70&&this.state.array.length<90?11:this.state.array.length>90&&this.state.array.length<110?9:this.state.array.length>110&&this.state.array.length<130?7:this.state.array.length>130&&this.state.array.length<150?4:this.state.array.length>150&&this.state.array.length<300?2:void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h1",null,"Sorting Algorithms Visualizer")),r.a.createElement("div",{className:"array-container"},this.state.array.map((function(t,a){return r.a.createElement("div",{key:a,className:"array-bar",style:{height:"".concat(e.returnHeight(t),"px"),width:"".concat(e.returnWidth(),"px")}},e.state.array.length<30?t:"")}))),r.a.createElement("div",{className:"slider"},r.a.createElement("b",null,"Pick your Range"),r.a.createElement("input",{type:"range",min:this.state.minRange,max:this.state.maxRange,name:"rangePicker",className:"slider",onChange:this.getSliderValue}),r.a.createElement("button",{className:"sortingButton",onClick:function(){return e.generateNewArray()}}," Generate New Array "),r.a.createElement("button",{disabled:!!this.state.clicked,className:"sortingButton",value:"Selection Sort",onClick:function(){e.selectionSort()}},"Sort by Slection Sort"),r.a.createElement("button",{disabled:!!this.state.clicked,className:"sortingButton",value:"Merge Sort",onClick:function(){e.mergeSorting()}},"Sort by Merge Sort"),r.a.createElement("button",{disabled:!!this.state.clicked,className:"sortingButton",value:"Bubble Sort",onClick:function(){e.bubbleSorting()}},"Sort by Bubble Sort"),r.a.createElement("button",{disabled:!!this.state.clicked,className:"sortingButton",value:"Quick Sort",onClick:function(){e.quickSort()}},"Sort by Quick Sort"),r.a.createElement("label",null,"Speed : "),r.a.createElement("select",{onClick:function(t){return e.changeSpeed(t)},id:"select-selected",style:{width:"100px"}},r.a.createElement("option",{value:"3"},"Fast"),r.a.createElement("option",{value:"10"},"Medium"),r.a.createElement("option",{value:"30"},"Slow"))))}}]),a}(n.Component);var O=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"Index.html"},"Sorting Visualizer"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/visualizer"},"Visualizer")),r.a.createElement("li",null,r.a.createElement(s.b,{className:"nav-link",to:"/algorithm"},"Algorithms")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/contact"},"Contact Us"))))),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-5"},"Welcome to Sorting Visualizer"),r.a.createElement("p",null,"This application helps you understand sorting algorithms through visualization.")),r.a.createElement("footer",{className:"bg-light text-center text-lg-start"},r.a.createElement("div",{className:"text-center p-3"},"\xa9 2024 Sorting Visualizer |",r.a.createElement("a",{href:"https://www.linkedin.com/in/karandeep-kamboj-32308a231/"},"Karandeep Kamboj"))))}}]),a}(n.Component),T=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Sorting Visualizer"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/algorithm"},"Algorithms")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/visualizer"},"Visualizer")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/contact"},"Contact"))))),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-5"},"About Sorting Visualizer"),r.a.createElement("p",null,"Welcome to the Sorting Visualizer project! This project is designed to help users understand various sorting algorithms through visual representation. Sorting algorithms are fundamental in computer science and are often used to introduce key concepts in programming and algorithm design."),r.a.createElement("h2",null,"Purpose"),r.a.createElement("p",null,"The main purpose of this Sorting Visualizer is to provide an interactive and educational tool for learning and teaching sorting algorithms. By visualizing the steps of each algorithm, users can gain a deeper understanding of how they work and their efficiency."),r.a.createElement("h2",null,"Features"),r.a.createElement("ul",null,r.a.createElement("li",null,"Visualize various sorting algorithms, including Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, and Merge Sort."),r.a.createElement("li",null,"Generate new arrays to visualize sorting with different datasets."),r.a.createElement("li",null,"Adjust the speed of visualization for better understanding."),r.a.createElement("li",null,"Compare the performance of different sorting algorithms.")),r.a.createElement("h2",null,"How It Works"),r.a.createElement("p",null,"The Sorting Visualizer uses HTML, CSS, and JavaScript to create an interactive experience. Users can select a sorting algorithm, generate a new array, and watch the sorting process step by step. The visualization helps to illustrate the inner workings of each algorithm, making it easier to understand their behavior and performance."),r.a.createElement("h2",null,"Team"),r.a.createElement("p",null,"This project was developed by:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/karandeep-kamboj-32308a231/"},"Karandeep Kamboj")))),r.a.createElement("footer",{className:"bg-light text-center text-lg-start"},r.a.createElement("div",{className:"text-center p-3"},"\xa9 2024 Sorting Visualizer |",r.a.createElement("a",{href:"https://www.linkedin.com/in/karandeep-kamboj-32308a231/"},"Karandeep Kamboj"))))}}]),a}(n.Component),x=a(7),M=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(x.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),console.log("Form submitted:",n.state),n.setState({name:"",email:"",message:""})},n.state={name:"",email:"",message:""},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Sorting Visualizer"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/algorithm"},"Algorithms")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/visualizer"},"Visualizer")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/contact"},"Contact"))))),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-5"},"Contact Us"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"name",value:this.state.name,onChange:this.handleInputChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",value:this.state.email,onChange:this.handleInputChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"form-control",id:"message",name:"message",rows:"4",value:this.state.message,onChange:this.handleInputChange,required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))),r.a.createElement("footer",{className:"bg-light text-center text-lg-start"},r.a.createElement("div",{className:"text-center p-3"},"\xa9 2024 Sorting Visualizer |",r.a.createElement("a",{href:"https://www.linkedin.com/in/karandeep-kamboj-32308a231/"},"Karandeep Kamboj"))))}}]),a}(n.Component),z=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Sorting Visualizer"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/algorithm"},"Algorithms")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/visualizer"},"Visualizer")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/contact"},"Contact"))))),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-5"},"Sorting Algorithms"),r.a.createElement("h2",null,"Bubble Sort"),r.a.createElement("p",null,"Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted."),r.a.createElement("h2",null,"Selection Sort"),r.a.createElement("p",null,"Selection Sort divides the input list into two parts: a sorted sublist of items which is built up from left to right and a sublist of the remaining unsorted items. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right."),r.a.createElement("h2",null,"Insertion Sort"),r.a.createElement("p",null,"Insertion Sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort."),r.a.createElement("h2",null,"Quick Sort"),r.a.createElement("p",null,"Quick Sort is an efficient, in-place sorting algorithm that in practice is faster than merge sort and heapsort. However, it is not a stable sort, meaning that the relative order of equal sort items is not preserved."),r.a.createElement("h2",null,"Merge Sort"),r.a.createElement("p",null,"Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, meaning that the implementation preserves the input order of equal elements in the sorted output.")),r.a.createElement("footer",{className:"bg-light text-center text-lg-start"},r.a.createElement("div",{className:"text-center p-3"},"\xa9 2024 Sorting Visualizer |",r.a.createElement("a",{href:"https://www.linkedin.com/in/karandeep-kamboj-32308a231/"},"Karandeep Kamboj"))))}}]),a}(n.Component);var B=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",Component:O}),r.a.createElement(o.a,{path:"/visualizer",Component:C}),r.a.createElement(o.a,{path:"/about",Component:T}),r.a.createElement(o.a,{path:"/contact",Component:M}),r.a.createElement(o.a,{path:"/algorithm",Component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.0e964fc7.chunk.js.map