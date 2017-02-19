var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountDown = require('CountDown');


describe('Countdown', () => {
  it('should exist', () => {
    expect(CountDown).toExist();
  });

  describe('handleSetCountDown', () => {
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);

      countdown.handleSetCountDown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      },1001)
    });

    it('should nerver set count less than zero', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);

      countdown.handleSetCountDown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0)
        done();
      },3001);
    });
  });
  describe('started or stopped', () =>{
    it('should test countdownstatus is started or stopped', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);

      countdown.handleSetCountDown(7);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(() => {
        expect(countdown.state.countdownStatus).toBe('started');
        done();
      },1000);
    });
  })

});
