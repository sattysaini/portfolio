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
        zyngaSse2.put("technologies", new String[]{});
        zyngaSse2.put("achievements", new String[]{});
        timeline[0] = zyngaSse2;

        Map<String, Object> blockPuzzle = new HashMap<>();
        blockPuzzle.put("type", "project");
        blockPuzzle.put("title", "1010! Block Puzzle Game");
        blockPuzzle.put("company", "Zynga");
        blockPuzzle.put("period", "Aug 2024 - Present");
        blockPuzzle.put("description", "Led cross-functional team to ship major features, developed DDA engine");
        blockPuzzle.put("technologies", new String[]{"C Sharp", "Unity", "AWS", "Analytics"});
        blockPuzzle.put("achievements", new String[]{"30% ARPDAU increase", "25% stability improvement", "18% crash reduction"});
        timeline[1] = blockPuzzle;
        
        Map<String, Object> boggle = new HashMap<>();
        boggle.put("type", "project");
        boggle.put("title", "Boggle: Arcade Edition");
        boggle.put("company", "Zynga");
        boggle.put("period", "July 2023 - Aug 2024");
        boggle.put("description", "First Apple Arcade game built entirely on Apple infrastructure");
        boggle.put("technologies", new String[]{"SwiftUI", "Apple GameKit", "iCloud DB", "Python"});
        boggle.put("achievements", new String[]{"90% cost reduction", "32-user SharePlay support", "Apple recognition"});
        timeline[2] = boggle;

        Map<String, Object> zyngaSse = new HashMap<>();
        zyngaSse.put("type", "role");
        zyngaSse.put("title", "Senior Software Engineer");
        zyngaSse.put("company", "Zynga");
        zyngaSse.put("period", "Sept 2022 - May 2025");
        zyngaSse.put("description", "");
        zyngaSse.put("technologies", new String[]{});
        zyngaSse.put("achievements", new String[]{});
        timeline[3] = zyngaSse;
        
        Map<String, Object> crosswords = new HashMap<>();
        crosswords.put("type", "project");
        crosswords.put("title", "Crosswords with Friends");
        crosswords.put("company", "Zynga");
        crosswords.put("period", "Sept 2021 - July 2023");
        crosswords.put("description", "Refactored 10+ year legacy codebase, migrated backend");
        crosswords.put("technologies", new String[]{"Ruby on Rails", "iOS", "REST APIs"});
        crosswords.put("achievements", new String[]{"40% faster delivery", "100% LTV increase", "75% loading time reduction"});
        timeline[4] = crosswords;

        Map<String, Object> zyngaSe2 = new HashMap<>();
        zyngaSe2.put("type", "role");
        zyngaSe2.put("title", "Software Engineer II");
        zyngaSe2.put("company", "Zynga");
        zyngaSe2.put("period", "Sept 2021 - Sept 2022");
        zyngaSe2.put("description", "");
        zyngaSe2.put("technologies", new String[]{});
        zyngaSe2.put("achievements", new String[]{});
        timeline[5] = zyngaSe2;

        Map<String, Object> samsung = new HashMap<>();
        samsung.put("type", "project");
        samsung.put("title", "Tizen OS");
        samsung.put("company", "Samsung");
        samsung.put("period", "Jul 2018 - Aug 2021");
        samsung.put("description", "Developed Tizen OS platform and performance tools");
        samsung.put("technologies", new String[]{"C++", "Python", "MySQL", "REST APIs"});
        samsung.put("achievements", new String[]{"5% session time increase", "40% faster issue turnaround", "Automated 100+ hours of testing"});
        timeline[6] = samsung;
        
        Map<String, Object> samsungSe = new HashMap<>();
        samsungSe.put("type", "role");
        samsungSe.put("title", "Software Engineer");
        samsungSe.put("company", "Samsung");
        samsungSe.put("period", "Jul 2018 - Aug 2021");
        samsungSe.put("description", "");
        samsungSe.put("technologies", new String[]{});
        samsungSe.put("achievements", new String[]{});
        timeline[7] = samsungSe;
        
        Map<String, Object> iris = new HashMap<>();
        iris.put("type", "project");
        iris.put("title", "Iris Recognition System");
        iris.put("company", "Academic Project");
        iris.put("period", "Mar 2018 - Apr 2018");
        iris.put("description", "Full-stack biometric authentication system");
        iris.put("technologies", new String[]{"Python", "Machine Learning", "Computer Vision"});
        iris.put("achievements", new String[]{"Improved accuracy", "Working prototype", "IIT Delhi dataset"});
        timeline[8] = iris;

        Map<String, Object> collegeStudent = new HashMap<>();
        collegeStudent.put("type", "role");
        collegeStudent.put("title", "Student");
        collegeStudent.put("company", "NSIT");
        collegeStudent.put("period", "Aug 2014 - May 2018");
        collegeStudent.put("description", "");
        collegeStudent.put("technologies", new String[]{});
        collegeStudent.put("achievements", new String[]{});
        timeline[9] = collegeStudent;
        
        response.put("timeline", timeline);
        return response;
    }
}