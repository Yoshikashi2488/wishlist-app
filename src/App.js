import React, { useState } from "react";

function App() {
  const [wishes, setWishes] = useState([]);
  const [newWish, setNewWish] = useState("");

  const addWish = () => {
    if (newWish.trim() !== "") {
      setWishes([...wishes, newWish]);
      setNewWish("");
    }
  };

  const deleteWish = (index) => {
    const updatedWishes = wishes.filter((_, i) => i !== index);
    setWishes(updatedWishes);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Список желаний</h1>

      {/* Поле ввода и кнопка "Добавить" */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newWish}
          onChange={(e) => setNewWish(e.target.value)}
          placeholder="Введите желание"
          style={styles.input}
        />
        <button onClick={addWish} style={styles.button}>
          Добавить
        </button>
      </div>

      {/* Список желаний */}
      {wishes.length === 0 ? (
        <p style={styles.emptyMessage}>Пока желаний нет</p>
      ) : (
        <ul style={styles.list}>
          {wishes.map((wish, index) => (
            <li key={index} style={styles.listItem}>
              {wish}
              <button
                onClick={() => deleteWish(index)}
                style={styles.deleteButton}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
  },
  deleteButton: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  emptyMessage: {
    textAlign: "center",
    color: "#666",
  },
};

export default App;

/*
Inline-стили были выбраны из-за их простоты, так как они позволяют быстро стилизовать компоненты без создания отдельных CSS-файлов. 
Они обеспечивают изоляцию стилей, так как всё находится в одном файле с компонентом, что упрощает поддержку и уменьшает вероятность конфликтов.
Кроме того, inline-стили предоставляют гибкость, позволяя динамически изменять стили в зависимости от состояния компонента, например, менять цвет кнопки при наведении.

Для интеграции с бэкендом можно использовать useEffect для загрузки списка желаний при монтировании компонента. 
Добавление нового желания можно реализовать через POST-запрос, а удаление — через DELETE-запрос. Важно добавить обработку ошибок для всех запросов, чтобы уведомлять пользователя о проблемах.
Для улучшения пользовательского опыта стоит добавить индикатор загрузки и уведомления об успешных или ошибочных операциях. Это сделает взаимодействие с приложением более удобным и прозрачным.
*/