from django.db import models


class Contact(models.Model):
	id1 = models.CharField(max_length=4)
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	email = models.CharField(max_length=50)
	work_phone = models.CharField(max_length=12)
	personal_phone = models.CharField(max_length=12)
	address = models.CharField(max_length=100)
	birthday = models.CharField(max_length=50)
	
	def __str__(self):
		return self.id1
