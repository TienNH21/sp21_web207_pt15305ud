import { useState } from 'react';

function Input() {
  const [name, setName] = useState('');
  const onChangeHanlder = function (event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={ onChangeHanlder }
        />
      <p>Họ tên: { name }</p>
    </div>
  );
}

export default Input;
