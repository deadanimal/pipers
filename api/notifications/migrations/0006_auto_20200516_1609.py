# Generated by Django 2.2.12 on 2020-05-16 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0005_auto_20200516_1504'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='status',
            field=models.CharField(choices=[('AR', 'Archive'), ('CR', 'Created'), ('SM', 'Submission')], default='CR', max_length=2),
        ),
    ]
