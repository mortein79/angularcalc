(function(angular) {
    'use strict';
    angular.module('szamologepApp', [])

    .controller('szamologepCtrl', ['$scope', function($scope) {

        var arg1 = "", arg2 = "", operator = "";

        $scope.szdisplay = {eredmeny: '', operator: ''}

        $scope.clkNumber = function (ev) {
          var el = ev.currentTarget 
          
          if (operator == '')
          {
              arg1 += "" + el.attributes['data-value'].value
              $scope.szdisplay.eredmeny = arg1
          } else {
              arg2 += "" + el.attributes['data-value'].value
              $scope.szdisplay.eredmeny = arg2
          }

        };

        $scope.clkFn = function(ev, type) {
            operator = type
            $scope.szdisplay.operator = type
        }

        $scope.clkEval = function(ev)
        {
            if (arg1 != '' && arg2 != '' && operator != '')
            {
                var val1 = parseFloat(arg1)
                var val2 = parseFloat(arg2)
                if (operator == '/')
                {
                    $scope.szdisplay.eredmeny = val1 / val2
                } else if (operator == '*')
                {
                    $scope.szdisplay.eredmeny = val1 * val2
                } else if (operator == '-')
                {
                    $scope.szdisplay.eredmeny = val1 - val2
                } else if (operator == '+')
                {
                    $scope.szdisplay.eredmeny = val1 + val2
                }
                arg1 = $scope.szdisplay.eredmeny
                $scope.szdisplay.operator = ''
            }
        }
        
        $scope.clkClear = function()
        {
            arg1 = ''
            arg2 = ''
            operator = ''
            $scope.szdisplay.eredmeny = ''
            $scope.szdisplay.operator = ''
        }

        $scope.szgKeyup = function(ev)
        {
            var res = $filter('filter')([
                48,49,50,51,52,53,54,55,56,57, // 0 - 9
                96,97,98,99,100,101,102,103,104,105, // 0 - 9
                107,109,111,106, // + - / *
                51,173,54,173 // + - / *
            ], ev.keyCode)
            console.log(res)
        }
    
      
      
    }])

    .directive('szgDisplay', function(){
        return {
            templateUrl: 'templates/szg-display.html'
        }
    })

    
})(window.angular);