<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">

    <title>Horos Project &#8211; Free DICOM Medical Image Viewer</title>
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link href='https://fonts.gstatic.com' crossorigin rel='preconnect' />
<link rel="alternate" type="application/rss+xml" title="Horos Project &raquo; Feed" href="https://horosproject.org/feed/" />
<link rel="alternate" type="application/rss+xml" title="Horos Project &raquo; Comments Feed" href="https://horosproject.org/comments/feed/" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.4\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.4\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/horosproject.org\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.9.3"}};
			!function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55357,56692,8205,9792,65039],[55357,56692,8203,9792,65039]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
<link rel='stylesheet' id='mesmerize-style-css'  href='https://horosproject.org/wp-content/themes/mesmerize-pro/style.min.css?ver=1.0.221' type='text/css' media='all' />
<style id='mesmerize-style-inline-css' type='text/css'>
img.logo.dark, img.custom-logo{width:auto;max-height:40px;}
</style>
<link rel='stylesheet' id='mesmerize-common-css-css'  href='https://horosproject.org/wp-content/plugins/mesmerize-companion/theme-data/mesmerize/assets/css/common.css?ver=1.0.184' type='text/css' media='all' />
<link rel='stylesheet' id='companion-page-css-css'  href='https://horosproject.org/wp-content/plugins/mesmerize-companion/theme-data/mesmerize/sections/content.css?ver=1.0.184' type='text/css' media='all' />
<link rel='stylesheet' id='companion-pro-page-css-css'  href='https://horosproject.org/wp-content/themes/mesmerize-pro/pro/sections/content.css?ver=1.0.184' type='text/css' media='all' />
<link rel='stylesheet' id='mesmerize-font-awesome-css'  href='https://horosproject.org/wp-content/themes/mesmerize-pro/assets/font-awesome/font-awesome.min.css?ver=1.0.221' type='text/css' media='all' />
<link rel='stylesheet' id='animate-css'  href='https://horosproject.org/wp-content/themes/mesmerize-pro/assets/css/animate.min.css?ver=1.0.221' type='text/css' media='all' />
<link rel='stylesheet' id='mesmerize-webgradients-css'  href='https://horosproject.org/wp-content/themes/mesmerize-pro/assets/css/webgradients.min.css?ver=1.0.221' type='text/css' media='all' />
<link rel='stylesheet' id='mesmerize-fonts-css'  href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700%7CMuli%3A300%2C300italic%2C400%2C400italic%2C600%2C600italic%2C700%2C700italic%2C900%2C900italic%7CPlayfair+Display%3A400%2C400italic%2C700%2C700italic%7CRoboto%3A300%7CNunito+Sans%3Aregular&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
<link rel='stylesheet' id='jquery-fancybox-css'  href='https://horosproject.org/wp-content/themes/mesmerize-pro/pro/assets/css/jquery.fancybox.min.css?ver=3.0.47' type='text/css' media='all' />
<link rel='stylesheet' id='kirki-styles-mesmerize-css'  href='https://horosproject.org/wp-content/themes/mesmerize-pro/customizer/kirki/assets/css/kirki-styles.css' type='text/css' media='all' />
<style id='kirki-styles-mesmerize-inline-css' type='text/css'>
.footer-content{background-color:#222;}.footer h1, .footer h2, .footer h3, .footer h4, .footer h5, .footer h6{color:#fff!important;}.footer p, .footer{color:#fff;}.footer a{color:#aaa;}.footer a:hover{color:#aaa;}.footer a .fa{color:#fff;}.footer a:hover .fa{color:#3f464c;}.footer-border-accent{border-color:#ff9800 !important;}.footer-bg-accent{background-color:#ff9800 !important;}body{font-family:"Open Sans", Helvetica, Arial, sans-serif;color:#6B7C93;}body h1{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:600;font-style:normal;font-size:2.625rem;line-height:4rem;color:#3C424F;}body h2{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:600;font-style:normal;font-size:2.188rem;line-height:3rem;text-transform:none;color:#3C424F;}body h3{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:600;font-style:normal;font-size:1.313rem;line-height:2.25rem;text-transform:none;color:#3C424F;}body h4{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:600;font-style:normal;font-size:0.963rem;line-height:1.75rem;letter-spacing:0.0625rem;text-transform:none;color:#3C424F;}body h5{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:800;font-style:normal;font-size:0.875rem;line-height:1.5rem;letter-spacing:2px;text-transform:none;color:#3C424F;}body h6{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:800;font-style:normal;font-size:0.766rem;line-height:1.375rem;letter-spacing:0.1875rem;color:#3C424F;}.header-homepage{background-position:center center;}.header{background-position:center center;}.header-homepage.color-overlay:before{background:#000000;}.header-homepage .background-overlay,.header-homepage.color-overlay::before{opacity:0.65;}.header.color-overlay:before{background:#000000;}.header .background-overlay,.header.color-overlay::before{opacity:0.5;}.header-homepage p.header-subtitle2{margin-top:0;margin-bottom:20px;font-family:Roboto, Helvetica, Arial, sans-serif;font-weight:300;font-style:normal;font-size:1.4em;line-height:130%;text-transform:none;color:#FFFFFF;}.header-homepage h1.hero-title{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:600;font-style:normal;font-size:3.3em;line-height:114%;letter-spacing:-1px;text-transform:none;color:#FFFFFF;}.header-homepage .hero-title{margin-top:0;margin-bottom:24px;}.header-homepage p.header-subtitle{margin-top:0;margin-bottom:24px;font-family:"Nunito Sans";font-weight:400;font-style:normal;font-size:1.4em;line-height:130%;text-transform:none;color:#FFFFFF;}a.video-popup-button-link{color:rgb(255,255,255);}a.video-popup-button-link:hover{color:rgba(0,0,0,0.4);}.video-popup-button.with-image:before{background-color:rgba(0,139,210,0.255);}.header-homepage .header-description-row{padding-top:5%;padding-bottom:5%;}.inner-header-description{padding-top:50px;padding-bottom:50px;}.inner-header-description .header-subtitle{font-family:Muli, Helvetica, Arial, sans-serif;font-weight:300;font-style:normal;font-size:1.3em;line-height:130%;letter-spacing:normal;text-transform:none;color:#ffffff;}.inner-header-description h1.hero-title{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:600;font-style:normal;font-size:3.5em;line-height:114%;letter-spacing:0.9px;text-transform:none;color:#FFFFFF;}.header-top-bar .header-top-bar-area.area-left span{color:#FFFFFF;}.header-top-bar .header-top-bar-area.area-left i.fa{color:#999;}.header-top-bar .header-top-bar-area.area-left .top-bar-social-icons i{color:#fff;}.header-top-bar .header-top-bar-area.area-left .top-bar-social-icons i:hover{color:#fff;}.header-top-bar .header-top-bar-area.area-left .top-bar-menu > li > a{color:#fff;}.header-top-bar .header-top-bar-area.area-left .top-bar-menu > li > a:hover{color:#fff!important;}.header-top-bar .header-top-bar-area.area-left .top-bar-menu > li > a:visited{color:#fff;}.header-top-bar .header-top-bar-area.area-left span.top-bar-text{color:#999;}.header-top-bar .header-top-bar-area.area-right span{color:#FFFFFF;}.header-top-bar .header-top-bar-area.area-right i.fa{color:#999;}.header-top-bar .header-top-bar-area.area-right .top-bar-social-icons i{color:#fff;}.header-top-bar .header-top-bar-area.area-right .top-bar-social-icons i:hover{color:#fff;}.header-top-bar .header-top-bar-area.area-right .top-bar-menu > li > a{color:#fff;}.header-top-bar .header-top-bar-area.area-right .top-bar-menu > li > a:hover{color:#fff!important;}.header-top-bar .header-top-bar-area.area-right .top-bar-menu > li > a:visited{color:#fff;}.header-top-bar .header-top-bar-area.area-right span.top-bar-text{color:#999;}.mesmerize-inner-page .navigation-bar.coloured-nav:not(.fixto-fixed){background-color:rgba(0,0,0,0)!important;}.mesmerize-inner-page .fixto-fixed .main_menu_col, .mesmerize-inner-page .fixto-fixed .main-menu{justify-content:flex-end!important;}.mesmerize-inner-page .navigation-bar.fixto-fixed{background-color:rgb(54,54,54)!important;}.mesmerize-inner-page #main_menu > li > a{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:600;font-style:normal;font-size:14px;line-height:160%;letter-spacing:1px;text-transform:uppercase;}.mesmerize-front-page .navigation-bar.coloured-nav:not(.fixto-fixed){background-color:rgba(0,0,0,0)!important;}.mesmerize-front-page .fixto-fixed .main_menu_col, .mesmerize-front-page .fixto-fixed .main-menu{justify-content:flex-end!important;}.mesmerize-front-page .navigation-bar.fixto-fixed{background-color:rgb(54,54,54)!important;}.mesmerize-front-page #main_menu > li > a{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:600;font-style:normal;font-size:14px;line-height:160%;letter-spacing:1px;text-transform:uppercase;}.mesmerize-front-page #main_menu > li li > a{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:600;font-style:normal;font-size:0.875rem;line-height:120%;letter-spacing:0px;text-transform:none;}.mesmerize-front-page .header-nav-area .social-icons a{color:#FFFFFF!important;}.mesmerize-front-page .fixto-fixed .header-nav-area .social-icons a{color:#000000!important;}.mesmerize-front-page  .nav-search.widget_search *{color:#FFFFFF;}.mesmerize-front-page  .nav-search.widget_search input{border-color:#FFFFFF;}.mesmerize-front-page  .nav-search.widget_search input::-webkit-input-placeholder{color:#FFFFFF;}.mesmerize-front-page  .nav-search.widget_search input:-ms-input-placeholder{color:#FFFFFF;}.mesmerize-front-page  .nav-search.widget_search input:-moz-placeholder{color:#FFFFFF;}.mesmerize-front-page .fixto-fixed  .nav-search.widget_search *{color:#000000;}.mesmerize-front-page .fixto-fixed  .nav-search.widget_search input{border-color:#000000;}.mesmerize-front-page .fixto-fixed  .nav-search.widget_search input::-webkit-input-placeholder{color:#000000;}.mesmerize-front-page .fixto-fixed  .nav-search.widget_search input:-ms-input-placeholder{color:#000000;}.mesmerize-front-page .fixto-fixed  .nav-search.widget_search input:-moz-placeholder{color:#000000;}.mesmerize-inner-page .inner_header-nav-area .social-icons a{color:#FFFFFF!important;}.mesmerize-inner-page .fixto-fixed .inner_header-nav-area .social-icons a{color:#000000!important;}.mesmerize-inner-page .nav-search.widget_search *{color:#FFFFFF;}.mesmerize-inner-page .nav-search.widget_search input{border-color:#FFFFFF;}.mesmerize-inner-page .nav-search.widget_search input::-webkit-input-placeholder{color:#FFFFFF;}.mesmerize-inner-page .nav-search.widget_search input:-ms-input-placeholder{color:#FFFFFF;}.mesmerize-inner-page .nav-search.widget_search input:-moz-placeholder{color:#FFFFFF;}.mesmerize-inner-page .fixto-fixed .nav-search.widget_search *{color:#000000;}.mesmerize-inner-page .fixto-fixed .nav-search.widget_search input{border-color:#000000;}.mesmerize-inner-page .fixto-fixed .nav-search.widget_search input::-webkit-input-placeholder{color:#000000;}.mesmerize-inner-page .fixto-fixed .nav-search.widget_search input:-ms-input-placeholder{color:#000000;}.mesmerize-inner-page .fixto-fixed .nav-search.widget_search input:-moz-placeholder{color:#000000;}[data-component="offcanvas"] i.fa{color:rgb(255,255,255)!important;}[data-component="offcanvas"] .bubble{background-color:rgb(255,255,255)!important;}.fixto-fixed [data-component="offcanvas"] i.fa{color:rgb(255,255,255)!important;}.fixto-fixed [data-component="offcanvas"] .bubble{background-color:rgb(255,255,255)!important;}#offcanvas-wrapper{background-color:#222B34!important;}html.has-offscreen body:after{background-color:rgba(34, 43, 52, 0.7)!important;}#offcanvas-wrapper *{color:#ffffff!important;}#offcanvas_menu li.open, #offcanvas_menu li.current-menu-item, #offcanvas_menu li.current_page_item{background-color:#FFFFFF;}#offcanvas_menu li.open > a, #offcanvas_menu li.current-menu-item > a, #offcanvas_menu li.current_page_item > a{color:#2395F6!important;border-left-color:#2395F6!important;}#offcanvas_menu li > ul{background-color:#686B77;}#offcanvas_menu li > a{font-family:"Open Sans", Helvetica, Arial, sans-serif;font-weight:400;font-style:normal;font-size:0.875rem;line-height:100%;letter-spacing:0px;text-transform:none;}.navigation-bar.homepage.coloured-nav a.text-logo,.navigation-bar.homepage.coloured-nav #main_menu li.logo > a.text-logo,.navigation-bar.homepage.coloured-nav #main_menu li.logo > a.text-logo:hover,.navigation-bar.homepage a.text-logo,.navigation-bar.homepage #main_menu li.logo > a.text-logo,.navigation-bar.homepage #main_menu li.logo > a.text-logo:hover{color:#FFFFFF;font-family:"Nunito Sans";font-weight:400;font-style:normal;font-size:2rem;line-height:100%;letter-spacing:0px;text-transform:none;}.navigation-bar.homepage.fixto-fixed a.text-logo,.navigation-bar.homepage.fixto-fixed .dark-logo a.text-logo{color:#FFFFFF!important;}.navigation-bar:not(.homepage) a.text-logo,.navigation-bar:not(.homepage) #main_menu li.logo > a.text-logo,.navigation-bar:not(.homepage) #main_menu li.logo > a.text-logo:hover,.navigation-bar:not(.homepage) a.text-logo,.navigation-bar:not(.homepage) #main_menu li.logo > a.text-logo,.navigation-bar:not(.homepage) #main_menu li.logo > a.text-logo:hover{color:#FFFFFF;font-family:inherit;font-weight:600;font-size:1.6rem;line-height:100%;letter-spacing:0px;text-transform:uppercase;}.navigation-bar.fixto-fixed:not(.homepage) a.text-logo,.navigation-bar.fixto-fixed:not(.homepage) .dark-logo a.text-logo, .navigation-bar.alternate:not(.homepage) a.text-logo, .navigation-bar.alternate:not(.homepage) .dark-logo a.text-logo{color:#FFFFFF!important;}@media (min-width: 767px){.footer .footer-content{padding-top:0px;padding-bottom:0px;}}@media (max-width: 1023px){body{font-size:calc( 16px * 0.875 );}}@media (min-width: 1024px){body{font-size:16px;}}@media only screen and (min-width: 768px){body h1{font-size:3rem;}body h2{font-size:2.5rem;}body h3{font-size:1.5rem;}body h4{font-size:1.1rem;}body h5{font-size:1rem;}body h6{font-size:0.875rem;}.header-homepage p.header-subtitle2{font-size:1.4em;}.header-homepage h1.hero-title{font-size:56px;}.header-homepage p.header-subtitle{font-size:1.4em;}.header-content .align-holder{width:100%!important;}.header-hero-media{-webkit-flex-basis:52%;-moz-flex-basis:52%;-ms-flex-preferred-size:52%;flex-basis:52%;max-width:52%;width:52%;}.header-hero-content{-webkit-flex-basis:calc(100% - 52%)!important;-moz-flex-basis:calc(100% - 52%)!important;-ms-flex-preferred-size:calc(100% - 52%)!important;flex-basis:calc(100% - 52%)!important;max-width:calc(100% - 52%)!important;width:calc(100% - 52%)!important;}.inner-header-description{text-align:center!important;}.inner-header-description .header-subtitle{font-size:1.3em;}.inner-header-description h1.hero-title{font-size:40px;}}@media screen and (max-width:767px){.header-homepage .header-description-row{padding-top:10%;padding-bottom:10%;}}
</style>
<script type='text/javascript' src='https://horosproject.org/wp-content/plugins/mesmerize-companion/theme-data/mesmerize/assets/js/libs/hammer.js?ver=1.0.184'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/plugins/mesmerize-companion/theme-data/mesmerize/assets/js/libs/modernizr.js?ver=1.0.184'></script>
<script type='text/javascript' src='https://horosproject.org/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
<script type='text/javascript'>
    
        (function ($) {
            function setHeaderTopSpacing() {
                $('.header-wrapper .header,.header-wrapper .header-homepage').css({
                    'padding-top': $('.header-top').height()
                })
            }

            jQuery(window).on('resize orientationchange', setHeaderTopSpacing);
            window.mesmerizeSetHeaderTopSpacing = setHeaderTopSpacing

        })(jQuery);
    
    
</script>
<script type='text/javascript' src='https://horosproject.org/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/plugins/mesmerize-companion/theme-data/mesmerize/assets/js/HoverFX.js?ver=1.0.184'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/plugins/mesmerize-companion/theme-data/mesmerize/assets/js/countup.js?ver=1.0.184'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/plugins/mesmerize-companion/theme-data/mesmerize/sections/scripts.js?ver=1.0.184'></script>
<link rel='https://api.w.org/' href='https://horosproject.org/wp-json/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://horosproject.org/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://horosproject.org/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 4.9.3" />
<link rel="canonical" href="https://horosproject.org/" />
<link rel='shortlink' href='https://horosproject.org/' />
<link rel="alternate" type="application/json+oembed" href="https://horosproject.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fhorosproject.org%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://horosproject.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fhorosproject.org%2F&#038;format=xml" />
        <style type="text/css" data-name="custom-mobile-image-position">
            @media screen and (max-width: 767px) {
                /*Custom mobile position*/
            .header-homepage {
                background-position: 50 0px;
            }
            }
        </style>

        <style type="text/css" data-name="custom-mobile-image">
            /*Custom mobile image*/
                        }

        </style>
        <style data-prefix="header" data-name="menu-variant-style">
        /* header ### active-line-bottom */ 


