var initialUser = function () {
  return {
    firstName: 'miracle',
    lastName: 'he',
    getFullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
    hobbies: ['book', 'travel', 'meal'],
    contact: {
      phone: {
        home: '028-12345678',
        office: '029-88888888'
      },
      mobile: '13866668888'
    }
  }
};

var displayUserInfo = function (currentUser, desc) {
  console.log(desc, currentUser.getFullName ? currentUser.getFullName() : '', currentUser);
};

var updateUserInfo = function (currentUser) {
  currentUser.firstName = 'Miracle';
  currentUser.lastName = 'He';
  currentUser.hobbies = ['tennis', 'shopping'];
  currentUser.contact.phone = '028-66666666';
};

var displayTestResult = function (originalUser, cloneUser, info) {
  if (info) {
    $js.print(info, false);
  }
  displayUserInfo(originalUser, '原对象');
  displayUserInfo(cloneUser, '拷贝对象');
};