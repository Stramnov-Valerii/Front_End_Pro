var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domConteiner = document.querySelector("#root");
var root = ReactDOM.createRoot(domConteiner);
var animals = [{ type: "turtle", icon: "\uD83D\uDC22" }, { type: "octopus", icon: "\uD83D\uDC19" }, { type: "fish", icon: "\uD83D\uDC20" }, { type: "flamingo", icon: "\uD83E\uDDA9" }, { type: "penguin", icon: "\uD83D\uDC27" }];

var AnimalList = function (_React$Component) {
  _inherits(AnimalList, _React$Component);

  function AnimalList(props) {
    _classCallCheck(this, AnimalList);

    var _this = _possibleConstructorReturn(this, (AnimalList.__proto__ || Object.getPrototypeOf(AnimalList)).call(this, props));

    _this.state = {
      animals: _this.props.animals,
      border: 0
    };


    _this.state = Object.assign({}, _this.props);
    _this.state.animalsIndex = _this.state.animals.map(function (item, index) {
      return index;
    });

    var chooseItem = setInterval(function () {
      var randomIndex = _this.state.animalsIndex[Math.floor(Math.random() * _this.state.animalsIndex.length)];

      _this.setState({
        animals: _this.state.animals.map(function (item, index) {
          if (index === randomIndex) {
            item.checked = true;
            Object.defineProperty(item, "checked", { enumerable: false });
          }
          return item;
        }),
        animalsIndex: _this.state.animalsIndex.filter(function (item) {
          return item !== randomIndex;
        })
      }, function () {
        // if half
        if (_this.state.animalsIndex.length === Math.floor(_this.state.animals.length / 2)) {
          _this.setState({
            border: "10px solid black"
          });
        }
        if (!_this.state.animalsIndex.length) {
          clearInterval(chooseItem);
          _this.setState({
            border: "20px solid black"
          });
        }
      });
    }, 2000);
    return _this;
  }

  _createClass(AnimalList, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          animals = _state.animals,
          border = _state.border;

      console.log(border);

      return React.createElement(
        "table",
        { style: { border: border } },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Type"
            ),
            React.createElement(
              "th",
              null,
              "Icon"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          animals.map(function (item, index) {
            return React.createElement(
              "tr",
              {
                key: index,
                style: { color: item.checked ? "green" : "inherit", fontWeight: item.checked ? "bold" : "regular" }
              },
              Object.keys(item).map(function (k, i) {
                return React.createElement(
                  "td",
                  { key: i },
                  item[k]
                );
              })
            );
          })
        )
      );
    }
  }]);

  return AnimalList;
}(React.Component);

var App = function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(AnimalList, { animals: animals })
  );
};
root.render(React.createElement(App, null));