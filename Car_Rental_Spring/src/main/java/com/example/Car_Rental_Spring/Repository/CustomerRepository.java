package com.example.Car_Rental_Spring.Repository;

import com.example.Car_Rental_Spring.Entity.Customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long> {
}