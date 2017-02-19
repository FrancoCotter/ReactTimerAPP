var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var Clock = require('Clock');
var TestUtils = require('react-addons-test-utils');

describe('Clock',() => {
  it('should exist',() => {
    expect(Clock).toExist();
  });

  describe('render',() => {
    it('should render clock output',() => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02');
    });
  });
  describe('formatSeconds',() => {
    it('should be formating',() => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 615;
        var expected = '10:15';
        var actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);
    });

    it('should be formating when seconds less than 10',() => {
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 61;
        var expected = '01:01';
        var actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);
    });
  });
});