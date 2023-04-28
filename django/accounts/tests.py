from django.test import SimpleTestCase
from django.urls import reverse, resolve
from accounts.views import (check_authentication, create_admin, get_username,
                            home, login_page, logout_user, register_page)


class TestUrls(SimpleTestCase):

    def test_register_url_resolves(self):
        url = reverse('register')
        self.assertEqual(resolve(url).func, register_page)

    def test_login_url_resolves(self):
        url = reverse('login')
        self.assertEqual(resolve(url).func, login_page)

    def test_logout_url_resolves(self):
        url = reverse('logout')
        self.assertEqual(resolve(url).func, logout_user)

    def test_home_url_resolves(self):
        url = reverse('home')
        self.assertEqual(resolve(url).func, home)

    def test_check_authentication_url_resolves(self):
        url = reverse('check_authentication')
        self.assertEqual(resolve(url).func, check_authentication)

    def test_get_username_url_resolves(self):
        url = reverse('username')
        self.assertEqual(resolve(url).func, get_username)

    def test_create_admin_url_resolves(self):
        url = reverse('create_admin')
        self.assertEqual(resolve(url).func, create_admin)