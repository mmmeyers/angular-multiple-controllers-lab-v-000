function StaffController() {
  var vm = this;
  vm.name = 'Olli';
  vm.email = 'olli@meow.com';
  vm.phone = '9999999';
}

angular
  .module('app')
  .controller('StaffController', StaffController);
