var CopyEmail = {

  cacheDOM: function () {
    this.$emailAddress = document.getElementsByClassName('js-email')[0];
    this.$copyEmailBtn = document.getElementsByClassName('js-copy-email-btn')[0];
    this.$response = document.getElementsByClassName('js-response')[0];
  },

  init: function () {
    this.cacheDOM();
    this.bindEvents();
  },

  bindEvents: function () {
    this.$copyEmailBtn.addEventListener('click', this.executeCopy.bind(this));
  },

  executeCopy: function () {
    this.$emailAddress.focus();
    this.$emailAddress.select();
    var successful = document.execCommand('copy');
    this.outputResponse(successful);
  },

  outputResponse: function (successful) {
    if (successful) {
      this.$response.innerHTML = 'Copied';
    } else {
      this.$response.classList.add('response--failed');
      this.$response.innerHTML = 'Unable to copy';
    }
    setTimeout(function () {
      CopyEmail.$response.classList.remove('response--failed');
      CopyEmail.$response.innerHTML = '';
    }, 1200);
  }

}

if (window.innerWidth >= 640) {
  CopyEmail.init();
}
