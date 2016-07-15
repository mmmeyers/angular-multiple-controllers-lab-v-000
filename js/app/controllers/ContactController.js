function ContactController() {
  var vm = this;
  vm.name = 'Jins';
  vm.email = 'jins@meow.com';
  vm.phone = '1234567';

  this.changeName = function() {
    vm.name = 'Staten Island Baby'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
