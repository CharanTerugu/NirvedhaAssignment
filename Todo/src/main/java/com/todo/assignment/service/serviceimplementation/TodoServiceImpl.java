package com.todo.assignment.service.serviceimplementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.assignment.entities.Todo;
import com.todo.assignment.entities.User;
import com.todo.assignment.repositories.TodoRepository;
import com.todo.assignment.repositories.UserRepository;
import com.todo.assignment.service.TodoService;
import com.todo.assignment.service.UserService;

@Service
public class TodoServiceImpl implements TodoService {

	@Autowired
	TodoRepository repo;
	@Autowired
	UserService us;
	
	@Override
	public void addTodo(Todo todo, String username) {
		// TODO Auto-generated method stub
		Optional<User> user=us.getUserByName(username);
	  todo.setUser(user.get());
		repo.save(todo);
	}

	@Override
	public List<Todo> getTodos(String username) {
		// TODO Auto-generated method stub
		return repo.getTodosByUserName(username);
	}

	@Override
	public void editTodo(int taskId,Todo todo) {
		// TODO Auto-generated method stub
		Todo t=repo.getById(taskId);
		t.setTitle(todo.getTitle());
		t.setCompleted(todo.isCompleted());
		repo.save(t);
		
	}

	@Override
	public void deleteTodo(int taskId) {
		// TODO Auto-generated method stub
		Todo t=repo.getById(taskId);
		t.setUser(new User());
		repo.save(t);
		repo.deleteById(taskId);
		
	}

	@Override
	public void updateCompleted(int taskId,Todo todo) {
		// TODO Auto-generated method stub
		Todo t=repo.getById(taskId);
		t.setCompleted(todo.isCompleted());
		repo.save(t);
		
	}

	@Override
	public Todo getTodo(int todoId) {
		// TODO Auto-generated method stub
		return repo.getById(todoId);
	}

	

}
