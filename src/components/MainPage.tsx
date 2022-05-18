import React from 'react';

function MainPage() {
  return (
    <>
      <div>배너 영역 스와이프</div>
      <section>
        <h1>골라라 신상을 한눈에</h1>
        <ul>
          {
            [1, 2, 3, 4, 5, 6].map((i) => (
              <li key={i}>
                아이템
                {i}
              </li>
            ))
          }
        </ul>
      </section>
    </>
  );
}

export default MainPage;
