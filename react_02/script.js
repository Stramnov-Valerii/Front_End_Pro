var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domConteiner = document.querySelector("#root");
var root = ReactDOM.createRoot(domConteiner);
// const animals = [
//     {type: `turtle`, icon: `🐢`},
//     {type: `octopus`, icon: `🐙`},
//     {type: `fish`, icon: `🐠`},
//     {type: `flamingo`, icon: `🦩`},
//     {type: `penguin`, icon: `🐧`}
// ];

var AnimalList = function (_React$Component) {
    _inherits(AnimalList, _React$Component);

    function AnimalList(props) {
        _classCallCheck(this, AnimalList);

        var _this = _possibleConstructorReturn(this, (AnimalList.__proto__ || Object.getPrototypeOf(AnimalList)).call(this, props));

        _this.state = {
            animals: _this.props.animals,
            bg: _this.props.bg,
            fontWeight: _this.props.fontWeight
        };

        _this.state = Object.assign({}, _this.props);
        console.log("object copy", _this.state);
        _this.state.animalsIndex = _this.state.animals.map(function (item, index) {
            return index;
        });
        console.log("animalsIndex:", _this.state.animalsIndex);

        var chooseItem = setInterval(function () {
            var randomIndex = _this.state.animalsIndex[Math.floor(Math.random() * _this.state.animalsIndex.length)];
            console.log("randomIndex:", randomIndex);

            _this.setState({
                animals: _this.state.animals.map(function (item, index) {
                    if (index === randomIndex) {
                        item.checked = true;
                        console.log(item);
                        Object.defineProperty(item, "checked", { enumerable: false });
                    }
                    return item;
                }),
                animalsIndex: _this.state.animalsIndex.filter(function (item) {
                    return item !== randomIndex;
                })
                // bg: this.state.animals.map((item, index) => {
                //     let color = ``;
                //     if (index === randomIndex){
                //        color = "green"
                //     }
                //     return color
                //  }),
            },

            // console.log(`animalsIndex:`, this.state.animalsIndex.length),                         

            function () {
                console.log("animals", _this.state.animals);
                // if (
                //     this.state.animals.item.checked
                // ) {
                //     this.setState({
                //         bg: `green`,
                //     });
                // }
                // if (
                //     this.state.animalsIndex.length ===
                //     Math.floor(this.state.animals.length / 2)
                // ) {
                //     this.setState({
                //         outlineWidth: "50px",
                //     });
                // }

                if (!_this.state.animalsIndex.length) {
                    clearInterval(chooseItem);
                    _this.setState({
                        outlineWidth: "70px"
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
                bg = _state.bg,
                fontWeight = _state.fontWeight;

            console.log("this:", this);
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
                            { style: { background: bg, fontWeight: fontWeight }, key: index, className: item },
                            React.createElement(AnimalType, { key: "typeItem " + index, animalsType: item.type }),
                            React.createElement(AnimalIcon, { key: "iconItem " + index, animalsIcon: item.icon })
                        );
                    })
                )
            );
        }
    }]);

    return AnimalList;
}(React.Component);

;

var AnimalType = function (_React$Component2) {
    _inherits(AnimalType, _React$Component2);

    function AnimalType() {
        _classCallCheck(this, AnimalType);

        return _possibleConstructorReturn(this, (AnimalType.__proto__ || Object.getPrototypeOf(AnimalType)).apply(this, arguments));
    }

    _createClass(AnimalType, [{
        key: "render",
        value: function render() {
            var animalsType = this.props.animalsType;

            return React.createElement(
                "td",
                null,
                animalsType
            );
        }
    }]);

    return AnimalType;
}(React.Component);

;

var AnimalIcon = function (_React$Component3) {
    _inherits(AnimalIcon, _React$Component3);

    function AnimalIcon() {
        _classCallCheck(this, AnimalIcon);

        return _possibleConstructorReturn(this, (AnimalIcon.__proto__ || Object.getPrototypeOf(AnimalIcon)).apply(this, arguments));
    }

    _createClass(AnimalIcon, [{
        key: "render",
        value: function render() {
            var animalsIcon = this.props.animalsIcon;

            return React.createElement(
                "td",
                null,
                animalsIcon
            );
        }
    }]);

    return AnimalIcon;
}(React.Component);

;

var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(AnimalList, { animals: [{ type: "turtle", icon: "\uD83D\uDC22" }, { type: "octopus", icon: "\uD83D\uDC19" }, { type: "fish", icon: "\uD83D\uDC20" }, { type: "flamingo", icon: "\uD83E\uDDA9" }, { type: "penguin", icon: "\uD83D\uDC27" }] })
    );
};
root.render(React.createElement(App, null));