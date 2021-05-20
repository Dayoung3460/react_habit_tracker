import React, {useCallback, useEffect, useRef, useState} from 'react';

// 클래스 형태는 state나 props가 변경되면 render()만 호출이 되는데
// 함수형은 파라미터(여기서는 props)가 바뀌면 그 함수 전체가 실행이 됨
// 지역변수들도 반복실행됨
const SimpleHabit = (props) => {
    // useState는 리액트가 알아서 이전값을 기억하고 있기 때문에 아무리 업데이트가 되도
    // 메모리에 저장돼 있어서 초기화 되지 않음.
    const [count, setCount] = useState(0)
    // createRef와 달리 한 번 만들어진 값을 기억하고 저장해둠
    // createRef는 그냥 ref값에 접근할 수 있을뿐.
    const spanRef = useRef()

    const handleIncrement = useCallback(() => {
        setCount(count + 1 );
    })

    // mount할 때와 update될 때 호출되는 얘.
    // 두 번째 인자가 없으면 state나 props가 변경될 때 마다 첫번 째 인자가 무조건 실행되고,
    // 두 번째 인자(배열)가 있으면 그 인자(여기서는 count)가 변경될 때만 첫번째 인자가 실행됨.
    // 두 번째 인자가 그냥 빈배열([])이면 mount될 때만 실행됨.
    useEffect(() => {
        console.log('${count}')
    }, [count])

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
}

export default SimpleHabit;

