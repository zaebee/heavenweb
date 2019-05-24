# Generated by Django 2.2.1 on 2019-05-23 23:23

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_post'),
    ]

    operations = [
        migrations.CreateModel(
            name='DialogFlow',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('session_id', models.CharField(max_length=120)),
                ('picture', models.FileField(blank=True, null=True, upload_to='')),
                ('context', models.TextField()),
                ('query_result', django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True)),
                ('difficulty', models.CharField(choices=[('Easy', 'Easy'), ('Medium', 'Medium'), ('Hard', 'Hard')], max_length=10)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Added at')),
                ('updateed_at', models.DateTimeField(auto_now=True, verbose_name='Updated at')),
            ],
        ),
        migrations.DeleteModel(
            name='Recipe',
        ),
    ]