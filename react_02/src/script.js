const domConteiner = document.querySelector(`#root`);
const root = ReactDOM.createRoot(domConteiner);
const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: `penguin`, icon: `🐧` },
];

class AnimalList extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props);
    this.state.animalsIndex = this.state.animals.map((item, index) => index);

    let chooseItem = setInterval(() => {
      const randomIndex =
        this.state.animalsIndex[
          Math.floor(Math.random() * this.state.animalsIndex.length)
        ];

      this.setState(
        {
          animals: this.state.animals.map((item, index) => {
            if (index === randomIndex) {
              item.checked = true;
              Object.defineProperty(item, "checked", { enumerable: false });
            }
            return item;
          }),
          animalsIndex: this.state.animalsIndex.filter(
            (item) => item !== randomIndex
          ),
        },
        () => {
          // if half
          if (this.state.animalsIndex.length === Math.floor(this.state.animals.length / 2)) {
                this.setState({
                    border: `10px solid black`,
                });
            }
          if (!this.state.animalsIndex.length) {
            clearInterval(chooseItem);
            this.setState({
              border: `20px solid black`,
            });
          }
        }
      );
    }, 2000);
  }

  state = {
    animals: this.props.animals,
    border: 0,
  };

  render() {
    let { animals, border } = this.state;
    console.log(border);

    return (
      <table style={{ border }}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((item, index) => (
            <tr
              key={index}
              style={{ color: item.checked ? `green` : `inherit`, fontWeight: item.checked ? `bold` : `regular` }}
            >
              {Object.keys(item).map((k, i) => (
                <td key={i}>{item[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const App = () => {
  return (
    <React.Fragment>
      <AnimalList animals={animals} />
    </React.Fragment>
  );
};
root.render(<App />);
