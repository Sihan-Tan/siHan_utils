import { formatSecondToTime, formatDate, calcAge } from '../src/modules/date';
const expect = require('chai').expect;

describe('date.js', function() {
  describe('formatSecondToTime', function() {
    it('测试时间56s', function() {
      const {days, hours, mins, seconds} = formatSecondToTime(56)
      expect(days).to.equal(0);
      expect(hours).to.equal(0);
      expect(mins).to.equal(0);
      expect(seconds).to.equal(56);
    });
    it('测试时间156s', function() {
      const {days, hours, mins, seconds} = formatSecondToTime(156)
      expect(days).to.equal(0);
      expect(hours).to.equal(0);
      expect(mins).to.equal(2);
      expect(seconds).to.equal(36);
    });
    it('测试时间5156s', function() {
      const {days, hours, mins, seconds} = formatSecondToTime(5156)
      expect(days).to.equal(0);
      expect(hours).to.equal(1);
      expect(mins).to.equal(25);
      expect(seconds).to.equal(56);
    });
    it('测试时间105156s', function() {
      const {days, hours, mins, seconds} = formatSecondToTime(105156)
      expect(days).to.equal(1);
      expect(hours).to.equal(5);
      expect(mins).to.equal(12);
      expect(seconds).to.equal(36);
    });
  });

  describe('formatDate', function() {
    const CUR_DATE = '2020-10-29';
    const CUR_MONTH_DAY = '10-29';
      it('测试返回yyyy-MM-dd', function() {
        const fmt = 'yyyy-MM-dd';
        expect(formatDate(fmt)).to.equal(CUR_DATE)
        expect(formatDate(fmt, new Date('2018-08-08'))).to.equal('2018-08-08')
        expect(formatDate(fmt, new Date('2010-05-08').getTime())).to.equal('2010-05-08')
      })
      it('测试返回yyyy-MM-dd hh:mm:ss', function() {
        const fmt = 'yyyy-MM-dd hh:mm:ss';
        expect(formatDate(fmt)).to.include(CUR_DATE)
        expect(formatDate(fmt, new Date('2018-08-08 06:30:30'))).to.equal('2018-08-08 06:30:30')
        expect(formatDate(fmt, new Date('2010-05-08 06:30:30').getTime())).to.equal('2010-05-08 06:30:30')
      })
      it('测试返回yyyy-M-d h:m:s q S', function() {
        const fmt = 'yyyy-M-d h:m:s q S';
        expect(formatDate('yyyy-M-d h:m:s q S')).to.include(CUR_MONTH_DAY)
        expect(formatDate(fmt, new Date('2018-08-08 06:30:30'))).to.include('2018-8-8 6:30:30 3')
        expect(formatDate(fmt, new Date('2010-05-08 06:30:30').getTime())).to.include('2010-5-8 6:30:30 2')
      })
      it('测试返回h:m:s q S', function() {
        const fmt = 'M-d h:m:s q S';
        expect(formatDate(fmt)).to.include(CUR_MONTH_DAY)
      })
  })

  describe('calcAge', function() {
    it('未满月', function() {
      const {age, unit} = calcAge('2020-10-28')
      expect(age).to.equal('')
      expect(unit).to.equal('未满月')
    })
    it('3个月', function() {
      const {age, unit} = calcAge(new Date('2020-7-26'))
      expect(age).to.equal(3)
      expect(unit).to.equal('个月')
    })
    it('1岁', function() {
      const {age, unit} = calcAge('2019-10-31')
      expect(age).to.equal(1)
      expect(unit).to.equal('岁')
    })
    it('20岁', function() {
      const {age, unit} = calcAge('2000-7-26')
      expect(age).to.equal(20)
      expect(unit).to.equal('岁')
    })
  })
});