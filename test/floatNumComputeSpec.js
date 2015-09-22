/**
 * @file 单元测试
 * @author lixiaoqing(lixiaoqing01@baidu.com)
 */

define(function (require) {
    var floatNumCompute = require('floatNumCompute');
    var computeAdd = floatNumCompute.computeAdd;
    var computeSub = floatNumCompute.computeSub;
    var computeMul = floatNumCompute.computeMul;
    var computeDivide= floatNumCompute.computeDivide;

    describe('功能测试', function () {
        it('加法测试', function () {
            var value = computeAdd(0.1, 0.2);
            expect(value).toBe(0.3);

            var value2 = computeAdd(1, 0.2);
            expect(value2).toBe(1.2);

            var value3 = computeAdd(0.1, 2);
            expect(value3).toBe(2.1);
        });
        it('减法测试', function () {
            var value = computeSub(0.3, 0.2);
            expect(value).toBe(0.1);

            var value2 = computeSub(3, 0.2);
            expect(value2).toBe(2.8);

            var value3 = computeSub(0.3, 2);
            expect(value3).toBe(-1.7);
        });
        it('乘法测试', function () {
            var value = computeMul(0.2, 0.1);
            expect(value).toBe(0.02);

            var value2 = computeMul(2, 0.1);
            expect(value2).toBe(0.2);

            var value3 = computeMul(0.2, 1);
            expect(value3).toBe(0.2);
        });
        it('除法测试', function () {
            var value = computeDivide(0.3, 0.1);
            expect(value).toBe(3);

            var value2 = computeDivide(3, 0.1);
            expect(value2).toBe(30);

            var value3 = computeDivide(0.1, 2);
            expect(value3).toBe(0.05);
        });
    });

});
