import { splitMessage } from './common';

describe('splitMessage', () => {
  it('should raise error when message is not string', () => {
    expect(() => splitMessage(1, 50)).toThrow('message is not string');
    expect(() => splitMessage([], 50)).toThrow('message is not string');
    expect(() => splitMessage({}, 50)).toThrow('message is not string');
    expect(() => splitMessage(true, 50)).toThrow('message is not string');
  });

  it('should raise error when size is not number', () => {
    expect(() => splitMessage('', '1')).toThrow('size is not number');
    expect(() => splitMessage('', [])).toThrow('size is not number');
    expect(() => splitMessage('', {})).toThrow('size is not number');
    expect(() => splitMessage('', true)).toThrow('size is not number');
  });

  describe('when input less than or equal length', () => {
    it('should return original message', () => {
      const message = 'less than 50';
      expect(splitMessage(message, 50)).toEqual(message);
    });
  });

  describe('when input greater than length', () => {
    it('should raise error when message contains span of non-whitespace characters longer than length', () => {
      const message = '0'.repeat(51);

      expect(() => splitMessage(message, 50)).toThrow('message contains span of non-whitespace characters longer than 50');
    });

    it('should return array', () => {
      const message = `I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.`;

      expect(splitMessage(message, 50)).toBeInstanceOf(Array);
    });

    it('should have indicators', () => {
      const message = `I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.`;

      expect(splitMessage(message, 50)).toEqual([`1/2 I can't believe Tweeter now supports chunking`, `2/2 my messages, so I don't have to do it myself.`]);
    });
  });
});
