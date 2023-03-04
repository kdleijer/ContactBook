from django.urls import path
from accounts import views
from .views import check_authentication

urlpatterns = [
    path('register/', views.registerPage, name="register"),
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('', views.home, name="home"),
    path('auth/', check_authentication, name='check_authentication')
]
