package com.nilanjana.practice_movie_description.controller;

import com.nilanjana.practice_movie_description.model.Movie;
import com.nilanjana.practice_movie_description.repository.MovieRepository;
import com.nilanjana.practice_movie_description.service.GeminiService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MovieController {

    private final MovieRepository movieRepository;
    private final GeminiService geminiService;

    public MovieController(MovieRepository movieRepository, GeminiService geminiService) {
        this.movieRepository = movieRepository;
        this.geminiService = geminiService;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("movie", new Movie());
        model.addAttribute("movies", movieRepository.findAll());
        return "index";
    }

    @PostMapping("/add")
    public String addMovie(Movie movie) {

        String description = geminiService.generateDescription(movie.getTitle());
        movie.setDescription(description);

        movieRepository.save(movie);

        return "redirect:/";
    }
}