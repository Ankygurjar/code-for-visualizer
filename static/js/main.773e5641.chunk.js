(this.webpackJsonpsorting=this.webpackJsonpsorting||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),s=a.n(r),i=(a(6),a(3)),o=a(2);a(12);const c=()=>{const e=document.getElementsByClassName("sortingButton"),t=document.getElementsByClassName("slider");var a=document.getElementsByTagName("option");let n=document.getElementById("select-selected");for(let r of e)r.style.backgroundColor="red",r.style.color="black",r.disabled=!0;let l=document.getElementsByTagName("select");t[1].disabled=!0,l[0].style.display="none",n.disabled=!0;for(let r of a)r.disabled=!0;t.disabled=!0},m=()=>{const e=document.getElementsByClassName("sortingButton"),t=document.getElementsByClassName("slider");var a=document.getElementsByTagName("option");let n=document.getElementById("select-selected");document.getElementsByTagName("select")[0].style.display="inline";for(let l of e)l.style.backgroundColor="darkolivegreen",l.style.color="white",l.disabled=!1;n.disabled=!1;for(let l of a)l.disabled=!1;t[1].disabled=!1},h=(e,t)=>{let a=[];for(let l=0;l<e.length;l++)for(let t=0;t<e[l].length;t++){t!==e[l].length-1?(a.push(e[l][t].comparison),a.push(e[l][t].comparison)):a.push(e[l][t])}const n=document.getElementsByClassName("array-bar");for(let l=0;l<a.length;l++)if(a[l].swap){let[e,r]=a[l].swap,s=n[e].style,i=n[r].style;setTimeout(()=>{s.backgroundColor="turquoise",i.backgroundColor="turquoise";let t=s.height;s.height=i.height,i.height=t;let o=n[e].innerHTML;n[e].innerHTML=n[r].innerHTML,n[r].innerHTML=o,l+1===a.length&&m()},l*t)}else{let[e,r]=a[l],s=n[e].style,i=n[r].style;const o=l%3===0?"red":"turquoise";setTimeout(()=>{s.backgroundColor=o,i.backgroundColor=o},l*t)}},u=async(e,t)=>{c();let a=[];const n=e.slice();!function e(t,a,n,l,r){if(a===n)return;const s=Math.floor((a+n)/2);e(l,a,s,t,r),e(l,s+1,n,t,r),function(e,t,a,n,l,r){let s=t,i=t,o=a+1;for(;i<=a&&o<=n;)r.push([i,o]),r.push([i,o]),l[i]<=l[o]?(r.push([s,l[i]]),e[s++]=l[i++]):(r.push([s,l[o]]),e[s++]=l[o++]);for(;i<=a;)r.push([i,i]),r.push([i,i]),r.push([s,l[i]]),e[s++]=l[i++];for(;o<=n;)r.push([o,o]),r.push([o,o]),r.push([s,l[o]]),e[s++]=l[o++]}(t,a,s,n,l,r)}(e,0,e.length-1,n,a),function(e,t,a){for(let n=0;n<e.length;n++){const l=document.getElementsByClassName("array-bar");if(n%3!==2){let[a,r]=e[n];const s=l[a].style,i=l[r].style,o=n%3===0?"red":"turquoise";setTimeout(()=>{s.backgroundColor=o,i.backgroundColor=o},n*t)}else setTimeout(()=>{const[t,r]=e[n],s=l[t].style;""!==l[t].innerHTML&&(l[t].innerHTML=r),s.height=g(r,a)+"px",n+1===e.length&&m()},n*t)}}(a,t,e.length)};function g(e,t){return t<=25?16*e:t<40?8*e:t>40&&t<50?5*e:t>50&&t<70||t>70&&t<90?4*e:t>90&&t<110?2*e:t>110&&t<130||t>130&&t<150||t>150&&t<300?e:void 0}const d=(e,t)=>{let a=[];!function e(t,a,n,l){if(a<n){let r=function(e,t,a,n){let l=e[a],r=t;for(let i=t;i<a;i++)if(n.push({comparision:[i,a]}),n.push({comparision:[i,a]}),e[i]<=l){n.push({swap:[i,r]});let t=e[r];e[r]=e[i],e[i]=t,r++}n.push({comparision:[r,a]}),n.push({comparision:[r,a]}),n.push({swap:[r,a]});let s=e[r];return e[r]=e[a],e[a]=s,r}(t,a,n,l);e(t,a,r-1,l),e(t,r+1,n,l)}}(e,0,e.length-1,a),function(e,t){c();for(let a=0;a<e.length;a++){const n=document.getElementsByClassName("array-bar");if(e[a].comparision){let[l,r]=e[a].comparision;const s=n[l].style,i=n[r].style;setTimeout(()=>{s.backgroundColor="red",i.backgroundColor="turquoise"},setTimeout(()=>{s.backgroundColor="turquoise",i.backgroundColor="red"},a*t))}else{let[l,r]=e[a].swap;const s=n[l].style,i=n[r].style;setTimeout(()=>{let t=s.height;s.height=i.height,i.height=t;let o=n[l].innerHTML;n[l].innerHTML=n[r].innerHTML,n[r].innerHTML=o,i.backgroundColor="turquoise",s.backgroundColor="turquoise",a+1===e.length&&m()},a*t)}}}(a,t)};class p extends n.Component{constructor(e){super(e),this.state={array:[],sliderRange:10,minRange:10,maxRange:300,clicked:!1,algo:"",speedOfAlgo:3},this.getSliderValue=this.getSliderValue.bind(this),this.selectionSort=this.selectionSort.bind(this),this.insertionSorting=this.mergeSorting.bind(this),this.returnHeight=this.returnHeight.bind(this),this.returnWidth=this.returnWidth.bind(this),this.bubbleSorting=this.bubbleSorting.bind(this),this.changeSpeed=this.changeSpeed.bind(this),this.quickSort=this.quickSort.bind(this)}componentDidMount(){this.generateNewArray()}getSliderValue(e){e.preventDefault(),this.setState({sliderRange:e.target.value}),this.generateNewArray()}changeSpeed(e){console.log("hello"),this.setState({speedOfAlgo:e.target.value})}generateNewArray(){let e=[],t=0,a=2;for(let r=1;r<=this.state.sliderRange;r++)n=this.state.minRange,l=this.state.sliderRange,t=Math.floor(1.65*(Math.random()*(l-n+1)+n)),-1!==e.indexOf(t)?(t=Math.round(Math.random()*a),e.push(t),a+=1):e.push(t);var n,l;this.setState({array:e})}selectionSort(){((e,t)=>{c();let a=0,n=0,l=e.length,r=[],s=0;for(var i=0;i<l-1;i++){a=i,s=i+1;let t=[],o={};for(s=i+1;s<l;s++)o={comparison:[i,s]},t.push(o),e[s]<e[a]&&(a=s);let c={swap:[a,i]};t.push(c),r.push(t),n=e[i],e[i]=e[a],e[a]=n}h(r,t)})(this.state.array,this.state.speedOfAlgo)}mergeSorting(){u(this.state.array,this.state.speedOfAlgo)}bubbleSorting(){((e,t)=>{c();let a=[];for(let n of e)a.push(n[0].comparison),a.push(n[0].comparison),a.push(n[1].swap);for(let n=0;n<a.length;n++){const e=document.getElementsByClassName("array-bar");if(n%3!==2){let[l,r]=a[n],s=e[l].style,i=e[r].style;const o=n%3===0?"red":"turquoise";setTimeout(()=>{s.backgroundColor=o,i.backgroundColor=o,s="turquoise"},n*t)}else if("no swap"!==a[n]){let[l,r]=a[n],s=e[l].style,i=e[r].style;setTimeout(()=>{let t=s.height;s.height=i.height,i.height=t;let o=e[l].innerHTML;e[l].innerHTML=e[r].innerHTML,e[r].innerHTML=o,n+1===a.length&&m()},n*t)}}})((e=>{let t=!1,a=[];for(;!t;){t=!0;for(let n=0;n<e.length-1;n++){let l={comparison:[n,n+1]},r={};if(e[n]>e[n+1]){r={swap:[n,n+1]};let a=e[n+1];e[n+1]=e[n],e[n]=a,t=!1}else r={swap:"no swap"};a.push([l,r])}}return a})(this.state.array),this.state.speedOfAlgo)}quickSort(){d(this.state.array,this.state.speedOfAlgo)}returnHeight(e){return this.state.array.length<20?16*e:this.state.array.length<40?8*e:this.state.array.length>40&&this.state.array.length<50?5*e:this.state.array.length>50&&this.state.array.length<70||this.state.array.length>70&&this.state.array.length<90?4*e:this.state.array.length>90&&this.state.array.length<110?2*e:this.state.array.length>110&&this.state.array.length<130||this.state.array.length>130&&this.state.array.length<150||this.state.array.length>150&&this.state.array.length<300?e:void 0}returnWidth(){return this.state.array.length<20?60:this.state.array.length<40?25:this.state.array.length>40&&this.state.array.length<50?20:this.state.array.length>50&&this.state.array.length<70?15:this.state.array.length>70&&this.state.array.length<90?11:this.state.array.length>90&&this.state.array.length<110?9:this.state.array.length>110&&this.state.array.length<130?7:this.state.array.length>130&&this.state.array.length<150?4:this.state.array.length>150&&this.state.array.length<300?2:void 0}render(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h1",null,"Sorting Algorithms Visualizer")),l.a.createElement("div",{className:"array-container"},this.state.array.map((e,t)=>l.a.createElement("div",{key:t,className:"array-bar",style:{height:"".concat(this.returnHeight(e),"px"),width:"".concat(this.returnWidth(),"px")}},this.state.array.length<30?e:""))),l.a.createElement("div",{className:"slider"},l.a.createElement("b",null,"Pick your Range"),l.a.createElement("input",{type:"range",min:this.state.minRange,max:this.state.maxRange,name:"rangePicker",className:"slider",onChange:this.getSliderValue}),l.a.createElement("button",{className:"sortingButton",onClick:()=>this.generateNewArray()}," Generate New Array "),l.a.createElement("button",{disabled:!!this.state.clicked,className:"sortingButton",value:"Selection Sort",onClick:()=>{this.selectionSort()}},"Sort by Slection Sort"),l.a.createElement("button",{disabled:!!this.state.clicked,className:"sortingButton",value:"Merge Sort",onClick:()=>{this.mergeSorting()}},"Sort by Merge Sort"),l.a.createElement("button",{disabled:!!this.state.clicked,className:"sortingButton",value:"Bubble Sort",onClick:()=>{this.bubbleSorting()}},"Sort by Bubble Sort"),l.a.createElement("button",{disabled:!!this.state.clicked,className:"sortingButton",value:"Quick Sort",onClick:()=>{this.quickSort()}},"Sort by Quick Sort"),l.a.createElement("label",null,"Speed : "),l.a.createElement("select",{onClick:e=>this.changeSpeed(e),id:"select-selected",style:{width:"100px"}},l.a.createElement("option",{value:"3"},"Fast"),l.a.createElement("option",{value:"10"},"Medium"),l.a.createElement("option",{value:"30"},"Slow"))))}}class b extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"Index.html"},"Sorting Visualizer"),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/visualizer"},"Visualizer")),l.a.createElement("li",null,l.a.createElement(i.b,{className:"nav-link",to:"/algorithm"},"Algorithms")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/contact"},"Contact Us"))))),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"mt-5"},"Welcome to Sorting Visualizer"),l.a.createElement("p",null,"This application helps you understand sorting algorithms through visualization.")),l.a.createElement("footer",{className:"bg-light text-center text-lg-start"},l.a.createElement("div",{className:"text-center p-3"},"\xa9 2024 Sorting Visualizer |",l.a.createElement("a",{href:"https://www.linkedin.com/in/karandeep-kamboj-32308a231/"},"Karandeep Kamboj"))))}}class E extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Sorting Visualizer"),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/algorithm"},"Algorithms")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/visualizer"},"Visualizer")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/contact"},"Contact"))))),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"mt-5"},"About Sorting Visualizer"),l.a.createElement("p",null,"Welcome to the Sorting Visualizer project! This project is designed to help users understand various sorting algorithms through visual representation. Sorting algorithms are fundamental in computer science and are often used to introduce key concepts in programming and algorithm design."),l.a.createElement("h2",null,"Purpose"),l.a.createElement("p",null,"The main purpose of this Sorting Visualizer is to provide an interactive and educational tool for learning and teaching sorting algorithms. By visualizing the steps of each algorithm, users can gain a deeper understanding of how they work and their efficiency."),l.a.createElement("h2",null,"Features"),l.a.createElement("ul",null,l.a.createElement("li",null,"Visualize various sorting algorithms, including Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, and Merge Sort."),l.a.createElement("li",null,"Generate new arrays to visualize sorting with different datasets."),l.a.createElement("li",null,"Adjust the speed of visualization for better understanding."),l.a.createElement("li",null,"Compare the performance of different sorting algorithms.")),l.a.createElement("h2",null,"How It Works"),l.a.createElement("p",null,"The Sorting Visualizer uses HTML, CSS, and JavaScript to create an interactive experience. Users can select a sorting algorithm, generate a new array, and watch the sorting process step by step. The visualization helps to illustrate the inner workings of each algorithm, making it easier to understand their behavior and performance."),l.a.createElement("h2",null,"Team"),l.a.createElement("p",null,"This project was developed by:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/karandeep-kamboj-32308a231/"},"Karandeep Kamboj")))),l.a.createElement("footer",{className:"bg-light text-center text-lg-start"},l.a.createElement("div",{className:"text-center p-3"},"\xa9 2024 Sorting Visualizer |",l.a.createElement("a",{href:"https://www.linkedin.com/in/karandeep-kamboj-32308a231/"},"Karandeep Kamboj"))))}}var v=E;class y extends n.Component{constructor(e){super(e),this.handleInputChange=e=>{const{name:t,value:a}=e.target;this.setState({[t]:a})},this.handleSubmit=e=>{e.preventDefault(),console.log("Form submitted:",this.state),this.setState({name:"",email:"",message:""})},this.state={name:"",email:"",message:""}}render(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Sorting Visualizer"),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/algorithm"},"Algorithms")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/visualizer"},"Visualizer")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/contact"},"Contact"))))),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"mt-5"},"Contact Us"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"name",value:this.state.name,onChange:this.handleInputChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",value:this.state.email,onChange:this.handleInputChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:"form-control",id:"message",name:"message",rows:"4",value:this.state.message,onChange:this.handleInputChange,required:!0})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))),l.a.createElement("footer",{className:"bg-light text-center text-lg-start"},l.a.createElement("div",{className:"text-center p-3"},"\xa9 2024 Sorting Visualizer |",l.a.createElement("a",{href:"https://www.linkedin.com/in/karandeep-kamboj-32308a231/"},"Karandeep Kamboj"))))}}var f=y;class N extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Sorting Visualizer"),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/algorithm"},"Algorithms")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/visualizer"},"Visualizer")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/contact"},"Contact"))))),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"mt-5"},"Sorting Algorithms"),l.a.createElement("h2",null,"Bubble Sort"),l.a.createElement("p",null,"Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted."),l.a.createElement("h2",null,"Selection Sort"),l.a.createElement("p",null,"Selection Sort divides the input list into two parts: a sorted sublist of items which is built up from left to right and a sublist of the remaining unsorted items. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right."),l.a.createElement("h2",null,"Insertion Sort"),l.a.createElement("p",null,"Insertion Sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort."),l.a.createElement("h2",null,"Quick Sort"),l.a.createElement("p",null,"Quick Sort is an efficient, in-place sorting algorithm that in practice is faster than merge sort and heapsort. However, it is not a stable sort, meaning that the relative order of equal sort items is not preserved."),l.a.createElement("h2",null,"Merge Sort"),l.a.createElement("p",null,"Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, meaning that the implementation preserves the input order of equal elements in the sorted output.")),l.a.createElement("footer",{className:"bg-light text-center text-lg-start"},l.a.createElement("div",{className:"text-center p-3"},"\xa9 2024 Sorting Visualizer |",l.a.createElement("a",{href:"https://www.linkedin.com/in/karandeep-kamboj-32308a231/"},"Karandeep Kamboj"))))}}var S=N;var k=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",Component:b}),l.a.createElement(o.a,{path:"/visualizer",Component:p}),l.a.createElement(o.a,{path:"/about",Component:v}),l.a.createElement(o.a,{path:"/contact",Component:f}),l.a.createElement(o.a,{path:"/algorithm",Component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})},6:function(e,t,a){},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.773e5641.chunk.js.map