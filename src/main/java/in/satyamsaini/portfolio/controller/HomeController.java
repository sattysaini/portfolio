package in.satyamsaini.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @GetMapping("/api/home")
    public Map<String, Object> home() {
        Map<String, Object> response = new HashMap<>();
        // Basic information
        response.put("fullName", "SATYAM SAINI");
        response.put("greeting", "Hello, I'm Satyam.");
        response.put("role", "I'm a Developer.");
        response.put("profileImage", "/images/profile.jpg");
        response.put("location", "Bangalore, India");

        // Work status object
        Map<String, Object> workStatus = new HashMap<>();
        workStatus.put("available", true);
        workStatus.put("text", "Open for new opportunities");
        response.put("workStatus", workStatus);

        // Social links array
        List<Map<String, String>> socialLinks = new ArrayList<>();

        Map<String, String> linkedin = new HashMap<>();
        linkedin.put("name", "LinkedIn");
        linkedin.put("url", "https://www.linkedin.com/in/satyam--saini/");
        linkedin.put("icon", "linkedin.svg");
        socialLinks.add(linkedin);

        Map<String, String> github = new HashMap<>();
        github.put("name", "GitHub");
        github.put("url", "https://github.com/sattysaini");
        github.put("icon", "github.svg");
        socialLinks.add(github);

        response.put("socialLinks", socialLinks);

        // Tech stack array
        List<Map<String, String>> techStack = new ArrayList<>();

        // Languages
        addTechItem(techStack, "C#", "csharp.svg");
        addTechItem(techStack, "Java", "java.svg");
        addTechItem(techStack, "SwiftUI", "swiftui.svg");
        addTechItem(techStack, "C++", "cplusplus.svg");
        addTechItem(techStack, "Python", "python.svg");
        addTechItem(techStack, "Ruby on Rails", "rails.svg");
        addTechItem(techStack, "HTML", "html.svg");
        addTechItem(techStack, "SQL", "sql.svg");
        
        // Backend & APIs
        addTechItem(techStack, "Node.js", "node.js.svg");
        addTechItem(techStack, "Spring Boot", "spring boot.svg");
        addTechItem(techStack, "REST APIs", "rest apis.svg");
        addTechItem(techStack, "Microservices", "microservices.svg");
        addTechItem(techStack, "AWS Lambda", "aws lambda.svg");
        
        // Cloud
        addTechItem(techStack, "AWS", "aws.svg");
        addTechItem(techStack, "Terraform", "terraform.svg");
        
        // Databases
        addTechItem(techStack, "PostgreSQL", "postgresql.svg");
        addTechItem(techStack, "Redis", "redis.svg");
        addTechItem(techStack, "MySQL", "mysql.svg");
        addTechItem(techStack, "iCloud DB", "icloud db.svg");
        
        // Tools
        addTechItem(techStack, "Unity", "unity.svg");
        addTechItem(techStack, "Docker", "docker.svg");
        addTechItem(techStack, "Git", "git.svg");
        
        // Platforms
        addTechItem(techStack, "iOS", "ios.svg");
        addTechItem(techStack, "Android", "android.svg");

        response.put("techStack", techStack);
        return response;
    }
    
    private void addTechItem(List<Map<String, String>> techStack, String name, String icon) {
        Map<String, String> item = new HashMap<>();
        item.put("name", name);
        item.put("icon", icon);
        techStack.add(item);
    }

    @GetMapping("/api/about")
    public Map<String, Object> about() {
        Map<String, Object> response = new HashMap<>();
        response.put("name", "Satyam Saini");
        response.put("title", "Senior Software Engineer II");
        response.put("description", "Experienced software engineer with expertise in mobile development, game development, and cloud infrastructure. Currently at Zynga, previously at Samsung.");
        response.put("education", "Bachelor of Engineering - Computer Science (2014-2018), NSIT New Delhi");
        response.put("skills", new String[]{
            "C#", "SwiftUI", "C++", "Python", "Ruby on Rails", "Objective-C", "HTML", "SQL",
            "REST APIs", "Microservices", "AWS Lambda", "AWS EC2", "AWS S3", "Terraform",
            "PostgreSQL", "Redis", "MySQL", "Unity", "Docker", "CI/CD", "iOS", "Android"
        });
        return response;
    }

    @GetMapping("/api/journey")
    public Map<String, Object> journey() {
        Map<String, Object> response = new HashMap<>();
        Map<String, Object>[] timeline = new Map[6];
        
        Map<String, Object> blockPuzzle = new HashMap<>();
        blockPuzzle.put("type", "project");
        blockPuzzle.put("title", "1010! Block Puzzle Game");
        blockPuzzle.put("company", "Zynga");
        blockPuzzle.put("period", "2022 - Present");
        blockPuzzle.put("description", "Led cross-functional team to ship major features, developed DDA engine");
        blockPuzzle.put("technologies", new String[]{"C#", "Unity", "AWS", "Analytics"});
        blockPuzzle.put("achievements", new String[]{"30% ARPDAU increase", "25% stability improvement", "18% crash reduction"});
        timeline[0] = blockPuzzle;
        
        Map<String, Object> zynga = new HashMap<>();
        zynga.put("type", "role");
        zynga.put("title", "Senior Software Engineer II");
        zynga.put("company", "Zynga");
        zynga.put("period", "Sept 2021 - Present");
        zynga.put("description", "Leading mobile game development, architecting scalable solutions");
        zynga.put("technologies", new String[]{"C#", "SwiftUI", "Unity", "Ruby on Rails"});
        zynga.put("achievements", new String[]{"Led team of 4 developers", "Shipped 7+ major features", "99.6% crash-free sessions"});
        timeline[1] = zynga;
        
        Map<String, Object> boggle = new HashMap<>();
        boggle.put("type", "project");
        boggle.put("title", "Boggle: Arcade Edition");
        boggle.put("company", "Zynga");
        boggle.put("period", "2021 - 2022");
        boggle.put("description", "First Apple Arcade game built entirely on Apple infrastructure");
        boggle.put("technologies", new String[]{"SwiftUI", "Apple GameKit", "iCloud DB", "Python"});
        boggle.put("achievements", new String[]{"90% cost reduction", "32-user SharePlay support", "Apple recognition"});
        timeline[2] = boggle;
        
        Map<String, Object> crosswords = new HashMap<>();
        crosswords.put("type", "project");
        crosswords.put("title", "Crosswords with Friends");
        crosswords.put("company", "Zynga");
        crosswords.put("period", "2021 - 2022");
        crosswords.put("description", "Refactored 10+ year legacy codebase, migrated backend");
        crosswords.put("technologies", new String[]{"Ruby on Rails", "iOS", "REST APIs"});
        crosswords.put("achievements", new String[]{"40% faster delivery", "100% LTV increase", "75% loading time reduction"});
        timeline[3] = crosswords;
        
        Map<String, Object> samsung = new HashMap<>();
        samsung.put("type", "role");
        samsung.put("title", "Software Engineer");
        samsung.put("company", "Samsung");
        samsung.put("period", "Jul 2018 - Aug 2021");
        samsung.put("description", "Developed Tizen OS platform and performance tools");
        samsung.put("technologies", new String[]{"C++", "Python", "MySQL", "REST APIs"});
        samsung.put("achievements", new String[]{"5% session time increase", "40% faster issue turnaround", "Automated 100+ hours of testing"});
        timeline[4] = samsung;
        
        Map<String, Object> iris = new HashMap<>();
        iris.put("type", "project");
        iris.put("title", "Iris Recognition System");
        iris.put("company", "Academic Project");
        iris.put("period", "Mar 2018 - Apr 2018");
        iris.put("description", "Full-stack biometric authentication system");
        iris.put("technologies", new String[]{"Python", "Machine Learning", "Computer Vision"});
        iris.put("achievements", new String[]{"Improved accuracy", "Working prototype", "IIT Delhi dataset"});
        timeline[5] = iris;
        
        response.put("timeline", timeline);
        return response;
    }
}