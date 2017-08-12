var InlineModal = {

  cacheDOM: function () {
    this.$inlineModal = document.getElementsByClassName('js-inline-modal')[0];
    this.$openBtn = document.getElementsByClassName('js-open-btn')[0];
    this.$closeBtn = document.getElementsByClassName('js-close-btn')[0];
  },

  init: function () {
    this.cacheDOM();
    this.bindEvents();
  },
  
  bindEvents: function () {
    this.$openBtn.addEventListener('click', this.openModal.bind(this));
    this.$closeBtn.addEventListener('click', this.closeModal.bind(this));
  },

  openModal: function (e) {
    e.preventDefault();
    this.$inlineModal.classList.remove('is-hidden');
  },

  closeModal: function () {
    this.$inlineModal.classList.add('is-hidden');
  }

}

if (window.innerWidth >= 640) {
  InlineModal.init();
}
