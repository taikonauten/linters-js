export default class Taiko {

  /**
   * This is a valid comment
   * @param $el
   */
  constructor ($el) {
    this.$el = $el;
    this.registered = false;
    this.sum = 1 + 2;
    this.quotes = 'single';

    this.$element = $el.querySelector('.submit');
    this.$alert = $el.querySelector('.alert');

    // This is a valid comment
    this.$element.addEventListener('click', this.onSubmitClick.bind(this));
  }

  onSubmitClick (event) {
    this.registered = true;
    this.$alert.innerText = 'The user was successfully registered. A ' +
      'verification email was sent. Please verify your ';
  }
}

const callback = function () {
  const test = 2;

  return `The number is ${test}`;
};

callback();
