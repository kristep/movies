(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(90)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(32),l=t.n(r),i=t(4),s=t(2),o=t(1),m=(t(41),function(e){var a=e.onClick,t=e.children,n=e.className,r=e.ariaExpanded,l=e.ariaLabel;return c.a.createElement("button",{onClick:a,className:"button button--".concat(n),"aria-expanded":r,"aria-label":l},t)}),u=m,p=arguments,d=void 0,v=function(e){var a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var c=d,r=p,l=n&&!a;clearTimeout(a),a=setTimeout((function(){a=null,n||e.apply(c,r)}),t),l&&e.apply(c,r)}},f=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],l=function(){window.pageYOffset>400?(r(!0),console.log("scrolling")):r(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",v(l)),function(){window.removeEventListener("scroll",l)}}),[]),c.a.createElement(c.a.Fragment,null,t?c.a.createElement(u,{ariaLabel:"scroll to the top",className:"arrow-up",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},c.a.createElement("i",{className:"fas fa-arrow-up "})):"")},E=f,g=(t(42),function(e){var a=e.children;return c.a.createElement("main",{className:"content"},a,c.a.createElement(E,null))}),_=g,b=(t(43),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__overlay"},c.a.createElement(i.b,{to:"/"},c.a.createElement("span",{className:"header__title"},"Movies library"))))}),h=b,N=t(19),y=t.n(N),w=t(34),O=t(14),j=t.n(O),k=function(e,a){var t=Object(n.useState)([]),c=Object(o.a)(t,2),r=c[0],l=c[1],i=Object(n.useState)(!1),s=Object(o.a)(i,2),m=s[0],u=s[1],p=Object(n.useState)(null),d=Object(o.a)(p,2),v=d[0],f=d[1];return Object(n.useEffect)((function(){var a=j.a.CancelToken.source();return function(){var t=Object(w.a)(y.a.mark((function t(){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(!0),t.next=4,j.a.get(e,{cancelToken:a.token});case 4:n=t.sent,l(n.data),u(!1),t.next=17;break;case 9:if(t.prev=9,t.t0=t.catch(0),!j.a.isCancel(t.t0)){t.next=15;break}return t.abrupt("return");case 15:u(!1),f(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()(),function(){a.cancel()}}),[e,a]),{response:r,error:v,isLoading:m}},S=(t(67),function(){var e=k("https://api.themoviedb.org/3/genre/movie/list?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US","genres").response;return c.a.createElement("ul",{className:"genres-list"},(null===e||void 0===e?void 0:e.genres)?e.genres.map((function(e){return c.a.createElement("li",{key:e.id,className:"genres-list__genre"},c.a.createElement(i.b,{to:"/popular_by_genre/".concat(e.id,"/").concat(e.name),className:"genres-list__link"},e.name))})):null)}),x=S,C=function(e){var a=Object(n.useState)(e),t=Object(o.a)(a,2),c=t[0],r=t[1];return{value:c,setValue:r,reset:function(){return r("")},bind:{value:c,onChange:function(e){r(e.target.value)}}}},D=(t(68),function(){var e=C(""),a=e.value,t=e.bind,n=e.reset,r=Object(s.f)();return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(),a&&r.push("/search_results/".concat(a))},className:"search",role:"search"},c.a.createElement("label",{htmlFor:"search"},c.a.createElement("span",{className:"visually-hidden"},"Search")),c.a.createElement("input",Object.assign({type:"text",placeholder:"search by movie title"},t,{className:"search__input",id:"search"})),c.a.createElement("button",{type:"submit",className:"search__button"},c.a.createElement("span",{className:"visually-hidden"},"Submit Search"),c.a.createElement("i",{className:"fas fa-search"})))}),L=D;function T(e,a){Object(n.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&a(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[])}t(69);var P=function(e){var a=e.text,t=e.children,r=Object(n.useState)(!1),l=Object(o.a)(r,2),i=l[0],s=l[1],m=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.key&&s(!1)};return document.addEventListener("keydown",e,!1),function(){document.removeEventListener("keydown",e,!1)}}),[s]),T(m,(function(){return s(!1)})),c.a.createElement("div",{ref:m},c.a.createElement(u,{className:"navigation",onClick:function(){s(!i)},ariaExpanded:!0===i?"true":"false"},c.a.createElement("span",null,a)),c.a.createElement("div",{className:"dropdown ".concat(i&&"is-active")},c.a.createElement("ul",{className:"dropdown__content",onClick:function(){return s(!1)}},t)))},F=P,B=(t(70),function(){return c.a.createElement("nav",{className:"navigation"},c.a.createElement("ul",{className:"navigation__list"},c.a.createElement("li",{className:"navigation__list-item"},c.a.createElement(F,{text:"Popular by Genres"},c.a.createElement(x,null))),c.a.createElement("li",{className:"navigation__list-item"},c.a.createElement(i.b,{to:"/most_popular",className:"navigation__link"},"The most popular"))),c.a.createElement(L,null))}),I=B,R=function(){return(new Date).toISOString().split("T")[0]},V=function(){var e=new Date,a=new Date(e);return a.setDate(e.getDate()-7),a.toISOString().split("T")[0]},U=function(){return(new Date).getFullYear()},W=(t(71),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"footer__copyright"},"\xa9 ",U()," KriStep All Rights Reserved"))}),q=W,J=t(10),z=t.n(J);function Y(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function A(){var e=Object(n.useState)(Y()),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){function e(){c(Y())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}t(72);var G=function(e){var a=e.movie,t=a.title,n=a.id,r=a.vote_average,l=a.vote_count,s=a.poster_path,o=a.release_date;return c.a.createElement(i.b,{to:"/".concat(n),className:"movie-card"},s?c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(s),alt:"movie poster",className:"movie-card__image"}):c.a.createElement("div",{className:"movie-card__image"}),c.a.createElement("div",{className:"movie-card__description"},c.a.createElement("h3",{className:"movie-card__title"},t),r>0?c.a.createElement("p",{className:"movie-card__votes"},r," points (",l," votes)"):c.a.createElement("p",{className:"movie-card__votes"},"-- no votes yet --"),c.a.createElement("span",{className:"movie-card__released"},c.a.createElement("span",{className:"visually-hidden"},"Release date:")," ",o)))},H=G,K=(t(73),t(16),function(e){var a=Object(n.useState)(1),t=Object(o.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),m=s[0],p=s[1],d=Object(n.useState)(0),v=Object(o.a)(d,2),f=v[0],E=v[1],g=m.total_pages,_=A().width,b=e.url,h=e.text,N=(e.fullWidth,k("".concat(b).concat(r),r).response);Object(n.useEffect)((function(){p(N)}),[r,N]),Object(n.useEffect)((function(){E(_<1120&&_>852?3:_>1400?5:4)}),[_]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"new-movies"},c.a.createElement("h2",{className:"new-movies__title"},h),c.a.createElement("div",{className:"new-movies__items"},0!==m.length&&m.results.slice(0,f).map((function(e){return c.a.createElement(H,{movie:e,key:e.id})}))),g>1&&20===f&&c.a.createElement(z.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break",pageCount:g,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var a=e.selected;l(a+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})),20!=f&&c.a.createElement(u,{onClick:function(){return E(20)},className:"show-all"},c.a.createElement("span",null,"show all")))}),M=K,Q=(t(74),function(){var e="https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=".concat(V(),"&primary_release_date.lte=").concat(R(),"&sort_by=release_date.desc&page="),a="https://api.themoviedb.org/3/movie/upcoming?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=".concat(R(),"&page=");return c.a.createElement("div",{className:"home"},c.a.createElement("article",null,c.a.createElement(M,{url:e,text:"Just released movies:"})),c.a.createElement("article",{className:"home__section home__section--with-background"},c.a.createElement(M,{url:a,text:"Upcomming movies:",fullWidth:!0})))}),X=Q,Z=(t(75),function(){var e=Object(n.useState)(1),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)([]),i=Object(o.a)(l,2),m=i[0],u=i[1],p=Object(s.g)().query,d="https://api.themoviedb.org/3/search/movie?api_key=f1782698a1c04f301973e311a7876bdb&query=".concat(p,"&page=").concat(t),v=k(d,p),f=v.response,E=v.isLoading;Object(n.useEffect)((function(){u(f)}),[t,f]);var g=m.total_pages;return c.a.createElement("div",{className:"search-results"},E&&c.a.createElement("div",{className:"loader"}),c.a.createElement("h2",{className:"search-results__title"},"Search by: '",p,"'"),0!==m.length?c.a.createElement("span",{className:"search-results__subtitle"},m.total_results," movies found"):"No results found",c.a.createElement("div",{className:"search-results__list"},0!==m.length&&m.results.map((function(e){return c.a.createElement(H,{movie:e,key:e.id})}))),g>1&&c.a.createElement(z.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",pageCount:g,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var a=e.selected;r(a+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))}),$=Z,ee=(t(76),function(e){var a=e.genres,t=e.release_date,n=e.runtime,r=e.original_language,l=e.backdrop_path,i=a?a.map((function(e){return c.a.createElement("li",{key:e.id,className:"image-section__genres-item"},e.name)})):"";return c.a.createElement("div",{className:"image-section"},c.a.createElement("div",{className:"image-section__info"},c.a.createElement("ul",{className:"image-section__genres"},i),c.a.createElement("span",null,"release date: ",t),c.a.createElement("span",null,n>0?n+"min.":""," (",r,")")),l?c.a.createElement("img",{className:"image-section__image",src:"https://image.tmdb.org/t/p/w500".concat(l),alt:"backdrop"}):"")}),ae=ee,te=(t(77),function(e){var a=e.tagline,t=e.overview,n=e.budget,r=e.revenue,l=e.homepage,i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return c.a.createElement("div",{className:"movie-description"},c.a.createElement("div",null,c.a.createElement("p",{className:"movie-description__tagline"},a),c.a.createElement("p",{className:"movie-description__overview"},t)),c.a.createElement("div",null,n>0&&c.a.createElement("div",{className:"movie-description__budget"},c.a.createElement("p",{className:"movie-description__budget-row"},c.a.createElement("span",null,"Budget:"),c.a.createElement("span",null,i.format(n))),c.a.createElement("p",{className:"movie-description__budget-row"},c.a.createElement("span",null,"Revenue:"),c.a.createElement("span",null,i.format(r)))),l&&c.a.createElement("a",{className:"movie-description__link",href:"".concat(l),alt:"homepage"},"Visit movie homepage")))}),ne=te,ce=t(20),re=(t(78),function(e){var a=e.titleText,t=e.children;return c.a.createElement("li",{className:"crew-item"},c.a.createElement("h4",{className:"crew-item__title"},a)," ",t)}),le=re,ie=(t(79),function(e){var a=e.crew,t=e.countries,r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],s=l[1],m=Object(n.useState)([]),u=Object(o.a)(m,2),p=u[0],d=u[1],v=Object(n.useState)([]),f=Object(o.a)(v,2),E=f[0],g=f[1];return Object(n.useEffect)((function(){a.forEach((function(e){"Directing"===e.department?s(e.name):"Writing"===e.department?d((function(a){return[].concat(Object(ce.a)(a),[e])})):"Sound"===e.department&&g((function(a){return[].concat(Object(ce.a)(a),[e])}))}))}),[]),c.a.createElement("ul",{className:"crew-list"},i&&c.a.createElement(le,{titleText:"Directed by:"},i),0!==p.length&&c.a.createElement(le,{titleText:"Written by:"},c.a.createElement("ul",null,p.map((function(e){return c.a.createElement("li",{key:e.id},e.name," - ",e.job)})))),0!==E.length&&c.a.createElement(le,{titleText:"Sound:"},c.a.createElement("ul",null,E.map((function(e){return c.a.createElement("li",{key:e.id},e.name," - ",e.job)})))),0!==t.length&&c.a.createElement(le,{titleText:"Production countries:"},c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{key:e.iso_3166_1},e.iso_3166_1," - ",e.name)})))))}),se=ie,oe=t(35),me=(t(80),function(e){var a=e.actor;return c.a.createElement("li",{className:"cast-item"},c.a.createElement("div",{className:"cast-item__image-wrapper"},c.a.createElement("img",{className:"cast-item__image",src:"https://image.tmdb.org/t/p/original".concat(a.profile_path),alt:"actor"})),a.character&&c.a.createElement("span",{className:"cast-item__character"},a.character),c.a.createElement("span",{className:"cast-item__name"},a.name))}),ue=me,pe=(t(81),function(e){var a=e.cast;return Object(n.useEffect)((function(){new oe.a(".swiper-container",{slidesPerView:10,spaceBetween:50,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:6,spaceBetween:40},768:{slidesPerView:4,spaceBetween:30},640:{slidesPerView:3,spaceBetween:20},320:{slidesPerView:2,spaceBetween:10}}})}),[]),c.a.createElement(c.a.Fragment,null,0!==a.length&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"swiper-title"},"The main cast:"),c.a.createElement("div",{className:"swiper-container"},c.a.createElement("ul",{className:" swiper-wrapper "},a.map((function(e){return c.a.createElement(i.b,{className:"swiper-slide",to:"/actor/".concat(e.name),key:e.cast_id},c.a.createElement(ue,{actor:e}))}))),c.a.createElement("div",{className:"swiper-button-prev"}),c.a.createElement("div",{className:"swiper-button-next"}))))}),de=pe,ve=(t(82),function(e){var a=e.production_companies;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:"companies__title"},"Production companies:"),c.a.createElement("ul",{className:"companies__list"},a.map((function(e){return c.a.createElement("li",{key:e.id,className:"companies__item"},e.logo_path?c.a.createElement("img",{className:"companies__logo",src:"https://image.tmdb.org/t/p/w200".concat(e.logo_path),alt:"company logo"}):c.a.createElement("div",{className:"companies__instead-logo"},c.a.createElement("p",null,e.name)))}))))}),fe=ve,Ee=(t(83),t(84),function(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),r=t[0],l=t[1],i=e.details,s=i.title,m=i.backdrop_path,u=i.overview,p=i.genres,d=i.budget,v=i.revenue,f=i.release_date,E=i.runtime,g=i.homepage,_=i.production_companies,b=i.original_language,h=i.tagline,N=i.id,y=i.production_countries,w=k("https://api.themoviedb.org/3/movie/".concat(N,"/credits?api_key=f1782698a1c04f301973e311a7876bdb"),"people").response;return Object(n.useEffect)((function(){l(w)}),[N,w]),c.a.createElement("div",{className:"details"},c.a.createElement("h2",{className:"details__title"},s," ",c.a.createElement("span",{className:"details__year"},"(",f.substring(0,4),")")),c.a.createElement("div",{className:"details__image"},c.a.createElement(ae,{genres:p,release_date:f,runtime:E,original_language:b,backdrop_path:m})),c.a.createElement("div",{className:"details__description"},c.a.createElement(ne,{tagline:h,overview:u,budget:d,revenue:v,homepage:g})),0!==r.length&&c.a.createElement("div",{className:"details__cast"},c.a.createElement(de,{cast:r.cast})),0!==r.length&&c.a.createElement("div",{className:"details__crew"},c.a.createElement(se,{crew:r.crew,countries:y})),_&&c.a.createElement("ul",{className:"details__companies"},c.a.createElement(fe,{production_companies:_})))}),ge=Ee,_e=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(s.g)().movieId,i="https://api.themoviedb.org/3/movie/".concat(l,"?api_key=f1782698a1c04f301973e311a7876bdb"),m=k(i,l).response;return Object(n.useEffect)((function(){r(m)}),[m]),c.a.createElement(c.a.Fragment,null,0!==t.length?c.a.createElement(ge,{details:t}):"sorry, this movie has no details in our database")},be=_e,he=(t(85),function(e){var a=Object(n.useState)(1),t=Object(o.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),m=s[0],u=s[1],p=e.url,d=e.text,v=k("".concat(p).concat(r),r).response;Object(n.useEffect)((function(){u(v)}),[r,v]);var f=m.total_pages;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"popular-movies"},c.a.createElement("h2",{className:"popular-movies__header"},d),c.a.createElement("div",{className:"popular-movies__items"},0!==m.length&&m.results.map((function(e){return c.a.createElement(H,{movie:e,key:e.id})}))),f>1&&c.a.createElement(z.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break",pageCount:f,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:function(e){var a=e.selected;l(a+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))}),Ne=he,ye=function(){return c.a.createElement("main",{className:"popular-movies"},c.a.createElement(Ne,{url:"https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&sort_by=vote_average.desc&vote_count.gte=50&page=",text:"The most popular movies of all times:"}))},we=ye,Oe=function(){var e=Object(s.g)(),a=e.genreId,t=e.genreName,n="https://api.themoviedb.org/3/discover/movie?with_genres=".concat(a,"&api_key=f1782698a1c04f301973e311a7876bdb&sort_by=vote_average.desc&vote_count.gte=10&page=");return c.a.createElement("main",{className:"popular-movies"},c.a.createElement(Ne,{url:n,text:"The most popular ".concat(t," movies:")}))},je=Oe,ke=function(e){return 0===Object.keys(e).length&&e.constructor===Object||0===e.length},Se=(t(86),function(e){var a=e.biography,t=e.profile_path,n=e.birthday,r=e.deathday,l=e.place_of_birth,i=e.homepage;return c.a.createElement("div",{className:"actor-info"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/".concat(t),alt:"actor",className:"actor-info__image"}),c.a.createElement("div",{className:"actor-info__description"},n&&c.a.createElement("p",null,c.a.createElement("span",{className:"actor-info__description-tagline"},"Birth date:"," "),c.a.createElement("span",null,n)),null!==r&&c.a.createElement("p",null,c.a.createElement("span",{className:"actor-info__description-tagline"},"Death date:")," ",c.a.createElement("span",null,r)),l&&c.a.createElement("p",null,c.a.createElement("span",{className:"actor-info__description-tagline"},"Born in:")," ",c.a.createElement("span",null,l)),c.a.createElement("p",{className:"actor-info__biography"},a),i&&c.a.createElement("a",{href:i,className:"actor-info__link"},"Visit actor's homepage")))}),xe=Se,Ce=(t(87),function(e){var a=e.actorData,t=function(){if(a)return a[0].known_for}();return c.a.createElement("div",{className:"known-for"},t&&t.length>0&&t.map((function(e){return"movie"===e.media_type&&c.a.createElement(H,{movie:e,key:e.id})})))}),De=Ce,Le=(t(88),function(e){var a=Object(n.useState)({}),t=Object(o.a)(a,2),r=t[0],l=t[1],i=e.actorData,s="https://api.themoviedb.org/3/person/".concat(function(){if(i)return i[0].id}(),"?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US"),m=k(s,"byactorid").response;Object(n.useEffect)((function(){l(m)}),[m]);var u=r.id,p=r.name,d=r.biography,v=r.profile_path,f=r.birthday,E=r.deathday,g=r.place_of_birth,_=r.homepage;return c.a.createElement("div",{key:u,className:"actor"},c.a.createElement("h2",{className:"actor__name"},p),c.a.createElement(xe,{biography:d,profile_path:v,birthday:f,deathday:E,place_of_birth:g,homepage:_}),c.a.createElement("h3",{className:"actor__title"},p," is known for:"),c.a.createElement(De,{actorData:i}))}),Te=Le,Pe=function(){var e,a=Object(n.useState)({}),t=Object(o.a)(a,2),r=t[0],l=t[1],i=Object(s.g)().actorName,m="https://api.themoviedb.org/3/search/person?query=".concat(i,"&api_key=f1782698a1c04f301973e311a7876bdb&language=en-US"),u=k(m,i).response;return Object(n.useEffect)((function(){l(u)}),[u]),c.a.createElement(c.a.Fragment,null,!ke(r)&&0!==(null===(e=r.resulsts)||void 0===e?void 0:e.length)&&c.a.createElement(Te,{actorData:r.results}))},Fe=Pe;function Be(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null),c.a.createElement(I,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(_,null,c.a.createElement(X,null))),c.a.createElement(s.a,{exact:!0,path:"/most_popular"},c.a.createElement(_,null,c.a.createElement(we,null))),c.a.createElement(s.a,{exact:!0,path:"/:movieId"},c.a.createElement(_,null,c.a.createElement(be,null))),c.a.createElement(s.a,{exact:!0,path:"/actor/:actorName"},c.a.createElement(_,null,c.a.createElement(Fe,null))),c.a.createElement(s.a,{exact:!0,path:"/search_results/:query"},c.a.createElement(_,null,c.a.createElement($,null))),c.a.createElement(s.a,{exact:!0,path:"/popular_by_genre/:genreId/:genreName"},c.a.createElement(_,null,c.a.createElement(je,null)))),c.a.createElement(q,null))}var Ie=Be;t(89);l.a.render(c.a.createElement(i.a,{basename:"".concat("/movies","/")},c.a.createElement(Ie,null)),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.d83154a3.chunk.js.map