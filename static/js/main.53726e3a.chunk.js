(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(90)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(32),l=t.n(r),s=t(4),i=t(2),o=(t(41),function(e){var a=e.children;return c.a.createElement("main",{className:"content"},a)}),m=(t(42),function(){return c.a.createElement("header",{className:"header"},c.a.createElement(s.b,{to:"/"},c.a.createElement("div",{className:"header__overlay"},c.a.createElement("span",{className:"header__title"},"Movies library"))))}),u=t(19),p=t.n(u),d=t(34),v=t(1),g=t(14),E=t.n(g),_=function(e,a){var t=Object(n.useState)([]),c=Object(v.a)(t,2),r=c[0],l=c[1],s=Object(n.useState)(!1),i=Object(v.a)(s,2),o=i[0],m=i[1],u=Object(n.useState)(null),g=Object(v.a)(u,2),_=g[0],f=g[1];return Object(n.useEffect)((function(){var a=E.a.CancelToken.source();return function(){var t=Object(d.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,E.a.get(e,{cancelToken:a.token});case 4:n=t.sent,l(n.data),m(!1),t.next=17;break;case 9:if(t.prev=9,t.t0=t.catch(0),!E.a.isCancel(t.t0)){t.next=15;break}return t.abrupt("return");case 15:m(!1),f(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()(),function(){a.cancel()}}),[e,a]),{response:r,error:_,isLoading:o}},f=(t(66),function(){var e=_("https://api.themoviedb.org/3/genre/movie/list?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US","genres").response;return c.a.createElement("ul",{className:"genres-list"},(null===e||void 0===e?void 0:e.genres)?e.genres.map((function(e){return c.a.createElement("li",{key:e.id,className:"genres-list__genre"},c.a.createElement(s.b,{to:"/popular_by_genre/".concat(e.id,"/").concat(e.name),className:"genres-list__link"},e.name))})):null)}),b=(t(67),function(){var e=function(e){var a=Object(n.useState)(e),t=Object(v.a)(a,2),c=t[0],r=t[1];return{value:c,setValue:r,reset:function(){return r("")},bind:{value:c,onChange:function(e){r(e.target.value)}}}}(""),a=e.value,t=e.bind,r=e.reset,l=Object(i.f)();return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(),a&&l.push("/search_results/".concat(a))},className:"search",role:"search"},c.a.createElement("label",{htmlFor:"search"},c.a.createElement("span",{className:"visually-hidden"},"Search")),c.a.createElement("input",Object.assign({type:"text",placeholder:"search by movie title"},t,{className:"search__input",id:"search"})),c.a.createElement("button",{type:"submit",className:"search__button"},c.a.createElement("span",{className:"visually-hidden"},"Submit Search"),c.a.createElement("i",{className:"fas fa-search"})))});t(68);var h=function(e){var a=e.onClick,t=e.text,n=e.className;return c.a.createElement("button",{onClick:a,className:"button button--".concat(n)},t)},N=(t(69),function(e){var a,t,r=e.text,l=e.children,s=Object(n.useState)(!1),i=Object(v.a)(s,2),o=i[0],m=i[1],u=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.key&&m(!1)};return document.addEventListener("keydown",e,!1),function(){document.removeEventListener("keydown",e,!1)}}),[m]),a=u,t=function(){return m(!1)},Object(n.useEffect)((function(){var e=function(e){a.current&&!a.current.contains(e.target)&&t(e)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),c.a.createElement("div",{ref:u},c.a.createElement(h,{text:r,className:"navigation",onClick:function(){m(!o)}}),c.a.createElement("div",{className:"dropdown ".concat(o&&"is-active")},c.a.createElement("ul",{className:"dropdown__content",onClick:function(){return m(!1)}},l)))}),y=(t(70),function(){return c.a.createElement("nav",{className:"navigation"},c.a.createElement("ul",{className:"navigation__list"},c.a.createElement("li",{className:"navigation__list-item"},c.a.createElement(N,{text:"Popular by Genres"},c.a.createElement(f,null))),c.a.createElement("li",{className:"navigation__list-item"},c.a.createElement(s.b,{to:"/most_popular",className:"navigation__link"},"The most popular"))),c.a.createElement(b,null))}),w=(t(71),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"footer__copyright"},"\xa9 ",(new Date).getFullYear()," KriStep All Rights Reserved"),c.a.createElement("i",{className:"fas fa-arrow-up footer__arrow-up",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}))}),j=function(){return(new Date).toISOString().split("T")[0]},O=t(10),k=t.n(O),x=(t(72),function(e){var a=e.movie,t=a.title,n=a.id,r=a.vote_average,l=a.vote_count,i=a.poster_path,o=a.release_date;return c.a.createElement(s.b,{to:"/".concat(n),className:"movie-card"},i?c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(i),alt:"movie poster",className:"movie-card__image"}):c.a.createElement("img",{className:"movie-card__image",alt:"this movie has no poster"}),c.a.createElement("div",{className:"movie-card__description"},c.a.createElement("h3",{className:"movie-card__title"},t),r>0?c.a.createElement("p",{className:"movie-card__votes"},r," points (",l," votes)"):c.a.createElement("p",{className:"movie-card__votes"},"-- no votes yet --"),c.a.createElement("span",{className:"movie-card__released"},o)))}),S=(t(73),t(16),function(e){var a=Object(n.useState)(1),t=Object(v.a)(a,2),r=t[0],l=t[1],s=Object(n.useState)(!0),i=Object(v.a)(s,2),o=i[0],m=i[1],u=Object(n.useState)([]),p=Object(v.a)(u,2),d=p[0],g=p[1],E=e.url,f=e.text,b=_("".concat(E).concat(r),r).response,N=d.total_pages;Object(n.useEffect)((function(){g(b)}),[r,b]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"new-movies ".concat(o&&"new-movies--collapsed")},c.a.createElement("h2",{className:"new-movies__title"},f),c.a.createElement("div",{className:"new-movies__items"},0!==d.length&&d.results.map((function(e){return c.a.createElement(x,{movie:e,key:e.id})}))),N>1&&c.a.createElement(k.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break",pageCount:N,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var a=e.selected;l(a+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})),c.a.createElement(h,{onClick:function(e){return a=e,m(!1),void(a.target.style.display="none");var a},text:"show all",className:"show-all"}))}),C=(t(74),function(){var e="https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=".concat(function(){var e=new Date,a=new Date(e);return a.setDate(e.getDate()-7),a.toISOString().split("T")[0]}(),"&primary_release_date.lte=").concat(j(),"&sort_by=release_date.desc&page="),a="https://api.themoviedb.org/3/movie/upcoming?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=".concat(j(),"&page=");return c.a.createElement("div",{className:"home"},c.a.createElement("article",null,c.a.createElement(S,{url:e,text:"Just released movies:"})),c.a.createElement("article",{className:"home__section home__section--with-background"},c.a.createElement(S,{url:a,text:"Upcomming movies:"})))}),D=(t(75),function(){var e=Object(n.useState)(1),a=Object(v.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)([]),s=Object(v.a)(l,2),o=s[0],m=s[1],u=Object(i.g)().query,p="https://api.themoviedb.org/3/search/movie?api_key=f1782698a1c04f301973e311a7876bdb&query=".concat(u,"&page=").concat(t),d=_(p,u),g=d.response,E=d.isLoading;Object(n.useEffect)((function(){m(g)}),[t,g]);var f=o.total_pages;return c.a.createElement("div",{className:"search-results"},E&&c.a.createElement("div",{className:"loader"}),c.a.createElement("h2",{className:"search-results__title"},"Search by: '",u,"'"),0!==o.length?c.a.createElement("span",{className:"search-results__subtitle"},o.total_results," movies found"):"No results found",c.a.createElement("div",{className:"search-results__list"},0!==o.length&&o.results.map((function(e){return c.a.createElement(x,{movie:e,key:e.id})}))),f>1&&c.a.createElement(k.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",pageCount:f,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var a=e.selected;r(a+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))}),L=(t(76),function(e){var a=e.genres,t=e.release_date,n=e.runtime,r=e.original_language,l=e.backdrop_path,s=a?a.map((function(e){return c.a.createElement("li",{key:e.id,className:"image-section__genres-item"},e.name)})):"";return c.a.createElement("div",{className:"image-section"},c.a.createElement("div",{className:"image-section__info"},c.a.createElement("ul",{className:"image-section__genres"},s),c.a.createElement("span",null,"release date: ",t),c.a.createElement("span",null,n>0?n+"min.":""," (",r,")")),l?c.a.createElement("img",{className:"image-section__image",src:"https://image.tmdb.org/t/p/w500".concat(l),alt:"backdrop"}):"")}),T=(t(77),function(e){var a=e.tagline,t=e.overview,n=e.budget,r=e.revenue,l=e.homepage,s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return c.a.createElement("div",{className:"movie-description"},c.a.createElement("div",null,c.a.createElement("p",{className:"movie-description__tagline"},a),c.a.createElement("p",{className:"movie-description__overview"},t)),c.a.createElement("div",null,n>0&&c.a.createElement("div",{className:"movie-description__budget"},c.a.createElement("p",{className:"movie-description__budget-row"},c.a.createElement("span",null,"Budget:"),c.a.createElement("span",null,s.format(n))),c.a.createElement("p",{className:"movie-description__budget-row"},c.a.createElement("span",null,"Revenue:"),c.a.createElement("span",null,s.format(r)))),l&&c.a.createElement("a",{className:"movie-description__link",href:"".concat(l),alt:"homepage"},"Visit movie homepage")))}),P=t(20),F=(t(78),function(e){var a=e.titleText,t=e.children;return c.a.createElement("li",{className:"crew-item"},c.a.createElement("h4",{className:"crew-item__title"},a)," ",t)}),B=(t(79),function(e){var a=e.crew,t=e.countries,r=Object(n.useState)(""),l=Object(v.a)(r,2),s=l[0],i=l[1],o=Object(n.useState)([]),m=Object(v.a)(o,2),u=m[0],p=m[1],d=Object(n.useState)([]),g=Object(v.a)(d,2),E=g[0],_=g[1];return Object(n.useEffect)((function(){a.forEach((function(e){"Directing"===e.department?i(e.name):"Writing"===e.department?p((function(a){return[].concat(Object(P.a)(a),[e])})):"Sound"===e.department&&_((function(a){return[].concat(Object(P.a)(a),[e])}))}))}),[]),c.a.createElement("ul",{className:"crew-list"},s&&c.a.createElement(F,{titleText:"Directed by:"},s),0!==u.length&&c.a.createElement(F,{titleText:"Written by:"},c.a.createElement("ul",null,u.map((function(e){return c.a.createElement("li",{key:e.id},e.name," - ",e.job)})))),0!==E.length&&c.a.createElement(F,{titleText:"Sound:"},c.a.createElement("ul",null,E.map((function(e){return c.a.createElement("li",{key:e.id},e.name," - ",e.job)})))),0!==t.length&&c.a.createElement(F,{titleText:"Production countries:"},c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{key:e.iso_3166_1},e.iso_3166_1," - ",e.name)})))))}),I=t(35),V=(t(80),function(e){var a=e.actor;return c.a.createElement("li",{className:"cast-item"},c.a.createElement("div",{className:"cast-item__image-wrapper"},c.a.createElement("img",{className:"cast-item__image",src:"https://image.tmdb.org/t/p/original".concat(a.profile_path),alt:"actor"})),a.character&&c.a.createElement("span",{className:"cast-item__character"},a.character),c.a.createElement("span",{className:"cast-item__name"},a.name))}),R=(t(81),function(e){var a=e.cast;return Object(n.useEffect)((function(){new I.a(".swiper-container",{slidesPerView:10,spaceBetween:50,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:6,spaceBetween:40},768:{slidesPerView:4,spaceBetween:30},640:{slidesPerView:3,spaceBetween:20},320:{slidesPerView:2,spaceBetween:10}}})}),[]),c.a.createElement(c.a.Fragment,null,0!==a.length&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"swiper-title"},"The main cast:"),c.a.createElement("div",{className:"swiper-container"},c.a.createElement("ul",{className:" swiper-wrapper "},a.map((function(e){return c.a.createElement(s.b,{className:"swiper-slide",to:"/actor/".concat(e.name),key:e.cast_id},c.a.createElement(V,{actor:e}))}))),c.a.createElement("div",{className:"swiper-button-prev"}),c.a.createElement("div",{className:"swiper-button-next"}))))}),U=(t(82),function(e){var a=e.production_companies;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:"companies__title"},"Production companies:"),c.a.createElement("ul",{className:"companies__list"},a.map((function(e){return c.a.createElement("li",{key:e.id,className:"companies__item"},e.logo_path?c.a.createElement("img",{className:"companies__logo",src:"https://image.tmdb.org/t/p/w200".concat(e.logo_path),alt:"company logo"}):c.a.createElement("div",{className:"companies__instead-logo"},c.a.createElement("p",null,e.name)))}))))}),q=(t(83),t(84),function(e){var a=Object(n.useState)([]),t=Object(v.a)(a,2),r=t[0],l=t[1],s=e.details,i=s.title,o=s.backdrop_path,m=s.overview,u=s.genres,p=s.budget,d=s.revenue,g=s.release_date,E=s.runtime,f=s.homepage,b=s.production_companies,h=s.original_language,N=s.tagline,y=s.id,w=s.production_countries,j=_("https://api.themoviedb.org/3/movie/".concat(y,"/credits?api_key=f1782698a1c04f301973e311a7876bdb"),"people").response;return Object(n.useEffect)((function(){l(j)}),[y,j]),c.a.createElement("div",{className:"details"},c.a.createElement("h2",{className:"details__title"},i," ",c.a.createElement("span",{className:"details__year"},"(",g.substring(0,4),")")),c.a.createElement("div",{className:"details__image"},c.a.createElement(L,{genres:u,release_date:g,runtime:E,original_language:h,backdrop_path:o})),c.a.createElement("div",{className:"details__description"},c.a.createElement(T,{tagline:N,overview:m,budget:p,revenue:d,homepage:f})),0!==r.length&&c.a.createElement("div",{className:"details__cast"},c.a.createElement(R,{cast:r.cast})),0!==r.length&&c.a.createElement("div",{className:"details__crew"},c.a.createElement(B,{crew:r.crew,countries:w})),b&&c.a.createElement("ul",{className:"details__companies"},c.a.createElement(U,{production_companies:b})))}),J=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],r=a[1],l=Object(i.g)().movieId,s="https://api.themoviedb.org/3/movie/".concat(l,"?api_key=f1782698a1c04f301973e311a7876bdb"),o=_(s,l).response;return Object(n.useEffect)((function(){r(o)}),[o]),c.a.createElement(c.a.Fragment,null,0!==t.length?c.a.createElement(q,{details:t}):"sorry, this movie has no details in our database")},W=(t(85),function(e){var a=Object(n.useState)(1),t=Object(v.a)(a,2),r=t[0],l=t[1],s=Object(n.useState)([]),i=Object(v.a)(s,2),o=i[0],m=i[1],u=e.url,p=e.text,d=_("".concat(u).concat(r),r).response;Object(n.useEffect)((function(){m(d)}),[r,d]);var g=o.total_pages;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"popular-movies"},c.a.createElement("h2",{className:"popular-movies__header"},p),c.a.createElement("div",{className:"popular-movies__items"},0!==o.length&&o.results.map((function(e){return c.a.createElement(x,{movie:e,key:e.id})}))),g>1&&c.a.createElement(k.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break",pageCount:g,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:function(e){var a=e.selected;l(a+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))}),A=function(){return c.a.createElement("main",{className:"popular-movies"},c.a.createElement(W,{url:"https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&sort_by=vote_average.desc&vote_count.gte=50&page=",text:"The most popular movies of all times:"}))},G=function(){var e=Object(i.g)(),a=e.genreId,t=e.genreName,n="https://api.themoviedb.org/3/discover/movie?with_genres=".concat(a,"&api_key=f1782698a1c04f301973e311a7876bdb&sort_by=vote_average.desc&vote_count.gte=10&page=");return c.a.createElement("main",{className:"popular-movies"},c.a.createElement(W,{url:n,text:"The most popular ".concat(t," movies:")}))},K=(t(86),function(e){var a=e.biography,t=e.profile_path,n=e.birthday,r=e.deathday,l=e.place_of_birth,s=e.homepage;return c.a.createElement("div",{className:"actor-info"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/".concat(t),alt:"actor",className:"actor-info__image"}),c.a.createElement("div",{className:"actor-info__description"},n&&c.a.createElement("p",null,c.a.createElement("span",{className:"actor-info__description-tagline"},"Birth date:"," "),c.a.createElement("span",null,n)),null!==r&&c.a.createElement("p",null,c.a.createElement("span",{className:"actor-info__description-tagline"},"Death date:")," ",c.a.createElement("span",null,r)),l&&c.a.createElement("p",null,c.a.createElement("span",{className:"actor-info__description-tagline"},"Born in:")," ",c.a.createElement("span",null,l)),c.a.createElement("p",{className:"actor-info__biography"},a),s&&c.a.createElement("a",{href:s,className:"actor-info__link"},"Visit actor's homepage")))}),M=(t(87),function(e){var a=e.actorData,t=function(){if(a)return a[0].known_for}();return c.a.createElement("div",{className:"known-for"},t&&t.length>0&&t.map((function(e){return"movie"===e.media_type&&c.a.createElement(x,{movie:e,key:e.id})})))}),Y=(t(88),function(e){var a=Object(n.useState)({}),t=Object(v.a)(a,2),r=t[0],l=t[1],s=e.actorData,i="https://api.themoviedb.org/3/person/".concat(function(){if(s)return s[0].id}(),"?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US"),o=_(i,"byactorid").response;Object(n.useEffect)((function(){l(o)}),[o]);var m=r.id,u=r.name,p=r.biography,d=r.profile_path,g=r.birthday,E=r.deathday,f=r.place_of_birth,b=r.homepage;return c.a.createElement("div",{key:m,className:"actor"},c.a.createElement("h2",{className:"actor__name"},u),c.a.createElement(K,{biography:p,profile_path:d,birthday:g,deathday:E,place_of_birth:f,homepage:b}),c.a.createElement("h3",{className:"actor__title"},u," is known for:"),c.a.createElement(M,{actorData:s}))}),z=function(){var e,a,t=Object(n.useState)({}),r=Object(v.a)(t,2),l=r[0],s=r[1],o=Object(i.g)().actorName,m="https://api.themoviedb.org/3/search/person?query=".concat(o,"&api_key=f1782698a1c04f301973e311a7876bdb&language=en-US"),u=_(m,o).response;return Object(n.useEffect)((function(){s(u)}),[u]),c.a.createElement(c.a.Fragment,null,(a=l,!(0===Object.keys(a).length&&a.constructor===Object||0===a.length)&&0!==(null===(e=l.resulsts)||void 0===e?void 0:e.length)&&c.a.createElement(Y,{actorData:l.results})))};var H=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null),c.a.createElement(y,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(o,null,c.a.createElement(C,null))),c.a.createElement(i.a,{exact:!0,path:"/most_popular"},c.a.createElement(o,null,c.a.createElement(A,null))),c.a.createElement(i.a,{exact:!0,path:"/:movieId"},c.a.createElement(o,null,c.a.createElement(J,null))),c.a.createElement(i.a,{exact:!0,path:"/actor/:actorName"},c.a.createElement(o,null,c.a.createElement(z,null))),c.a.createElement(i.a,{exact:!0,path:"/search_results/:query"},c.a.createElement(o,null,c.a.createElement(D,null))),c.a.createElement(i.a,{exact:!0,path:"/popular_by_genre/:genreId/:genreName"},c.a.createElement(o,null,c.a.createElement(G,null)))),c.a.createElement(w,null))};t(89);l.a.render(c.a.createElement(s.a,{basename:"".concat("/movies","/")},c.a.createElement(H,null)),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.53726e3a.chunk.js.map