import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Local StorageからTo-doリストを取得
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Local StorageにTo-doリストを保存
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 新しいタスクを追加
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue.trim(), disabled: false }]);
      setInputValue("");
    }
  };

  // タスクの状態を切り替え
  const toggleTask = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, disabled: !todo.disabled } : todo
    );
    setTodos(updatedTodos);
  };

  // タスクを編集
  const editTask = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  // 全てのタスクを削除
  const deleteAllTasks = () => {
    setTodos([]);
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "0 auto", height:445 }}>
      <CardContent>
        <Typography variant="h5" sx={{textAlign:"center",  marginBottom:'10%'}}>
          To-do List
        </Typography>

        <Grid container spacing={2} alignItems="center" style={{ marginBottom: "1em" }} >
          <Grid item xs={8} >
            <TextField
              fullWidth
              variant="outlined"
              label="Add a new todo"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              sx={{ marginBottom: "1em"}}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={addTask}
            >
              Add
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ maxHeight: "200px", overflowY: "auto"   }}>
          <List>
            {todos.map((todo, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Checkbox
                    checked={todo.disabled}
                    onChange={() => toggleTask(index)}
                    icon={<MdCheckBoxOutlineBlank />}
                    checkedIcon={<MdCheckBox />}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      contentEditable={!todo.disabled}
                      onBlur={(e) => editTask(index, e.target.value.trim())}
                      suppressContentEditableWarning={true}
                      sx={{ textDecoration: todo.disabled ? "line-through" : "none" }}
                    >
                      {todo.text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ textAlign: "right", marginTop: "1em" }}>
          <Button variant="contained" color="secondary" onClick={deleteAllTasks}>
            Reset
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Todo;