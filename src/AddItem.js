import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState('');
  return (
    <div className="inpArea">
      <input className="inpItem"
        placeholder="필요한거 쓰기"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddItem(title);
      }} className="regBtn">등록</button>
    </div>
  )
}
