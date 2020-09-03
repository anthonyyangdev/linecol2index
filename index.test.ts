import {describe, it} from 'mocha'
import {expect} from 'chai'
import {linecol2index} from './index';

describe('Tests', function () {

  it('should find the correct index of a string', function () {
    const text = "Hello World"
    const line = 1
    const col = 2
    expect(text[linecol2index(line, col, text)]).equals('e')
  });

  it('should find the correct index of 2 lines', function () {
    const text = "You see,\nI’m an energy man"
    const line = 2
    const col = 10
    expect(text[linecol2index(line, col, text)]).equals('e')
  });

  it('should find the correct index of multiple lines. Counts newline values', function () {
    const text = "You see,\nI’m an energy man\n\nhello world"
    const line = 4
    const col = 5
    expect(text[linecol2index(line, col, text)]).equals('o')
  });

  it('should find the index even if it is a newline', function () {
    const text = "You see,\n"
    const line = 1
    const col = 9
    expect(text[linecol2index(line, col, text)]).equals('\n')
    expect(linecol2index(line + 1, 1, text)).equals(text.length)
  });

  it('should correctly count lines if it has crlf newlines', function () {
    const text = "This\r\nis\r\na\r\na\nnode\nproject\r\non\r\nnpm"
    const line = 6
    const col = 1
    expect(text[linecol2index(line, col, text, true)]).equals('p')
    expect(text[linecol2index(8, 3, text, true)]).equals('m')
  });

  it('should return -1 if the line and or col are invalid', function () {
    const text = 'hello'
    expect(linecol2index(0, 1, text)).equals(-1)
    expect(linecol2index(2, 1, text)).equals(-1)
    expect(linecol2index(1, 11, text)).equals(-1)
    expect(linecol2index(0, 0, text)).equals(-1)
    expect(linecol2index(5, 5, text)).equals(-1)
  });

});

/*
Hello World
You see,
I’m an energy man
 */
