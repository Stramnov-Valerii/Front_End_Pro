import React, { Component, Fragment } from 'react';
import List from '../List';
import './style.sass'

class ToDo extends Component {
    constructor(props){
        super(props);
        
        this.transferToSecond = this.transferToSecond.bind(this);
        this.transferToFirst = this.transferToFirst.bind(this);
        this.transferToThird = this.transferToThird.bind(this);
        this.removeLastItem = this.removeLastItem.bind(this)
    }

    state = {
        firstList: this.props.toDo,
        secondList: [],
        thirdList: [],
    }
    
    transferToSecond() {
        let firstItem = this.state.firstList.splice(0, 1);
        this.setState(
            {
                firstList: this.state.firstList.slice(0),
                secondList: firstItem.concat(this.state.secondList),
            },
        );
    }

    transferToFirst() {
        let firstItem = this.state.secondList.splice(0, 1);
        this.setState(
            {
                secondList: this.state.secondList.slice(0),
                firstList: firstItem.concat(this.state.firstList),
            },
        );        
    }

    transferToThird() {
        let firstItem = this.state.secondList.splice(0, 1);
        this.setState(
            {
                secondList: this.state.secondList.slice(0),
                thirdList: firstItem.concat(this.state.thirdList),
            },
        );
    }

    removeLastItem() {
        this.setState(
            {
                thirdList: this.state.thirdList.slice(0, -1)
            }
        )
    }

    render() {
        const { firstList, secondList, thirdList } = this.state
        return (
            <Fragment>
                <div className='container'>
                    <List list = {firstList}
                        actions = {
                            [
                                {
                                    text: "Transfer first to right",
                                    action: this.transferToSecond
                                }
                            ]
                        }
                    />
                    <List list = {secondList}
                        actions = {
                            [
                                {
                                    text: "Transfer first to left",
                                    action: this.transferToFirst
                                },
                                {
                                    text: "Transfer first to right", 
                                    action: this.transferToThird
                                }
                            ]
                        }
                    />
                    <List list = {thirdList}
                        actions = {
                            [
                                {
                                    text: "Remove last item", 
                                    action: this.removeLastItem
                                }
                            ]
                        }
                    />
                </div>
            </Fragment>
        );
    };
}

export default ToDo;

/////////////////////////////////////////////////////////////////////

// class ToDo extends Component {

//     state = {
//         firstList: this.props.toDo,
//         secondList: [],
//         thirdList: [],
//     }
    
//     transferToSecond() {
//         let firstItem = this.state.firstList.splice(0, 1);
//         console.log(firstItem);
//         this.setState(
//             {
//                 firstList: this.state.firstList.slice(0),
//                 secondList: firstItem.concat(this.state.secondList),
//             },
//         );
//     }

//     transferToFirst() {
//         let firstItem = this.state.secondList.splice(0, 1);
//         console.log(firstItem);
//         this.setState(
//             {
//                 secondList: this.state.secondList.slice(0),
//                 firstList: firstItem.concat(this.state.firstList),
//             },
//         );        
//     }

//     transferToThird() {
//         let firstItem = this.state.secondList.splice(0, 1);
//         console.log(firstItem);
//         this.setState(
//             {
//                 secondList: this.state.secondList.slice(0),
//                 thirdList: firstItem.concat(this.state.thirdList),
//             },
//         );
//     }

//     removeLastItem() {
//         this.setState(
//             {
//                 thirdList: this.state.thirdList.slice(0, -1)
//             }
//         )
//     }

//     render() {
//         const { firstList, secondList, thirdList } = this.state
//         return (
//             <div className='bkg'>
//                 <div className='first--list'>
//                     <ul>
//                         {firstList.map(item => <li className='task' key={item.id}>{item.title}</li>)}
//                     </ul>
//                     <button onClick={this.transferToSecond.bind(this)}
//                         type='button' className='btn' 
//                         style={!firstList.length ? { display: "none" } : { display: "inline-block" }}>
//                         Transfer first to right
//                     </button>
//                 </div>
//                 <div className='second--list'>
//                     <ul>
//                         {secondList.map(item => <li className='task' key={item.id}>{item.title}</li>)}
//                     </ul>
//                     <button onClick={this.transferToFirst.bind(this)}
//                         style={!secondList.length ? { display: "none" } : { display: "inline-block" }}
//                         type='button' className='btn'>
//                         Transfer first to left
//                     </button>
//                     <button onClick={this.transferToThird.bind(this)}
//                         style={!secondList.length ? { display: "none" } : { display: "inline-block" }}
//                         type='button' className='btn'>
//                         Transfer first to right
//                     </button>
//                 </div>
//                 <div className='third--list'>
//                     <ul>
//                         {thirdList.map(item => <li className='task' key={item.id}>{item.title}</li>)}
//                     </ul>
//                     <button onClick={this.removeLastItem.bind(this)}
//                         style={!thirdList.length ? { display: "none" } : { display: "inline-block" }}
//                         type='button' className='btn'>
//                         Remove last item
//                     </button>
//                 </div>
//             </div>

//         );
//     }
// }

// export default ToDo;