package com.todo.assignment.service.serviceimplementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.todo.assignment.dto.UserUserDetails;
import com.todo.assignment.entities.User;
import com.todo.assignment.repositories.UserRepository;





@Service
public class UserUserDetailsService implements UserDetailsService{

	@Autowired
	UserRepository repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> user=repo.findByName(username);
		return user.map(UserUserDetails::new).orElseThrow(()->new UsernameNotFoundException("User not found "));
	
	}
	
}