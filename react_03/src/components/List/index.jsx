import React, { Component } from 'react';
import './style.sass';

class List extends Component {

    state = {
        list: this.props.list,
        actions: this.props.actions,
    }

    actionOnClick(index) {
        let actionOnClick = '';
        let actionNumber = index;
        this.state.actions.map((item, index) => {
            if(actionNumber===index){
                actionOnClick = item.action
            };
            return actionOnClick
        });
        return actionOnClick
    }

    render() {
        const { actions, list } = this.props;
        return (
            <div className='list'>
                <ul>
                    {list.map(item => <li className='task' key={item.id}>{item.title}</li>)}
                </ul>
                {actions.map((item, index) =>
                    <button className={`btn btn--${item.text}`}
                        key={item.text}
                        onClick={this.actionOnClick(index)}
                        type='button'
                        style={!list.length ? { display: "none" } : { display: "inline-block" }}>
                        {item.text}
                    </button>
                )}
            </div>
        );
    }
}

export default List;