/* default color */

.mesmerize-front-page ul.dropdown-menu > li {
  color: #FFFFFF;
}

.mesmerize-front-page .fixto-fixed ul.dropdown-menu > li {
  color: #FFFFFF;
}

/* active-line-bottom */

.mesmerize-front-page ul.dropdown-menu.active-line-bottom > li > a,
.mesmerize-front-page ul.dropdown-menu.active-line-bottom > li > a, ul.dropdown-menu.default > li > a,
.mesmerize-front-page ul.dropdown-menu.default > li > a {
    border-bottom: 3px solid transparent;
}

.mesmerize-front-page ul.dropdown-menu.active-line-bottom > .current_page_item > a,
.mesmerize-front-page ul.dropdown-menu.active-line-bottom > .current-menu-item > a, ul.dropdown-menu.default > .current_page_item > a,
.mesmerize-front-page ul.dropdown-menu.default > .current-menu-item > a {
  border-bottom-color: #008BD2;
}

.mesmerize-front-page ul.dropdown-menu.active-line-bottom > li:not(.current-menu-item):not(.current_page_item):hover > a,
.mesmerize-front-page ul.dropdown-menu.active-line-bottom > li:not(.current-menu-item):not(.current_page_item).hover > a, ul.dropdown-menu.default > li:not(.current-menu-item):not(.current_page_item):hover > a,
.mesmerize-front-page ul.dropdown-menu.default > li:not(.current-menu-item):not(.current_page_item).hover > a {
  color: #FFFFFF;
}

.mesmerize-front-page .fixto-fixed ul.dropdown-menu.active-line-bottom > .current_page_item > a,
.mesmerize-front-page .fixto-fixed ul.dropdown-menu.active-line-bottom > .current-menu-item > a,
.mesmerize-front-page .fixto-fixed ul.dropdown-menu.default > .current_page_item > a,
.mesmerize-front-page .fixto-fixed ul.dropdown-menu.default > .current-menu-item > a {
  border-bottom-color: #008BD2;
}

.mesmerize-front-page .fixto-fixed ul.dropdown-menu.active-line-bottom > li:not(.current-menu-item):not(.current_page_item):hover > a,
.mesmerize-front-page .fixto-fixed ul.dropdown-menu.active-line-bottom > li:not(.current-menu-item):not(.current_page_item).hover > a,
.mesmerize-front-page .fixto-fixed ul.dropdown-menu.default > li:not(.current-menu-item):not(.current_page_item):hover > a,
.mesmerize-front-page .fixto-fixed ul.dropdown-menu.default > li:not(.current-menu-item):not(.current_page_item).hover > a {
  color: #FFFFFF;
}


.mesmerize-front-page ul.dropdown-menu.active-line-bottom > .current_page_item > a,
.mesmerize-front-page ul.dropdown-menu.active-line-bottom > .current-menu-item > a {
  color: #FFFFFF;
}

.mesmerize-front-page .fixto-fixed ul.dropdown-menu.active-line-bottom > .current_page_item > a,
.mesmerize-front-page .fixto-fixed ul.dropdown-menu.active-line-bottom > .current-menu-item > a {
  color: #FFFFFF;
}

.mesmerize-front-page ul.dropdown-menu ul {
  background-color: rgb(0,0,0);
}


.mesmerize-front-page ul.dropdown-menu ul li {
  color: rgb(255,255,255);
}

