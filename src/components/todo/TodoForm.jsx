import { useState } from 'react';

const TodoForm = ({ setTodos }) => {
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
       
        const formData = new FormData(e.target);
        const title = formData.get("title");
        const content = formData.get("content");

        if (!title.trim() || !content.trim()) {
            setError('제목과 내용을 입력해주세요');
            return;
        }

        const nextTodo = {
            id: crypto.randomUUID(),
            title,
            content,
            isDone: false,
        };

        setTodos((prev) => [nextTodo, ...prev]);
        setError(''); // Clear error message after successful submission
        e.target.reset();
    };


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='제목' name="title" />
        <input type="text" placeholder='내용' name="content" />
        <button type='submit'>등록</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
};

export default TodoForm; 