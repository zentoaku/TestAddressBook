app.directive("validateNotify", function($compile){
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var opt = scope.$eval(attrs.validateNotify);

            if(attrs.validatorIndex !== undefined){
                var input = opt.input + "_" + scope.$eval(attrs.validatorIndex);
            } else {
                var input = opt.input;
            }
            var messages = opt.messages;

            var html = '<span class="glyphicon glyphicon-ok form-control-feedback" ng-show="'+input+'.$valid && '+input+'.$touched"></span>'+
                        '<span class="glyphicon glyphicon-remove form-control-feedback" ng-show="!'+input+'.$valid && '+input+'.$touched"></span>'+
                        '<div ng-messages="'+input+'.$error" ng-show="'+input+'.$touched">';
            for(var i in messages) {
                var msg = messages[i];
                html += '<div class="alert alert-small alert-danger" ng-message="'+msg.when+'">'+msg.label+'</div>';
            }
            html += '</div>';
            elem.find('input').after(html);
            elem.attr('ng-class', "{'has-error': !"+input+".$valid && "+input+".$touched, 'has-success': "+input+".$valid && "+input+".$touched}");
            elem.removeAttr('validate-notify');
            $compile(elem)(scope);
        }
    };
});
