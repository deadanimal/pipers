# Generated by Django 2.2.12 on 2020-05-09 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organisations', '0002_auto_20200509_1244'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organisation',
            name='created_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
