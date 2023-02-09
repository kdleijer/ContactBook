from django.contrib import admin
from .models import Contact


class ContactAdmin(admin.ModelAdmin):
	list_display = ['id1', 'first_name', 'last_name', 'email', 'work_phone', 'personal_phone', 'address', 'birthday']


admin.site.register(Contact, ContactAdmin)
