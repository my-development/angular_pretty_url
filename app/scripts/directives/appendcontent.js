'use strict';

/**
 * @ngdoc directive
 * @name angularPrettyUrlApp.directive:appendContent
 * @description
 * # appendContent
 */
angular.module('angularPrettyUrlApp')
  .directive('appendContent', function ($interval, $compile, tshirtService) {
    return {
   //   templateUrl: '/views/shared/appendContent.html',
      restrict: 'E',
      scope : {
      	tshirts: '&'
      },
      link: function postLink(scope, element, attrs) {
      	    var interval;
        	var promise;
       	var el = angular.element('#apppendArea');
   	     var  pullTshirts = function() {
			   promise = tshirtService.getTshirts();
        	
        		promise.then(function(reps){
        			console.log('postLOInf' + JSON.stringify(reps));
        			scope.tshirts = reps;
        			
        			console.log('postLOInf tshirts' + JSON.stringify(scope.tshirts));
        		},function(err){
        			console.log(err);
        		});
      	    };
        	
        	var showTshirte = function() {
        		console.log('show tshire');

				if (scope.tshirts.length > 0) {
      	    		for(var t in scope.tshirts) {
					console.log('show ' + JSON.stringify(scope.tshirts[t]));
					var tshirt = scope.tshirts[t];
					el.prepend("<div><p>%%%%%%%%%%%%%%%%%</P> \
						<p><b>	" + t + "</b></p> \
						<p><b>	" + tshirt['_id'] + " </b></p> \
						<p>" + tshirt.model + "</p> \
						<p>" + tshirt.color + "</p> \
						<p>" + tshirt.style + "</p> \
						<p>" + tshirt.size + "</p> \
						<data-new-directive /> \
						<p>%%%%%%%%%%%%%%%%%</P><br /></div>")	
					$compile(el)(scope);
        			element.append(el);
					tshirtService.deleteTshirt(tshirt['_id']);
					};
      	    	};
        	};

        	interval = $interval(function(){
        		console.log('------INTIMER----');
        		pullTshirts();
		   	}, 5000);

        	element.on('$destroy', function() {
              console.log('cancel the interval')
          		$interval.cancel(interval);
        	});
        	
        	scope.$watch('tshirts', function(value){
        		console.log('valeu===>' + JSON.stringify(value));
        		if (value) {
        			showTshirte();
        		}
        	});
        
      }
    };
  });
