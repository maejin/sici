//import logo from './logo.svg';
import './App.css';
//import MyButton from './Button.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';
import axios from 'axios'


//import Axios from "axios";


let nextId = 3;

export default function TravelPlan() {
  
  let initialItems = [];
  
  let initotal = 0;

  useEffect(() => {
    axios.get('https://sici.life/getData')
    .then(res => {
      initialItems.push(...res.data);
      setItems(items.map(item => {
        return item;
      }));
    })
    
    initotal = initialItems.length;
    
  }, []);

  


  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(initotal);
  const [packed, setPacked] = useState(0);

  function handleAddItem(title) {
    if( title !== "" ) {

      axios.get('https://sici.life/setData?title='+title)
      .then(res => {
        setTotal(total + 1);
        setItems([
          ...items,
          {
            id:res.insertId,
            //id: nextId++,
            title: title,
            packed: false
          }
        ])
      })

    } else {
      alert("등록할게 없는디");
      return false;
    }
  }

  function handleChangeItem(nextItem) {

    if(nextItem.packed){
      setPacked(packed + 1);

      console.log( nextItem.id );

      axios.get('https://sici.life/updateData?id='+nextItem.id+'&packed=1')
      .then(res => {
      })

    } else {
      setPacked(packed - 1);

      axios.get('https://sici.life/updateData?id='+nextItem.id+'&packed=0')
      .then(res => {
      })
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

    axios.get('https://sici.life/delData?id='+itemId)
    .then(res => {
      console.log( itemId );
    })

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
