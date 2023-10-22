package com.shakila.logjwtauth.service;

import com.shakila.logjwtauth.dto.LoginInfo;
import com.shakila.logjwtauth.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public List<User> getAll();
    public Optional<User> getUser(String userName);
    public Boolean checkUser(String userName);
    public User addUser(User user);
    public User editUser(User user);
    public String deleteUser(String userName);

    public boolean userAuth(LoginInfo loginInfo);
}
