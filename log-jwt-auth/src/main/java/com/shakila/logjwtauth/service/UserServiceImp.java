package com.shakila.logjwtauth.service;


import com.shakila.logjwtauth.dto.LoginInfo;
import com.shakila.logjwtauth.entity.User;
import com.shakila.logjwtauth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAll() {
        return this.userRepository.findAll();
    }

    @Override
    public Optional<User> getUser(String userName) {
        return this.userRepository.findById(userName);
    }

    @Override
    public Boolean checkUser(String userName) {
        return this.userRepository.existsById(userName);
    }

    @Override
    public User addUser(User user) {
        if(checkUser(user.getUserName())){
            return null;
        }
        else{

            return this.userRepository.save(user);
        }

    }

    @Override
    public User editUser(User user) {
        if (checkUser(user.getUserName())){
            Optional<User> temp = getUser(user.getUserName());
            user.setAdmin(temp.get().isAdmin());
            return this.userRepository.save(user);
        }
        else {
            return null;
        }
    }

    @Override
    public String deleteUser(String userName) {
        if(checkUser(userName)){
            this.userRepository.deleteById(userName);
            return "User "+ userName +" Deleted";
        }
        else {
            return null;
        }
    }

    @Override
    public boolean userAuth(LoginInfo loginInfo) {
        Optional<User> user= this.userRepository.findById(loginInfo.getUserName());
        if (checkUser(loginInfo.getUserName())){
            return loginInfo.getPassword().equals(user.get().getPassword());
        }
        return false;
    }
}
