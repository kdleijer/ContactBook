from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
	class Meta:
		model = Contact
		fields = ('id', 'id1', 'first_name', 'last_name', 'email', 'work_phone', 'personal_phone', 'address', 'birthday')
