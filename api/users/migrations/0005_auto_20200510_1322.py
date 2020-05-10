# Generated by Django 2.2.12 on 2020-05-10 13:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20200510_0933'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='user_type',
            field=models.CharField(choices=[('AN', 'Analyst'), ('DE', 'Developer'), ('PM', 'Project Manager'), ('CL', 'Client'), ('NA', 'Not Available')], default='NA', max_length=2),
        ),
    ]
