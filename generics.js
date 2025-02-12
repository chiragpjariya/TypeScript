//! Generics
function loAny(param) {
    console.log(param);
}
loAny([1, 2, 3, 4, 5]);
loAny([1, 2, 3, "j", { n: 'n' }]);
loAny(true);
var Id = null;
function greeting(parm) {
    return parm;
}
var user = {
    username: 'chi',
    password: 'cz',
    loging: function (username, password) {
        console.log(username, password);
    }
};
var loging = user.loging;
loging('chirag', 'sc');
