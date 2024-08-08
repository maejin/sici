//import logo from './logo.svg';
import './App.css';
//import MyButton from './Button.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

let nextId = 3;
const initialItems = [
  { id: 0, title: '캐리어', packed: true},
  { id: 1, title: 'Travel journal', packed: false},
  { id: 2, title: 'Watercolors', packed: false},
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(3);
  const [packed, setPacked] = useState(1);

  function handleAddItem(title) {
    if( title !== "" ) {
      setTotal(total + 1);
      setItems([
        ...items,
        {
          id: nextId++,
          title: title,
          packed: false
        }
      ])
    } else {
      alert("등록할게 없는디");
      return false;
    }
  }

  function handleChangeItem(nextItem) {
    if(nextItem.packed){
      setPacked(packed + 1);
    } else {
      setPacked(packed - 1);
    }
    setItems(items.map(item => {
      if(item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId) {
    setTotal(total - 1);
    setItems(
      items.filter(item => item.id !== itemId)
    );
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList items={items} 
        onChangeItem={handleChangeItem} 
        onDeleteItem={handleDeleteItem} />
      <hr />
      <b>{total}개중 {packed}개 완료!</b>
    </>
  )
}

/*function App() {
  return (
    <div className="wrap">
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
  */


//export default App;
