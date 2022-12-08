var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domConteiner = document.querySelector("#root");
var root = ReactDOM.createRoot(domConteiner);
var toDo = [{
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false
}, {
  userId: 1,
  id: 2,
  title: "quis ut nam facilis et officia qui",
  completed: true
}, {
  userId: 1,
  id: 3,
  title: "fugiat veniam minus",
  completed: false
}, {
  userId: 1,
  id: 4,
  title: "et porro tempora",
  completed: true
}, {
  userId: 1,
  id: 5,
  title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
  completed: false
}];

var ToDos = function (_React$Component) {
  _inherits(ToDos, _React$Component);

  function ToDos() {
    _classCallCheck(this, ToDos);

    return _possibleConstructorReturn(this, (ToDos.__proto__ || Object.getPrototypeOf(ToDos)).apply(this, arguments));
  }

  _createClass(ToDos, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "table",
        null,
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Task"
            ),
            React.createElement(
              "th",
              null,
              "Title of task"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          toDo.map(function (item, index) {
            return React.createElement(
              "tr",
              { key: index, className: item.completed ? "completed" : "notCompleted" },
              React.createElement(UserId, { key: "idItem " + index, usersId: item.id }),
              React.createElement(UserTitle, { key: "titleItem " + index, usersTitle: item.title })
            );
          })
        )
      );
    }
  }]);

  return ToDos;
}(React.Component);

;

var UserId = function (_React$Component2) {
  _inherits(UserId, _React$Component2);

  function UserId() {
    _classCallCheck(this, UserId);

    return _possibleConstructorReturn(this, (UserId.__proto__ || Object.getPrototypeOf(UserId)).apply(this, arguments));
  }

  _createClass(UserId, [{
    key: "render",
    value: function render() {
      var usersId = this.props.usersId;

      return React.createElement(
        "td",
        null,
        usersId
      );
    }
  }]);

  return UserId;
}(React.Component);

;

var UserTitle = function (_React$Component3) {
  _inherits(UserTitle, _React$Component3);

  function UserTitle() {
    _classCallCheck(this, UserTitle);

    return _possibleConstructorReturn(this, (UserTitle.__proto__ || Object.getPrototypeOf(UserTitle)).apply(this, arguments));
  }

  _createClass(UserTitle, [{
    key: "render",
    value: function render() {
      var usersTitle = this.props.usersTitle;

      return React.createElement(
        "td",
        null,
        usersTitle
      );
    }
  }]);

  return UserTitle;
}(React.Component);

;
var App = React.createElement(
  React.Fragment,
  null,
  React.createElement(ToDos, null)
);
root.render(App);