const domConteiner = document.querySelector(`#root`);
const root = ReactDOM.createRoot(domConteiner);
// const animals = [
//     {type: `turtle`, icon: `🐢`},
//     {type: `octopus`, icon: `🐙`},
//     {type: `fish`, icon: `🐠`},
//     {type: `flamingo`, icon: `🦩`},
//     {type: `penguin`, icon: `🐧`}
// ];

class AnimalList extends React.Component {
    constructor (props){
        super(props);
        this.state = Object.assign({},this.props);
            console.log(`object copy`, this.state);
        this.state.animalsIndex = this.state.animals.map((item, index) => index);
            console.log(`animalsIndex:`, this.state.animalsIndex)
            
        let chooseItem = setInterval(() => {
            const randomIndex =
                this.state.animalsIndex[
                Math.floor(Math.random() * this.state.animalsIndex.length)
                ];
            console.log(`randomIndex:`, randomIndex);
    
            this.setState(
                {
                    animals: this.state.animals.map((item, index) => {
                        if (index === randomIndex){
                            item.checked = true;
                            console.log(item)
                            Object.defineProperty(item, "checked", {enumerable: false});
                        }
                        return item;
                    }),
                    animalsIndex: this.state.animalsIndex.filter(
                        (item) => item !== randomIndex
                    ),
                    // bg: this.state.animals.map((item, index) => {
                    //     let color = ``;
                    //     if (index === randomIndex){
                    //        color = "green"
                    //     }
                    //     return color
                    //  }),
                },
                
                // console.log(`animalsIndex:`, this.state.animalsIndex.length),                         

                () => {
                    console.log(`animals`, this.state.animals)
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
        
                    if (!this.state.animalsIndex.length) {
                        clearInterval(chooseItem);
                        this.setState({
                            outlineWidth: "70px",
                        });
                    }
                }
            );
        }, 2000);
    };

    state = {
        animals: this.props.animals,
        bg: this.props.bg,
        fontWeight: this.props.fontWeight
    };

    render (){
        let {animals, bg, fontWeight} = this.state
        console.log(`this:`, this)
        return <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                {animals.map((item, index) => <tr style={{background: bg, fontWeight: fontWeight}} key={index} className={item}>
                    <AnimalType key={`typeItem ${index}`} animalsType={item.type} />
                    <AnimalIcon key={`iconItem ${index}`} animalsIcon={item.icon} />
                </tr>)}
            </tbody>
        </table>
    };
};

class AnimalType extends React.Component {
    render(){
        const {animalsType}=this.props;
        return <td>{animalsType}</td>
    };
};

class AnimalIcon extends React.Component {
    render(){
        const {animalsIcon}=this.props
        return <td>{animalsIcon}</td>
    };
};


const App = ()=>{
    return (<React.Fragment>
        <AnimalList  animals = {[
            {type: `turtle`, icon: `🐢`},
            {type: `octopus`, icon: `🐙`},
            {type: `fish`, icon: `🐠`},
            {type: `flamingo`, icon: `🦩`},
            {type: `penguin`, icon: `🐧`}
        ]} />
    </React.Fragment>);
};
root.render(<App />);