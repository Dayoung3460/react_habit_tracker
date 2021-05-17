import React, {PureComponent} from 'react';

// PureComponent는 컴포넌트와 달리 이전의 프롭스와 스테이트를 비교해서 달라진 점이 없으면 re렌더링 하지 않음

class HabitAddForm extends PureComponent {
    inputRef = React.createRef()

    onSubmit = (e) => {
        e.preventDefault()
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
        this.inputRef.current.value = ''
    }

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