.mesmerize-front-page ul.dropdown-menu ul li.hover,
.mesmerize-front-page ul.dropdown-menu ul li:hover {
  background-color: rgb(251,192,45);
  color: rgb(255,255,255);
}


    </style>

    <style data-name="menu-align">
        .mesmerize-front-page .main-menu, .mesmerize-front-page .main_menu_col {justify-content:flex-end;}    </style>
            <style data-name="header_content_video_img_shadow">
            .header-description-row img.homepage-header-image,
            .header-description-row .video-popup-button img,
            .header-description-row iframe.header-hero-video {
                -moz-box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                -webkit-box-shadow:0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
        </style>
        		<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>
		<style type="text/css" id="custom-background-css">
body.custom-background { background-color: #ffffff; }
</style>
<link rel="icon" href="https://horosproject.org/wp-content/uploads/2018/02/cropped-horos-blue-circle-1-32x32.png" sizes="32x32" />
<link rel="icon" href="https://horosproject.org/wp-content/uploads/2018/02/cropped-horos-blue-circle-1-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon-precomposed" href="https://horosproject.org/wp-content/uploads/2018/02/cropped-horos-blue-circle-1-180x180.png" />
<meta name="msapplication-TileImage" content="https://horosproject.org/wp-content/uploads/2018/02/cropped-horos-blue-circle-1-270x270.png" />
		<style type="text/css" id="wp-custom-css">
			/* Custom Edits for Horos Site */

/* General CSS */

.page-wrapper {
	max-width: 1232px;
	margin: 0 auto;
}

.navigation-bar #main_menu {
	display: flex;
	align-items: center;
}
.navigation-bar a {
	font-size: 13px !important;
}
.navigation-bar .highlighted-link a {
	background-color: #008bd2;
	padding: 8px 18px;
	margin: -8px 0;
	border-radius: 5px;
	border: 0 !important;
	transition: all .3s linear;
}

.navigation-bar .highlighted-link a:hover {
	background-color: #149FE6;
}
.river_city {
	    background-image: linear-gradient(to top,#018ad3 0,#04befe 100%);
}

.overlappable-1 .row {
	border-radius: 12px;
	overflow: hidden;
}
.overlappable-1 i.fa.icon {
  margin-bottom: 12px;
}

/* Home Page */

#donate .lead {
	font-size: 16px;
	line-height: 1.4;
	max-width: 820px;
	margin: 20px auto;
}

#get-involved p {
	font-size: 16px;
	line-height: 1.4;
	max-width: 600px;
	margin: 20px auto 40px;
}

#get-involved .row.spaced-cols {
	background: white;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	padding: 20px;
	margin-bottom: 0;
}

#get-involved .row.spaced-cols > div {
	margin: 0;
	margin-top: 10px
}

#get-involved .space-bottom {
	margin-bottom: 0;
}

#get-support p {
	font-size: 14px;
	line-height: 1.4;
}

.academy-btn-wrapper {
	text-align: center;
	padding-top: 30px;
}

#latest-news ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
}

#latest-news ul li {
	flex-basis: 30%;
	flex-grow: 1;
	min-width: 240px;
	padding: 20px;
	margin: 10px;
	background: white;
	box-shadow: 0 0 4px rgba(0,0,0,0.25);
	font-size: 13px;
	line-height: 1.4;
	border-radius: 4px;
	text-align: left;
}

#latest-news ul li a {
	font-size: 15px;
	display: block;
	margin-bottom: 12px;
	font-weight: bold;
}

/* Support Page */

.questions-wrapper {
	max-width: 470px;
}

.questions-wrapper h2 {
	font-size: 28px;
	color: #008bd2;
}

.content-box {
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    padding: 70px 50px 20px;
    font-size: 13px;
    line-height: 1.4;
    margin-top: -20px;
    position: relative;
	padding-top: 130px;
	margin-bottom: 50px;
}

.content-box .heading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #008bd2;
	color: white;
	padding: 30px 50px;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}

.hs-contact-form-wrapper {
	margin-top: 50px;
	max-width: 470px;
	font-size: 14px;
	line-height: 1.4;
}

.hs-contact-form-wrapper h3 {
	color: #008bd2;
	margin-bottom: 10px;
	margin-top: 0;
	line-height: 1;
}

.hs-contact-form-wrapper input.hs-button {
	border: 0;
	background: #008bd2;
	text-shadow: none;
	width: 92%;
	margin-top: -40px;
	height: 30px;
}

#horos-academy .card p {
	font-size: 15px;
  line-height: 1.5;
	margin-bottom: 10px;
}

@media (min-width: 768px) and (max-width: 930px) {
	.content-box {
    padding: 90px 20px 20px;
}

.content-box .heading {
	padding: 20px 20px;
	}
}

@media (max-width: 768px) {
	.questions-wrapper, .hs-contact-form-wrapper {
		text-align: left;
		margin: auto;
		margin-bottom: 40px;
	}
}

/*  Download Pages */ 

.embedded-form {
	max-width: 500px;
	margin: 0 auto;	
}

.embedded-form form .actions {
	margin-top: 0px;
}

.embedded-form form .hs-button, .embedded-form form .hs-button:hover:not(.inactive) {
	width: 90%;
	max-width: 420px;
	background: #008bd2;
	border: 0;
	text-shadow: none;
	font-family: Open sans;
	font-size: 16px;
	font-weight: normal;
} 

.download-button {
	width: 360px;
	margin: -30px auto 14px;
	background: #008bd2;
	border-radius: 8px;
	box-shadow: 0 3px 0 #005a88;
	color: white;
	text-decoration: none;
	padding: 20px 40px;
	text-align: left;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	line-height: 120%;
	flex-direction: row-reverse;
}
.download-button .button-icon {
	font-size: 70px;
	margin-left: 16px;
	margin-right: 0;
}

.big-buttons-wrapper {
	display: flex;
	justify-content: center;
}

.big-buttons-wrapper .download-latest {
	margin-right: 1rem;
}

.big-buttons-wrapper .release-candidate .download-button {
	box-shadow: 0 3px 0 rgba(0,0,0,.8);
}

.download-left-col .button {
	display: block;
	max-width: 340px;
}

.download-left-col ul {
	margin-bottom: 30px;
}

.download-left-col h4 {
	margin-bottom: 10px;
}

.download-left-col .button {
    max-width: 100%;
}

.horos-free {
	padding: 40px 50px 50px;;
	background: rgba(255,255,255,0.25);
	border-radius: 6px;
	box-shadow: 0 0 4px rgba(0,0,0,0.25);
	max-width: 700px;
	margin-left: auto;
	position: relative;
	padding-top: 130px;
}

.horos-free .heading {
	background: #008bd2;
	position: absolute;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	top: 0;
	left: 0;
	right: 0;
	padding: 20px;
}

@media (max-width: 768px) {
	.previous-versions {
		text-align: left;
	}
	.horos-free {
		padding-left: 20px;
		padding-right: 20px;
		margin: auto;
	}
	.big-buttons-wrapper {
		flex-wrap: wrap;
	}
	.big-buttons-wrapper .download-latest {
		margin-right: 0;
		margin-bottom: 40px;
	}
}

.horos-free h2 {
	font-size: 30px;
}

.horos-free .lead {
	font-size: 14px;
	line-height: 1.5;
}

.horos-free .donate-cards-list {
	flex-wrap: wrap;
}

/*Get Involved Page*/

.content-wrapper.contribute {
	max-width: 960px;
	margin: 0 auto;
}
.code-box {
	background-color: rgba(0,0,0,0.025);
	border: 1px solid rgba(0,0,0,0.1);
	border-radius: 6px;
	padding: 10px 14px;
	margin-bottom: 16px;
	font-family: monospace;
}

.code-guidelines-card {
	background: white;
	border-radius: 6px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	padding: 24px;
	font-size: 14px;
}
.code-guidelines-card h3 {
	font-size: 22px;
	line-height: 130%;
}
.code-guidelines-card a {
	display: block;
	margin-bottom: 8px;
	line-height: 140%;
}

.get-involved-card {
	margin-top: -32px;
}

/*  Donate Page */ 
.donate-cards-list {
	display: flex;
	max-width: 796px;
	margin: 0 auto;
	justify-content: center;
}

.donate-card {
	padding: 16px;
	flex-basis: 142px;
	text-align: center;
	margin: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.donate-card:before {
	content: none;
}
.donate-card:after {
	content: none;
}
.donate-card a.button {
	margin-right: 0 !important;
}
.card-title {
  font-size: 16px;
  line-height: 120%;
}
.card-value {
	font-size: 30px;
}
.card-description {
	font-size: 14px;
  line-height: 130%;
}
.custom-amount-container {
	max-width: 340px;
	margin: 0 auto;
	margin-top: 20px;
	text-align: center;
}
.custom-amount-container h3 {
	font-size: 18px;
	margin-bottom: 8px;
}
.custom-amount-container a.button {
	padding-left: 60px;
  padding-right: 60px;
}

@media (max-width: 820px) {
	.donate-cards-list {
		max-width: 560px;
		flex-wrap: wrap;
	}
}

/* About */

#included a {
	display: block;
	margin-bottom: 5px;
}
		</style>
	<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/462304.js"></script>
<!--  End of HubSpot Embed Code -->

<!-- Google Analytics Tracker  -->
<script>
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date()
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

  ga('create', 'UA-59172280-1', 'auto')
  ga('send', 'pageview')
</script>
<!-- End Google Analytics Tracker -->    <style id="page-content-custom-styles">
        [data-id="content-2"]{
	padding-top:120px;
	padding-bottom:120px;

}
    </style>
            <style data-name="background-content-colors">
            .mesmerize-inner-page .page-content,
            .mesmerize-inner-page .content,
            .mesmerize-front-page.mesmerize-content-padding .page-content {
               background-color: #ffffff;
            }
        </style>
        <style data-name="site-colors">
        
/* STYLE FOR color1 : .color1 : #008bd2 : #149FE6*/
a,
.comment-reply-link,
a.read-more{
color:#008bd2;
}

a:hover,
.comment-reply-link:hover,
.sidebar .widget > ul > li a:hover,
a.read-more:hover{
color:#149FE6;
}

.contact-form-wrapper input[type=submit],
button,.button,
.nav-links .numbers-navigation span.current, .post-comments .navigation .numbers-navigation span.current, .nav-links .numbers-navigation a:hover, .post-comments .navigation .numbers-navigation a:hover{
background-color:#008bd2;
border-color:#008bd2;
}

.contact-form-wrapper input[type=submit]:hover,
.nav-links .prev-navigation a:hover, .post-comments .navigation .prev-navigation a:hover, .nav-links .next-navigation a:hover, .post-comments .navigation .next-navigation a:hover,
button:hover, .button:hover{
background-color:#149FE6;
border-color:#149FE6;
}

.post-comments,
.sidebar .widget,
.post-list .post-list-item{
//border-bottom-color:#008bd2;
}

.nav-links .prev-navigation a, .post-comments .navigation .prev-navigation a, .nav-links .next-navigation a, .post-comments .navigation .next-navigation a{
border-color:#008bd2;
}

.tags-list a:hover{
border-color:#008bd2;
background-color:#008bd2;
}

svg.section-separator-top path.svg-white-bg,
svg.section-separator-bottom path.svg-white-bg{
/* */fill: #008bd2;
}    p.color1{
    color : #008bd2;
    }
    span.color1{
    color : #008bd2;
    }
    h1.color1{
    color : #008bd2;
    }
    h2.color1{
    color : #008bd2;
    }
    h3.color1{
    color : #008bd2;
    }
    h4.color1{
    color : #008bd2;
    }
    h5.color1{
    color : #008bd2;
    }
    h6.color1{
    color : #008bd2;
    }

.bg-color1{
/* */background-color:#008bd2;
}

a.color1:not(.button){
/* */color:#008bd2;
}

a.color1:not(.button):hover{
/* */color:#149FE6;
}

button.color1,
.button.color1{
/* */background-color:#008bd2;
/* */border-color:#008bd2;
}

