const input = document.getElementById('id');

const obj = { val: '' };

Object.defineProperty(obj, 'val', {
  get() {
    return input.value
  },
  set(val) {
    input.value = value
  }
});

input.oninput = function (ev) {
  const val = ev.target.value;
  obj.val = val;
}