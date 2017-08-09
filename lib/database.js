Database = function () {
  this.users = [];
  this.emails = [];
  this.getAll = function () {
    var self = this;
    return this.users.map(function (userrow) {
      var email = self.emails.filter(function(emailrow) {
        return emailrow.id === userrow.id;
      })[0].email
      return {name: userrow.name, email: email};
    });
  };
  this.addUser = function (name) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].name === name) {
        throw new Error('User ' + name + ' exists.');
      }
    }
    var id = this.users.length;
    this.users.push({ id: id, name: name });
    return id;
  };
  this.setEmail = function (id, email) {
    var userExist = false;
    for (var i = 0; i < this.users.length; i++){
      if (this.users[i].id === id) {
        userExist = true;
        break;
      }
    }
    if (!userExist) {
      throw new Error('User with id ' + id + ' does not exist.');
    }
    this.emails.push({ id: id, email: email });
    return id;
  };
}
