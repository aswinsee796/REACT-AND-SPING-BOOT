package com.example.demo.DatabseExample;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Review;

public interface Reviewrepo extends JpaRepository<Review,Integer> {

}
