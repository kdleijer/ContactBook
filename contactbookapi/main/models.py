from django.db import models


class Contact(models.Model):
	contact_id = models.CharField(max_length=4)
	first_name = models.CharField(max_length=15)
	last_name = models.CharField(max_length=25)
	email = models.CharField(max_length=40)
	work_phone = models.CharField(max_length=15)
	personal_phone = models.CharField(max_length=15)
	address = models.CharField(max_length=50)
	birthday = models.CharField(max_length=10)

	def __str__(self):
		return self.contact_id
