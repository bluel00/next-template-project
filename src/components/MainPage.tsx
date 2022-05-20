import React, { useState } from 'react';

function MainPage() {
  const [items, setItems] = useState([
    { id: '0', title: 'title0' },
    { id: '1', title: 'title1' },
    { id: '2', title: 'title2' },
    { id: '3', title: 'title3' },
    { id: '4', title: 'title4' },
    { id: '5', title: 'title5' },
  ]);

  function handleClick(id: string) {
    setItems(
      items.filter((item) => item.id !== id),
    );
  }

  return (
    <>
      <div>header</div>
      <div>배너 영역 스와이프</div>
      <section>
        <h1>골라라 신상을 한눈에</h1>
        <ul>
          {
            items.map((item, i) => (
              <>
                <li key={item.id}>
                  아이템{item.title}
                </li>
                <button type="button" onClick={() => handleClick(item.id)}>
                  button{item.id}
                </button>
              </>
            ))
          }
        </ul>
      </section>
    </>
  );
}

export default MainPage;
