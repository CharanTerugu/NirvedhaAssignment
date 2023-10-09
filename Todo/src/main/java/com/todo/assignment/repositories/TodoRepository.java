package com.todo.assignment.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.todo.assignment.entities.Todo;

@Repository
public interface TodoRepository  extends JpaRepository<Todo, Integer>{

	
	@Query("select t from todo t where t.user.name=?1")
	List<Todo> getTodosByUserName(String name);
}
