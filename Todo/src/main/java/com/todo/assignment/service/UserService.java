package com.todo.assignment.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.todo.assignment.entities.User;

@Service
public interface UserService {

	void addUser(User user);
	Optional<User> getUserByName(String name);
}