button.color1:hover,
.button.color1:hover{
/* */background-color:#149FE6;
/* */border-color:#149FE6;
}

button.outline.color1,
.button.outline.color1{
/* */background:none;
/* */border-color:#008bd2;
/* */color:#008bd2;
}

button.outline.color1:hover,
.button.outline.color1:hover{
/* */background:none;
/* */border-color:rgba(0,139,210,0.7);
/* */color:rgba(0,139,210,0.9);
}


i.fa.color1{
/* */color:#008bd2;
}


i.fa.icon.bordered.color1{
/* */border-color:#008bd2;
}

i.fa.icon.reverse.color1{
/* */background-color:#008bd2;
/* */color: #ffffff;
}

i.fa.icon.bordered.color1{
/* */border-color:#008bd2;
}

i.fa.icon.reverse.bordered.color1{
/* */background-color:#008bd2;
/* */color: #ffffff;
}

.top-right-triangle.color1{
/* */border-right-color:#008bd2;
}
.checked.decoration-color1 li:before {
/* */color:#008bd2;
}

.stared.decoration-color1 li:before {
/* */color:#008bd2;
}

.card.card-color1{
/* */background-color:#008bd2;
}


.card.bottom-border-color1{
/* */border-bottom-color: #008bd2;
}

.grad-180-transparent-color1{
/* */ background-image: linear-gradient(180deg, rgba(0,139,210,0) 0%, rgba(0,139,210,0) 50%, rgba(0,139,210,0.6) 78%, rgba(0,139,210,0.9) 100%) !important;
}

/* STYLE FOR color2 : .color2 : #39b54a : #4DC95E*/
    p.color2{
    color : #39b54a;
    }
    span.color2{
    color : #39b54a;
    }
    h1.color2{
    color : #39b54a;
    }
    h2.color2{
    color : #39b54a;
    }
    h3.color2{
    color : #39b54a;
    }
    h4.color2{
    color : #39b54a;
    }
    h5.color2{
    color : #39b54a;
    }
    h6.color2{
    color : #39b54a;
    }

.bg-color2{
/* */background-color:#39b54a;
}

a.color2:not(.button){
/* */color:#39b54a;
}

a.color2:not(.button):hover{
/* */color:#4DC95E;
}

button.color2,
.button.color2{
/* */background-color:#39b54a;
/* */border-color:#39b54a;
}

button.color2:hover,
.button.color2:hover{
/* */background-color:#4DC95E;
/* */border-color:#4DC95E;
}

button.outline.color2,
.button.outline.color2{
/* */background:none;
/* */border-color:#39b54a;
/* */color:#39b54a;
}

button.outline.color2:hover,
.button.outline.color2:hover{
/* */background:none;
/* */border-color:rgba(57,181,74,0.7);
/* */color:rgba(57,181,74,0.9);
}


i.fa.color2{
/* */color:#39b54a;
}


i.fa.icon.bordered.color2{
/* */border-color:#39b54a;
}

i.fa.icon.reverse.color2{
/* */background-color:#39b54a;
/* */color: #ffffff;
}

i.fa.icon.bordered.color2{
/* */border-color:#39b54a;
}

i.fa.icon.reverse.bordered.color2{
/* */background-color:#39b54a;
/* */color: #ffffff;
}

.top-right-triangle.color2{
/* */border-right-color:#39b54a;
}
.checked.decoration-color2 li:before {
/* */color:#39b54a;
}

.stared.decoration-color2 li:before {
/* */color:#39b54a;
}

.card.card-color2{
/* */background-color:#39b54a;
}


.card.bottom-border-color2{
/* */border-bottom-color: #39b54a;
}

.grad-180-transparent-color2{
/* */ background-image: linear-gradient(180deg, rgba(57,181,74,0) 0%, rgba(57,181,74,0) 50%, rgba(57,181,74,0.6) 78%, rgba(57,181,74,0.9) 100%) !important;
}

/* STYLE FOR color3 : .color3 : #969696 : #AAAAAA*/
    p.color3{
    color : #969696;
    }
    span.color3{
    color : #969696;
    }
    h1.color3{
    color : #969696;
    }
    h2.color3{
    color : #969696;
    }
    h3.color3{
    color : #969696;
    }
    h4.color3{
    color : #969696;
    }
    h5.color3{
    color : #969696;
    }
    h6.color3{
    color : #969696;
    }

.bg-color3{
/* */background-color:#969696;
}

a.color3:not(.button){
/* */color:#969696;
}

a.color3:not(.button):hover{
/* */color:#AAAAAA;
}

button.color3,
.button.color3{
/* */background-color:#969696;
/* */border-color:#969696;
}

button.color3:hover,
.button.color3:hover{
/* */background-color:#AAAAAA;
/* */border-color:#AAAAAA;
}

button.outline.color3,
.button.outline.color3{
/* */background:none;
/* */border-color:#969696;
/* */color:#969696;
}

button.outline.color3:hover,
.button.outline.color3:hover{
/* */background:none;
/* */border-color:rgba(150,150,150,0.7);
/* */color:rgba(150,150,150,0.9);
}


i.fa.color3{
/* */color:#969696;
}


i.fa.icon.bordered.color3{
/* */border-color:#969696;
}

i.fa.icon.reverse.color3{
/* */background-color:#969696;
/* */color: #ffffff;
}

i.fa.icon.bordered.color3{
/* */border-color:#969696;
}

i.fa.icon.reverse.bordered.color3{
/* */background-color:#969696;
/* */color: #ffffff;
}

.top-right-triangle.color3{
/* */border-right-color:#969696;
}
.checked.decoration-color3 li:before {
/* */color:#969696;
}

.stared.decoration-color3 li:before {
/* */color:#969696;
}

.card.card-color3{
/* */background-color:#969696;
}


.card.bottom-border-color3{
/* */border-bottom-color: #969696;
}

.grad-180-transparent-color3{
/* */ background-image: linear-gradient(180deg, rgba(150,150,150,0) 0%, rgba(150,150,150,0) 50%, rgba(150,150,150,0.6) 78%, rgba(150,150,150,0.9) 100%) !important;
}

/* STYLE FOR color4 : .color4 : #c3282d : #D73C41*/
    p.color4{
    color : #c3282d;
    }
    span.color4{
    color : #c3282d;
    }
    h1.color4{
    color : #c3282d;
    }
    h2.color4{
    color : #c3282d;
    }
    h3.color4{
    color : #c3282d;
    }
    h4.color4{
    color : #c3282d;
    }
    h5.color4{
    color : #c3282d;
    }
    h6.color4{
    color : #c3282d;
    }

.bg-color4{
/* */background-color:#c3282d;
}

a.color4:not(.button){
/* */color:#c3282d;
}

a.color4:not(.button):hover{
/* */color:#D73C41;
}

button.color4,
.button.color4{
/* */background-color:#c3282d;
/* */border-color:#c3282d;
}

button.color4:hover,
.button.color4:hover{
/* */background-color:#D73C41;
/* */border-color:#D73C41;
}

button.outline.color4,
.button.outline.color4{
/* */background:none;
/* */border-color:#c3282d;
/* */color:#c3282d;
}

button.outline.color4:hover,
.button.outline.color4:hover{
/* */background:none;
/* */border-color:rgba(195,40,45,0.7);
/* */color:rgba(195,40,45,0.9);
}


i.fa.color4{
/* */color:#c3282d;
}


i.fa.icon.bordered.color4{
/* */border-color:#c3282d;
}

i.fa.icon.reverse.color4{
/* */background-color:#c3282d;
/* */color: #ffffff;
}

i.fa.icon.bordered.color4{
/* */border-color:#c3282d;
}

i.fa.icon.reverse.bordered.color4{
/* */background-color:#c3282d;
/* */color: #ffffff;
}

.top-right-triangle.color4{
/* */border-right-color:#c3282d;
}
.checked.decoration-color4 li:before {
/* */color:#c3282d;
}

.stared.decoration-color4 li:before {
/* */color:#c3282d;
}

.card.card-color4{
/* */background-color:#c3282d;
}


.card.bottom-border-color4{
/* */border-bottom-color: #c3282d;
}

.grad-180-transparent-color4{
/* */ background-image: linear-gradient(180deg, rgba(195,40,45,0) 0%, rgba(195,40,45,0) 50%, rgba(195,40,45,0.6) 78%, rgba(195,40,45,0.9) 100%) !important;
}

/* STYLE FOR color5 : .color5 : #f2f2f2 : #FFFFFF*/
    p.color5{
    color : #f2f2f2;
    }
    span.color5{
    color : #f2f2f2;
    }
    h1.color5{
    color : #f2f2f2;
    }
    h2.color5{
    color : #f2f2f2;
    }
    h3.color5{
    color : #f2f2f2;
    }
    h4.color5{
    color : #f2f2f2;
    }
    h5.color5{
    color : #f2f2f2;
    }
    h6.color5{
    color : #f2f2f2;
    }

.bg-color5{
/* */background-color:#f2f2f2;
}

a.color5:not(.button){
/* */color:#f2f2f2;
}

a.color5:not(.button):hover{
/* */color:#FFFFFF;
}

button.color5,
.button.color5{
/* */background-color:#f2f2f2;
/* */border-color:#f2f2f2;
}

button.color5:hover,
.button.color5:hover{
/* */background-color:#FFFFFF;
/* */border-color:#FFFFFF;
}

button.outline.color5,
.button.outline.color5{
/* */background:none;
/* */border-color:#f2f2f2;
/* */color:#f2f2f2;
}

button.outline.color5:hover,
.button.outline.color5:hover{
/* */background:none;
/* */border-color:rgba(242,242,242,0.7);
/* */color:rgba(242,242,242,0.9);
}


i.fa.color5{
/* */color:#f2f2f2;
}


i.fa.icon.bordered.color5{
/* */border-color:#f2f2f2;
}

i.fa.icon.reverse.color5{
/* */background-color:#f2f2f2;
/* */color: #ffffff;
}

i.fa.icon.bordered.color5{
/* */border-color:#f2f2f2;
}

i.fa.icon.reverse.bordered.color5{
/* */background-color:#f2f2f2;
/* */color: #ffffff;
}

.top-right-triangle.color5{
/* */border-right-color:#f2f2f2;
}
.checked.decoration-color5 li:before {
/* */color:#f2f2f2;
}

.stared.decoration-color5 li:before {
/* */color:#f2f2f2;
}

.card.card-color5{
/* */background-color:#f2f2f2;
}


.card.bottom-border-color5{
/* */border-bottom-color: #f2f2f2;
}

.grad-180-transparent-color5{
/* */ background-image: linear-gradient(180deg, rgba(242,242,242,0) 0%, rgba(242,242,242,0) 50%, rgba(242,242,242,0.6) 78%, rgba(242,242,242,0.9) 100%) !important;
}

/* STYLE FOR color6 : .color6 : #ffffff : #FFFFFF*/
    p.color6{
    color : #ffffff;
    }
    span.color6{
    color : #ffffff;
    }
    h1.color6{
    color : #ffffff;
    }
    h2.color6{
    color : #ffffff;
    }
    h3.color6{
    color : #ffffff;
    }
    h4.color6{
    color : #ffffff;
    }
    h5.color6{
    color : #ffffff;
    }
    h6.color6{
    color : #ffffff;
    }

