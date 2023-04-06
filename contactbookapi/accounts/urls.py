from django.urls import path
from accounts import views
from .views import check_authentication, get_username, create_admin

urlpatterns = [
    path('register/', views.register_page, name="register"),
    path('login/', views.login_page, name="login"),
    path('logout/', views.logout_user, name="logout"),
    path('', views.home, name="home"),
    path('auth/', check_authentication, name='check_authentication'),
    path('username/', get_username, name='username'),
    path('create_admin/', create_admin, name='create_admin'),
]
