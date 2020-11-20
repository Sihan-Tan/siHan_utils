import { checkBank, checkEmail, checkId, checkPhone } from '../src/modules/verify';
const expect = require('chai').expect;

describe('verify.js', function () {
  describe('checkBank', function () {
    it('错误的银行卡号', function () {
      expect(checkBank(6216002020203245865)).to.be.false;
    });
  });
  describe('checkBank', function () {
    it('正确的邮箱', function () {
      expect(checkEmail('651798798@qq.com')).to.be.true;
    });
    it('错误的邮箱', function () {
      expect(checkEmail('6216002020203245865@163.comcn')).to.be.false;
    });
  });
  describe('checkId', function () {
    it('正确的身份证号', function () {
      expect(checkId('110101199003077715').birthday).to.equal('1990-3-7');
    });
    it('女正确的身份证号', function () {
      expect(checkId('440105199610107906').gender).to.equal(2);
    });
    it('空的身份证号', function () {
      expect(checkId('')).to.equal('请输入证件号码');
    });
    it('空的身份证号', function () {
      expect(checkId('   ')).to.equal('身份证号格式不正确');
    });
    it('身份证号格式不正确', function () {
      expect(checkId(110101199003077712345)).to.equal('身份证号格式不正确');
    });
    it('地区有误的身份证号', function () {
      expect(checkId(180101199003077715)).to.equal('地区填写有误');
    });
    it('生日有误的身份证号', function () {
      expect(checkId(110101199003387716)).to.equal('生日有误');
    });
    it('非法的身份证号', function () {
      expect(checkId(110101199003077715)).to.equal('非法证号');
    });
  });
  describe('checkPhone', function () {
    it('正确的手机号', function () {
      expect(checkPhone('13112345678')).to.be.true;
    });
    it('错误的手机号', function () {
      expect(checkPhone('1234567890')).to.be.false;
    });
    it('错误的手机号', function () {
      expect(checkPhone('123456789101')).to.be.false;
    });
  });
});