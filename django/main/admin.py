from django.contrib import admin

from main.models import Contact


class ContactAdmin(admin.ModelAdmin):
    list_display = ['user', 'contact_group', 'contact_id', 'first_name', 'last_name', 'email',
                    'work_phone', 'personal_phone', 'address', 'birthday']


admin.site.register(Contact, ContactAdmin)
