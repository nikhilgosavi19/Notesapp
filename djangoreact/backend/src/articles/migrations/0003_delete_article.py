# Generated by Django 2.1.5 on 2019-02-11 13:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_notes_user_usernotesmap'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Article',
        ),
    ]