.bg-color6{
/* */background-color:#ffffff;
}

a.color6:not(.button){
/* */color:#ffffff;
}

a.color6:not(.button):hover{
/* */color:#FFFFFF;
}

button.color6,
.button.color6{
/* */background-color:#ffffff;
/* */border-color:#ffffff;
}

button.color6:hover,
.button.color6:hover{
/* */background-color:#FFFFFF;
/* */border-color:#FFFFFF;
}

button.outline.color6,
.button.outline.color6{
/* */background:none;
/* */border-color:#ffffff;
/* */color:#ffffff;
}

button.outline.color6:hover,
.button.outline.color6:hover{
/* */background:none;
/* */border-color:rgba(255,255,255,0.7);
/* */color:rgba(255,255,255,0.9);
}


i.fa.color6{
/* */color:#ffffff;
}


i.fa.icon.bordered.color6{
/* */border-color:#ffffff;
}

i.fa.icon.reverse.color6{
/* */background-color:#ffffff;
/* */color: #ffffff;
}

i.fa.icon.bordered.color6{
/* */border-color:#ffffff;
}

i.fa.icon.reverse.bordered.color6{
/* */background-color:#ffffff;
/* */color: #ffffff;
}

.top-right-triangle.color6{
/* */border-right-color:#ffffff;
}
.checked.decoration-color6 li:before {
/* */color:#ffffff;
}

.stared.decoration-color6 li:before {
/* */color:#ffffff;
}

.card.card-color6{
/* */background-color:#ffffff;
}


.card.bottom-border-color6{
/* */border-bottom-color: #ffffff;
}

.grad-180-transparent-color6{
/* */ background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.6) 78%, rgba(255,255,255,0.9) 100%) !important;
}

/* STYLE FOR color7 : .color7 : #585858 : #6C6C6C*/
    p.color7{
    color : #585858;
    }
    span.color7{
    color : #585858;
    }
    h1.color7{
    color : #585858;
    }
    h2.color7{
    color : #585858;
    }
    h3.color7{
    color : #585858;
    }
    h4.color7{
    color : #585858;
    }
    h5.color7{
    color : #585858;
    }
    h6.color7{
    color : #585858;
    }

.bg-color7{
/* */background-color:#585858;
}

a.color7:not(.button){
/* */color:#585858;
}

a.color7:not(.button):hover{
/* */color:#6C6C6C;
}

button.color7,
.button.color7{
/* */background-color:#585858;
/* */border-color:#585858;
}

button.color7:hover,
.button.color7:hover{
/* */background-color:#6C6C6C;
/* */border-color:#6C6C6C;
}

button.outline.color7,
.button.outline.color7{
/* */background:none;
/* */border-color:#585858;
/* */color:#585858;
}

button.outline.color7:hover,
.button.outline.color7:hover{
/* */background:none;
/* */border-color:rgba(88,88,88,0.7);
/* */color:rgba(88,88,88,0.9);
}


i.fa.color7{
/* */color:#585858;
}


i.fa.icon.bordered.color7{
/* */border-color:#585858;
}

i.fa.icon.reverse.color7{
/* */background-color:#585858;
/* */color: #ffffff;
}

i.fa.icon.bordered.color7{
/* */border-color:#585858;
}

i.fa.icon.reverse.bordered.color7{
/* */background-color:#585858;
/* */color: #ffffff;
}

.top-right-triangle.color7{
/* */border-right-color:#585858;
}
.checked.decoration-color7 li:before {
/* */color:#585858;
}

.stared.decoration-color7 li:before {
/* */color:#585858;
}

.card.card-color7{
/* */background-color:#585858;
}


.card.bottom-border-color7{
/* */border-bottom-color: #585858;
}

.grad-180-transparent-color7{
/* */ background-image: linear-gradient(180deg, rgba(88,88,88,0) 0%, rgba(88,88,88,0) 50%, rgba(88,88,88,0.6) 78%, rgba(88,88,88,0.9) 100%) !important;
}

/* STYLE FOR color8 : .color8 : #ff696e : #FF7D82*/
    p.color8{
    color : #ff696e;
    }
    span.color8{
    color : #ff696e;
    }
    h1.color8{
    color : #ff696e;
    }
    h2.color8{
    color : #ff696e;
    }
    h3.color8{
    color : #ff696e;
    }
    h4.color8{
    color : #ff696e;
    }
    h5.color8{
    color : #ff696e;
    }
    h6.color8{
    color : #ff696e;
    }

.bg-color8{
/* */background-color:#ff696e;
}

a.color8:not(.button){
/* */color:#ff696e;
}

a.color8:not(.button):hover{
/* */color:#FF7D82;
}

button.color8,
.button.color8{
/* */background-color:#ff696e;
/* */border-color:#ff696e;
}

button.color8:hover,
.button.color8:hover{
/* */background-color:#FF7D82;
/* */border-color:#FF7D82;
}

button.outline.color8,
.button.outline.color8{
/* */background:none;
/* */border-color:#ff696e;
/* */color:#ff696e;
}

button.outline.color8:hover,
.button.outline.color8:hover{
/* */background:none;
/* */border-color:rgba(255,105,110,0.7);
/* */color:rgba(255,105,110,0.9);
}


i.fa.color8{
/* */color:#ff696e;
}


i.fa.icon.bordered.color8{
/* */border-color:#ff696e;
}

i.fa.icon.reverse.color8{
/* */background-color:#ff696e;
/* */color: #ffffff;
}

i.fa.icon.bordered.color8{
/* */border-color:#ff696e;
}

i.fa.icon.reverse.bordered.color8{
/* */background-color:#ff696e;
/* */color: #ffffff;
}

.top-right-triangle.color8{
/* */border-right-color:#ff696e;
}
.checked.decoration-color8 li:before {
/* */color:#ff696e;
}

.stared.decoration-color8 li:before {
/* */color:#ff696e;
}

.card.card-color8{
/* */background-color:#ff696e;
}


.card.bottom-border-color8{
/* */border-bottom-color: #ff696e;
}

.grad-180-transparent-color8{
/* */ background-image: linear-gradient(180deg, rgba(255,105,110,0) 0%, rgba(255,105,110,0) 50%, rgba(255,105,110,0.6) 78%, rgba(255,105,110,0.9) 100%) !important;
}

/* STYLE FOR color-white : .color-white : #ffffff : #FFFFFF*/
    p.color-white{
    color : #ffffff;
    }
    span.color-white{
    color : #ffffff;
    }
    h1.color-white{
    color : #ffffff;
    }
    h2.color-white{
    color : #ffffff;
    }
    h3.color-white{
    color : #ffffff;
    }
    h4.color-white{
    color : #ffffff;
    }
    h5.color-white{
    color : #ffffff;
    }
    h6.color-white{
    color : #ffffff;
    }

.bg-color-white{
/* */background-color:#ffffff;
}

a.color-white:not(.button){
/* */color:#ffffff;
}

a.color-white:not(.button):hover{
/* */color:#FFFFFF;
}

button.color-white,
.button.color-white{
/* */background-color:#ffffff;
/* */border-color:#ffffff;
}

button.color-white:hover,
.button.color-white:hover{
/* */background-color:#FFFFFF;
/* */border-color:#FFFFFF;
}

button.outline.color-white,
.button.outline.color-white{
/* */background:none;
/* */border-color:#ffffff;
/* */color:#ffffff;
}

button.outline.color-white:hover,
.button.outline.color-white:hover{
/* */background:none;
/* */border-color:rgba(255,255,255,0.7);
/* */color:rgba(255,255,255,0.9);
}


i.fa.color-white{
/* */color:#ffffff;
}


i.fa.icon.bordered.color-white{
/* */border-color:#ffffff;
}

i.fa.icon.reverse.color-white{
/* */background-color:#ffffff;
/* */color: #ffffff;
}

i.fa.icon.bordered.color-white{
/* */border-color:#ffffff;
}

i.fa.icon.reverse.bordered.color-white{
/* */background-color:#ffffff;
/* */color: #ffffff;
}

.top-right-triangle.color-white{
/* */border-right-color:#ffffff;
}
.checked.decoration-color-white li:before {
/* */color:#ffffff;
}

.stared.decoration-color-white li:before {
/* */color:#ffffff;
}

.card.card-color-white{
/* */background-color:#ffffff;
}


.card.bottom-border-color-white{
/* */border-bottom-color: #ffffff;
}

.grad-180-transparent-color-white{
/* */ background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.6) 78%, rgba(255,255,255,0.9) 100%) !important;
}

/* STYLE FOR color-black : .color-black : #000000 : #141414*/
    p.color-black{
    color : #000000;
    }
    span.color-black{
    color : #000000;
    }
    h1.color-black{
    color : #000000;
    }
    h2.color-black{
    color : #000000;
    }
    h3.color-black{
    color : #000000;
    }
    h4.color-black{
    color : #000000;
    }
    h5.color-black{
    color : #000000;
    }
    h6.color-black{
    color : #000000;
    }

.bg-color-black{
/* */background-color:#000000;
}

a.color-black:not(.button){
/* */color:#000000;
}

a.color-black:not(.button):hover{
/* */color:#141414;
}

button.color-black,
.button.color-black{
/* */background-color:#000000;
/* */border-color:#000000;
}

button.color-black:hover,
.button.color-black:hover{
/* */background-color:#141414;
/* */border-color:#141414;
}

button.outline.color-black,
.button.outline.color-black{
/* */background:none;
/* */border-color:#000000;
/* */color:#000000;
}

button.outline.color-black:hover,
.button.outline.color-black:hover{
/* */background:none;
/* */border-color:rgba(0,0,0,0.7);
/* */color:rgba(0,0,0,0.9);
}


i.fa.color-black{
/* */color:#000000;
}


i.fa.icon.bordered.color-black{
/* */border-color:#000000;
}

i.fa.icon.reverse.color-black{
/* */background-color:#000000;
/* */color: #ffffff;
}

i.fa.icon.bordered.color-black{
/* */border-color:#000000;
}

i.fa.icon.reverse.bordered.color-black{
/* */background-color:#000000;
/* */color: #ffffff;
}

.top-right-triangle.color-black{
/* */border-right-color:#000000;
}
.checked.decoration-color-black li:before {
/* */color:#000000;
}

.stared.decoration-color-black li:before {
/* */color:#000000;
}

.card.card-color-black{
/* */background-color:#000000;
}


.card.bottom-border-color-black{
/* */border-bottom-color: #000000;
}

.grad-180-transparent-color-black{
/* */ background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 78%, rgba(0,0,0,0.9) 100%) !important;
}
    </style>
    </head>

<body class="home page-template page-template-page-templates page-template-homepage page-template-page-templateshomepage-php page page-id-4 custom-background wp-custom-logo mesmerize-front-page mesmerize-content-no-padding ">


