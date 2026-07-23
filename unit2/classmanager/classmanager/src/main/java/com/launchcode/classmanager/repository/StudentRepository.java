package com.launchcode.classmanager.repository;

import com.launchcode.classmanager.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
