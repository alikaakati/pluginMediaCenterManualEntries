describe('Unit: resizeImage filter', function () {
    beforeEach(module('mediaCenterDesignFilters'));
    var filter;
    beforeEach(inject(function (_$filter_) {
        filter = _$filter_;
    }));

    it('it should pass if "resizeImage" filter returns resized image url', function () {
        var result;
        result = filter('resizeImage')('https://imagelibserver.s3.amazonaws.com/25935164-2add-11e5-9d04-02f7ca55c361/950a50c0-400a-11e5-9af5-3f5e0d725ccb.jpg', 88, 124, 'resize');
        expect(result).toEqual("http://s7obnu.cloudimage.io/s/resizenp/88x124/https://imagelibserver.s3.amazonaws.com/25935164-2add-11e5-9d04-02f7ca55c361/950a50c0-400a-11e5-9af5-3f5e0d725ccb.jpg");
    });

    it('it should give a default image even if parameter is blank', function () {
        var result;
        result = filter('resizeImage')('', 88, 124, 'resize');
        expect(result).toEqual("http://s7obnu.cloudimage.io/s/resizenp/88x124/");
    });
});
describe('Unit: cropImage filter', function () {
    beforeEach(module('mediaCenterDesignFilters'));
    var filter;
    beforeEach(inject(function (_$filter_) {
        filter = _$filter_;
    }));

    it('it should pass if "cropImage" filter returns cropped image url', function () {
        var result;
        result = filter('cropImage')('https://www.facebook.com/photo.php?fbid=1008284442533844&set=a.359021657460129.98766.100000568920267&type=1&theater', 88, 124);
        expect(result).toEqual("http://s7obnu.cloudimage.io/s/crop/88x124/https://www.facebook.com/photo.php?fbid=1008284442533844&set=a.359021657460129.98766.100000568920267&type=1&theater");
    });

    it('it should give a default image even if parameter is blank', function () {
        var result;
        result = filter('cropImage')('', 88, 124);
        expect(result).toEqual("http://s7obnu.cloudimage.io/s/crop/88x124/");
    });
});
describe('Unit: safeHtml filter', function () {
    beforeEach(module('mediaCenterDesignFilters'));
    var filter;
    beforeEach(inject(function (_$filter_) {
        filter = _$filter_;
    }));

    /*it('it should pass if "safeHtml" filter returns text', function () {
     var result;
     result = filter('safeHtml')('<div>Hello</div>');
     expect(result).toEqual("Hello");
     });*/

    it('it should give black even if parameter is blank', function () {
        var result;
        result = filter('safeHtml')();
        expect(result).toEqual("");
    });
});
describe('Unit: jsDate filter', function () {
    beforeEach(module('mediaCenterDesignFilters'));
    var filter;
    beforeEach(inject(function (_$filter_) {
        filter = _$filter_;
    }));

    /* it('it should pass if "jsDate" filter returns time', function () {
     var result;
     result = filter('jsDate')('1441209271403');
     expect(result).toEqual("Wed Sep 02 2015 21:24:31 GMT+0530 (IST)");
     });*/
});
