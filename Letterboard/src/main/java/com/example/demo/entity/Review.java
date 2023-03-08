package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="lettexboard")
@Entity
public class Review {
@Id
@Column(name="SNO")
private int sno;
@Column(name="NAME")
private String name;
@Column(name="RATINGS")
private double ratings;
@Column(name="VERDICT")
private String verdict;
@Column(name="CREATOR")
private String creator;
@Column(name="YEAR")
private long year;
public int getSno() {
	return sno;
}
public void setSno(int sno) {
	this.sno=sno;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name=name;
}
public double getRatings() {
	return ratings;
}
public void setRatings(double ratings) {
	this.ratings=ratings;
}
public String getCreator() {
	return creator;
}
public void setCreator(String creator) {
	this.creator=creator;
}
public String getVerdict() {
	return verdict;
}
public void setVerdict(String verdict) {
	this.verdict=verdict;
}
public long getYear() {
	return year;
}
public void setYear(long year) {
	this.year=year;
}
public Review(int sno,String name,double ratings,String verdict,String creator,long year) {
	super();
	this.sno=sno;
	this.name=name;
	this.ratings=ratings;
	this.verdict=verdict;
	this.creator=creator;
	this.year=year;
}
public Review() {
	
}
}
