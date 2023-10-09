package com.todo.assignment.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todo.assignment.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	Optional<User> findByName(String username);

}