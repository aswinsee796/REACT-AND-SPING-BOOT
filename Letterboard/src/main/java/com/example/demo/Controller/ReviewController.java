package com.example.demo.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Service.ReviewService;
import com.example.demo.entity.Review;
@CrossOrigin
@RestController
public class ReviewController {
@Autowired
private ReviewService revservice;
@GetMapping("/getRev")
public List<Review> getDetails(){
	return revservice.getAllDetails();
}
@PostMapping("/addRev")
public Review PostDetails(@RequestBody Review r) {
	return revservice.saveDetails(r);
}
@DeleteMapping("/delete/{sno}")
public String delete(@PathVariable int sno) {
	revservice.deleteDepartmentById(sno);
	return "Deleted";
}
@PutMapping("/updateRev/{sno}")
public Review update(@PathVariable int sno,@RequestBody Review r) {
	return revservice.update(sno, r);
}
}
