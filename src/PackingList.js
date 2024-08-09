//import { useState } from 'react';

export default function PackingList({
  items,
  onChangeItem,
  onDeleteItem
}) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className={item.packed === true ? 'active' : ''}>
          <label className="chkLabel">
            <input
              type="checkbox"
              checked={item.packed}
              onChange={e => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked
                });
              }}
            />
            {' '}
            {item.title}
          </label>
          <button className="delBtn" onClick={() => onDeleteItem(item.id)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
