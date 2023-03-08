package com.example.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.DatabseExample.Reviewrepo;
import com.example.demo.entity.Review;
@Service
public class ReviewService {
@Autowired
private Reviewrepo rev;
public Review saveDetails(Review r) {
	return rev.save(r);
}
public List<Review> getAllDetails(){
	return rev.findAll();
}
public void deleteDepartmentById(int sno) {
	rev.deleteById(sno);
}
public Review update(int sno,Review r) {
	return rev.save(r);
}

}
