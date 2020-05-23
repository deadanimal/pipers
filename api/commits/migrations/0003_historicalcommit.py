# Generated by Django 2.2.12 on 2020-05-19 17:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import simple_history.models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('submissions', '0006_historicalsubmission_historicalsubmissiondocument_historicalsubmissiontask'),
        ('projects', '0004_historicalproject_historicalprojectlog_historicalprojectmilestone_historicalprojectsoftwaremodule_hi'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('commits', '0002_auto_20200519_1651'),
    ]

    operations = [
        migrations.CreateModel(
            name='HistoricalCommit',
            fields=[
                ('id', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False)),
                ('name', models.CharField(max_length=255, null=True)),
                ('link', models.CharField(max_length=255, null=True)),
                ('comment', models.TextField(null=True)),
                ('class_type', models.CharField(choices=[('PR', 'Project'), ('SM', 'Submission'), ('NA', 'Not Available')], default='NA', max_length=2)),
                ('created_date', models.DateTimeField(blank=True, editable=False)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('creator', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('project', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='projects.Project')),
                ('submission', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='submissions.Submission')),
            ],
            options={
                'verbose_name': 'historical commit',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
    ]
