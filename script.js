// HTML 요소 가져오기
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 할 일 추가 함수
function addTodo() {
  const text = todoInput.value.trim();

  // 빈 문자열 입력 방지
  if (text === '') {
    alert('할 일을 입력해주세요!');
    return;
  }

  // 리스트 아이템(li) 생성
  const li = document.createElement('li');
  li.className = 'todo-item';

  // 할 일 텍스트(span) 생성
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  // 텍스트 클릭 시 완료 표시 토글
  span.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // 삭제 버튼(button) 생성
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '삭제';

  // 삭제 버튼 클릭 시 항목 제거
  deleteBtn.addEventListener('click', function () {
    todoList.removeChild(li);
  });

  // li에 텍스트와 삭제 버튼 추가 후 목록에 삽입
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // 입력창 초기화 및 포커스 유지
  todoInput.value = '';
  todoInput.focus();
}

// '추가' 버튼 클릭 이벤트
addBtn.addEventListener('click', addTodo);

// 입력창에서 Enter 키 눌렀을 때 추가
todoInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
