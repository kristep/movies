(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){},,,,,,,,,,,,function(e,a,t){e.exports=t(61)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),s=t(4),i=t(1),o=(t(31),function(){return r.a.createElement("header",{className:"header"},r.a.createElement(s.b,{to:"/"},r.a.createElement("div",{className:"header__overlay"},r.a.createElement("span",{className:"header__title"},"Movies library"))))}),m=t(17),u=t.n(m),p=t(24),d=t(2),v=function(e,a){var t=Object(n.useState)(null),r=Object(d.a)(t,2),c=r[0],l=r[1],s=Object(n.useState)(null),i=Object(d.a)(s,2),o=i[0],m=i[1],v=Object(n.useState)(!1),_=Object(d.a)(v,2),g=_[0],E=_[1];return Object(n.useEffect)((function(){a&&function(){var a=Object(p.a)(u.a.mark((function a(){var t,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return m(!1),E(!0),a.prev=2,a.next=5,fetch(e);case 5:return t=a.sent,a.next=8,t.json();case 8:n=a.sent,l(n),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(2),m(!0);case 15:E(!1);case 16:case"end":return a.stop()}}),a,null,[[2,12]])})));return function(){return a.apply(this,arguments)}}()()}),[e,a]),{response:c,isLoading:g,isError:o}},_=(t(37),function(){var e=function(){var e=v("https://api.themoviedb.org/3/genre/movie/list?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US","genres").response;return null!==e?e:""}();return r.a.createElement("ul",{className:"genres-list"},""!==e?e.genres.map((function(e){return r.a.createElement("li",{key:e.id,className:"genres-list__genre"},r.a.createElement(s.b,{to:"/popular_by_genre/".concat(e.id,"/").concat(e.name),className:"genres-list__link"},e.name))})):null)}),g=(t(38),function(){var e=function(e){var a=Object(n.useState)(e),t=Object(d.a)(a,2),r=t[0],c=t[1];return{value:r,setValue:c,reset:function(){return c("")},bind:{value:r,onChange:function(e){c(e.target.value)}}}}(""),a=e.value,t=e.bind,c=e.reset,l=Object(i.f)();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(),a&&l.push("/search_results/".concat(a))},className:"search",role:"search"},r.a.createElement("label",{htmlFor:"search"},r.a.createElement("span",{className:"visually-hidden"},"Search")),r.a.createElement("input",Object.assign({type:"text",placeholder:"search by movie title"},t,{className:"search__input",id:"search"})),r.a.createElement("button",{type:"submit",className:"search__button"},r.a.createElement("span",{className:"visually-hidden"},"Submit Search"),r.a.createElement("i",{className:"fas fa-search"})))});t(39);var E=function(e){var a=e.onClick,t=e.text,n=e.className;return r.a.createElement("button",{onClick:a,className:"button button--".concat(n)},t)},f=(t(40),function(e){var a,t,c=e.text,l=e.children,s=Object(n.useState)(!1),i=Object(d.a)(s,2),o=i[0],m=i[1],u=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.key&&m(!1)};return document.addEventListener("keydown",e,!1),function(){document.removeEventListener("keydown",e,!1)}}),[m]),a=u,t=function(){return m(!1)},Object(n.useEffect)((function(){var e=function(e){a.current&&!a.current.contains(e.target)&&t(e)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),r.a.createElement("div",{ref:u},r.a.createElement(E,{text:c,className:"navigation",onClick:function(){m(!o)}}),r.a.createElement("div",{className:"dropdown ".concat(o&&"is-active")},r.a.createElement("ul",{className:"dropdown__content",onClick:function(){return m(!1)}},l)))}),b=(t(41),function(){return r.a.createElement("nav",{className:"navigation"},r.a.createElement("ul",{className:"navigation__list"},r.a.createElement("li",{className:"navigation__list-item"},r.a.createElement(f,{text:"Popular by Genres"},r.a.createElement(_,null))),r.a.createElement("li",{className:"navigation__list-item"},r.a.createElement(s.b,{to:"/most_popular",className:"navigation__link"},"The most popular"))),r.a.createElement(g,null))}),h=(t(42),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",{className:"footer__copyright"},"\xa9 ",(new Date).getFullYear()," KriStep All Rights Reserved"),r.a.createElement("i",{className:"fas fa-arrow-up footer__arrow-up",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}))}),N=function(){return(new Date).toISOString().split("T")[0]},y=t(9),w=t.n(y),k=(t(43),function(e){var a=e.movie,t=a.title,n=a.id,c=a.vote_average,l=a.vote_count,i=a.poster_path,o=a.release_date;return r.a.createElement(s.b,{to:"/".concat(n),className:"movie-card"},i?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(i),alt:"movie poster",className:"movie-card__image"}):r.a.createElement("img",{className:"movie-card__image",alt:"this movie has no poster"}),r.a.createElement("div",{className:"movie-card__description"},r.a.createElement("h3",{className:"movie-card__title"},t),c>0?r.a.createElement("p",{className:"movie-card__votes"},c," points (",l," votes)"):r.a.createElement("p",{className:"movie-card__votes"},"-- no votes yet --"),r.a.createElement("span",{className:"movie-card__released"},o)))}),j=(t(44),t(14),function(e){var a=Object(n.useState)(1),t=Object(d.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(!0),i=Object(d.a)(s,2),o=i[0],m=i[1],u=e.url,p=e.text,_=v("".concat(u).concat(c),c),g=_.response,f=_.isLoading,b=_.isError,h=null===g||void 0===g?void 0:g.total_pages;return r.a.createElement(r.a.Fragment,null,b&&r.a.createElement("div",null,"Something went wrong ..."),f?r.a.createElement("div",{className:"new-movies__loader"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"new-movies ".concat(o&&"new-movies--collapsed")},r.a.createElement("h2",{className:"new-movies__header"},p),r.a.createElement("div",{className:"new-movies__items"},null===g||void 0===g?void 0:g.results.map((function(e){return r.a.createElement(k,{movie:e,key:e.id})}))),r.a.createElement(w.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break",pageCount:h,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:function(e){var a=e.selected;l(a+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})),r.a.createElement(E,{onClick:function(e){return a=e,m(!1),void(a.target.style.display="none");var a},text:"show all",className:"show-all"})))}),O=(t(45),function(){var e="https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=".concat(function(){var e=new Date,a=new Date(e);return a.setDate(e.getDate()-7),a.toISOString().split("T")[0]}(),"&primary_release_date.lte=").concat(N(),"&sort_by=release_date.desc&page="),a="https://api.themoviedb.org/3/movie/upcoming?api_key=f1782698a1c04f301973e311a7876bdb&primary_release_date.gte=".concat(N(),"&page=");return r.a.createElement("main",{className:"home"},r.a.createElement("article",null,r.a.createElement(j,{url:e,text:"Just released movies:"})),r.a.createElement("article",{className:"home__section home__section--with-background"},r.a.createElement(j,{url:a,text:"Upcomming movies:"})))}),x=(t(46),function(){var e=Object(n.useState)(1),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(i.g)().query,s="https://api.themoviedb.org/3/search/movie?api_key=f1782698a1c04f301973e311a7876bdb&query=".concat(l,"&page=").concat(t),o=v(s,l),m=o.response,u=o.isLoading,p=null===m||void 0===m?void 0:m.results,_=null===m||void 0===m?void 0:m.total_pages;return r.a.createElement("div",{className:"search-results"},u&&r.a.createElement("div",{className:"loader"}),r.a.createElement("h2",{className:"search-results__title"},"Search by: '",l,"'"),null!==m?r.a.createElement("span",{className:"search-results__subtitle"},null===m||void 0===m?void 0:m.total_results," movies found"):"No results found",r.a.createElement("div",{className:"search-results__list"},null!==m&&p.map((function(e){return r.a.createElement(k,{movie:e,key:e.id})}))),r.a.createElement(w.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break",pageCount:_,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var a=e.selected;c(a+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))}),S=(t(47),function(e){var a=e.genres,t=e.release_date,n=e.runtime,c=e.original_language,l=e.backdrop_path,s=a?a.map((function(e){return r.a.createElement("li",{key:e.id,className:"image-section__genres-item"},e.name)})):"";return r.a.createElement("div",{className:"image-section"},r.a.createElement("div",{className:"image-section__info"},r.a.createElement("ul",{className:"image-section__genres"},s),r.a.createElement("span",null,"release date: ",t),r.a.createElement("span",null,n>0?n+"min.":""," (",c,")")),l?r.a.createElement("img",{className:"image-section__image",src:"https://image.tmdb.org/t/p/w500".concat(l),alt:"backdrop"}):"")}),C=(t(48),function(e){var a=e.tagline,t=e.overview,n=e.budget,c=e.revenue,l=e.homepage,s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return r.a.createElement("div",{className:"movie-description"},r.a.createElement("div",null,r.a.createElement("p",{className:"movie-description__tagline"},a),r.a.createElement("p",{className:"movie-description__overview"},t)),r.a.createElement("div",null,n>0&&r.a.createElement("div",{className:"movie-description__budget"},r.a.createElement("p",{className:"movie-description__budget-row"},r.a.createElement("span",null,"Budget:"),r.a.createElement("span",null,s.format(n))),r.a.createElement("p",{className:"movie-description__budget-row"},r.a.createElement("span",null,"Revenue:"),r.a.createElement("span",null,s.format(c)))),l&&r.a.createElement("a",{className:"movie-description__link",href:"".concat(l),alt:"homepage"},"Visit movie homepage")))}),D=t(18),L=(t(49),function(e){var a=e.titleText,t=e.children;return r.a.createElement("li",{className:"crew-item"},r.a.createElement("h4",{className:"crew-item__title"},a)," ",t)}),P=(t(50),function(e){var a=e.crew,t=e.countries,c=Object(n.useState)(""),l=Object(d.a)(c,2),s=l[0],i=l[1],o=Object(n.useState)([]),m=Object(d.a)(o,2),u=m[0],p=m[1],v=Object(n.useState)([]),_=Object(d.a)(v,2),g=_[0],E=_[1];return Object(n.useEffect)((function(){a.forEach((function(e){"Directing"===e.department?i(e.name):"Writing"===e.department?p((function(a){return[].concat(Object(D.a)(a),[e])})):"Sound"===e.department&&E((function(a){return[].concat(Object(D.a)(a),[e])}))}))}),[]),r.a.createElement("ul",{className:"crew-list"},s&&r.a.createElement(L,{titleText:"Directed by:"},s),0!==u.length&&r.a.createElement(L,{titleText:"Written by:"},r.a.createElement("ul",null,u.map((function(e){return r.a.createElement("li",{key:e.id},e.name," - ",e.job)})))),0!==g.length&&r.a.createElement(L,{titleText:"Sound:"},r.a.createElement("ul",null,g.map((function(e){return r.a.createElement("li",{key:e.id},e.name," - ",e.job)})))),0!==t.length&&r.a.createElement(L,{titleText:"Production countries:"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.iso_3166_1},e.iso_3166_1," - ",e.name)})))))}),F=t(25),T=(t(51),function(e){var a=e.actor;return r.a.createElement("li",{className:"cast-item"},r.a.createElement("div",{className:"cast-item__image-wrapper"},r.a.createElement("img",{className:"cast-item__image",src:"https://image.tmdb.org/t/p/original".concat(a.profile_path),alt:"actor"})),a.character&&r.a.createElement("span",{className:"cast-item__character"},a.character),r.a.createElement("span",{className:"cast-item__name"},a.name))}),B=(t(52),function(e){var a=e.cast;return Object(n.useEffect)((function(){new F.a(".swiper-container",{slidesPerView:10,spaceBetween:50,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:6,spaceBetween:40},768:{slidesPerView:4,spaceBetween:30},640:{slidesPerView:3,spaceBetween:20},320:{slidesPerView:2,spaceBetween:10}}})}),[]),r.a.createElement(r.a.Fragment,null,0!==a.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"swiper-title"},"The main cast:"),r.a.createElement("div",{className:"swiper-container"},r.a.createElement("ul",{className:" swiper-wrapper "},a.map((function(e){return r.a.createElement(s.b,{className:"swiper-slide",to:"/actor/".concat(e.name),key:e.cast_id},r.a.createElement(T,{actor:e}))}))),r.a.createElement("div",{className:"swiper-button-prev"}),r.a.createElement("div",{className:"swiper-button-next"}))))}),I=(t(53),function(e){var a=e.production_companies;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"companies__title"},"Production companies:"),a.map((function(e){return r.a.createElement("li",{key:e.id,className:"companies-item"},e.logo_path?r.a.createElement("img",{className:"companies__logo",src:"https://image.tmdb.org/t/p/w200".concat(e.logo_path),alt:"company logo"}):r.a.createElement("div",{className:"companies__instead-logo"},r.a.createElement("p",null,e.name)))})))}),V=(t(54),t(55),function(e){var a=e.details,t=a.title,n=a.backdrop_path,c=a.overview,l=a.genres,s=a.budget,i=a.revenue,o=a.release_date,m=a.runtime,u=a.homepage,p=a.production_companies,d=a.original_language,_=a.tagline,g=a.id,E=a.production_countries,f=v("https://api.themoviedb.org/3/movie/".concat(g,"/credits?api_key=f1782698a1c04f301973e311a7876bdb"),"people").response;return r.a.createElement("div",{className:"details"},r.a.createElement("h2",{className:"details__title"},t," ",r.a.createElement("span",{className:"details__year"},"(",o.substring(0,4),")")),r.a.createElement("div",{className:"details__image"},r.a.createElement(S,{genres:l,release_date:o,runtime:m,original_language:d,backdrop_path:n})),r.a.createElement("div",{className:"details__description"},r.a.createElement(C,{tagline:_,overview:c,budget:s,revenue:i,homepage:u})),null!==f&&r.a.createElement("div",{className:"details__cast"},r.a.createElement(B,{cast:f.cast})),null!==f&&r.a.createElement("div",{className:"details__crew"},r.a.createElement(P,{crew:f.crew,countries:E})),p&&r.a.createElement("ul",{className:"details__companies"},r.a.createElement(I,{production_companies:p})))}),R=function(){var e=Object(i.g)().movieId,a="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=f1782698a1c04f301973e311a7876bdb"),t=v(a,e);return r.a.createElement(r.a.Fragment,null,null!==t.response&&34!==t.response.status_code?r.a.createElement(V,{details:t.response}):"sorry, this movie has no details in our database")},U=(t(56),function(e){var a=Object(n.useState)(1),t=Object(d.a)(a,2),c=t[0],l=t[1],s=e.url,i=e.text,o=v("".concat(s).concat(c),c),m=o.response,u=o.isLoading,p=o.isError,_=null===m||void 0===m?void 0:m.total_pages;return r.a.createElement(r.a.Fragment,null,p&&r.a.createElement("div",null,"Something went wrong ..."),u?r.a.createElement("div",{className:"popular-movies__loader"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"popular-movies"},r.a.createElement("h2",{className:"popular-movies__header"},i),r.a.createElement("div",{className:"popular-movies__items"},null===m||void 0===m?void 0:m.results.map((function(e){return r.a.createElement(k,{movie:e,key:e.id})}))),r.a.createElement(w.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break",pageCount:_,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:function(e){var a=e.selected;l(a+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))))}),q=function(){return r.a.createElement("main",{className:"popular-movies"},r.a.createElement(U,{url:"https://api.themoviedb.org/3/discover/movie?api_key=f1782698a1c04f301973e311a7876bdb&sort_by=vote_average.desc&vote_count.gte=50&page=",text:"The most popular movies of all times:"}))},J=function(){var e=Object(i.g)(),a=e.genreId,t=e.genreName,n="https://api.themoviedb.org/3/discover/movie?with_genres=".concat(a,"&api_key=f1782698a1c04f301973e311a7876bdb&sort_by=vote_average.desc&vote_count.gte=10&page=");return r.a.createElement("main",{className:"popular-movies"},r.a.createElement(U,{url:n,text:"The most popular ".concat(t," movies:")}))},W=(t(57),function(e){var a=e.biography,t=e.profile_path,n=e.birthday,c=e.deathday,l=e.place_of_birth,s=e.homepage;return r.a.createElement("div",{className:"actor-info"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/".concat(t),alt:"actor",className:"actor-info__image"}),r.a.createElement("div",{className:"actor-info__description"},n&&r.a.createElement("p",null,r.a.createElement("span",{className:"actor-info__description-tagline"},"Birth date:"," "),r.a.createElement("span",null,n)),null!==c&&r.a.createElement("p",null,r.a.createElement("span",{className:"actor-info__description-tagline"},"Death date:")," ",r.a.createElement("span",null,c)),l&&r.a.createElement("p",null,r.a.createElement("span",{className:"actor-info__description-tagline"},"Born in:")," ",r.a.createElement("span",null,l)),r.a.createElement("p",{className:"actor-info__biography"},a),s&&r.a.createElement("a",{href:s,className:"actor-info__link"},"Visit actor's homepage")))}),A=(t(58),function(e){var a=e.actorData,t=function(){if(null!==a.response)return a.response.results[0].known_for}();return r.a.createElement("div",{className:"known-for"},t&&t.length>0&&t.map((function(e){return"movie"===e.media_type&&r.a.createElement(k,{movie:e,key:e.id})})))}),G=(t(59),function(e){var a=e.actorData,t="https://api.themoviedb.org/3/person/".concat(function(){if(null!==a.response)return a.response.results[0].id}(),"?api_key=f1782698a1c04f301973e311a7876bdb&language=en-US"),n=v(t,"byactorid"),c=null!==n.response?n.response:"",l=c.id,s=c.name,i=c.biography,o=c.profile_path,m=c.birthday,u=c.deathday,p=c.place_of_birth,d=c.homepage;return r.a.createElement(r.a.Fragment,null,null!==n.response&&void 0!==n.response&&r.a.createElement("div",{key:l,className:"actor"},r.a.createElement("h2",{className:"actor__name"},s),r.a.createElement(W,{biography:i,profile_path:o,birthday:m,deathday:u,place_of_birth:p,homepage:d}),r.a.createElement("h3",{className:"actor__title"},s," is known for:"),r.a.createElement(A,{actorData:a})))}),K=function(){var e=Object(i.g)().actorName,a="https://api.themoviedb.org/3/search/person?query=".concat(e,"&api_key=f1782698a1c04f301973e311a7876bdb&language=en-US"),t=v(a,e);return r.a.createElement(G,{actorData:t})};var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement(b,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(O,null)),r.a.createElement(i.a,{exact:!0,path:"/most_popular"},r.a.createElement(q,null)),r.a.createElement(i.a,{exact:!0,path:"/:movieId"},r.a.createElement(R,null)),r.a.createElement(i.a,{exact:!0,path:"/actor/:actorName"},r.a.createElement(K,null)),r.a.createElement(i.a,{exact:!0,path:"/search_results/:query"},r.a.createElement(x,null)),r.a.createElement(i.a,{exact:!0,path:"/popular_by_genre/:genreId/:genreName"},r.a.createElement(J,null))),r.a.createElement(h,null))};t(60);l.a.render(r.a.createElement(s.a,{basename:"".concat("/movies","/")},r.a.createElement(M,null)),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.020bcd8a.chunk.js.map