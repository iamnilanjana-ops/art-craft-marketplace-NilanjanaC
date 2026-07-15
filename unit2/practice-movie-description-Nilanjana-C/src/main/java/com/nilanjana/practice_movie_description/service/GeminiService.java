package com.nilanjana.practice_movie_description.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {

    private final Client client = new Client();

    public String generateDescription(String title) {

        try {
            String prompt = "Write a short and simple movie description for: " + title;

            GenerateContentResponse response =
                    client.models.generateContent(
                            "gemini-2.0-flash-001",
                            prompt,
                            null
                    );

            return response.text();

        } catch (Exception e) {
            return "Description could not be generated.";
        }
    }
}