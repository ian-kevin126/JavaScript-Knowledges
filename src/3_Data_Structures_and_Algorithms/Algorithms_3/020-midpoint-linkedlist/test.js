const midpoint = require('./index');
const { LinkedList } = require('./linkedlist');

test('Midpoint is a function', () => {
  expect(typeof midpoint).toEqual('function');
});

describe('Midpoint returns the middle node of an odd numbered list', () => {
  test('when the list has 3 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    expect(midpoint(l).data).toEqual('b');
  });

  test('when the list has 5 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertLast('e');
    expect(midpoint(l).data).toEqual('c');
  });
});

describe('Midpoint returns the node at the end of the first half of an even numbered list', () => {
  test('when the list has 2 elements', () => {
    const list = new LinkedList();
    list.insertLast('a');
    list.insertLast('b');
    expect(midpoint(list).data).toEqual('a');
  });

  test('when the list has 4 elements', () => {
    const list = new LinkedList();
    list.insertLast('a');
    list.insertLast('b');
    list.insertLast('c');
    list.insertLast('d');
    expect(midpoint(list).data).toEqual('b');
  });
});
