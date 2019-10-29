/* global describe it */

require('should');

const line = require('../lib/line');

describe('#line', () => {
    it('should return correctly', () => {
        line('a\nb\nc\nd\ne', 1)[0].should.equal('a');
        line('a\nb\nc\nd\ne', 1)[1].should.equal('b\nc\nd\ne');

        line('a\nb\nc\nd\ne', 2)[0].should.equal('a');
        line('a\nb\nc\nd\ne', 1)[1].should.equal('b\nc\nd\ne');

        line('what is\ngoing on?', 7)[0].should.equal('what is');
        line('what is\ngoing on?', 7)[1].should.equal('going on?');

        line('what is\ngoing on?', 8)[0].should.equal('what is');
        line('what is\ngoing on?', 8)[1].should.equal('going on?');

        line('what is\n\n\ngoing on?', 7)[0].should.equal('what is');
        line('what is\n\n\ngoing on?', 7)[1].should.equal('going on?');

        line('what is\ngoing on?', 1)[0].should.equal('');
        line('what is\ngoing on?', 1)[1].should.equal('what is\ngoing on?');
    });
});
