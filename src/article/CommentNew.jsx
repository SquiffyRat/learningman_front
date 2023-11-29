import React from 'react';
import { useParams } from 'react-router-dom';
import { apiClient } from '../api/ApiClient';

function CommentNew() {
  // const { id } = useParams();
  // apiClient.post();

  return (
    <div class='card m-2' id='comments-new'>
      <div class='card-body'>
        {/* 댓글 작성 폼 */}
        <form>
          {/* 닉네임 입력 */}
          <div class='mb-3'>
            <label class='form-label'>닉네임</label>
            <input type='text' class='form-control' id='new-comment-nickname' />
          </div>
          {/* 댓글 본문 입력 */}
          <div class='mb-3'>
            <label class='form-label'>댓글 내용</label>
            <textarea
              type='text'
              class='form-control'
              rows='3'
              id='new-comment-body'
            ></textarea>
          </div>
          {/* 히든 인풋 */}
          {/* {{#article}} */}
          <input type='hidden' id='new-comment-article-id' value='{{id}}' />
          {/* {{/article}} */}
          {/* 전송 버튼 */}
          <button type='button' class='btn btn-primary' id='comment-create-btn'>
            댓글 작성
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentNew;
