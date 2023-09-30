import React, {useState} from 'react';

const Counter = () => {
    const [num, setNumber] = useState(0); // num의 기본 값을 0으로 하고, setNumber라는 세터함수를 이용해 값을 변경한다.
    // 동적 값을 처리하기 위해 필수적으로 useState 사용
    const increase = () =>{
        setNumber(num + 1); // num += 1;
        // 이렇게 위의 세터함수를 사용해야만 상태 관리 가능
    };

    const decrease = () =>{
        setNumber(num - 1); // num -= 1;
        
    };

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
};

export default Counter;

