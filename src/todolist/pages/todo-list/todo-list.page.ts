import { Component, OnInit } from "@angular/core";
import { Todo } from "src/todolist/todo";
import { TodosService } from "src/todolist/todos.service";

@Component({
  templateUrl: "./todo-list.page.html",
  styleUrls: ["./todo-list.page.scss"],
})
export class TodoListPage implements OnInit {
  todo: Todo[] = [];
  title?: string;
  id = "";

  constructor(private todosService: TodosService) {
    this.todo = this.todosService.todo;
  }

  ngOnInit(): void {}

  addTask(str: string | undefined) {
    this.todosService.addTask(str);
  }

  taskDone(id: any) {
    this.todosService.taskDone(id);
  }
}
