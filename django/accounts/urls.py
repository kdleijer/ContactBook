from django.urls import path

from accounts.views import (check_authentication, create_admin, get_username,
                            home, login_page, logout_user, register_page)

urlpatterns = [
    path('register/', register_page, name="register"),
    path('login/', login_page, name="login"),
    path('logout/', logout_user, name="logout"),
    path('', home, name="home"),
    path('auth/', check_authentication, name='check_authentication'),
    path('username/', get_username, name='username'),
    path('create_admin/', create_admin, name='create_admin'),
]
