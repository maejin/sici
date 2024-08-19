//import logo from './logo.svg';
import './App.css';
//import MyButton from './Button.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

//import Axios from "axios";


let nextId = 3;
/*const initialItems = [
  { id: 0, title: '캐리어', packed: false},
  { id: 1, title: '갈아입을 옷', packed: false},
  { id: 2, title: '맛집 서치', packed: false},
];*/

export default function TravelPlan() {
  const [items, setItems] = useState([]);

  /*
  useEffect(() => {
    fetch('http://myapp77.cafe24app.com/getData')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
      })
  })
  */
fetch('http://myapp77.cafe24app.com/getData')
  .then((response) => {
    if(response.ok) {
      return response.json();
    }  
    throw new Error('Network response was not ok.');
  }).then((data) => {
    console.log(JSON.stringify(data));
  }).catch((error) => {
    console.log(`error: ${error}`)
});

  //const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(3);
  const [packed, setPacked] = useState(0);

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
      //localStorage.setItem("item"+id, { "title": title, "packed":false });
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

 <Button onClick={() => {axios.get("http://maejin.github.io/sici:3006/api/todoData")
        .then((res: any) => {
            console.log(res);
        }).catch((err: any) => {
            console.log(err);
        })}}>api 호출하기</Button>

  */


//export default App;
