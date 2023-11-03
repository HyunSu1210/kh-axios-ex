import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);
  // async 함수 부분만 대기하고 나머지는 실행됨 (비동기 처리)
  const onClick = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setData(response.data);
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};
export default Axios;
