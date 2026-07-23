package com.launchcode.classmanager.repository;

import com.launchcode.classmanager.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}
