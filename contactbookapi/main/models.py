from django.db import models


class Contact(models.Model):
	user = models.CharField(max_length=30, blank=True)
	contact_group = models.CharField(max_length=30, blank=True)
	contact_id = models.CharField(max_length=4, blank=True)
	first_name = models.CharField(max_length=15, blank=True)
	last_name = models.CharField(max_length=25, blank=True)
	email = models.CharField(max_length=40, blank=True)
	work_phone = models.CharField(max_length=15, blank=True)
	personal_phone = models.CharField(max_length=15, blank=True)
	address = models.CharField(max_length=50, blank=True)
	birthday = models.CharField(max_length=10, blank=True)

	def __str__(self):
		return self.contact_id
