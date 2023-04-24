from django.urls import include, path
from rest_framework import routers

from main.views import ContactViewSet

router = routers.DefaultRouter()
router.register(r'contact', ContactViewSet, basename='contact')
urlpatterns = [
	path('', include(router.urls))
]