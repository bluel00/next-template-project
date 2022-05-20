/* eslint-disable no-undef */
Feature('test');

const buttons = [1, 2, 3, 4, 5];

Scenario('골라라 신상을 한눈에 문장이 보인다.', ({ I }) => {
  I.amOnPage('/');

  I.see('골라라 신상을 한눈에');

  buttons.forEach((button) => {
    I.see(`button${button}`);

    I.click(`button${button}`);

    I.dontSee(`button${button}`);
  });
});
