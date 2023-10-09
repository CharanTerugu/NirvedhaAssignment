package com.todo.assignment.service.serviceimplementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.todo.assignment.entities.User;
import com.todo.assignment.repositories.UserRepository;
import com.todo.assignment.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository repo;
	@Autowired
	PasswordEncoder passwordEncoder;
	@Override
	public void addUser(User user) {
		// TODO Auto-generated method stub
		user.setRoles("ROLE_USER");
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		repo.save(user);
	}
	@Override
	public Optional<User> getUserByName(String name) {
		// TODO Auto-generated method stub
		return repo.findByName(name);
	}

}