<div id="page-top" class="header-top homepage">
        <div class="navigation-bar coloured-nav homepage"  data-sticky='0'  data-sticky-mobile='1'  data-sticky-to='top' >
    <div class="navigation-wrapper dark-logo fixed-dark-logo">
    	<div class="row basis-auto">
	        <div class="logo_col col-xs col-sm-fit">
	            <a href="https://horosproject.org/" class="custom-logo-link" rel="home" itemprop="url"><img width="253" height="76" src="https://horosproject.org/wp-content/uploads/2018/01/cropped-horos-logo-1.png" class="custom-logo" alt="Horos Project" itemprop="logo" /></a>	        </div>
	        <div class="main_menu_col col-xs">
	            <div id="mainmenu_container" class="row"><ul id="main_menu" class="active-line-bottom main-menu dropdown-menu"><li id="menu-item-1047" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1047"><a href="https://horosproject.org/about/">About</a></li>
<li id="menu-item-44" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-44"><a href="https://horosproject.org/professional-support/">Get Support</a></li>
<li id="menu-item-225" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-225"><a href="https://horosproject.org/get-involved/">Get Involved</a></li>
<li id="menu-item-1248" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1248"><a href="http://academy.horosproject.org">Training</a></li>
<li id="menu-item-1396" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1396"><a href="https://horosproject.org/horos-cloud/">Horos Cloud</a></li>
<li id="menu-item-390" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-390"><a href="http://blog.horosproject.org/">Blog</a></li>
<li id="menu-item-102" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a href="https://horosproject.org/donate/">Donate</a></li>
<li id="menu-item-40" class="highlighted-link menu-item menu-item-type-post_type menu-item-object-page menu-item-40"><a href="https://horosproject.org/download-horos/">Download</a></li>
</ul></div>    <a href="#" data-component="offcanvas" data-target="#offcanvas-wrapper" data-direction="right" data-width="300px" data-push="false">
        <div class="bubble"></div>
        <i class="fa fa-bars"></i>
    </a>
    <div id="offcanvas-wrapper" class="hide force-hide  offcanvas-right">
        <div class="offcanvas-top">
            <div class="logo-holder">
                <a href="https://horosproject.org/" class="custom-logo-link" rel="home" itemprop="url"><img width="253" height="76" src="https://horosproject.org/wp-content/uploads/2018/01/cropped-horos-logo-1.png" class="custom-logo" alt="Horos Project" itemprop="logo" /></a>            </div>
        </div>
        <div id="offcanvas-menu" class="menu-main-menu-container"><ul id="offcanvas_menu" class="offcanvas_menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1047"><a href="https://horosproject.org/about/">About</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-44"><a href="https://horosproject.org/professional-support/">Get Support</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-225"><a href="https://horosproject.org/get-involved/">Get Involved</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1248"><a href="http://academy.horosproject.org">Training</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1396"><a href="https://horosproject.org/horos-cloud/">Horos Cloud</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-390"><a href="http://blog.horosproject.org/">Blog</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a href="https://horosproject.org/donate/">Donate</a></li>
<li class="highlighted-link menu-item menu-item-type-post_type menu-item-object-page menu-item-40"><a href="https://horosproject.org/download-horos/">Download</a></li>
</ul></div>
            <div data-type="group"  data-dynamic-mod="true" class="social-icons">
        
            <a target="_blank"  class="social-icon" href="https://facebook.com">
                <i class="fa fa-facebook-official"></i>
            </a>

            
            <a target="_blank"  class="social-icon" href="https://twitter.com">
                <i class="fa fa-twitter-square"></i>
            </a>

            
            <a target="_blank"  class="social-icon" href="https://instagram.com">
                <i class="fa fa-instagram"></i>
            </a>

            
            <a target="_blank"  class="social-icon" href="https://plus.google.com/">
                <i class="fa fa-google-plus-square"></i>
            </a>

            
    </div>

        </div>
    	        </div>
	    </div>
    </div>
</div></div>


<div id="page" class="site">
    <div class="header-wrapper">
        <div  class='header-homepage  color-overlay' style='; background-image:url(&quot;https://horosproject.org/wp-content/uploads/2018/01/medical-image.jpg&quot;); background-color:#000000'>
                                    
    <div class="header-description gridContainer media-on-right">
        <div class="row header-description-row  ">
    <div class="header-hero-content col-md col-xs-12">
        <div class="row header-hero-content-v-align  top-sm">
            <div class="header-content col-xs-12">
                <div class="align-holder left">
					<h1 class="hero-title"><span style="font-family: Open Sans, arial, helvetica, sans-serif;font-weight: 600">Get Horos Academy!</span></h1><p class="header-subtitle"><font face="Open Sans, arial, helvetica, sans-serif">From basic to advanced features of Horos - with Horos Academy you can learn how to optimize the use of your favorite open source viewer.&nbsp;</font></p><div data-dynamic-mod-container class="header-buttons-wrapper"><a class="button big color1 customize-unpreviewable" target="_self" href="https://academy.horosproject.org">Horos Academy</a><a class="button big color6 outline" target="_self" href="https://horosproject.org/donate">Donate</a></div>                </div>
            </div>
        </div>
    </div>

    <div class="header-hero-media col-md col-xs-12">
        <div class="row header-hero-media-v-align middle-sm">
            <div class="col-xs-12">
				    <div class="video-popup-button with-image">
                    <img class="poster" src="https://horosproject.org/wp-content/uploads/2018/02/Screen-Shot-2018-02-13-at-10.20.50-PM.png"/>
                <a class="video-popup-button-link" data-fancybox data-video-lightbox="true" href="https://info.purview.net/hubfs/Horos%20Academy%20Sneak%20Peak.mp4">
            <i class="fa fa-play-circle-o"></i>
        </a>
    </div>
                </div>
        </div>
    </div>

</div>
    </div>

        <script>
        window.mesmerizeSetHeaderTopSpacing();
    </script>
    <div class='split-header'></div>
                                </div>
    </div>

<div class="page-content">
  <div class="content">
   <div  data-label="Horos Academy" data-id="cta-centered-section-grid" data-export-id="cta-centered-section-grid" data-category="cta" class="cta-centered-section-grid content-section content-section-spacing-medium bg-color1 white-text river_city" id="horos-academy"> <div  class=""> <div  class="row text-center"> <div  class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" data-type="column"> <h2  class="">Horos Academy</h2> <p  class="">




<!--[if gte mso 9]><xml          >
 <o          :OfficeDocumentSettings>
  <o          :AllowPNG></o:AllowPNG>
 </o:OfficeDocumentSettings>
</xml><![endif]-->


<!--[if gte mso 9]><xml          >
 <w          :WordDocument>
  <w          :View>Normal</w:View>
  <w          :Zoom>0</w:Zoom>
  <w          :TrackMoves></w:TrackMoves>
  <w          :TrackFormatting></w:TrackFormatting>
  <w          :PunctuationKerning></w:PunctuationKerning>
  <w          :ValidateAgainstSchemas></w:ValidateAgainstSchemas>
  <w          :SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w          :IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w          :AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w          :DoNotPromoteQF></w:DoNotPromoteQF>
  <w          :LidThemeOther>EN-US</w:LidThemeOther>
  <w          :LidThemeAsian>X-NONE</w:LidThemeAsian>
  <w          :LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
  <w          :Compatibility>
   <w          :BreakWrappedTables></w:BreakWrappedTables>
   <w          :SnapToGridInCell></w:SnapToGridInCell>
   <w          :WrapTextWithPunct></w:WrapTextWithPunct>
   <w          :UseAsianBreakRules></w:UseAsianBreakRules>
   <w          :DontGrowAutofit></w:DontGrowAutofit>
   <w          :SplitPgBreakAndParaMark></w:SplitPgBreakAndParaMark>
   <w          :EnableOpenTypeKerning></w:EnableOpenTypeKerning>
   <w          :DontFlipMirrorIndents></w:DontFlipMirrorIndents>
   <w          :OverrideTableStyleHps></w:OverrideTableStyleHps>
  </w:Compatibility>
  <m          :mathPr>
   <m          :mathFont m:val="Cambria Math"></m:mathFont>
   <m          :brkBin m:val="before"></m:brkBin>
   <m          :brkBinSub m:val="&#45;-"></m:brkBinSub>
   <m          :smallFrac m:val="off"></m:smallFrac>
   <m          :dispDef></m:dispDef>
   <m          :lMargin m:val="0"></m:lMargin>
   <m          :rMargin m:val="0"></m:rMargin>
   <m          :defJc m:val="centerGroup"></m:defJc>
   <m          :wrapIndent m:val="1440"></m:wrapIndent>
   <m          :intLim m:val="subSup"></m:intLim>
   <m          :naryLim m:val="undOvr"></m:naryLim>
  </m:mathPr></w:WordDocument>
</xml><![endif]--><!--[if gte mso 9]><xml          >
 <w          :LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"
  DefSemiHidden="false" DefQFormat="false" DefPriority="99"
  LatentStyleCount="375">
  <w          :LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"></w:LsdException>
  <w          :LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 7"></w:LsdException>
  <w          :LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 8"></w:LsdException>
  <w          :LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 9"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 4"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 5"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 6"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 7"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 8"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 9"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 7"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 8"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 9"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Indent"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote text"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation text"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="header"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footer"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index heading"></w:LsdException>
  <w          :LsdException Locked="false" Priority="35" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="caption"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of figures"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope address"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope return"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote reference"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation reference"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="line number"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="page number"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote reference"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote text"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of authorities"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="macro"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toa heading"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 4"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 5"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 4"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 5"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 4"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="10" QFormat="true" Name="Title"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Closing"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Signature"></w:LsdException>
  <w          :LsdException Locked="false" Priority="1" SemiHidden="true"
   UnhideWhenUsed="true" Name="Default Paragraph Font"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 4"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 5"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Message Header"></w:LsdException>
  <w          :LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Salutation"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Date"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Note Heading"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Block Text"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Hyperlink"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="FollowedHyperlink"></w:LsdException>
  <w          :LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"></w:LsdException>
  <w          :LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Document Map"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Plain Text"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="E-mail Signature"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Top of Form"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Bottom of Form"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal (Web)"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Acronym"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Address"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Cite"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Code"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Definition"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Keyboard"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Preformatted"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Sample"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Typewriter"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Variable"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Table"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation subject"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="No List"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 4"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 4"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 5"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 4"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 5"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 6"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 7"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 8"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 4"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 5"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 6"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 7"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 8"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Contemporary"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Elegant"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Professional"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 2"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 3"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Balloon Text"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" Name="Table Grid"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Theme"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"></w:LsdException>
  <w          :LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"></w:LsdException>
  <w          :LsdException Locked="false" Priority="60" Name="Light Shading"></w:LsdException>
  <w          :LsdException Locked="false" Priority="61" Name="Light List"></w:LsdException>
  <w          :LsdException Locked="false" Priority="62" Name="Light Grid"></w:LsdException>
  <w          :LsdException Locked="false" Priority="63" Name="Medium Shading 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="64" Name="Medium Shading 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="65" Name="Medium List 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="66" Name="Medium List 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="67" Name="Medium Grid 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="68" Name="Medium Grid 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="69" Name="Medium Grid 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="70" Name="Dark List"></w:LsdException>
  <w          :LsdException Locked="false" Priority="71" Name="Colorful Shading"></w:LsdException>
  <w          :LsdException Locked="false" Priority="72" Name="Colorful List"></w:LsdException>
  <w          :LsdException Locked="false" Priority="73" Name="Colorful Grid"></w:LsdException>
  <w          :LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="61" Name="Light List Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" Name="Revision"></w:LsdException>
  <w          :LsdException Locked="false" Priority="34" QFormat="true"
   Name="List Paragraph"></w:LsdException>
  <w          :LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"></w:LsdException>
  <w          :LsdException Locked="false" Priority="30" QFormat="true"
   Name="Intense Quote"></w:LsdException>
  <w          :LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="70" Name="Dark List Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="61" Name="Light List Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="70" Name="Dark List Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="61" Name="Light List Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="70" Name="Dark List Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="61" Name="Light List Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="70" Name="Dark List Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="61" Name="Light List Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="70" Name="Dark List Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="61" Name="Light List Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="70" Name="Dark List Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="19" QFormat="true"
   Name="Subtle Emphasis"></w:LsdException>
  <w          :LsdException Locked="false" Priority="21" QFormat="true"
   Name="Intense Emphasis"></w:LsdException>
  <w          :LsdException Locked="false" Priority="31" QFormat="true"
   Name="Subtle Reference"></w:LsdException>
  <w          :LsdException Locked="false" Priority="32" QFormat="true"
   Name="Intense Reference"></w:LsdException>
  <w          :LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"></w:LsdException>
  <w          :LsdException Locked="false" Priority="37" SemiHidden="true"
   UnhideWhenUsed="true" Name="Bibliography"></w:LsdException>
  <w          :LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"></w:LsdException>
  <w          :LsdException Locked="false" Priority="41" Name="Plain Table 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="42" Name="Plain Table 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="43" Name="Plain Table 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="44" Name="Plain Table 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="45" Name="Plain Table 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="40" Name="Grid Table Light"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="Grid Table 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="Grid Table 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="Grid Table 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46" Name="List Table 1 Light"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="List Table 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="List Table 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="List Table 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="List Table 5 Dark"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 1"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 2"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 3"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 4"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 5"></w:LsdException>
  <w          :LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 6"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Mention"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Smart Hyperlink"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Hashtag"></w:LsdException>
  <w          :LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Unresolved Mention"></w:LsdException>
 </w:LatentStyles>
