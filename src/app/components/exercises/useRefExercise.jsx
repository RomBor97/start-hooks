import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [bool, setBool] = useState(true);
    const textRef = useRef();
    const handleClick = () => {
        if (bool) {
            textRef.current.style.height = "150px";
            textRef.current.style.width = "80px";
            textRef.current.innerText = "Text";
        } else {
            textRef.current.style.height = "40px";
            textRef.current.style.width = "60px";
            textRef.current.innerText = "Блок";
        }
        setBool(!bool);
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={textRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>
                Button
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
