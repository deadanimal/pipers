# Generated by Django 2.2.12 on 2020-05-17 04:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0007_auto_20200517_0432'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notification',
            name='client',
        ),
    ]