</xml><![endif]-->

<!--[if gte mso 10]>
<style          >
 /* Style Definitions */
 table.MsoNormalTable
	{mso-style-name:"Table Normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0in 5.4pt 0in 5.4pt;
	mso-para-margin:0in;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:12.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
</style>
<![endif]-->



<!--StartFragment-->

</p><p  class="MsoNormal"><span  style="font-family: &quot;Open Sans&quot;, serif; background-position: initial initial; background-repeat: initial initial;">In 4 modules taught by the Horos experts themselves, you will discover how to optimize your Horos use by understanding the basic to advanced features of Horos. &nbsp;</span><span  style="font-family: &quot;Open Sans&quot;, serif;"></span></p>

<!--EndFragment--><a  class="button big color8" href="https://academy.horosproject.org" target="lightbox" data-cp-link="1" data-icon=""> Take me to Horos Academy </a><img  class="custom-image" src="https://horosproject.org/wp-content/uploads/2018/04/Horos-Academy-Now-in-3-Languages.png">  </div> </div> </div> </div><div  data-label="Counters" data-id="counters-2" data-export-id="counters-2" data-category="counters" class="counters-2 content-section content-section-spacing" id="counters-2" style="background-color: rgb(245, 250, 253);"> <div  class="gridContainer"> <div  class="row text-center"> <div  class="section-title-col" data-type="column"> <h2  class="">Horos by the Numbers</h2>  </div> </div> <div  class="row" data-type="row"> <div  class="col-xs-12 col-sm-4 text-center space-bottom"> <i  class="fa icon fa-globe color1"></i> <h3  class="font-400" data-min="0" data-max="170" data-duration="2000" data-prefix="" data-suffix="+" data-countup="true" style="display: inline-block;"></h3> <h5  class="upper color2">countries</h5> </div> <div  class="col-xs-12 col-sm-4 text-center space-bottom"> <i  class="fa fa-smile-o icon color1"></i> <h3  class="font-400" data-min="10000" data-max="100000" data-duration="2000" data-prefix="" data-suffix="+" data-countup="true" style="display: inline-block;"></h3> <h5  class="upper color2">Horos users</h5> </div> <div  class="col-xs-12 col-sm-4 text-center space-bottom"> <i  class="fa icon fa-money color1"></i> <h3  class="font-400" data-min="0" data-max="2554" data-duration="2000" data-prefix="" data-suffix="" data-countup="true" style="display: inline-block;"></h3> <h5  class="upper color2">Donors</h5> </div> </div> </div> </div><div  data-label="Donate" data-id="content-8" data-export-id="content-8" data-category="content" class="content-8 content-section content-section-spacing river_city" id="donate" style="background-size: cover; background-position: center top;"> <div  class=""> 
<div  class="row">
        <div  data-type="column" class="section-title-col">
            <h2  class="text-center"><span  style="color: rgb(255, 255, 255);">Help Keep Horos Free</span></h2>
            <p  class="lead"><span  style="color: rgb(255, 255, 255);">We have big plans for Horos in 2018, but in order to meet the growing demand for increased functionality from the community, we will need your help to take the project to the next level. 
<br ><br ><span  style="font-weight: 600;">Horos is a free, open-source software and operates off donations from the community.</span></span></p>
        </div>
    </div>
    <div  class="donate-cards-list">
            <div  class="donate-card card shadow-small rounded" data-default="shadow-small" data-featured="shadow-large" data-type="column">
                <h3  class="font-300 upper card-title">Horos<br >User</h3>
                <h3  class="card-value">$10</h3>
                <p  class="card-description">Show your love!</p>
                <a  class="button upper y-move color2" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=27ZG5EPCLHKHL" data-default="color1" data-featured="color2" target="_blank" data-cp-link="1" data-icon="">Donate</a> 
            </div>
            <div  class="donate-card card shadow-small rounded" data-default="shadow-small" data-featured="shadow-large" data-type="column">
                <h3  class="font-300 upper card-title">Open source sponsor</h3>
                <h3  class="card-value">$50</h3>
                <p  class="card-description">Getting Horos value</p>
                <a  class="button upper y-move color2" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=9ZBP5YQVSXR24" data-default="color1" data-featured="color2" target="_blank" data-cp-link="1" data-icon="">Donate</a> 
            </div>
            <div  class="donate-card card shadow-small rounded" data-default="shadow-small" data-featured="shadow-large" data-type="column">
                <h3  class="font-300 upper card-title">Open source champion</h3>
                <h3  class="card-value">$250</h3>
                <p  class="card-description">Keepin’ it open</p>
                <a  class="button upper y-move color2" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=EPF5RD79CGVE8" data-default="color1" data-featured="color2" target="_blank" data-cp-link="1" data-icon="">Donate</a> 
            </div>
            <div  class="donate-card card shadow-small rounded" data-default="shadow-small" data-featured="shadow-large" data-type="column">
                <h3  class="font-300 upper card-title">Sponsor a bug fix</h3>
                <h3  class="card-value">$500</h3>
                <p  class="card-description">Hey, can you help us out?</p>
                <a  class="button upper y-move color2" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=Y4CT4GFUCPLTS" data-default="color1" data-featured="color2" target="_blank" data-cp-link="1" data-icon="">Donate</a> 
            </div>
            <div  class="donate-card card shadow-small rounded" data-default="shadow-small" data-featured="shadow-large" data-type="column">
                <h3  class="font-300 upper card-title">Website sponsor</h3>
                <h3  class="card-value">$2500</h3>
                <p  class="card-description">I’m with you!</p>
                <a  class="button upper y-move color2" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=RTUESUU4GCFZY" data-default="color1" data-featured="color2" target="_blank" data-cp-link="1" data-icon="">Donate</a> 
            </div>
				</div>
			<div  class="custom-amount-container" data-type="column">
				<h3  class=""><span  style="color: rgb(255, 255, 255);">Want to donate another amount?</span></h3>
				<a  class="button upper y-move color2" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=Y79VET82WPMHS" data-default="color1" data-featured="color2" target="_blank" data-cp-link="1" data-icon="">Donate custom amount</a> 
			</div>
</div> </div><div  data-label="Get Involved" data-id="features-12" data-export-id="features-12" data-category="features" class="features-12 content-section content-section-spacing" id="get-involved" style="background-color: rgb(255, 255, 255); background-image: none;"> <div  class="gridContainer"> <div  class="row text-center"> <div  class="section-title-col" data-type="column"> <h2  class=""><span  style="color: rgb(0, 139, 210);"> Get Involved with the Horos Community</span></h2> <p  class="lead"> Discuss Horos in our community forum, contribute code to the project via our Github repository or help us make Horos better by reporting an issue you’ve found.
</p> </div> </div> <div  class="row spaced-cols" data-type="row"> <div  class="col-sm-6 col-md-4 "> <div  class="row space-bottom"> <div  class="col-sm-fit icon-column"> <i  class="fa icon fa-comments bordered round big color1"> </i> </div> <div  class="col-sm" data-type="column"> <h5  class="color2"><span  style="color: rgb(0, 139, 210);">HOROS FORUM</span></h5>  <a  class="button color1" href="https://groups.google.com/forum/#!forum/horos-project" target="_self" data-cp-link="1" data-icon="fa-external-link"><span  class="button-icon fa fa-external-link"></span>FORUM CHAT</a></div> </div> </div>    <div  class="col-sm-6 col-md-4"> <div  class="row space-bottom"> <div  class="col-sm-fit icon-column"> <i  class="fa icon fa-github bordered round big color1"> </i> </div> <div  class="col-sm" data-type="column"> <h5  class="color2"><span  style="color: rgb(0, 139, 210);">REPORT AN ISSUE</span></h5>  <a  class="button color1" href="https://github.com/horosproject/horos/issues" target="_self" data-cp-link="1" data-icon="fa-external-link"><span  class="button-icon fa fa-external-link"></span>REPORT AN ISSUE</a></div> </div> </div><div  class="col-sm-6 col-md-4"> <div  class="row space-bottom"> <div  class="col-sm-fit icon-column"> <i  class="fa icon fa-github-alt bordered round big color1"> </i> </div> <div  class="col-sm" data-type="column"> <h5  class="color2"><span  style="color: rgb(0, 139, 210);">SOURCE CODE</span></h5>  <a  class="button color1" href="https://github.com/horosproject/horos" target="_self" data-cp-link="1" data-icon="fa-external-link"><span  class="button-icon fa fa-external-link"></span>GITHUB REPOSITORY</a></div> </div> </div></div> </div> </div><div  data-label="Get Support" data-id="content-undefined" data-export-id="content-7" data-category="content" class="content-7 content-section content-section-spacing" id="get-support" style="background-color: rgb(242, 242, 242); background-image: none;"> <div  class="gridContainer"> <div  class="row middle-sm"> <div  class="col-sm-6 space-bottom-xs" data-type="column"> <h2  class="" style="color: rgb(0, 139, 210); font-size: 28px; line-height: 1.2; margin-bottom: 5px;"><div ><span >Got Horos questions? We got answers!</span></div></h2> <h3  class=""><span  style="font-family: &quot;Open Sans&quot;, arial, helvetica, sans-serif; font-weight: 300; color: rgb(60, 66, 79); font-size: 21px; line-height: 1.2;">Get the most out of Horos with expert support!</span></h3><p  class=""><span  style="color: rgb(60, 66, 79);"><a  href="http://www.purview.net?__hstc=19530023.18803f1b651167a179afcf1de82df0f5.1518629163176.1525293336145.1525308626473.80&amp;__hssc=19530023.1.1525308626473&amp;__hsfp=1060266598" target="_blank" class="" data-mce-selected="1">Purview</a> is now offering affordable support services for Horos. If you need help with installation, setup, configuration, or troubleshooting, our experts are here for you.
<br ><br >We find that many of the most common questions can be resolved quickly with our expert support, that’s why we offer 15 minute sessions with simple pricing that allows you to only pay for the time you need.</span></p> <a  class="button color1" href="https://horosproject.org/professional-support" target="_self" data-cp-link="1" data-icon=""> GET PROFESSIONAL SUPPORT NOW </a> </div> <div  class="col-sm-6" data-type="column"> <img  src="https://horosproject.org/wp-content/uploads/2018/02/horos-support-3.png" class=""> </div> </div> </div> </div><div  data-label="Horos intro" data-id="content-7" data-export-id="content-7" data-category="content" class="content-7 content-section content-section-spacing" id="horos-intro" style="background-color: rgb(255, 255, 255); background-image: none;"> <div  class="gridContainer"> <div  class="row middle-sm"> <div  class="col-sm-6 space-bottom-xs" data-type="column"> <h2  class=""><span  style="color: rgb(0, 139, 210);">Meet Horos</span></h2> <p  class=""><span  style="color: rgb(60, 66, 79);">Horos™ is a free, open-source medical image viewer with over 100,000 users worldwide. Its core technology is based on OsiriX™&nbsp;and other open source medical imaging libraries. Horos is made available under the GNU Lesser General Public License, Version 3 (LGPL-3.0).</span></p> <a  class="button color1" href="https://horosproject.org/download-horos" target="_self" data-cp-link="1" data-icon=""> START USING HOROS FOR FREE </a> </div> <div  class="col-sm-6" data-type="column"> <img  src="https://horosproject.org/wp-content/uploads/2018/02/Mockup-Horos-1-1.png" class=""></div> </div> </div> </div><div  data-label="Latest News" data-id="content-12" data-export-id="content-12" data-category="content" class="content-12 content-section content-section-spacing" id="latest-news" style="background-color: rgb(242, 242, 242); background-image: none;"> <div  class="gridContainer"> <div  class="row text-center"> <div  class="section-title-col" data-type="column"> <h2  class=""><span  style="color: rgb(0, 139, 210);"> Latest News</span></h2>  </div> </div> <div  class="row center-xs middle-xs"> <div  class="col-sm-9" data-type="column"><div  data-editable="true" data-name="ope-widgets-area" data-content-shortcode="mesmerize_display_widgets_area id=&quot;mesmerize_users_custom_widgets_areas_0&quot; " class=""><div data-name="mesmerize-widgets-area"><div id="rss-3" class="widget widget_rss"><h4><a class="rsswidget" href="http://blog.horosproject.org/rss.xml"><img class="rss-widget-icon" style="border:0" width="14" height="14" src="https://horosproject.org/wp-includes/images/rss.png" alt="RSS" /></a> <a class="rsswidget" href="http://blog.horosproject.org/">Horos Blog</a></h4><ul><li><a class='rsswidget' href='http://blog.horosproject.org/hipaa-vs-gdpr-what-should-i-know'>HIPAA vs GDPR - What Should I Know?</a><div class="rssSummary">The General Data Protection Regulation (GDPR) of the European Union (EU) is like HIPAA...with a twist...a big twist. Seriously. If you thought HIPAA had high fines, the revised GDPR will give a run for your money. So, do yourself a favor and take the precautions necessary to abide to these new regulations - now in [&hellip;]</div></li><li><a class='rsswidget' href='http://blog.horosproject.org/how-horos-enables-healthcare-professionals-in-turkey-to-read-images-at-home'>How Horos Enables Professionals in Turkey to Read Images at Home</a><div class="rssSummary">While Horos certainly still has a way to go before it can be put in the same category as a Cloud based DICOM viewer, it is still one step ahead of an onsite and physically bulky viewing workstation. With Horos, as a physician or academic, you can download the application onto your Mac laptop and [&hellip;]</div></li><li><a class='rsswidget' href='http://blog.horosproject.org/can-i-collaborate-live-with-horos'>Can I Collaborate Live With Horos?</a><div class="rssSummary">Physicians often find themselves needing to collaborate on patient studies. If you are only using local onsite solutions like Horos, you are probably having to send the images via mail. So long story short, no, Horos does not allow you to collaborate in real time with a colleague. However, if that is something you need, [&hellip;]</div></li><li><a class='rsswidget' href='http://blog.horosproject.org/spotlight-horos-for-neurology'>Spotlight: Horos For Neurology</a><div class="rssSummary">Did you know that Horos is literally present all over the world? That’s right, all seven continents on Planet Earth now have Horos users residing on them. That is quite an accomplishment considering that Horos is only a little over 3 years old. The features in Horos are quite amazing as they can be used [&hellip;]</div></li><li><a class='rsswidget' href='http://blog.horosproject.org/how-horos-enables-physiotherapists-to-make-better-treatment-plans'>How Horos Enables Physiotherapists To Make Better Treatment Plans</a><div class="rssSummary">If you need to view medical images, there is not a specialty out there that cannot benefit from the use of a fully featured, open source DICOM viewer like Horos. From Azerbaijan to Zimbabwe, Horos is everywhere. In fact, one of our largest Horos user populations is in Italy. Read more to learn about how [&hellip;]</div></li><li><a class='rsswidget' href='http://blog.horosproject.org/teleradiologists-using-a-mac-dont-have-to-break-the-bank'>Teleradiologists Using A Mac Don&#039;t Have To Break The Bank</a><div class="rssSummary">While there are more Windows users out there than Mac, you will always find physicians using Apple products around the world. For them, Horos is a breath of fresh air, as it was built to perform on a Mac platform. From the Americas to Asia, Horos has a footprint everywhere. One such place is India.</div></li></ul></div></div></div>  </div> </div> </div> </div>  </div>
</div>

	<div  class='footer footer-content-lists footer-border-accent'>
    <div  class='footer-content' style=''>
        <div class="gridContainer">
            <div class="row">
                <div class="col-sm-8 flexbox">
                    <div class="row widgets-row">
                        <div class="col-sm-4">
                            <div id="nav_menu-3" class="widget widget_nav_menu"><div class="menu-main-menu-container"><ul id="menu-main-menu" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1047"><a href="https://horosproject.org/about/">About</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-44"><a href="https://horosproject.org/professional-support/">Get Support</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-225"><a href="https://horosproject.org/get-involved/">Get Involved</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1248"><a href="http://academy.horosproject.org">Training</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1396"><a href="https://horosproject.org/horos-cloud/">Horos Cloud</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-390"><a href="http://blog.horosproject.org/">Blog</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a href="https://horosproject.org/donate/">Donate</a></li>
<li class="highlighted-link menu-item menu-item-type-post_type menu-item-object-page menu-item-40"><a href="https://horosproject.org/download-horos/">Download</a></li>
</ul></div></div>                        </div>
                        <div class="col-sm-4">
                            <div id="text-6" class="widget widget_text">			<div class="textwidget"><p>The Horos Project is licensed under the GNU Lesser General Public License, Version 3.0 (LGPL 3.0).</p>
<p style="font-size: 11px; line-height: 1.4;">OsiriX<sup>TM</sup> is a trademark of Pixmeo SARL.<br />
Horos<sup>TM</sup> is a trademark of The Horos Project.<br />
<a href=https://github.com/GrokImageCompression/grok>Horos is linked against the Grok JPEG 2000 library</a></p>
</div>
		</div>                        </div>
                        <div class="col-sm-4">
                            <div id="text-5" class="widget widget_text">			<div class="textwidget"><p>For more information about the Horos Project, E-mail <a href="mailto:horos@horosproject.org">horos@horosproject.org</a>.</p>
</div>
		</div>                        </div>
                    </div>
                </div>
                <div class="col-sm-4 flexbox center-xs middle-xs content-section-spacing-medium footer-column-black">
                  <div>
                    <div class="footer-logo space-bottom-small">
                        <h2><span data-type="group"  data-dynamic-mod="true">Horos Project</span></h2>
                    </div>
                    <p  class="copyright" data-type="group" >© 2018 Horos Project.</p>                        <div data-type="group"  data-dynamic-mod="true" class="footer-social-icons">
        
            <a target="_blank"  class="social-icon" href="https://twitter.com/horosproject">
                <i class="fa fa-twitter"></i>
            </a>

            
            <a target="_blank"  class="social-icon" href="https://github.com/horosproject">
                <i class="fa fa-github"></i>
            </a>

            
            <a target="_blank"  class="social-icon" href="https://groups.google.com/forum/#!forum/horos-project">
                <i class="fa fa-comments"></i>
            </a>

            
    </div>

                      </div>
                </div>
            </div>
        </div>
    </div>
</div>
	</div>
<script type='text/javascript' src='https://horosproject.org/wp-includes/js/jquery/ui/effect.min.js?ver=1.11.4'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/themes/mesmerize-pro/assets/js/smoothscroll.min.js?ver=1.0.221'></script>
<script type='text/javascript' src='https://horosproject.org/wp-includes/js/jquery/ui/effect-slide.min.js?ver=1.11.4'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/themes/mesmerize-pro/assets/js/drop_menu_selection.min.js?ver=1.0.221'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/themes/mesmerize-pro/assets/js/kube.min.js?ver=1.0.221'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/themes/mesmerize-pro/assets/js/libs/fixto.min.js?ver=1.0.221'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/themes/mesmerize-pro/assets/js/sticky.js?ver=1.0.221'></script>
<script type='text/javascript' src='https://horosproject.org/wp-includes/js/imagesloaded.min.js?ver=3.2.0'></script>
<script type='text/javascript' src='https://horosproject.org/wp-includes/js/masonry.min.js?ver=3.3.2'></script>
<script type='text/javascript' src='https://horosproject.org/wp-includes/js/comment-reply.min.js?ver=4.9.3'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/themes/mesmerize-pro/assets/js/theme.js?ver=1.0.221'></script>
<script type='text/javascript' src='https://horosproject.org/wp-content/themes/mesmerize-pro/pro/assets/js/jquery.fancybox.min.js?ver=3.0.47'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var mesmerize_theme_pro_settings = {"reveal-effect":{"enabled":false}};
/* ]]> */
</script>
<script type='text/javascript' src='https://horosproject.org/wp-content/themes/mesmerize-pro/pro/assets/js/theme.js?ver=1.0.221'></script>
<script type='text/javascript' src='https://horosproject.org/wp-includes/js/wp-embed.min.js?ver=4.9.3'></script>
</body>
</html>