# 📝 Todo List 웹페이지 (GitHub 실습용)

GitHub의 기본 워크플로우(`branch`, `commit`, `push`, `Pull Request`, `merge`, `Markdown` 수정 등)를 실습하기 위해 제작된 간단한 **Todo List 웹페이지**입니다.

---

## ✨ 주요 기능

1. **할 일 추가**: 입력창에 텍스트를 입력하고 `추가` 버튼을 누르거나 `Enter` 키를 눌러 새 할 일을 등록합니다.
2. **완료 표시**: 등록된 할 일 텍스트를 클릭하면 취소선과 함께 완료 상태로 전환됩니다. (다시 클릭하면 해제)
3. **할 일 삭제**: 각 항목 우측의 `삭제` 버튼을 눌러 목록에서 항목을 제거합니다.

---

## 📂 파일 구성

```text
todo-list-practice/
├── index.html    # 웹페이지의 기본 구조 (HTML)
├── style.css     # 화면 레이아웃 및 디자인 스타일 (CSS)
├── script.js     # 할 일 추가, 완료 토글, 삭제 동작 로직 (JavaScript)
└── README.md     # 프로젝트 안내 문서 (Markdown)
```

---

## 🚀 실행 방법

별도의 서버나 프로그램 설치 없이 바로 실행할 수 있습니다.

1. 압축을 해제한 폴더에서 `index.html` 파일을 찾습니다.
2. `index.html` 파일을 더블 클릭하여 웹 브라우저(Chrome, Edge, Safari 등)로 엽니다.
3. 입력창에 할 일을 추가하며 기능을 테스트합니다.

---

## 🛠️ GitHub 실습 추천 시나리오

- **브랜치 생성 및 기능 수정**: 새로운 브랜치(예: `feature/add-filter`)를 생성한 뒤 `index.html`이나 `style.css`의 문구·색상을 수정하고 `commit` 및 `push` 해보세요.
- **Pull Request & Merge**: 원격 저장소(GitHub)에서 `main` 브랜치로 Pull Request를 생성하고 병합(Merge)해 보세요.
- **README.md 수정 실습**: 이 `README.md` 파일에 작성자 이름이나 실습 날짜를 Markdown 문법으로 추가해 보세요.
