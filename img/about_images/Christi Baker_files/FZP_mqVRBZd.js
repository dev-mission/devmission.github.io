if (self.CavalryLogger) { CavalryLogger.start_js(["nQiHe"]); }

__d('legacy:dom',['DOM'],(function a(b,c,d,e,f,g){b.DOM=c('DOM');}),3);
__d('AsyncLayoutHomeToHomeTransition',['Arbiter','NavigationMessage','PageTransitionsRegistrar','URI'],(function a(b,c,d,e,f,g){var h={init:function i(){c('Arbiter').subscribeOnce('AsyncLayout/initialized',function(){h._addPageTransitionHandler();});},_isHomePagePath:function i(j){return j==='/'||j==='/home.php'||!j;},_navigate:function i(j){if(this._isHomePagePath(j.getPath())&&this._isHomePagePath(c('URI').getMostRecentURI().getPath())){c('Arbiter').inform(c('NavigationMessage').NAVIGATION_BEGIN,{useAjaxPipe:true,params:babelHelpers['extends']({},j.getQueryData(),{path:j.getPath(),endpoint:'/ajax/home/generic.php',sidecol:true})});return true;}h._addPageTransitionHandler();return false;},_addPageTransitionHandler:function i(){c('PageTransitionsRegistrar').registerHandler(function(j){return h._navigate(j);},6);}};f.exports=h;}),null);