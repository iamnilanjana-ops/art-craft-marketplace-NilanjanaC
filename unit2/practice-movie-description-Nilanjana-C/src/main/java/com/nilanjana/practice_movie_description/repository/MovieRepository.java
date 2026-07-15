package com.nilanjana.practice_movie_description.repository;

import com.nilanjana.practice_movie_description.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
