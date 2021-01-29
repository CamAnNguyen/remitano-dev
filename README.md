# react-rails redux sample

A simple movie sharing Rails/React-Redux application using react-rails.

* ruby 2.7.1
* rails 6.0.3.2
* react-rails 2.6.1

* redux 4.0.5
* react 16.14.0

# Features

* Ruby and gems are managed by [rvm]
* Unit tests with RSpec included
* Token based authentication with [devise_token_auth]
* __Register and login__: By entering the username and password, if the username is not existed, create a new account and login.
* __Share movie__: Share a youtube movie by clicking "Share a movie" button and filling the share form.
* __Vote movie__: Vote up or down.
* __Preview__: Preview from Youtube

# Screenshots
[![ss1.png](https://i.postimg.cc/rm5SHgGf/ss1.png)](https://postimg.cc/47N776Sc)

### Share movie
[![ss2.png](https://i.postimg.cc/8cHLp50W/ss2.png)](https://postimg.cc/bSZZLz8N)


## Installation

```
git clone https://github.com/CamAnNguyen/rails-react-demo-project.git
cd rails-react-demo-project
bundle install
yarn install
bundle exec rake db:create
bundle exec rake db:migrate
```

[rvm]: <https://rvm.io/>
[devise_token_auth]: <https://github.com/lynndylanhurley/devise_token_auth>
