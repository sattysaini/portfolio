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
        response.put("greeting", "Hey, This is Satyam.");
        response.put("role", new String[]{"a Backend Engineer.", "a Application Engineer.", "a Problem Solver.", "Batman!"});
        response.put("profileImage", "/images/profile.jpg");
        response.put("location", "Bangalore, India");

        // Work status object
        Map<String, Object> workStatus = new HashMap<>();
        workStatus.put("available", true);
        workStatus.put("text", "Available to connect");
        response.put("workStatus", workStatus);

        // Social links array
        List<Map<String, String>> socialLinks = new ArrayList<>();

        Map<String, String> linkedin = new HashMap<>();
        linkedin.put("name", "LinkedIn");
        linkedin.put("url", "https://www.linkedin.com/in/satyam--saini/");
        socialLinks.add(linkedin);

        Map<String, String> github = new HashMap<>();
        github.put("name", "GitHub");
        github.put("url", "https://github.com/sattysaini");
        socialLinks.add(github);

        Map<String, String> leetcode = new HashMap<>();
        leetcode.put("name", "Leetcode");
        leetcode.put("url", "https://leetcode.com/u/sattysaini/");
        socialLinks.add(leetcode);

        response.put("socialLinks", socialLinks);

        // Tech stack array
        List<Map<String, Object>> techStack = new ArrayList<>();

        // Languages
        addTechItem(techStack, "C#", 90);
        addTechItem(techStack, "C/C++", 85);
        addTechItem(techStack, "SwiftUI", 70);
        addTechItem(techStack, "Ruby", 60);
        addTechItem(techStack, "Python", 55);
        addTechItem(techStack, "Java", 50);
        addTechItem(techStack, "HTML", 60);
        
        // Backend & APIs
        addTechItem(techStack, "Ruby on Rails", 80);
        addTechItem(techStack, "Node.js", 35);
        addTechItem(techStack, "Spring Boot", 70);
        addTechItem(techStack, "AWS Lambda", 85);
        addTechItem(techStack, "REST APIs", 90);
        
        // Cloud
        addTechItem(techStack, "Terraform", 55);
        addTechItem(techStack, "AWS S3", 70);
        
        // Databases
        addTechItem(techStack, "MySQL", 80);
        addTechItem(techStack, "iCloud DB", 60);
        addTechItem(techStack, "PostgreSQL", 60);
        addTechItem(techStack, "Redis", 70);
        
        // Tools
        addTechItem(techStack, "Unity", 80);
        addTechItem(techStack, "Docker", 70);
        addTechItem(techStack, "Git", 90);

        response.put("techStack", techStack);
        return response;
    }
    
    private void addTechItem(List<Map<String, Object>> techStack, String name, Integer skill) {
        Map<String, Object> item = new HashMap<>();
        item.put("name", name);
        item.put("skill", skill);
        techStack.add(item);
    }

    @GetMapping("/api/experience")
    public Map<String, Object> journey() {
        Map<String, Object> response = new HashMap<>();
        Map<String, Object>[] timeline = new Map[10];

        Map<String, Object> zyngaSse2 = new HashMap<>();
        zyngaSse2.put("type", "role");
        zyngaSse2.put("title", "Senior Software Engineer II");
        zyngaSse2.put("company", "Zynga");
        zyngaSse2.put("period", "May 2025 - Present");
        zyngaSse2.put("description", "");
        zyngaSse2.put("achievements", new String[]{});
        timeline[0] = zyngaSse2;

        Map<String, Object> blockPuzzle = new HashMap<>();
        blockPuzzle.put("type", "project");
        blockPuzzle.put("title", "1010! Block Puzzle Game");
        blockPuzzle.put("company", "Zynga");
        blockPuzzle.put("period", "Aug 2024 - Present");
        blockPuzzle.put("description", "Led cross-functional team to ship major features, developed DDA engine");
        blockPuzzle.put("achievements", new String[]{"Led a cross-functional team of 4 developers to conceptualize and ship a major feature, increasing ARPDAU by 30% and contributing significantly to quarterly revenue goals.",
                "Designed and executed an alternate replica of the core game with UX improvements, running successful A/B tests for unbiased User Acquisition (UA) strategies.",
                "Developed a dynamic difficulty adjustment (DDA) engine using behavioral cohort analysis, leading to a 5% increase in D1 and D7 retention."});
        timeline[1] = blockPuzzle;
        
        Map<String, Object> boggle = new HashMap<>();
        boggle.put("type", "project");
        boggle.put("title", "Boggle: Arcade Edition");
        boggle.put("company", "Zynga");
        boggle.put("period", "July 2023 - Aug 2024");
        boggle.put("description", "First Apple Arcade game built entirely on Apple infrastructure");
        boggle.put("achievements", new String[]{"Built and release first Apple Arcade game ever built entirely on Apple infrastructure",
                "Designed and implemented a real-time lobby system supporting up to 32 concurrent users over FaceTime SharePlay",
                "Implemented game controller support from scratch for our game without relying on packages or SDKs, ensuring compatibility with iOS 13 despite significant compatibility challenges."});
        timeline[2] = boggle;

        Map<String, Object> zyngaSse = new HashMap<>();
        zyngaSse.put("type", "role");
        zyngaSse.put("title", "Senior Software Engineer");
        zyngaSse.put("company", "Zynga");
        zyngaSse.put("period", "Sept 2022 - May 2025");
        zyngaSse.put("description", "");
        zyngaSse.put("achievements", new String[]{});
        timeline[3] = zyngaSse;
        
        Map<String, Object> crosswords = new HashMap<>();
        crosswords.put("type", "project");
        crosswords.put("title", "Crosswords with Friends");
        crosswords.put("company", "Zynga");
        crosswords.put("period", "Sept 2021 - July 2023");
        crosswords.put("description", "Refactored 10+ year legacy codebase, migrated backend");
        crosswords.put("achievements", new String[]{"Refactored legacy codebase (10+ years), introducing modularization and dependency injection, reducing feature delivery time by 40%.",
                "Migrated a shared backend service to a standalone infrastructure for Crosswords and related titles, successfully decoupling from sister teams and enabling independent deployment, scalability, and feature velocity.",
                "Independently scoped, developed, and launched 7+ major features, collectively increasing player LTV by 100% while maintaining 99.6% crash-free sessions."});
        timeline[4] = crosswords;

        Map<String, Object> zyngaSe2 = new HashMap<>();
        zyngaSe2.put("type", "role");
        zyngaSe2.put("title", "Software Engineer II");
        zyngaSe2.put("company", "Zynga");
        zyngaSe2.put("period", "Sept 2021 - Sept 2022");
        zyngaSe2.put("description", "");
        zyngaSe2.put("achievements", new String[]{});
        timeline[5] = zyngaSe2;

        Map<String, Object> samsung = new HashMap<>();
        samsung.put("type", "project");
        samsung.put("title", "Tizen OS");
        samsung.put("company", "Samsung");
        samsung.put("period", "Jul 2018 - Aug 2021");
        samsung.put("description", "Developed Tizen OS platform and performance tools");
        samsung.put("achievements", new String[]{"integrating multiple features for future Samsung market TVs, resulting in a 5% increase in session time",
                "Created a lightweight REST API to expose real-time TV diagnostics and performance metrics to partner teams, improving issue turnaround by 40%",
                "Developed profiling tools to simulate real user interactions, replacing 100+ hours of manual testing"});
        timeline[6] = samsung;
        
        Map<String, Object> samsungSe = new HashMap<>();
        samsungSe.put("type", "role");
        samsungSe.put("title", "Software Engineer");
        samsungSe.put("company", "Samsung");
        samsungSe.put("period", "Jul 2018 - Aug 2021");
        samsungSe.put("description", "");
        samsungSe.put("achievements", new String[]{});
        timeline[7] = samsungSe;
        
        Map<String, Object> iris = new HashMap<>();
        iris.put("type", "project");
        iris.put("title", "Iris Recognition System");
        iris.put("company", "Academic Project");
        iris.put("period", "Mar 2018 - Apr 2018");
        iris.put("description", "Full-stack biometric authentication system");
        iris.put("achievements", new String[]{
                "Improving matching speed and accuracy over traditional algorithms (e.g.,Daugman’s, Hough Transform)",
                "Trained on IIT Delhi dataset"});
        timeline[8] = iris;

        Map<String, Object> collegeStudent = new HashMap<>();
        collegeStudent.put("type", "role");
        collegeStudent.put("title", "Student");
        collegeStudent.put("company", "NSIT");
        collegeStudent.put("period", "Aug 2014 - May 2018");
        collegeStudent.put("description", "");
        collegeStudent.put("achievements", new String[]{});
        timeline[9] = collegeStudent;
        
        response.put("timeline", timeline);
        return response;
    }
}