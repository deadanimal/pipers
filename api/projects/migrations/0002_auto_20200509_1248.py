# Generated by Django 2.2.12 on 2020-05-09 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='created_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
