# Generated by Django 4.1.7 on 2023-03-27 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(blank=True, max_length=30)),
                ('contact_group', models.CharField(blank=True, max_length=30)),
                ('contact_id', models.CharField(blank=True, max_length=4)),
                ('first_name', models.CharField(blank=True, max_length=15)),
                ('last_name', models.CharField(blank=True, max_length=25)),
                ('email', models.CharField(blank=True, max_length=40)),
                ('work_phone', models.CharField(blank=True, max_length=15)),
                ('personal_phone', models.CharField(blank=True, max_length=15)),
                ('address', models.CharField(blank=True, max_length=50)),
                ('birthday', models.CharField(blank=True, max_length=10)),
            ],
        ),
    ]
