package in.satyamsaini.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Map;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @GetMapping("/api/home")
    public Map<String, Object> home() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Welcome to Satyam's Portfolio!");
        response.put("description", "Full-stack developer passionate about creating innovative solutions");
        response.put("status", "success");
        return response;
    }

    @GetMapping("/api/about")
    public Map<String, Object> about() {
        Map<String, Object> response = new HashMap<>();
        response.put("name", "Satyam Saini");
        response.put("title", "Software Developer");
        response.put("description", "I'm a passionate developer focused on creating amazing web applications");
        response.put("skills", new String[]{"Java", "Spring Boot", "React", "JavaScript", "Git"});
        return response;
    }
}