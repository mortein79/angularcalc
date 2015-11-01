(function(angular) {
    'use strict';
    angular.module('szamologepApp', [])

    .controller('szamologepCtrl', ['$scope', function($scope) {

        var arg1 = "", arg2 = "", operator = "";

        $scope.clkNumber = function (ev) {
          var el = ev.currentTarget 
          
          if (operator == '')
          {
              arg1 += "" + el.attributes['data-value'].value
              $scope.eredmeny = arg1
          } else {
              arg2 += "" + el.attributes['data-value'].value
              $scope.eredmeny = arg2
          }
          
          
        };

        $scope.clkFn = function(ev, type) {
            operator = type
        }

        $scope.clkEval = function(ev)
        {
            if (arg1 != '' && arg2 != '' && operator != '')
            {
                var val1 = parseFloat(arg1)
                var val2 = parseFloat(arg2)
                if (operator == '/')
                {
                    $scope.eredmeny = val1 / val2
                } else if (operator == '*')
                {
                    $scope.eredmeny = val1 * val2
                } else if (operator == '-')
                {
                    $scope.eredmeny = val1 - val2
                } else if (operator == '+')
                {
                    $scope.eredmeny = val1 + val2
                }
                arg1 = $scope.eredmeny
            }
        }
        
        $scope.clkClear = function()
        {
            arg1 = ''
            arg2 = ''
            operator = ''
            $scope.eredmeny = ''
        }

    
      
      
    }])
    
    
})(window.angular);