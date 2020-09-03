import {describe, it} from 'mocha'
import {expect} from 'chai'
import {convert} from "./index";

describe('Tests', function () {

  it('should find the correct index of a string', function () {
    const text = "Hello World"
    const line = 1
    const col = 2
    expect(text[convert(line, col, text)]).equals('e')
  });

  it('should find the correct index of 2 lines', function () {
    const text = "You see,\nI’m an energy man"
    const line = 2
    const col = 10
    expect(text[convert(line, col, text)]).equals('e')
  });

  it('should find the correct index of multiple lines. Counts newline values', function () {
    const text = "You see,\nI’m an energy man\n\nhello world"
    const line = 4
    const col = 5
    expect(text[convert(line, col, text)]).equals('o')
  });

  it('should find the index even if it is a newline', function () {
    const text = "You see,\n"
    const line = 1
    const col = 9
    expect(text[convert(line, col, text)]).equals('\n')
    expect(convert(line + 1, 1, text)).equals(text.length)
  });

  it('should correctly count lines if it has crlf newlines', function () {
    const text = "This\r\nis\r\na\r\na\nnode\nproject\r\non\r\nnpm"
    const line = 6
    const col = 1
    expect(text[convert(line, col, text, true)]).equals('p')
  });

});

/*
Hello World
You see,
I’m an energy man
 */
