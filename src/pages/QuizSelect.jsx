import React, { useEffect } from 'react';
import { apiClient } from '../api/ApiClient';

function QuizSelect() {
  const books = async () => {
    try {
      const response = await apiClient.get('/books');
      console.log(response.data);
    } catch (error) {
      console.error('details error : ', error);
    }
  };
  useEffect(() => {
    books();
  }, []);
  //   const formSubmit = async (e) => {
  //   e.preventDefault();
  //   apiClient
  //     .post('/books/chapters', {
  //       nickname: nickname,
  //       body: body,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const onChangeHandlerNickname = (e) => {
  //   setNickName(e.target.value);
  // };
  return <div>QuizSelect</div>;
}

export default QuizSelect;
