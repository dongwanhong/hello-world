import('./global-tips.less');

module.exports = function (App) {
    App.directive('globalTips', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: {
                'title': 'tipsTitle',
                'content': 'tipsContent',
                'footer': 'tipsFooter'
            },
            template: require('./global-tips.pug'),
            link: function ($scope, $element) {
                $scope.startSlide = function () {
                    if ('slide-to-top' === $scope.slideClass) {
                        $scope.slideClass = '';
                    } else {
                        $scope.slideClass = 'slide-to-top';
                    }
                }
            }
        }
    });
};