package com.launchcode.classmanager.controller;

import com.launchcode.classmanager.model.Teacher;
import com.launchcode.classmanager.repository.TeacherRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teachers")
public class TeacherController {

    private final TeacherRepository teacherRepository;

    public TeacherController(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    @GetMapping
    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable Long id) {
        return teacherRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Teacher createTeacher(@RequestBody Teacher teacher) {
        teacher.setId(null);
        return teacherRepository.save(teacher);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Teacher> updateTeacher(
            @PathVariable Long id,
            @RequestBody Teacher teacherDetails) {

        return teacherRepository.findById(id)
                .map(existingTeacher -> {
                    existingTeacher.setName(teacherDetails.getName());
                    existingTeacher.setEmail(teacherDetails.getEmail());
                    existingTeacher.setSubject(teacherDetails.getSubject());

                    Teacher updatedTeacher =
                            teacherRepository.save(existingTeacher);

                    return ResponseEntity.ok(updatedTeacher);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeacher(@PathVariable Long id) {
        if (!teacherRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        teacherRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
