const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if arg is not as string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });
  it('should return an error if arg length is 0', () => {
    expect(formatFullname()).to.equal('Error');
  });
  it('should return good formatted if proper args', () => {
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('johN dOe')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  });
  it('should return an error if one of blocks length is 0', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
  });
  it('should return an error if have more than 2 blocks', () => {
    expect(formatFullname('John Doe Smith')).to.equal('Error');
  });
});
