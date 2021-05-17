import React, {PureComponent} from 'react';

const HabitAddForm = (props) => {
    const inputRef = React.createRef()

    const onSubmit = (e) => {
        e.preventDefault()
        const name = inputRef.current.value
        name && props.onAdd(name)
        inputRef.current.value = ''
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
    );
    }

;

export default HabitAddForm;


// PureComponent는 컴포넌트와 달리 이전의 프롭스와 스테이트를 비교해서 달라진 점이 없으면 re렌더링 하지 않음

