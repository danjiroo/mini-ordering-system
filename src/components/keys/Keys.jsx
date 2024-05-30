import React from 'react';

const Keys = ({getInputKey, deleteInputKey, resetInputKey}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td onClick={() => getInputKey(7)}>7</td>
                    <td onClick={() => getInputKey(8)}>8</td>
                    <td onClick={() => getInputKey(9)}>9</td>
                </tr>
                <tr>
                    <td onClick={() => getInputKey(4)}>4</td>
                    <td onClick={() => getInputKey(5)}>5</td>
                    <td onClick={() => getInputKey(6)}>6</td>
                </tr>
                <tr>
                    <td onClick={() => getInputKey(1)}>1</td>
                    <td onClick={() => getInputKey(2)}>2</td>
                    <td onClick={() => getInputKey(3)}>3</td>
                </tr>
                <tr>
                    <td onClick={() => getInputKey(0)}>0</td>
                    <td onClick={() => resetInputKey()}>res</td>
                    <td onClick={() => deleteInputKey()}>del</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Keys;