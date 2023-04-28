from rest_framework import serializers

from main.models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('user', 'id', 'contact_group', 'contact_id', 'first_name', 'last_name', 'email',
                  'work_phone', 'personal_phone', 'address', 'birthday')
