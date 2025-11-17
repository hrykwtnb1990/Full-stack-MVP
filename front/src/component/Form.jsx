import React from 'react';
import '../App.css';

const Form = (props) => {
  return (
    <div className="container">
      <b>{props.title}</b>
      <hr />
      <div>
        <label>名前：</label>
        <input type="text" />
      </div>
      <div className="spacer" />
      <div>
        <label>部署：</label>
        <input type="text" />
      </div>
      <div className="spacer" />
      <div>
        <label>テーマ：</label>
        <input type="text" />
      </div>
      <div className="spacer" />
      <div>
        <label>改善前の状態：</label>
        <input type="text" />
      </div>
      <div>
        <label>改善後の状態：</label>
        <input type="text" />
      </div>
      <div>
        <label>対策内容：</label>
        <input type="text" />
      </div>
      <div>
        <label>効果：</label>
        <input type="text" />
      </div>
      <div className="spacer" />
      <button>登録</button>
    </div>
  );
};

export default Form;
